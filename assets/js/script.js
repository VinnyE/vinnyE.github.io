var navToggleList = document.getElementById('nav-toggle-list');
var navToggle = document.getElementById('nav-toggle');
var mainNav = document.getElementById('main-nav');
var mainNavClone = mainNav.cloneNode(true);

mainNavClone.children[0].classList.remove('selected');

navToggle.addEventListener('click', function() {
  if (navToggleList.classList.contains('hidden')) {
    navToggleList.appendChild(mainNavClone);
  } else {
    navToggleList.removeChild(mainNavClone);
  }

  navToggleList.classList.toggle('hidden');
});

// Menu scroll background
var about = mainNav.children[0];
var skills = mainNav.children[1];
var projects = mainNav.children[2];
var scrollPosition = 0;

function removeSelected() {
  for (var i = 0; i < mainNav.children.length; i++) {
    mainNav.children[i].classList.remove('selected');
  }
}

window.addEventListener('scroll', function() {
  scrollPosition = window.scrollY;

  if (scrollPosition < 100) {
    removeSelected();
    about.classList.add('selected');
  } else if (scrollPosition < 400 ) {
    removeSelected();
    skills.classList.add('selected');
  } else {
    removeSelected();
    projects.classList.add('selected');
  }
});
