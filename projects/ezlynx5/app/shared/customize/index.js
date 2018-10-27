function showCustomizeModal() {
    $("#customizeModal").modal("show");
}

function hideCustomizeModal() {
    $("#customizeModal").modal("hide");
}

function setBackground() {
    var backgroundImageSrc = localStorage.topnavBackgroundImageSrc;

    if (backgroundImageSrc === undefined) {
        $(".main-topnav").css('background-image', 'url(libs/images/global-topnav/navy-blue.png)');
    } else {
        $(".main-topnav").css('background-image', 'url(' + backgroundImageSrc + ')');
        $(".main-topnav").addClass("custom-background");
    }
}

function updateTopnavBackground() {
    var $imageContainer = $(".top-nav-background-images-container li.background-selected"),
        backgroundImageSrc;

    backgroundImageSrc = $imageContainer.data("image-src");

    if (backgroundImageSrc === undefined) {
        alert("Please Select a Background");
    } else {
        localStorage.setItem("topnavBackgroundImageSrc", backgroundImageSrc);
        setBackground();
        hideCustomizeModal();
    }
}

function keepPreviousBackground() {
    setBackground();
    hideCustomizeModal();
}

function previewBackground() {
    var backgroundImageSrc = $(".top-nav-background-images-container li.background-selected").data("image-src");

    $(".main-topnav").css('background-image', 'url(' + backgroundImageSrc + ')');
    $(".main-topnav").addClass("custom-background");
}

function updateTopnavAgentPhoto() {
    var agentPhotoSrc = $(".top-nav-agent-photos-container img.agent-photo-selected").attr("src");

    if (agentPhotoSrc === undefined) {
        alert("Please Select a Photo");
    } else {
        localStorage.setItem("topnavAgentPhoto", agentPhotoSrc);
        setAgentPhoto();
        hideCustomizeModal();
    }
}

function setAgentPhoto() {
    var agentPhotoSrc = localStorage.topnavAgentPhoto || "images/agent-photos/agent-photo-1.jpg";

    $(".js-agent-photo").attr("src", agentPhotoSrc);
}

function getAndSetAllBackgroundImages() {
    customBackgroundImages.forEach(function(value) {
        var image = "<img src=" + value + ">";
        var style = "background-image: url(" + value + ");";
        var $li = $("<li></li>");

        $li.css({
            "background-image": 'url(' + value + ')',
            "background-position": "-45%"
        }).attr("data-image-src", value);

        $(".top-nav-background-images-container").append($li);
    });
}

function getAndSetAllAgentPhotos() {
    agentPhotos.forEach(function(value) {
        var image = "<img src=images/agent-photos/" + value + ">";

        $(".top-nav-agent-photos-container").append("<li class='col-md-3 text-center'>" + image + "</li>");
    });
}

$(function() {
    setBackground();
    setAgentPhoto();

    $(".top-nav-background-images-container").on("click", "li", function() {
        $(".background-selected").removeClass("background-selected");

        $(this).addClass("background-selected");
        previewBackground();
    });

    $(".top-nav-agent-photos-container").on("click", "img", function() {
        $(".agent-photo-selected").removeClass("agent-photo-selected");

        $(this).addClass("agent-photo-selected");
    });

    $(".js-customize-modal .tab-link").on("click", function() {
        var val = $(this).text();

        $(".js-modal-content").addClass("hide-content");

        if (val === "Backgrounds") {
            $(".js-backgrounds-tab-content").removeClass("hide-content");
        } else if (val === "Agent Photos") {
            $(".js-agent-photos-tab-content").removeClass("hide-content");
        }
    });

    getAndSetAllBackgroundImages();
    getAndSetAllAgentPhotos();
});

var customBackgroundImages = [
    "libs/images/global-topnav/everglades.jpg",
    "libs/images/global-topnav/denali.jpg",
    "libs/images/global-topnav/yellowstone.jpg",
    "libs/images/global-topnav/beach.png",
    "libs/images/global-topnav/christmas.jpg",
    "libs/images/global-topnav/circles.png",
    "libs/images/global-topnav/scifi.png",
    "libs/images/global-topnav/morocco.png",
    "libs/images/global-topnav/circuit.png",
    "libs/images/global-topnav/tartan.png",
    "libs/images/global-topnav/surf.jpg",
    "libs/images/global-topnav/skies.jpg",
    "libs/images/global-topnav/mountains.jpg",
    "libs/images/global-topnav/mountains.png",
    "libs/images/global-topnav/dusk.jpg",
    "libs/images/global-topnav/flowers.jpg",
    "libs/images/global-topnav/brown.png",
    "libs/images/global-topnav/green.png",
    "libs/images/global-topnav/hot-pink.png",
    "libs/images/global-topnav/purple.png",
    "libs/images/global-topnav/red.png",
    "libs/images/global-topnav/rose-pink.png",
    "libs/images/global-topnav/orange.png",
    "libs/images/global-topnav/yellow.png",
    "libs/images/global-topnav/navy-blue.png",
    "libs/images/global-topnav/black.png"
];

var agentPhotos = [
    "agent-photo-1.jpg",
    "agent-photo-4.jpg"
];