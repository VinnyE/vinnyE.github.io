var navToggleList = document.getElementById('nav-toggle-list');
var navToggle = document.getElementById('nav-toggle');
var mainNav = document.getElementById('main-nav');
var mainNavClone = mainNav.cloneNode(true);

navToggle.addEventListener('click', function(e) {
  e.preventDefault();

  if (navToggleList.classList.contains('hidden')) {
    navToggleList.appendChild(mainNavClone);
  } else {
    navToggleList.removeChild(mainNavClone);
  }

  navToggleList.classList.toggle('hidden');
});

/* TODO
Resolve toggle bug. When Menu is toggled, it removes mainNav from header */
