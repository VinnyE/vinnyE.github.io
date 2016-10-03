var navToggleList = document.getElementById('nav-toggle-list');
var navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', function() {
  navToggleList.classList.toggle('hidden');
  console.log('hello');
});
