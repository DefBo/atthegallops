// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the nav bar
var header = document.getElementById("fixed-nav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Get the root tag
var root = document.getElementsByTagName( 'html' )[0];
// Show navigation menu
function showNav() {
    root.classList.add('_show-nav');
}
// Hide navigation menu
function hideNav() {
    root.classList.remove('_show-nav');
}

// Add smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Toggle class _active by clicking on interactive "how it works" item
var tagItems = document.querySelectorAll('.how-it-works__tag');
[].forEach.call(tagItems, function(el, i, tagItems) {
    el.addEventListener('click', function() {
        [].forEach.call(tagItems, function(el) {
            if(el !== this) {
                el.classList.remove("_active");
            } else {
                el.classList.toggle("_active");
            }
        }, this);
    });
});

// Toggle class _active by clicking on interactive "team-member" item
var tagItems = document.querySelectorAll('.team__member');
[].forEach.call(tagItems, function(el, i, tagItems) {
    el.addEventListener('click', function() {
        [].forEach.call(tagItems, function(el) {
            if(el !== this) {
                el.parentNode.classList.remove("_active");
            } else {
                el.parentNode.classList.add("_active");
            }
        }, this);
    });
});

function _removeClasses() {
    var tagItems = document.querySelectorAll('.how-it-works__tag');
    [].forEach.call(tagItems, function(el) {
        el.classList.remove("_active");
    }, this);
}

// Make camera toggle be active on load for desktop devices
function addActiveToggle(x) {
    var cameraTagItem = document.getElementById("camera-tag");

    if (x.matches) {
        cameraTagItem.classList.add("_active");
    } else {
        cameraTagItem.classList.remove("_active");
    }
}

var x = window.matchMedia("(min-width: 1025px)");
addActiveToggle(x);
x.addListener(addActiveToggle);


/*Add class to video when it's loaded*/
window.onload = function() {
    document.getElementById('main-video-bg').classList.add('_visible');
};


