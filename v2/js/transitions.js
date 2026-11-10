
document.querySelector('link[rel="expect"]').href = location.href.split('#')[0] + '#ready';

let pageTransition = null, leaving = false, nextPage = null, navigationTimer = null;

function leave(href) {
  leaving = true;
  clearTimeout(navigationTimer);
  navigationTimer = setTimeout(() => { navigationTimer = null; location.assign(href); }, 150);
}
addEventListener('pagereveal', e => {
  leaving = false;
  nextPage = null;
  document.documentElement.classList.remove('settled');
  const transition = pageTransition = e.viewTransition;
  if (!transition) return;

  transition.ready.catch(() => {});
  transition.updateCallbackDone.catch(() => {});
  const finish = () => {
    if (pageTransition !== transition) return;
    pageTransition = null;
    if (nextPage) { const href = nextPage; nextPage = null; leave(href); }
  };
  transition.finished.then(finish, finish);
});
addEventListener('pageswap', () => {
  leaving = true;
  document.documentElement.classList.remove('settled');
});
addEventListener('pointermove', () => {
  if (!leaving && !pageTransition) document.documentElement.classList.add('settled');
});

document.addEventListener('click', e => {
  const a = e.target.closest('a[href]');
  if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || !a ||
      a.target || a.hasAttribute('download') || a.getAttribute('href').startsWith('#')) return;
  const url = new URL(a.href);
  if (url.origin !== location.origin || !url.pathname.includes('/v2/')) return;
  if (url.href === location.href) { e.preventDefault(); return; }
  e.preventDefault();
  if (pageTransition) nextPage = url.href;
  else if (!leaving || navigationTimer) leave(url.href);
});
