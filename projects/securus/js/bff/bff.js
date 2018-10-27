// ------------- BFF Global Object -----------------
// bff is our global object for BFF
var bff = function () {
    var _defaultStartPage ='Home.html';
    var _startPage = null;

    var _bffIncludeSelector = '.bff-include';
    var _bffScriptSelector = '.bff-script';
    var _bffScriptContainerClassName = 'bff-script-container';
    var _bffScriptContainerSelector = '.' + _bffScriptContainerClassName;

    var _bffDataMap = {};
    var _bffLoadedContentMap = {};

    var _bffLoadWorker = null;

    // ------------- BFF Redirect Mappings -----------------
    // This is our list of old pages
    // that might still be linked from TeamForge,
    // and their new URLs
    var _redirectMappings = [
        {
            'old' : '#/UserMgmt_BasicSearch.html',
            'new' : '#/pages/manage/users/'
        },
        {
            'old' : '#/InmateMgmt_BasicSearch.html',
            'new' : '#/pages/search/inmates/'
        },
        {
            'old' : '#/Inmate_Profile.html',
            'new' : '#/pages/search/inmates/profile/'
        },
        {
            'old' : '#/Inmate_Profile_Edit.html',
            'new' : '#/pages/search/inmates/profile/edit/'
        },
        {
            'old' : '#/Virtual_Group_List.html',
            'new' : '#/pages/manage/call-settings/virtual-groups/'
        },
        {
            'old' : '#/Visitors.html',
            'new' : '#/pages/manage/visitors/'
        },
        {
            'old' : '#/Visitor_Profile.html',
            'new' : '#/pages/manage/visitors/edit/'
        },
        {
            'old' : '#/Phone_SearchManagedNumbers.html',
            'new' : '#/pages/manage/phone-numbers/managed-numbers/'
        },
        {
            'old' : '#/Edit_PhoneNumber.html',
            'new' : '#/pages/manage/phone-numbers/managed-numbers/add/'
        },
        {
            'old' : '#/Phone_SearchBlockedNumbers.html',
            'new' : '#/pages/manage/phone-numbers/blocked-numbers/'
        },
        {
            'old' : '#/Block_PhoneNumber.html',
            'new' : '#/pages/manage/phone-numbers/blocked-numbers/add/'
        },
        {
            'old' : '#/Virtual_Group.html',
            'new' : '#/pages/manage/visits/'
        },
        {
            'old' : '#/CDRSearch.html',
            'new' : '#/pages/search/communication/advanced.html'
        },
        {
            'old' : '#/CDRSearch_Basic.html',
            'new' : '#/pages/search/communication/'
        },
        {
            'old' : '#/CDRSearchResults_Basic.html',
            'new' : '#/pages/search/communication/results/'
        },
        {
            'old' : '#/LBS.html',
            'new' : '#/pages/investigate/lbs/'
        },
        {
            'old' : '#/LBS-Add_Geofence.html',
            'new' : '#/pages/investigate/lbs/add/'
        },
        {
            'old' : '#/Logging.html',
            'new' : '#/pages/search/system-logs/'
        },
        {
            'old' : '#/Dashboard.html',
            'new' : '#/pages/dashboard/'
        },
        {
            'old' : '#/MonitorActivity.html',
            'new' : '#/pages/monitor/'
        },
        {
            'old' : '#/Facility_Detail.html',
            'new' : '#/pages/manage/facility-and-sites/facility/'
        },
        {
            'old' : '#/Site_Detail.html',
            'new' : '#/pages/manage/facility-and-sites/sites/'
        },
        {
            'old' : '#/TerminalGroup_Detail.html',
            'new' : '#/pages/manage/facility-and-sites/terminal-groups/'
        },
        {
            'old' : '#/Terminal_Detail.html',
            'new' : '#/pages/manage/facility-and-sites/terminals/'
        },
        {
            'old' : '#/Visit_Scheduling-Create_Schedule.html',
            'new' : '#/pages/manage/visit-settings/visit-schedules/add/'
        },
        {
            'old' : '#/Visit_Scheduling.html',
            'new' : '#/pages/manage/visit-settings/visit-schedules/'
        },
        {
            'old' : '#/Visit_Restrictions.html',
            'new' : '#/pages/manage/visit-settings/visit-restrictions/add/'
        },
        {
            'old' : '#/Visit_Restriction_List.html',
            'new' : '#/pages/manage/visit-settings/visit-restrictions/'
        },
        {
            'old' : '#/Call_Scheduling-Create_Schedule.html',
            'new' : '#/pages/manage/call-settings/call-schedules/add'
        },
        {
            'old' : '#/Grievance_Search.html',
            'new' : '#/pages/manage/grievances/'
        },
        {
            'old' : '#/Grievance_Detail.html',
            'new' : '#/pages/manage/grievances/view/'
        },
        {
            'old' : '#/Grievance_Admin.html',
            'new' : '#/pages/manage/grievances/admin/'
        },
        {
            'old' : '#/MyProfile_Detail.html',
            'new' : '#/pages/profile/'
        },
        {
            'old' : '#/Commissary_Admin.html',
            'new' : '#/pages/manage/commissary/admin/'
        },
        {
            'old' : '#/Commissary_Search.html',
            'new' : '#/pages/manage/commissary/'
        },
        {
            'old' : '#/SickCall_Search.html',
            'new' : '#/pages/manage/sick-calls/'
        },
        {
            'old' : '#/SickCall_Admin.html',
            'new' : '#/pages/manage/sick-calls/admin/'
        },
        {
            'old' : '#/Manage_Roles.html',
            'new' : '#/pages/manage/security-roles/'
        },
        {
            'old' : '#/CreateRole.html',
            'new' : '#/pages/manage/security-roles/add/'
        },
        {
            'old' : '#/EditRole.html',
            'new' : '#/pages/manage/security-roles/edit/'
        },
        {
            'old' : '#/UX_Guidelines.html',
            'new' : '#/pages/ux/'
        },
        {
            'old' : '#/UserStoryChecklist.html',
            'new' : '#/pages/ux/user-story-checklist.html'
        },
        {
            'old' : '#/SystemFeedback.html',
            'new' : '#/pages/ux/system-feedback.html'
        }
    ];

    function override() {
        $('.enable-override').addClass('visible');
        $('.remove-override').removeClass('visible');
        $('.override-control').attr('disabled', 'disabled');

        $('.override-group .enable-override').click(function() {
            var that = this;
            var overrideGroup = $(that).parents('.override-group');
            $(that).removeClass('visible');
            overrideGroup.find('.remove-override').addClass('visible');
            overrideGroup.find('.override-control').removeAttr('disabled');
        });

        $('.override-group .remove-override').click(function() {
            var that = this;
            var overrideGroup = $(that).parents('.override-group');
            $(that).removeClass('visible');
            overrideGroup.find('.enable-override').addClass('visible');
            overrideGroup.find('.override-control').attr('disabled','disabled');
        });
    }

    function toggleDevMode() {
        $('.dev-mode').click(function() {
            if (bff.getData('dev') && bff.getData('dev') === 'on') {
                bff.setData('dev','off');
                setDevMode();
            }
            else {
                bff.setData('dev','on');
                setDevMode();
            }
        });
    }

    function setDevMode() {
        var devLabel = "Dev Mode: ";
        if (bff.getData('dev') === 'on') {
            $('.dev').addClass('visible');
        }
        else {
            $('.dev').removeClass('visible');
        }

        $('.dev-mode').text(devLabel + bff.getData('dev').toUpperCase());
    }

    function toggleDevTarget() {
        $('.dev-option').click(function() {
            $(this).parents('.dev-options').find('.dev-option').each(function() {
                $(this).removeClass('selected');
                $($(this).data('target')).hide();
            });
            $(this).addClass('selected');
            var target = $(this).data('target');
            $(target).show();
        });

    }

    function toggleSecurusMode() {
        if ($('.securus-admin-mode-on').hasClass('visible')) {
            $('.securus-admin').addClass('visible');
        } else {
            $('.securus-admin').removeClass('visible');
        }
    }

    function getBffScriptUrl() {
        var scripts = document.getElementsByTagName('script');

        for (var i = 0; i < scripts.length; i++) {
            var script = scripts[i].getAttribute('src');
            if (script.indexOf('bff.js') > -1) {
                return script.substr(0, script.lastIndexOf('/') + 1);
            }
        }
    }

    // ------------- Main App Loader -----------------
    // This is like a stripped down MVC framework,
    // only with M and the C :-). Just a V (for view).
    // To view a page go to http://localhost:8080/url/of/this/app/#/Filename.html
    // Remember the URL is relative to index.html
    // -----------------------------------------------

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

        //$.get(bffIncludeContentUrl, function(sourceContent) {
        //    // Insert the contents of the URL into the BFF Include container
        //    bffInclude.html(sourceContent);
        //
        //    // ... and trigger a custom Event so the view can listen and make any updates
        //    if (bffIncludeLoadedEventName) {
        //        bffInclude.trigger(bffIncludeLoadedEventName);
        //    }
        //
        //    // Now recursively load any nested bff-includes
        //    var bffIncludeChildren = bffInclude.find(_bffIncludeSelector);
        //
        //    bffIncludeChildren.each(function(index, bffIncludeChild) {
        //        loadBffInclude(bffIncludeChild);
        //    });
        //});
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

    function loadBff(parentSelector) {
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
        // - activate developer mode
        // - toggle Securus Admin mode
        standardizeEmptyLinks();
        activateBootstrapTooltips();
        handleDeepLink();

        // Activate developer mode
        setDevMode();

        toggleDevTarget();

        // Show/hide Securus Admin mode sections
        toggleSecurusMode();

        countUp('.results-number');

        $(document).trigger('bffLoaded');
    }

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

    function onBffLoadWorkerMessage(e) {
        var message = e.data;

        if (message.name === 'load') {
            // Begin the asynchronous load of the BFF components
            loadBff(message.parentSelector);

            // Work has completed, so stop listening until the next time we want to load
            _bffLoadWorker.removeEventListener('message', onBffLoadWorkerMessage);
        }
    }

    function load(parentSelector) {
        if (_bffLoadWorker) {
            // For modern browsers, load the entire set of bff-* components asynchronously;
            // add an event listener for the asynchronous hook
            _bffLoadWorker.addEventListener('message', onBffLoadWorkerMessage, false);

            // Relay a message to the worker to start an asynchronous load
            var bffLoadMessage = {
                name: 'load',
                parentSelector: parentSelector
            };
            _bffLoadWorker.postMessage(bffLoadMessage);
        } else {
            // For legacy browsers (< IE 10) that do not support Web Worker, degrade gracefully
            // by executing the slower synchronous logic
            loadBff(parentSelector);
        }
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


        // This might no longer be necessary, since Dori's code changes
        // fixed the async issues that were causing the random href="#" fails.
        // --------------------------------------------------------------------
        // Changing href="#" into javascript:;
        // if event.preventDefault() fails (which seems to happen randomly)
        //emptyLinks.each(function(index, element) {
        //    $(element).attr('href','javascript:;');
        //});
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
        $('.page-load').hide();
        $('.page-load.page-busy').slideDown(5);

        // If the hash is empty, then load the start page.
        var hashUrl = window.location.hash || _startPage;

        // If the request is for an old URL (say from a TeamForge story) that's been refactored,
        // go to it's new location
        if (hashUrl !== _startPage) {
            for (var i= 0, len = _redirectMappings.length; i < len; i++) {
                if (hashUrl.toLowerCase() === _redirectMappings[i].old.toLowerCase()) {
                    hashUrl = _redirectMappings[i].new;
                    window.location.hash = hashUrl;
                }
            }
        }

        // Adding a random query string to the URL to
        // force reload the page instead of offering the cached version
        var randomString = parseInt(Math.random(1) * 100);
        // Only add the random query string if the URL starts with a hash e.g. #/page.html
        if (hashUrl.indexOf('#/') >= 0) {
            // Pull out the actual URL
            // (everything after the #/ for the AJAX request)
            hashUrl = hashUrl.substr(2) + '?' + randomString;
            // console.log('hashUrl = ' + hashUrl); //DEBUGGING ONLY
        }

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

            $('.page-load.page-busy').slideUp(300);
        }).fail(function() {
            $('.page-load.page-busy').slideUp(300);
            $('.page-load.page-error').slideDown(300);
        });
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

    function initializeBffLoadWorker() {
        // NOTE:  Web Workers are only available in modern browsers; for older browsers,
        // comment out this line and let the process run synchronously in bff.load();
        // NOTE:  The file path is relative to the root index.html file
        try {
            _bffLoadWorker = new Worker('../js/bff/bff-load-worker.js');
        } catch (e) {
            // Fail gracefully on older browsers; later usages will check for null
            _bffLoadWorker = null;
        }
    }

    function init() {
        initializeBffLoadWorker();

        loadBffTemplates();
        loadStartPage();

        $('.page-load').hide();

        $(window).on('hashchange', onWindowHashChanged);

        hashChanged();

        bff.setData('dev','off');

        toggleDevMode();
    }

    return {
        init: init,
        override: override,
        load: load,
        isLoaded: isLoaded,
        setData: setData,
        getData: getData,

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