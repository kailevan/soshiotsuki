

const IMG = n => n.includes('/') ? `assets/${n}.webp` : `assets/img/${n}.webp`;

const PRODUCTS = [
  { h:'draped-construction-bowed-lapel-jacket', name:'Draped Construction Bowed Lapel Jacket', fabric:'Rayon 100%', colour:'Grey', price:2049, cat:'jackets', img:'2026ss_vogue_02', alt:'store_inside-lapel-jacket__02', look:17, sold:false,
    notes:{
      cloth:'Rayon, 100%, made in Japan. A heavy, fluid cloth, chosen so the jacket hangs from the shoulder instead of standing away from the body.',
      detail:'The lapel is cut with a slight bow, so it curves away from the chest instead of lying flat. The front is draped, without a stiff canvas inside.',
      ref:'The Italian suits Japanese salarymen wore in the 1980s as a sign of success, remade in Japan. “Made in Italy” becomes “Made in Japan.”' },
    gallery:[ ['2026ss_vogue_02','Body, front'], ['vogue_fw26_017','Body, in motion'], ['store_inside-lapel-jacket__05','The cloth'], ['store_inside-lapel-jacket__02','The detail'] ] },
  { h:'inside-lapel-jacket', name:'Inside Lapel Jacket', fabric:'Wool 100%', colour:'Kersey grey', price:984, cat:'jackets', img:'2026ss_vogue_03', alt:'store_inside-lapel-jacket__05', look:17 },
  { h:'heavy-wale-single-breasted-jacket', name:'Heavy Wale Single Breasted Jacket', fabric:'Cotton 100%', colour:'Brown', price:861, cat:'jackets', img:'2025aw_vogue_01', alt:'store_heavy-wale-single-breasted-jacket__02' },
  { h:'wool-beaver-single-breasted-jacket', name:'Wool Beaver Single Breasted Jacket', fabric:'Wool 90%, cashmere 10%', colour:'Black', price:861, cat:'jackets', img:'2025aw_vogue_05' },
  { h:'big-shoulder-shawl-collar-jacket', name:'Big Shoulder Shawl Collar Jacket', fabric:'Wool 90%, cashmere 10%', colour:'Camel', price:1311, cat:'jackets', img:'2025aw_vogue_02', alt:'store_big-shoulder-shawl-collar-jacket__04', sold:true },
  { h:'open-placket-jacket', name:'Open Placket Jacket', fabric:'Wool 100%', colour:'Kersey grey', price:984, cat:'jackets', img:'2026ss_vogue_01' },
  { h:'cow-suede-harrington-jacket', name:'Sheep Suede Harrington Jacket', fabric:'Sheep leather', colour:'Black', price:2049, cat:'jackets', img:'2026ss_vogue_05' },
  { h:'oiled-leather-blouson', name:'Oiled Leather Blouson', fabric:'Cow leather', colour:'Camel', price:2213, cat:'jackets', img:'2026aw_vogue_03', alt:'store_oiled-leather-blouson__02', sold:true },
  { h:'open-placket-clasic-drill-coat', name:'Open Placket Classic Drill Coat', fabric:'Wool 100%', colour:'Black', price:1475, cat:'coats', img:'2025aw_vogue_03' },
  { h:'open-placet-cashmere-coat', name:'Open Placket Cashmere Coat', fabric:'Cashmere 76%, acrylic 24%', colour:'Beige', price:1803, cat:'coats', img:'2025aw_vogue_04', alt:'store_open-placet-cashmere-coat__02', sold:true },
  { h:'paraffin-cotton-coat', name:'Paraffin Cotton Coat', fabric:'Cotton 100%', colour:'Beige', price:1311, cat:'coats', img:'2026aw_vogue_02', alt:'store_paraffin-cotton-coat__05', sold:true },
  { h:'heavy-wale-high-west-double-pocket-pants', name:'Heavy Wale High Waist Double Pocket Pants', fabric:'Cotton 100%', colour:'Brown', price:533, cat:'trousers', img:'store_heavy-wale-high-west-double-pocket-pants__02', look:17 },
  { h:'double-inverted-tuck-trousers', name:'Double Inverted Tuck Trousers', fabric:'Wool 100%', colour:'Kersey grey', price:574, cat:'trousers', img:'vogue_fw26_016' },
  { h:'kimono-lining-shirt', name:'Kimono Lining Shirt', fabric:'Silk 100%', colour:'Grey', price:598, cat:'shirts', img:'store_kimono-lining-shirt__01', look:17, sold:true },
  { h:'cable-handmade-knit-pullover', name:'Cable Handmade Knit Pullover', fabric:'Wool 100%', colour:'Red', price:1147, cat:'knitwear', img:'vogue_fw26_009', alt:'store_cable-handmade-knit-pullover__05' },
  { h:'knit-gilet', name:'Knit Gilet', fabric:'Wool 100%', colour:'Beige', price:369, cat:'knitwear', img:'store_knit-gilet__02', sold:true },
  { h:'last-button-vest', name:'Last Button Vest', fabric:'Wool 100%', colour:'Dobby grey', price:328, cat:'jackets', img:'store_last-button-vest__04', look:17 },
  { h:'juzu-necklace', name:'Juzu Necklace', fabric:'Onyx, silver', colour:'Black', price:189, cat:'accessories', img:'store_juzu-necklace__00', sold:true },
];
const P = Object.fromEntries(PRODUCTS.map(p => [p.h, p]));

const LOOKS = [
  { n:8,  img:'vogue_fw26_008', title:'Oiled leather, head to toe', pieces:['oiled-leather-blouson','double-inverted-tuck-trousers'] },
  { n:9,  img:'vogue_fw26_009', title:'Red cable, brown wale', pieces:['cable-handmade-knit-pullover','heavy-wale-high-west-double-pocket-pants'] },
  { n:15, img:'vogue_fw26_015', title:'The grey suit, loose', pieces:['inside-lapel-jacket','double-inverted-tuck-trousers','kimono-lining-shirt'] },
  { n:16, img:'vogue_fw26_016', title:'Knit over tucked trousers', pieces:['knit-gilet','double-inverted-tuck-trousers','kimono-lining-shirt'] },
  { n:17, img:'vogue_fw26_017', title:'Grey wool, worn loose', pieces:['draped-construction-bowed-lapel-jacket','last-button-vest','kimono-lining-shirt','heavy-wale-high-west-double-pocket-pants'] },
  { n:18, img:'vogue_fw26_018', title:'Stone, open at the neck', pieces:['open-placket-jacket','double-inverted-tuck-trousers'] },
  { n:19, img:'vogue_fw26_019', title:'Tie, tucks and a long jacket', pieces:['inside-lapel-jacket','double-inverted-tuck-trousers'] },
  { n:20, img:'vogue_fw26_020', title:'Charcoal, belted', pieces:['wool-beaver-single-breasted-jacket','double-inverted-tuck-trousers'] },
  { n:33, img:'vogue_fw26_033', title:'Pink shirt, black trousers', pieces:['kimono-lining-shirt','double-inverted-tuck-trousers'] },
];
const L = Object.fromEntries(LOOKS.map(l => [l.n, l]));

const LOOKS26 = Array.from({ length:37 }, (_, i) => { const n = i + 1, old = L[n]; return { n, img:'fw26/' + String(n).padStart(3, '0'), pieces: old ? old.pieces : [] }; });
const L26 = Object.fromEntries(LOOKS26.map(l => [l.n, l]));

const LOOKS27 = Array.from({ length:35 }, (_, i) => ({ n:i + 1, img:'ss27/' + String(i + 1).padStart(3, '0') }));

const CATS = ['all','jackets','coats','trousers','shirts','knitwear','accessories'];

const VERSIONS = [
  { k:'h1', g:'Homepage', t:'H1 — Film', r:'Phoebe Philo', d:'Show film full screen, brush icon large in the centre.' },
  { k:'h2', g:'Homepage', t:'H2 — Index', r:'MFPEN', d:'Fixed numbered index left, one calm column of images.' },
  { k:'h3', g:'Homepage', t:'H3 — Store', r:'Auralee', d:'Campaign image, “New in” row, a cloth story, the prize.' },
  { k:'p1', g:'Collection', t:'P1 — Index grid', r:'MFPEN + Margaret Howell', d:'Left index with categories, 3 columns, name · fabric · price.' },
  { k:'p2', g:'Collection', t:'P2 — By look', r:'Zara Origins + Auralee', d:'Runway looks in order; open one to shop its pieces.' },
  { k:'p3', g:'Collection', t:'P3 — Gapless', r:'Phoebe Philo + Auralee + Lemaire', d:'4 columns, no gaps, caption bands, a look breaks in.' },
  { k:'d1', g:'Product', t:'D1 — Stack + notes column', r:'MFPEN + Auralee', d:'Stacked images, fixed column with the three notes.' },
  { k:'d2', g:'Product', t:'D2 — Wall + card', r:'Phoebe Philo', d:'Image wall, a pinned card with three note tabs.' },
  { k:'d3', g:'Product', t:'D3 — Notes beside images', r:'Zara Origins + Lemaire', d:'Each note sits next to the image it explains.' },
];

const eur = n => '€ ' + n.toLocaleString('en-GB');

const CAMPAIGN = { 'inside-lapel-jacket':'campaign/inside-lapel-jacket' };
const GEN_FRONT = new Set(PRODUCTS.map(p => p.h).filter(h => h !== 'juzu-necklace' && !CAMPAIGN[h]));
const GEN_CLOTH = new Set(['draped-construction-bowed-lapel-jacket','inside-lapel-jacket','heavy-wale-single-breasted-jacket','wool-beaver-single-breasted-jacket',
  'big-shoulder-shawl-collar-jacket','oiled-leather-blouson','open-placet-cashmere-coat','paraffin-cotton-coat','heavy-wale-high-west-double-pocket-pants',
  'double-inverted-tuck-trousers','kimono-lining-shirt','cable-handmade-knit-pullover','knit-gilet','last-button-vest']);
const shot = {
  front: p => CAMPAIGN[p.h] || (GEN_FRONT.has(p.h) ? `pieces/${p.h}__front` : p.img),
  cloth: p => GEN_CLOTH.has(p.h) ? `pieces/${p.h}__cloth` : null,
  gallery: p => [[shot.front(p), 'Front'],
    ...(p.h === 'draped-construction-bowed-lapel-jacket' ? [[`pieces/${p.h}__motion`, 'In motion']] : []),
    ...(shot.cloth(p) ? [[shot.cloth(p), 'The cloth']] : [])],
};
