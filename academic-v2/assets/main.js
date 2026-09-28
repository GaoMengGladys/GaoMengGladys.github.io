/* Progressive enhancement: all content and links work without JavaScript. */
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  const links = [...navigation.querySelectorAll('a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  const backToTop = document.querySelector('.back-to-top');
  const mobile = window.matchMedia('(max-width: 640px)');

  document.documentElement.classList.add('js');
  menuButton.hidden = false;

  function closeMenu() {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    navigation.classList.toggle('is-open', !isOpen);
    menuButton.setAttribute('aria-expanded', String(!isOpen));
  });

  navigation.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    const target = document.querySelector(link.getAttribute('href'));
    closeMenu();
    // Keep keyboard focus in the page after the mobile navigation closes.
    if (target && mobile.matches) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.masthead')) closeMenu();
  });
  mobile.addEventListener('change', closeMenu);

  let framePending = false;
  function updateScrollState() {
    const offset = document.querySelector('.masthead').offsetHeight + 55;
    let active = 0;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= offset) active = index;
    });
    // Short sections near the end share a scroll position on tall screens.
    // Honor a visible anchor destination; otherwise highlight the last section.
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
      active = links.length - 1;
      const destination = links.findIndex(link => link.getAttribute('href') === window.location.hash);
      if (destination >= 0) {
        const top = sections[destination].getBoundingClientRect().top;
        if (top >= 0 && top < window.innerHeight) active = destination;
      }
    }
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    backToTop.hidden = window.scrollY < 500;
    framePending = false;
  }

  function scheduleScrollUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateScrollState);
  }
  window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
  window.addEventListener('resize', scheduleScrollUpdate, { passive: true });
  window.addEventListener('hashchange', scheduleScrollUpdate);
  window.addEventListener('load', scheduleScrollUpdate);
  updateScrollState();
})();
