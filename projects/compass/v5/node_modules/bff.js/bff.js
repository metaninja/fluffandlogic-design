// ------------- Main App Loader -----------------
// This is a stripped down MVC framework,
// only without the M and the C :-). Just the V (view).
// To view a page go to http://localhost:9999/url/of/this/app/#/Filename.html
// Remember the URL is relative to index.html
// -----------------------------------------------

var cookie = function() {

  function set(name, value, date) {
    var expires = date ? ";" + date : "";
    document.cookie = name + "=" + value + expires;
  }

  function get() {
    return document.cookie;
  }

  function del(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }

  return {
    set: set,
    get: get,
    del: del
  }
}();


// ------------- BFF Global Object -----------------
// bff is our global object for the Barebones Functional Framework
var bff = function () {
  var _defaultStartPage = 'pages/home/index.html';
  var _startPage = null;

  var _bffIncludeSelector = '.bff-include';
  var _bffScriptSelector = '.bff-script';
  var _bffScriptContainerClassName = 'bff-script-container';
  var _bffScriptContainerSelector = '.' + _bffScriptContainerClassName;

  var _bffDataMap = {};
  var _bffLoadedContentMap = {};

  function getBffScriptUrl() {
    var scripts = document.getElementsByTagName('script');

    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i].getAttribute('src');
      if (script.indexOf('bff.js') > -1) {
        return script.substr(0, script.lastIndexOf('/') + 1);
      }
    }
  }

  // ------------------ BFF Inception ------------------
  //  Let's you nest components inside other components
  // ---------------------------------------------------
  function loadBffInclude(bffIncludeSelector) {
    var bffInclude = $(bffIncludeSelector);
    var bffIncludeContentUrl = bffInclude.data('src');
    var bffIncludeLoadedEventName = bffInclude.data('event');

    // Retrieve the contents for the BFF Include and all of its children
    // NOTE: Do this non-asynchronously for right now to avoid jumping on during the layout of the page
    $.ajax({
      url: bffIncludeContentUrl,
      type: 'GET',
      async: false,
      success: function (sourceContent) {
        // Clear the BFF Include data from the DOM now that it has been consumed
        bffInclude.removeAttr('data-src');
        bffInclude.removeAttr('data-event');

        // Insert the contents of the URL into the BFF Include container
        bffInclude.html(sourceContent);
        bffInclude.before('\n<!-- ' + bffIncludeContentUrl + '-->');

        // Log that this has been loaded by URL (data-src)
        _bffLoadedContentMap[bffIncludeContentUrl] = true;

        // ... and trigger a custom Event so the view can listen and make any updates
        if (bffIncludeLoadedEventName) {
          // Log that this has been loaded by event (data-event)
          _bffLoadedContentMap[bffIncludeLoadedEventName] = true;

          bffInclude.trigger(bffIncludeLoadedEventName);
        }

        // Now recursively load any nested bff-includes
        var bffIncludeChildren = bffInclude.find(_bffIncludeSelector);

        bffIncludeChildren.each(function(index, bffIncludeChild) {
          loadBffInclude(bffIncludeChild);
        });
      }
    });
  }

  function resetBff() {
    // Unbind event listeners from the previous page load
    unbindBffEvents();

    // Clear loaded scripts
    clearBffScripts();

    // Reset the logged events
    // NOTE:  We capture these in case scripts are loaded after the fact that might have listened for these
    _bffLoadedContentMap = {};
  }

  function unbindBffEvents() {
    for (var contentName in _bffLoadedContentMap) {
      // If this content maps to an event name, not an HTML partial, unbind the event
      if (contentName.search('.html') < 0) {
        $(document).unbind(contentName);
      }
    }
  }

  function clearBffScripts() {
    $('.bff-script-container').empty();
  }

  function createBffScriptContainer(containerId) {
    var bffScriptContainer = $('<div id="' + containerId + '" class="' + _bffScriptContainerClassName + '"></div>');

    return bffScriptContainer;
  }

  function loadBffScripts(parentSelector) {
    // Get all the BFF Scripts to be loaded
    // Example:
    // <div class="bff-script" data-src="../js/sample.js" data-placement="top"></div>
    var bffScripts = null;

    if (parentSelector) {
      bffScripts = $(parentSelector).find(_bffScriptSelector);
    } else {
      bffScripts = $(_bffScriptSelector);
    }

    // Get top (bottom of <head>) scripts container; generate if not found
    var topScriptsContainer = $('#bffTopScriptsContainer');

    if (topScriptsContainer.length <= 0) {
      topScriptsContainer = createBffScriptContainer('bffTopScriptsContainer');
      $('head').append(topScriptsContainer);
    }

    // Get bottom (bottom of <body>) scripts container; generate if not found
    var bottomScriptsContainer = $('#bffBottomScriptsContainer');

    if (bottomScriptsContainer.length <= 0) {
      bottomScriptsContainer = createBffScriptContainer('bffBottomScriptsContainer');
      $('body').append(bottomScriptsContainer);
    }

    // Append sourceURL tag to bottom of each script
    bffScripts.each(function (index, bffScript) {
      var $bffScript = $(bffScript);
      var scriptSourceUrl = $bffScript.data('src');
      var scriptType = $bffScript.data('type');
      var scriptPlacement = $bffScript.data('placement');

      var script = $('<script></script>');

      if (scriptSourceUrl) {
        script.attr('src', scriptSourceUrl);
      }

      if (scriptType) {
        script.attr('type', scriptType);
      }

      // Inject scripts into the top or bottom sections based on placement (default is bottom)
      if (scriptPlacement === 'top') {
        topScriptsContainer.append(script);
      } else {
        bottomScriptsContainer.append(script);
      }
    });

    // Remove the placeholder scripts from the DOM now that they have been consumed
    bffScripts.remove();
  }

  function load(parentSelector) {
    if (parentSelector) {
      // Load all partials recursively, starting with the parent selector
      loadBffInclude(parentSelector);
    } else {
      // No selector was provided, so start at the top-level partials and
      // drill down recursively to load everything on the page
      $(_bffIncludeSelector).each(function(index, bffInclude) {
        loadBffInclude(bffInclude);
      });
    }

    loadBffScripts(parentSelector);

    // Post-load actions:
    // - prevent empty links from conflicting with the single page application and hash URLs
    // - activate Bootstrap tooltips
    standardizeEmptyLinks();
    activateBootstrapTooltips();
    handleDeepLink();
    setDevMode();

    $('.modal-backdrop').hide();

    $(document).trigger('bffLoaded');
  }

  function isLoaded(bffIncludeName) {
    // The loaded events may be searched by the event name (data-event) or content URL (data-src)
    // on the bff-include
    var isContentLoaded = _bffLoadedContentMap[bffIncludeName] || false;

    return isContentLoaded;
  }

  function activateBootstrapTooltips() {
    var defaultTooltipPlacement = 'bottom';
    var tooltipableElements = $('[data-toggle="tooltip"]');

    tooltipableElements.each(function(index, element) {
      var $element = $(element);
      var tooltipPlacement = $element.data('placement');

      if (!tooltipPlacement) {
        tooltipPlacement = defaultTooltipPlacement;
      }

      $element.tooltip({ placement: tooltipPlacement });
    });
  }

  function standardizeEmptyLinks() {
    var emptyLinks = $('a[href="#"]');

    // Disable href="#" to prevent accidental redirects to the bff startPage
    emptyLinks.on('click', onEmptyLinkClicked);

    // Changing href="#" into javascript:;
    // if event.preventDefault() fails (which seems to happen randomly)
    emptyLinks.each(function(index, element) {
      $(element).attr('href','javascript:;');
    });
  }

  function onEmptyLinkClicked(event) {
    event.preventDefault();
  }

  // ---------------------- BFF Templates ------------------------
  //     Load BFF's own HTML files, including error messages
  //    Uses scriptUrl to find the Url of the Javascript file
  // -------------------------------------------------------------
  function loadBffTemplates() {
    var templateUrl = getBffScriptUrl() + 'bff.html';
    $.get(templateUrl, function(data) {
      $('.bff-view').after(data);
      $('.page-load.page-busy').hide();
      $('.page-load.page-error').hide();
    });
  }

  // ------------------ BFF Hash Changed ------------------
  //      Handle user clicking on a link to another page
  //               in the BFF app/wireframes
  // ------------------------------------------------------
  function hashChanged() {
    var randomString = parseInt(Math.random(1) * 100);

    $('.page-load').hide();
    $('.page-load.page-busy').slideDown(300);

    //If the hash is empty, then load the start page.
    var hashUrl = window.location.hash ? window.location.hash.substr(2) + '?' + randomString : _startPage;

    //Load the view into the page
    $.get(hashUrl, function(hashUrlData) {
      // Clear content from the previous page load
      resetBff();

      // Load the new page onto the DOM
      $('.bff-view').html(hashUrlData);

      // Populate the <title> tag
      window.document.title = $('.bff-view').find('title').text();
      jQuery('html,body').animate({scrollTop:0}, 0);

      // Load any includes and nested includes
      load();

      if (bff.getData('dev') && bff.getData('dev') === 'on') {
        toggleDevTarget();
      }

      $('.page-load.page-busy').slideUp(300);
    }).fail(function() {
      $('.page-load.page-busy').slideUp(300);
      $('.page-load.page-error').slideDown(300);
    });
  }

  // -------------------------- DevMode --------------------------
  // Adds a toggle-able floating bar that let's a user switch quickly
  // between two or more versions of a screen.
  // -------------------------------------------------------------
  function toggleDevMode(state) {

    if (state && (state === 'on' || state === 'off')) {
      bff.setData('dev', state);
    }

    if (bff.getData('dev') && bff.getData('dev') === 'on') {
      cookie.set('devMode', 'on');
      setDevMode();
    }

    $('.bff-devmode-state').click(function() {
      if (bff.getData('dev') && bff.getData('dev') === 'on') {
        cookie.set('devMode', 'off');
        bff.setData('dev','off');
        setDevMode();
      }
      else {
        cookie.set('devMode', 'on');
        bff.setData('dev','on');
        setDevMode();
      }
    });
  }

  function setDevMode() {
    var devLabel = 'Dev Mode: ';
    var devModeAlreadySet = cookie.get('devMode');
    devModeAlreadySet = devModeAlreadySet.substring(devModeAlreadySet.indexOf('=')+1);

    if (devModeAlreadySet) {
      bff.setData('dev', devModeAlreadySet);
    }

    if (bff.getData('dev') === 'on') {
      $('.bff-devmode-container').html('');
      $('.bff-devmode-container').addClass('visible');
      $('.bff-devmode').clone().appendTo($('.bff-devmode-container'));
      toggleDevTarget();
    }
    else {
      $('.bff-devmode-container').removeClass('visible');
    }
    $('.bff-devmode-state').text(devLabel + bff.getData('dev').toUpperCase());
  }

  function toggleDevTarget() {
    $('.bff-devmode-option').click(function() {
      $(this).parents('.bff-devmode-options').find('.bff-devmode-option').each(function() {
        $(this).removeClass('selected');
        $($(this).data('target')).hide();
      });
      $(this).addClass('selected');
      var target = $(this).data('target');
      $(target).show();
    });

  }

  // --------------------- Handle Deep Link ----------------------
  // Allows a user to link to a modal, tab, or popup
  // and have it open up automatically when you get to the URL.
  // -------------------------------------------------------------
  function handleDeepLink() {
    var url = location.href;
    if (url.split('#').length > 2) {
      var deepLink = url.substring(url.lastIndexOf('#'));

      // Handle Bootstrap tabs. TODO: Can we make this more generic?
      // Note: DOES NOT work with data-target="#deep-link".
      //       Must use <a href="#deep-link">
      if ($(document).find(deepLink).hasClass('tab-pane')) {
        var target = '[href="' + deepLink + '"]';
        $(target).tab('show');
      }
      // Handle Popups
      else if ($(document).find(deepLink).hasClass('popup')) {
        $(deepLink).show();
      }
      //Handle Bootstrap Modals
      else if ($(document).find(deepLink).hasClass('modal')) {
        $(deepLink).modal('show');
      }
      //Scroll to an anchor
      else {
        $('html, body').animate({
          'scrollTop': $(deepLink).offset().top
        }, 600);
      }
    }
  }



  // -------------------------- BFFData --------------------------
  // Wrapper for Handlebars to make it simpler to add data
  // src = class/id of the Handlebars.js template
  // dest = class/id of table/ul/etc. that will accept the rendered content
  // data = The data we're feeding into the template
  // -------------------------------------------------------------
  function loadData(src, dest, data) {
    var bffDataTemplate = $(src).html();
    var bffDataCompiled = Handlebars.compile(bffDataTemplate);
    var bffDataRendered = bffDataCompiled(data);
    $(dest).html(bffDataRendered);
  }

  // ---------------------- BFF Hash Changed ---------------------
  //           Load a default page specified in
  // <div class="bff-view" data-start-page="StartPage.html"></div>
  // -------------------------------------------------------------
  function loadStartPage() {
    _startPage = $('.bff-view').data('start-page');

    if (!_startPage) {
      _startPage = _defaultStartPage;
    }
  }

  function onWindowHashChanged() {
    hashChanged();
  }

  function setData(name, value) {
    _bffDataMap[name] = value;
  }

  function getData(name) {
    return _bffDataMap[name];
  }

  function init() {
    loadBffTemplates();
    loadStartPage();

    $('.page-load').hide();

    $(window).on('hashchange', onWindowHashChanged);

    bff.setData('dev','off');
    toggleDevMode();

    hashChanged();
  }

  return {
    init: init,
    load: load,
    isLoaded: isLoaded,
    setData: setData,
    getData: getData,
    loadData: loadData,
    toggleDevMode: toggleDevMode,

    // [Deprecated: use bff.load([optional-selector])
    Inception: load
  };
}();

// ------------------ BFF On Page Load ------------------
//      Let's put everything together. Magic.
// ------------------------------------------------------
$(document).ready(function() {
  bff.init();
});
