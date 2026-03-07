document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.menu-toggle');
  var sidebar = document.querySelector('.sidebar');
  if (!btn || !sidebar) return;

  btn.addEventListener('click', function () {
    var open = sidebar.classList.toggle('sidebar-open');
    btn.setAttribute('aria-expanded', open);
    btn.textContent = open ? '✕' : '☰';
  });

  // Close sidebar when a nav link is tapped on mobile
  sidebar.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      sidebar.classList.remove('sidebar-open');
      btn.setAttribute('aria-expanded', false);
      btn.textContent = '☰';
    });
  });
});
