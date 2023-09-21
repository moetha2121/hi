window.onscroll = function () { /* on scroll, call the function myFunction() */
  myFunction();
};

var button = document.querySelector('.sticky-button'); /* select '.sticky-button' */

function myFunction() {
  if (window.pageYOffset > 0) {
    button.style.display = "block"; /* if the page has been scrolled, the the block makes element visible */
  } else {
    button.style.display = "none"; /* else if at top, hide element */
  }
}

button.addEventListener('click', scrollToTop); /* when user 'clicks', runs the function scrollToTop() */

function scrollToTop() {
  window.scrollTo({ /* window is scrolled to top 0 */
    top: 0,
    behavior: 'smooth' /* smooth transition */
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' }); /* scrollintoview scrolls element into a visible area. */
  }
}

