document.addEventListener('DOMContentLoaded', function () {
  var triggers = document.querySelectorAll('.navlink.has-dropdown');
  triggers.forEach(function (trigger) {
    var menu = trigger.nextElementSibling;
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = menu.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) {
        var rect = trigger.getBoundingClientRect();
        menu.style.top = (rect.bottom + 8) + 'px';
        menu.style.left = rect.left + 'px';
        menu.classList.add('open');
        trigger.classList.add('open');
      }
    });
  });
  document.addEventListener('click', closeAllDropdowns);
  window.addEventListener('resize', closeAllDropdowns);
  window.addEventListener('scroll', closeAllDropdowns, true);

  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu.open').forEach(function (m) { m.classList.remove('open'); });
    document.querySelectorAll('.navlink.has-dropdown.open').forEach(function (b) { b.classList.remove('open'); });
  }
});
