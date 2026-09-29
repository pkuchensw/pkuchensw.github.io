(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  function setTheme(theme) {
    const dark = theme === 'dark';
    root.dataset.theme = theme;
    button.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' theme');
    button.title = button.getAttribute('aria-label');
    button.querySelector('img').src = './assets/icons/' + (dark ? 'sun' : 'moon') + '.svg';
    document.querySelector('meta[name="theme-color"]').content = dark ? '#1c1c1c' : '#ffffff';
  }
  let saved;
  try { saved = localStorage.getItem('siwei-theme'); } catch { /* Theme switching also works without storage. */ }
  setTheme(saved === 'dark' ? 'dark' : 'light');
  button.hidden = false;
  button.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    try { localStorage.setItem('siwei-theme', theme); } catch { /* Private browsing can disable persistence. */ }
  });

  const links = [...document.querySelectorAll('.section-nav a')];
  const sections = links.map(link => document.querySelector(link.hash));
  let scheduled = false;
  function updateNavigation() {
    const offset = Math.max(document.querySelector('.site-header').getBoundingClientRect().height, parseFloat(getComputedStyle(root).scrollPaddingTop) || 0) + 30;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) current = section;
    }
    // Short final sections cannot always reach the top of the viewport.
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      const target = sections.find(section => '#' + section.id === location.hash);
      const top = target?.getBoundingClientRect().top;
      current = target && top >= offset - 4 && top < window.innerHeight ? target : sections.at(-1);
    }
    links.forEach(link => {
      if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  function scheduleUpdate() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateNavigation);
    }
  }
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('hashchange', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  updateNavigation();
})();
