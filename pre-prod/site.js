// madebycal pre-prod: mobile menu + copy email
(function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('site-menu');
  if (btn && menu) {
    function setOpen(open) {
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? 'Close' : 'Menu';
      menu.classList.toggle('open', open);
    }
    btn.addEventListener('click', function () {
      setOpen(btn.getAttribute('aria-expanded') !== 'true');
    });
    // close after picking a link, or on Escape
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) { setOpen(false); btn.focus(); }
    });
  }

  document.querySelectorAll('.copy-btn').forEach(function (b) {
    var status = b.parentElement.querySelector('.copied');
    var timer;
    b.addEventListener('click', function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(b.dataset.copy).then(function () {
        status.textContent = 'Copied!';
        status.classList.add('show');
        clearTimeout(timer);
        timer = setTimeout(function () {
          status.classList.remove('show');
          status.textContent = '';
        }, 1600);
      });
    });
  });
})();
