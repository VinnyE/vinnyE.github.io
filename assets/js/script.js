var navToggleList = document.getElementById('nav-toggle-list');
var navToggle = document.getElementById('nav-toggle');
var mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', function(e) {
  e.preventDefault();

  if (navToggleList.classList.contains('hidden')) {
    navToggleList.appendChild(mainNav);
  } else {
    navToggleList.removeChild(mainNav);
  }

  navToggleList.classList.toggle('hidden');
});
