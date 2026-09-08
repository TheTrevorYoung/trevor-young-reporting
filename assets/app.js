(() => {
  const nav = document.querySelector('.nav');
  const onGitHubPages = window.location.hostname.endsWith('github.io');
  const root = onGitHubPages ? '/trevor-young-reporting/' : '/';

  if (nav) {
    const links = [
      ['life/', 'Life & Places'],
      ['experiments/', 'My Experiments'],
      ['projects/', 'My Projects'],
      ['trading-with-ai/', 'Trading with AI'],
      ['published-work/', 'Published Work']
    ];
    const currentPath = window.location.pathname;
    nav.innerHTML = links.map(([path, label]) => {
      const href = root + path;
      const active = currentPath.includes('/' + path) || currentPath.endsWith('/' + path);
      return `<a href="${href}"${active ? ' aria-current="page"' : ''}>${label}</a>`;
    }).join('');
  }

  const toggle = document.querySelector('.menu-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear();

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical && (!canonical.getAttribute('href') || canonical.getAttribute('href') === './')) {
    canonical.href = window.location.href.split('#')[0].split('?')[0];
  }

  document.querySelectorAll('[data-disabled-form]').forEach((form) => {
    form.addEventListener('submit', (e) => e.preventDefault());
  });

  const filterButtons = document.querySelectorAll('[data-filter]');
  const filterItems = document.querySelectorAll('[data-topics]');
  if (filterButtons.length && filterItems.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.filter;
        filterButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        filterItems.forEach((item) => {
          const topics = (item.dataset.topics || '').split(',');
          item.hidden = target !== 'all' && !topics.includes(target);
        });
      });
    });
  }
})();
