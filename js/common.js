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
