

const Final = (() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const qs = new URLSearchParams(location.search);
  const get = (k, d) => { try { return localStorage.getItem('so2.' + k) ?? d; } catch { return d; } };
  const set = (k, v) => { try { localStorage.setItem('so2.' + k, v); } catch {} };

  document.documentElement.dataset.bg = qs.get('bg') || 'paper';
  const storeLogo = qs.get('logo') !== 'ours';

  const CAT_NAME = { all:'All', jackets:'Jackets', coats:'Coats', trousers:'Trousers', shirts:'Shirts', knitwear:'Knitwear', accessories:'Accessories' };
  const url = {
    home: 'v2/index.html', about: 'v2/about.html', collection: 'v2/fall-winter-2026.html', ss27: 'v2/spring-summer-2027.html', prize: 'v2/prize.html',
    shop: c => 'v2/shop.html' + (c && c !== 'all' ? '?cat=' + c : ''),
    look: n => 'v2/fall-winter-2026.html?look=' + n,
    ss27look: n => 'v2/spring-summer-2027.html?look=' + n,
    product: h => 'v2/product.html?p=' + h,
  };
  const bag = () => { const n = +get('bag', '0'); return n ? `Bag (${n})` : 'Bag'; };
  const price = n => '€ ' + n.toLocaleString('en-GB');

  const STAR = '<svg class="star" viewBox="0 0 10 10" aria-hidden="true"><path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill="currentColor"/></svg>';
  const prizeLink = cur => `<a href="${url.prize}" class="prize-link${cur ? ' cur' : ''}">LVMH Prize${STAR}</a>`;

  const SERVICE = [['Contact', 'mailto:info@soshiotsuki.jp'], ['Shipping and returns', 'https://soshiotsuki.store/policies/shipping-policy'],
    ['Stockists', 'https://soshiotsuki.store/pages/stockists'], ['Instagram', 'https://www.instagram.com/soshiotsuki']];
  const service = () => SERVICE.map(([l, h]) => `<a href="${h}"${h.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${l}</a>`).join('');
  function chrome(page, cat) {
    const wm = `<a class="wm chrome${storeLogo ? ' store' : ''}" href="${url.home}" aria-label="Soshiotsuki">${storeLogo ? WORDMARK : 'Soshiotsuki'}</a>`;
    const tr = `<nav class="tr focus chrome caps"><a href="${url.about}" class="${page === 'about' ? 'cur' : ''}">About</a><a href="#" class="bag">${bag()}</a></nav>`;
    const shopOpen = page === 'shop' || page === 'product';

    const cats = `<div class="cats focus">${CATS2.map(c => `<a href="${url.shop(c)}" class="${shopOpen && c === cat ? 'cur' : ''}">· ${CAT_NAME[c]}</a>`).join('')}</div>`;
    const index = `<nav class="index${page === 'home' ? ' home-index' : ''}">
      <div class="focus caps"><a href="${url.shop()}" class="${shopOpen ? 'cur' : ''}">Shop</a></div>${cats}
      <div class="focus caps"><a href="${url.ss27}" class="${page === 'ss27' ? 'cur' : ''}">Spring Summer 2027</a><a href="${url.collection}" class="${page === 'collection' ? 'cur' : ''}">Fall Winter 2026</a></div>
      <div class="focus caps">${prizeLink(page === 'prize')}</div>
      <div class="focus caps service">${service()}</div>
    </nav>`;

    if (page === 'home') return wm + `<nav class="topnav focus chrome caps"><a href="${url.shop()}">Shop</a><a href="${url.ss27}">Spring Summer 2027</a><a href="${url.collection}">Fall Winter 2026</a>${prizeLink()}</nav>` + tr + index;
    return wm + tr + index;
  }
  const foot = () => `<footer class="foot focus caps">${service()}</footer>`;

  const imgTag = (src, fallback, cls = '', style = '') => `<img${cls ? ` class="${cls}"` : ''}${style ? ` style="${style}"` : ''} src="${IMG(src)}" alt="" loading="lazy"${fallback ? ` onerror="this.onerror=null;this.src='${IMG(fallback)}';this.closest('.img,.g')?.classList.add('pending')"` : ''}>`;
  const soldMark = p => p.sold ? '<span class="sold">Sold out</span>' : '';

  function tile(p) {
    const c = shot.cloth(p);
    const alt = c ? imgTag(c, null, 'alt') : '';

    const k = CROP[p.h] || CROP[p.cat], crop = k && GEN_FRONT.has(p.h) ? `transform:scale(${k[2]});transform-origin:${k[0]}% ${k[1]}%` : '';
    return `<a class="tile${p.sold ? ' is-sold' : ''}" href="${url.product(p.h)}"><div class="img">${imgTag(shot.front(p), c, '', crop)}${alt}<span class="chip">Image coming</span></div>
      <div class="txt"><span class="name">${p.name}</span>${STORY[p.h] ? `<span class="muted line">${tileLine(STORY[p.h].line)}</span>` : ''}<span class="pr">${price(p.price)}${soldMark(p)}</span></div></a>`;
  }
  const lookTile = l => `<a class="tile" href="${url.look(l.n)}"><div class="img"><img src="${IMG(l.img)}" alt="Look ${l.n}" loading="lazy"></div>
      <div class="txt"><span class="name">Look ${l.n}</span></div></a>`;
  const mini = p => `<a class="tile" href="${url.product(p.h)}"><div class="img">${imgTag(shot.front(p), shot.cloth(p))}</div><div class="txt"><span class="name">${p.name}</span><span class="pr muted">${price(p.price)}${soldMark(p)}</span></div></a>`;

  function toast(msg) {
    let t = $('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('on'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('on'), 1600);
  }
  function wire(root = document) {
    $$('.sizes', root).forEach(s => s.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.classList.contains('na')) return toast('Size ' + b.textContent + ' — notify me');
      $$('button', s).forEach(x => x.classList.toggle('cur', x === b));
    }));
    $$('[data-add]', root).forEach(b => b.addEventListener('click', e => {
      e.preventDefault(); set('bag', String(+get('bag', '0') + +(b.dataset.add || 1)));
      $$('.bag').forEach(x => x.textContent = bag()); toast('Added to bag');
    }));
  }

  const WORDMARK = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 438 45.44'><g ><g><path d='M6.13 42c1.77 1.27 4 1.76 6.91 1.76 4.23 0 7.69-2.6 7.69-7.81 0-4.78-3-7.31-9.1-11.11-5.78-3.59-9.87-7.17-9.87-13.15C1.76 4.43 7.61 0 15.09 0c4.23 0 7 .77 9.8 1.05a88.27 88.27 0 0 0-1.2 9.08c-.14.21-1.06.21-1.2.07-.35-4.71-1.13-6.4-2.89-7.46a10 10 0 0 0-5.43-1.26A7.27 7.27 0 0 0 6.49 9c-.07 3.8 1.9 6.26 4.65 8.3s5.64 3.45 7.9 4.93c3.45 2.32 7 5.34 7 10.55 0 7-5.64 12.66-14.95 12.66-3.95 0-8-1.13-9.45-2.11-.7-1-1.48-7.6-1.62-9.71a1.27 1.27 0 0 1 1.2-.28c1.18 4.5 2.59 7.1 4.91 8.66ZM39.7 38.9a24.53 24.53 0 0 1-6-16.53 23.32 23.32 0 0 1 3.88-13.08C41.53 3.59 49.08 0 56.27 0c14 0 21.29 10.34 21.29 22a24 24 0 0 1-4.16 14.22 21.85 21.85 0 0 1-18.19 9.22A21.19 21.19 0 0 1 39.7 38.9Zm25.94 1.69c4.37-3.73 6-9.85 6-16.39 0-7.18-2.4-15-8.11-19.14A14.93 14.93 0 0 0 54.08 2a13.77 13.77 0 0 0-6.77 1.76c-5.14 3.16-7.4 9.78-7.4 17 0 7 2.54 15.47 8.81 19.84a15.54 15.54 0 0 0 9.1 2.67 11.85 11.85 0 0 0 7.82-2.68ZM91.31 42c1.77 1.27 4 1.76 6.91 1.76 4.23 0 7.69-2.6 7.69-7.81 0-4.78-3-7.31-9.09-11.11-5.79-3.59-9.88-7.17-9.88-13.15C86.94 4.43 92.8 0 100.27 0c4.23 0 7 .77 9.8 1.05a91.14 91.14 0 0 0-1.2 9.08c-.14.21-1.06.21-1.2.07-.35-4.71-1.13-6.4-2.89-7.46a10 10 0 0 0-5.43-1.26A7.27 7.27 0 0 0 91.67 9c-.07 3.8 1.9 6.26 4.65 8.3s5.64 3.45 7.9 4.93c3.45 2.32 7 5.34 7 10.55 0 7-5.64 12.66-15 12.66-4 0-8-1.13-9.45-2.11-.7-1-1.48-7.6-1.62-9.71a1.27 1.27 0 0 1 1.2-.28c1.23 4.5 2.65 7.1 4.96 8.66ZM119 1.05c2 0 5.78.22 8.46.22 4.09 0 5.78-.15 7.75-.22.14.22.14 1-.07 1.13a17.07 17.07 0 0 0-2.82.49c-1.41.42-2 .85-2 3.24-.14 3-.14 8-.14 14.42a.55.55 0 0 0 .35.56c.21.07 1.13.14 12.34.14 6.2 0 10.08 0 10.86-.07.07 0 .28-.28.28-.35 0-3.66 0-12.94-.14-15.48a2.39 2.39 0 0 0-1.48-2.39 14.87 14.87 0 0 0-3.46-.56 1 1 0 0 1 0-1.13c1.48 0 4.44.22 8.11.22 3.38 0 6.63-.22 7.75-.22a1.22 1.22 0 0 1 0 1.13 21.22 21.22 0 0 0-3.1.56c-1.41.5-2 .92-2 3.73s-.21 7.81-.21 16.74c0 5.77.07 13.72.21 16 .14 2.11.42 2.88 1.76 3.31a14.73 14.73 0 0 0 3.88.7 1.29 1.29 0 0 1-.14 1.12c-2.68 0-4.8-.21-8.11-.21s-6.7.14-8.39.21a1.26 1.26 0 0 1 0-1.12 27 27 0 0 0 3.31-.49c1.48-.43 1.91-1.06 2-3.66.07-2.11.07-10.76.07-15.19 0-.29-.14-.5-.35-.5-1.06-.07-7.41-.07-10.93-.07-5.78 0-11.56 0-12.27.14-.14 0-.28.36-.28.43 0 3.72.07 12.73.14 14.42.21 2.39.14 3.72 1.83 4.22a17.59 17.59 0 0 0 3.74.7c.14.21 0 1.05-.21 1.12-2-.07-4.8-.21-8-.21s-7 .14-8.6.21c-.21-.14-.21-.91 0-1.12a15.24 15.24 0 0 0 3.38-.63c2-.57 2.12-2 2.26-5.28.07-2.25.07-9.14.07-15.19 0-6.83-.07-15.13-.14-16.32-.14-2.11-.71-2.82-1.83-3.1a27.1 27.1 0 0 0-3.88-.52 1.28 1.28 0 0 1 0-1.13ZM172.55 1.05c1.62 0 5 .22 8.53.22s5.85-.22 7.4-.22a1.4 1.4 0 0 1 .07 1.06l-3 .49c-1.55.49-1.76 1.41-1.9 3.8-.14 2.67-.21 9.71-.21 15.76 0 7.59.07 14.35.14 16.67.14 2 .28 3.37 2.18 3.87a21 21 0 0 0 3.46.56c.21.21.07 1-.07 1.12-2 0-4.44-.21-7.62-.21-4.09 0-5.5.21-8.95.21a1.26 1.26 0 0 1 0-1.12 17.85 17.85 0 0 0 3.1-.49c1.76-.35 2.05-1.34 2.19-3.24s.21-12.66.21-19.06c0-5.7 0-11-.14-14.28-.21-1.62-.21-3-1.76-3.45a29.07 29.07 0 0 0-3.67-.63c-.17-.11-.1-.92.04-1.06ZM202.16 38.9a24.53 24.53 0 0 1-6-16.53 23.25 23.25 0 0 1 3.88-13.08C204 3.59 211.54 0 218.73 0 232.76 0 240 10.34 240 22a24 24 0 0 1-4.16 14.27 21.83 21.83 0 0 1-18.19 9.22 21.23 21.23 0 0 1-15.49-6.59Zm26 1.69c4.37-3.73 6-9.85 6-16.39 0-7.18-2.4-15-8.11-19.14a14.9 14.9 0 0 0-9.5-3.06 13.74 13.74 0 0 0-6.77 1.76c-5.15 3.16-7.4 9.78-7.4 17 0 7 2.53 15.47 8.81 19.84a15.53 15.53 0 0 0 9.09 2.67 11.86 11.86 0 0 0 7.83-2.68ZM274.51 44.38c-2.19 0-6-.21-8.74-.21-4.52 0-8 .21-10 .21-.22-.28-.22-.91 0-1.05a43.15 43.15 0 0 0 4.51-.63c2-.36 2.32-1.76 2.46-5S263 15 263 3.73a.62.62 0 0 0-.43-.49c-1.34-.08-8.32-.08-9.8.07a3.39 3.39 0 0 0-2.82 1.82 34.88 34.88 0 0 0-2.61 6.12 1.47 1.47 0 0 1-1.24-.25A99 99 0 0 0 247.37.35s.21-.21.35-.14a15 15 0 0 0 5.5 1.06h25.94a17.8 17.8 0 0 0 6.21-.85c.07 0 .28.07.28.14a65.56 65.56 0 0 0-1.41 10.55c-.07.21-1.2.21-1.27 0a22.4 22.4 0 0 0-1.06-5.69 2.93 2.93 0 0 0-2.75-2c-2.61-.14-8.88-.14-10.36-.07a.74.74 0 0 0-.35.63c0 10 .14 30.31.28 34 .21 3.94 1 4.43 2.47 4.86a23.34 23.34 0 0 0 3.45.56c.14.07.07.91-.14.98ZM297.57 42c1.76 1.27 3.95 1.76 6.91 1.76 4.23 0 7.68-2.6 7.68-7.81 0-4.78-3-7.31-9.09-11.11-5.78-3.59-9.87-7.17-9.87-13.15C293.2 4.43 299.05 0 306.52 0c4.23 0 7 .77 9.8 1.05a91.52 91.52 0 0 0-1.19 9.08c-.14.21-1.06.21-1.2.07-.36-4.71-1.13-6.4-2.89-7.46a10.09 10.09 0 0 0-5.43-1.26A7.28 7.28 0 0 0 297.92 9c-.07 3.8 1.91 6.26 4.66 8.3s5.64 3.45 7.89 4.93c3.46 2.32 7 5.34 7 10.55 0 7-5.64 12.66-14.94 12.66-3.95 0-8-1.13-9.45-2.11-.71-1-1.48-7.6-1.62-9.71a1.26 1.26 0 0 1 1.2-.28c1.17 4.5 2.58 7.1 4.91 8.66ZM324.16 1.05c1 0 4.51.22 8.1.22s6.07-.22 7.62-.22a1.39 1.39 0 0 1 0 1.06 25.26 25.26 0 0 0-3 .63c-1.27.35-1.7 1.06-1.84 3.87-.21 5.49-.14 17.87 0 21.6.29 4.85.92 7.17 2.33 9.21 2.18 3.38 6.41 5.14 11.21 5.14 6.34 0 11.7-2.47 12.27-13.16.28-5.27.42-14.42.14-21.59.01-4.22-1.23-4.81-3.06-5.21-1-.21-1.63-.21-3-.42a1.4 1.4 0 0 1 .07-1.06c1.13 0 3.46.15 7.41.15 3 0 5.14-.15 6.41-.15a1.3 1.3 0 0 1 0 1.06 16.1 16.1 0 0 0-2.61.49c-1.76.57-2.25 1.55-2.39 5.49-.28 15.12-.28 19.34-1.06 23.91-1.48 10.2-8.67 13.37-16.43 13.37-10.36 0-15.58-4.57-16.56-12.66-.57-4.36-.36-20.68-.5-26.31 0-1.9-.21-3.23-1.76-3.73a22.61 22.61 0 0 0-3.38-.63c-.19-.11-.13-.92.03-1.06ZM385.57 38.34c.07 3.23.57 4.08 2.4 4.5a25.12 25.12 0 0 0 3.31.49 1 1 0 0 1-.14 1.05c-2.18 0-5.57-.21-8.81-.21-3 0-7.19.21-8.11.21a1.37 1.37 0 0 1 0-1.05c1.62-.21 2.47-.28 3.39-.49 2-.42 2.18-1.76 2.32-4.36.21-4.08.14-11.12.14-16.89 0-5.34.07-11.25-.14-15.26-.14-2.74-.63-3.38-2.25-3.8-.85-.21-2.26-.28-3-.42a1.39 1.39 0 0 1 0-1.06c1.7 0 4.45.22 8.11.22 2.75 0 5.85-.22 7.48-.22a1.39 1.39 0 0 1 0 1.06c-1 .14-2.54.42-3 .56-1.48.49-1.55 1.41-1.69 4.22-.07 3-.07 12.1-.07 14.63-.08 5.98-.08 11.68.06 16.82Zm12.55-37.29c2.54 0 4.37.22 6.91.22 3.81 0 5.71-.08 7.68-.22.22.14.29.92 0 1.06-3.73.56-5 1.05-8.17 4.64-4.23 4.71-9.17 10.27-12.69 13.79v.21c1.41 2.74 13.89 16.81 18 20.26a9.31 9.31 0 0 0 2.32 1.48c1.2.56 2.47.7 5.15.77.21.14.14 1.05-.07 1.12-2.89.29-9.59.21-11.14-.35a10.46 10.46 0 0 1-3.53-2.32c-3.17-3-11.7-12.94-15.37-17.79a3.37 3.37 0 0 0-1.05-1 1.33 1.33 0 0 1 .21-.63C389.73 21 396.22 14 400.94 8c1.34-1.83 2-3 2-4 0-.49-.36-.92-1.49-1.2a24.45 24.45 0 0 0-3.38-.7c-.23-.1-.16-.91.05-1.05ZM421.18 1.05c1.63 0 5 .22 8.53.22 3.67 0 5.86-.22 7.41-.22a1.4 1.4 0 0 1 .07 1.06l-3 .49c-1.55.49-1.77 1.41-1.91 3.8-.14 2.67-.21 9.71-.21 15.76 0 7.59.07 14.35.14 16.67.14 2 .28 3.37 2.19 3.87a20.72 20.72 0 0 0 3.45.56c.21.21.07 1-.07 1.12-2 0-4.44-.21-7.61-.21-4.09 0-5.5.21-9 .21a1.26 1.26 0 0 1 0-1.12 18.13 18.13 0 0 0 3.11-.49c1.76-.35 2-1.34 2.18-3.24s.21-12.66.21-19.06c0-5.7 0-11-.14-14.28-.21-1.62-.21-3-1.76-3.45a28.73 28.73 0 0 0-3.67-.63c-.1-.11-.1-.92.08-1.06Z'/></g></g></svg>";
  async function brush(el) {
    if (storeLogo) { el.classList.add('store'); el.innerHTML = WORDMARK; return; }
    const t = await (await fetch('assets/logo/soshiotsuki-icon.svg')).text();
    el.innerHTML = t.replace(/<\?xml[^>]*>|<!DOCTYPE[^>]*>|<metadata>[\s\S]*?<\/metadata>/g, '').replace(/fill="#000000"/g, 'fill="currentColor"');
  }

  function init({ page, cat = 'all' }) {
    if (qs.get('clean') === '1') document.body.classList.add('clean');

    document.documentElement.classList.add('boot');
    requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.remove('boot')));
    document.body.insertAdjacentHTML('afterbegin', chrome(page, cat));
    if (page === 'home') document.body.insertAdjacentHTML('beforeend', foot());
    wire();

    document.addEventListener('click', e => {
      const a = e.target.closest('a[href="#"]'); if (!a) return;
      e.preventDefault();
      toast(a.classList.contains('bag') ? (+get('bag', '0') ? bag() : 'Your bag is empty') : 'Not part of this prototype');
    });
  }

  return { init, url, tile, lookTile, mini, price, wire, toast, brush, qs, $, $$, CAT_NAME, imgTag, STAR };
})();
