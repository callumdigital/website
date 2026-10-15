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

// Squiggle underline for links: same shape as the logo squiggle (flat
// crests, steep middle), redrawn to each link's width so the ends are
// always round caps rather than a tile cut off mid-wave.
(function () {
  var NS = 'http://www.w3.org/2000/svg';
  var HALF = 7;        // half a wave, px
  var H = 7, PAD = 1;  // svg height, inset so the round caps fit

  function pathFor(w) {
    var len = Math.max(w - PAD * 2, HALF);
    var n = Math.max(1, Math.round(len / HALF));
    var h = len / n, hi = 1.5, lo = H - 1.5;
    var x = PAD, y = hi, d = 'M' + x + ' ' + y;
    for (var i = 0; i < n; i++) {
      var ny = y === hi ? lo : hi;
      d += ' C' + (x + h / 2) + ' ' + y + ' ' + (x + h / 2) + ' ' + ny + ' ' + (x + h) + ' ' + ny;
      x += h; y = ny;
    }
    return d;
  }

  function draw(link) {
    var w = link.getBoundingClientRect().width;
    var svg = link.querySelector(':scope > .sq');
    if (!svg) {
      svg = document.createElementNS(NS, 'svg');
      svg.setAttribute('class', 'sq');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      var p = document.createElementNS(NS, 'path');
      p.setAttribute('pathLength', '1');
      svg.appendChild(p);
      link.appendChild(svg);
    }
    svg.setAttribute('viewBox', '0 0 ' + w + ' ' + H);
    svg.firstChild.setAttribute('d', pathFor(w));
  }

  var links = document.querySelectorAll('.link');
  links.forEach(draw);
  if ('ResizeObserver' in window) {
    var ro = new ResizeObserver(function (entries) {
      entries.forEach(function (e) { draw(e.target); });
    });
    links.forEach(function (l) { ro.observe(l); });
  }
  // web fonts change link widths after first paint
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { links.forEach(draw); placeNav(); });

  // Top nav: one shared squiggle that slides between items.
  // Rests under the current section (aria-current) when there is one.
  var nav = document.querySelector('.nav');
  var navSq, current, shown = null;
  function placeNav() {}
  if (nav) {
    navSq = document.createElementNS(NS, 'svg');
    navSq.setAttribute('class', 'nav-sq');
    navSq.setAttribute('aria-hidden', 'true');
    navSq.setAttribute('focusable', 'false');
    navSq.setAttribute('preserveAspectRatio', 'none');
    var np = document.createElementNS(NS, 'path');
    np.setAttribute('pathLength', '1');
    navSq.appendChild(np);
    nav.appendChild(navSq);
    current = nav.querySelector('[aria-current]');

    var moveTo = function (link) {
      if (!link) {
        navSq.classList.remove('on');
        shown = null;
        return;
      }
      var w = link.offsetWidth;
      if (!shown) navSq.classList.add('jump');   // first appearance: no slide, just draw in
      navSq.style.left = link.offsetLeft + 'px';
      navSq.style.top = (link.offsetTop + link.offsetHeight - 2) + 'px';
      navSq.style.width = w + 'px';
      navSq.setAttribute('viewBox', '0 0 ' + w + ' ' + H);
      np.setAttribute('d', pathFor(w));
      navSq.getBoundingClientRect();              // commit position before re-enabling transitions
      navSq.classList.remove('jump');
      navSq.classList.add('on');
      shown = link;
    };
    placeNav = function () { moveTo(shown || current); };

    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('mouseenter', function () { moveTo(a); });
      a.addEventListener('focus', function () { moveTo(a); });
    });
    nav.addEventListener('mouseleave', function () { moveTo(current); });
    nav.addEventListener('focusout', function (e) { if (!nav.contains(e.relatedTarget)) moveTo(current); });
    window.addEventListener('resize', placeNav);
    moveTo(current);
  }
})();
