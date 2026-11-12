

PRODUCTS.push(
  { h:'drape-facing-shirt', name:'Drape Facing Shirt', fabric:'Cotton 100%, silk tie fabric', colour:'Saxe', price:516, cat:'shirts' },
  { h:'heavy-wale-dress-shirt', name:'Heavy Wale Dress Shirt', fabric:'Cotton 100%', colour:'Brown', price:434, cat:'shirts' },
  { h:'bias-cut-heavy-wale-dress-shirt', name:'Bias Cut Heavy Wale Dress Shirt', fabric:'Cotton 100%', colour:'Off-white', price:475, cat:'shirts' },
  { h:'regular-collar-shirt', name:'Regular Collar Shirt', fabric:'Cotton 100%', colour:'White stripe', price:428, cat:'shirts' },
  { h:'reversible-sewing-wool-shirt', name:'Reversible Sewing Wool Shirt', fabric:'Wool 100%', colour:'Black', price:1147, cat:'shirts' },
);
PRODUCTS.forEach(p => P[p.h] = p);
const NEW_SHIRTS = ['drape-facing-shirt','heavy-wale-dress-shirt','bias-cut-heavy-wale-dress-shirt','regular-collar-shirt','reversible-sewing-wool-shirt'];
NEW_SHIRTS.forEach(h => GEN_FRONT.add(h));
['drape-facing-shirt','heavy-wale-dress-shirt','bias-cut-heavy-wale-dress-shirt','regular-collar-shirt'].forEach(h => GEN_CLOTH.add(h));

['open-placket-jacket','open-placket-clasic-drill-coat','reversible-sewing-wool-shirt','cow-suede-harrington-jacket'].forEach(h => GEN_CLOTH.add(h));

const CROP = { 'kimono-lining-shirt':[57, 9, 1.75] };

const SOLD = new Set(['draped-construction-bowed-lapel-jacket','oiled-leather-blouson','open-placet-cashmere-coat','reversible-sewing-wool-shirt']);
PRODUCTS.forEach(p => p.sold = SOLD.has(p.h));

const CAT_ORDER = ['shirts','trousers','knitwear','jackets','coats','accessories'];
const CATS2 = ['all', ...CAT_ORDER];
const sortShop = list => [...list].sort((a, b) => (a.sold - b.sold) || (CAT_ORDER.indexOf(a.cat) - CAT_ORDER.indexOf(b.cat)) || (a.price - b.price));

const BEST = ['drape-facing-shirt','heavy-wale-dress-shirt','double-inverted-tuck-trousers','knit-gilet','heavy-wale-high-west-double-pocket-pants','cable-handmade-knit-pullover','regular-collar-shirt','bias-cut-heavy-wale-dress-shirt'];

const SENTENCE = {

  b: { text:'A proposal of dandyism, made from the Japanese spirit and the technique of the tailor.' },
  a: { text:'Soshi Otsuki cuts tailoring in Tokyo, from the cloth up: the suit of the Japanese salaryman, taken apart and made again.' },
};

const SRC = {
  STORE:'soshiotsuki.store, product page', JP:'soshiotsuki.jp', FU:'FashionUnited, Jan 2026', TEN:'10 Magazine, Apr 2026',
  ESQ:'Esquire UK, Feb 2026', ID:'i-D, Oct 2025', VOG:'Vogue, Sep 2025', NUM:'Numéro, Sep 2025', WWD:'WWD, Jun 2026', IMP:'The Impression, Jun 2026', GEN:'general tailoring knowledge',
};

const STORY = {
  'drape-facing-shirt': { name:"Nekutai Shirt", line:"A shirt that carries its own tie",
    story:"A strip of blue tie silk runs down the front of this saxe cotton shirt, where a tie would hang. The silk is sewn in place and needs no knot. SOSHIOTSUKI builds its collections from the uniform of the Japanese office. Here it takes that uniform's most familiar accessory, the nekutai, Japanese for necktie, and makes it part of the shirt. Shirt and tie, long worn as a pair, become one garment.",
    made:"Mills in Nishiwaki, in the Banshu region of Hyogo, dye the cotton yarn before weaving it. The facing silk comes from Nishijin in Kyoto, where weavers have made obi for centuries and now weave neckties as well.",
    cloth:"Cotton, 100%. Facing in silk tie fabric. Made in Japan." },
  'heavy-wale-dress-shirt': { name:"Chairo Shirt", line:"A dress shirt softened by corduroy",
    story:"Wide-wale corduroy, a cloth of weekend jackets, is cut here to the rules of a dress shirt. The pointed collar and buttoned cuffs follow formal shirtmaking. The colour is chairo, Japanese for the brown of tea. Across the collection, SOSHIOTSUKI takes pieces from the office wardrobe and cuts them in the cloths of a day at home. In this shirt, the form of the office rests in a domestic cloth.",
    made:"Mills in Fukude, in Shizuoka, weave most of Japan's corduroy. Workshops there cut the pile of each wale with fine blades, the step that raises the ridges.",
    cloth:"Cotton corduroy, 100%, a heavy wale. Made in Japan." },
  'bias-cut-heavy-wale-dress-shirt': { name:"Naname Shirt", line:"A dress shirt turned on the bias",
    story:"The off-white wide-wale corduroy of the Chairo Shirt is cut naname, Japanese for diagonal, so its ridges cross the chest at forty-five degrees. Stiff when cut straight, the cloth drapes on the bias. The pointed collar and pale buttons belong to a dress shirt, and the shirt has the ease of one worn for years. Across an office it reads as plain. The slant of the ridges is kept for those who stand close.",
    made:"A Japanese workshop cuts and sews it from Fukude corduroy. The cutter lays each panel at an angle and matches the wale at every seam, which takes more cloth than a straight cut.",
    cloth:"Cotton corduroy, 100%, cut on the bias. Made in Japan." },
  'regular-collar-shirt': { name:"Teiji Shirt", line:"A white shirt kept to its origin",
    story:"White cotton carries a tonal stripe that shows at close range. In Japan the white dress shirt has its own word, waishatsu, from the English \"white shirt\", and a salaryman wears one five days a week. The shirt keeps to that original with a regular collar and a soft shoulder that moves under the tailoring of the collection. The collar still lies flat once teiji, the official end of the working day, has passed.",
    made:"Mills in the Banshu region of Hyogo weave the stripe from dyed yarn, so the stripe belongs to the cloth itself. A Japanese workshop sews it with single-needle seams, which lie flatter than the twin-needle seams of most shirts.",
    cloth:"Cotton, 100%. White with a tonal stripe. Made in Japan." },
  'reversible-sewing-wool-shirt': { name:"Ura-Omote Shirt", line:"A wool shirt equal on either side",
    story:"In black wool, every seam is closed and both faces are finished, so either side can be worn outward. A soft collar and room through the shoulder let the shirt wear like a light jacket. Japanese describes an honest colleague as ura-omote no nai hito, a person with no back and front, the same at the desk as at home. The shirt holds to that phrase, each face equal to the other.",
    made:"The wool comes from Bishu, in Aichi, the main wool-weaving region of Japan. A Japanese workshop sews each seam twice and binds it by hand, so both sides show a clean edge.",
    cloth:"Wool, 100%. Made in Japan." },
  'kimono-lining-shirt': { name:"Uramasari Shirt", line:"A shirt that shows its hidden silk",
    story:"Grey deadstock kimono lining silk forms this shirt. In Edo Japan, the shogunate's sumptuary laws barred merchants from dressing above their rank, so the wealthy hid their best silk in haori and kimono linings, a habit called uramasari, \"the lining wins\". Here the silk lining is turned outward. A point collar and a long, straight body follow the Western dress shirt. From a desk away, the hidden silk reads as texture and passes the office dress code.",
    made:"Japanese mills wove this silk to line kimono, and the rolls never reached a tailor. The studio buys them from wholesalers in Kyoto, so each pattern lasts as long as its roll.",
    cloth:"Silk, 100%. Deadstock kimono lining silk. Made in Japan." },
  'heavy-wale-high-west-double-pocket-pants': { name:"Koruten Trousers", line:"Corduroy trousers held high and cut wide",
    story:"Cut in corduroy, long called koruten in Japanese, the trousers sit high on the waist and fall wide to the shoe, as men wore them to Tokyo offices in the late 1980s. A second front pocket and a long, unbroken line keep the volume in order. With the Koruten Jacket they form a full suit, the office uniform in a weekend cloth. The width of the leg answers to the discipline of the waist.",
    made:"Mills in Fukude, in Shizuoka, weave and pile-cut the corduroy. A Japanese workshop sews the trousers and shapes the waistband by hand so the high rise sits flat.",
    cloth:"Cotton corduroy, 100%. Made in Japan." },
  'double-inverted-tuck-trousers': { name:"Baburu Trousers", line:"Wool trousers with a deep, measured pleat",
    story:"Kersey-grey wool is cut with two inverted tucks on each side, the deep pleats salarymen wore in the baburu, the bubble economy of the late 1980s. The tucks open with each step and close at rest, so the cloth falls straight from hip to shoe. A high rise gathers that volume at the waist. The trousers share their grey with the Uchi and Kakushi jackets. The pleat of that decade returns in a quieter grey.",
    made:"Mills in Bishu, in Aichi, weave the wool. A tailor in Japan sets each tuck by hand and presses it in, so the pleats hold through a day at a desk.",
    cloth:"Wool, 100%. Kersey grey. Made in Japan." },
  'knit-gilet': { name:"Chokki Gilet", line:"A suit waistcoat softened into knitwear",
    story:"The waistcoat of the three-piece suit is knitted here in beige wool, so it moves with the body. A deep V neck and a short body keep the line of tailoring, and it sits as well under a jacket as over a white shirt. The Sebiro Vest is its woven counterpart for the office, and this one belongs to the day off. Its name is chokki, the word a grandfather would still use.",
    made:"Knitters in Yamagata, a prefecture of knitting mills, make it on older, slow flat-bed machines. They then link the neck and armholes by hand.",
    cloth:"Wool, 100%. Made in Japan." },
  'cable-handmade-knit-pullover': { name:"Teami Pullover", line:"A cable pullover made by one hand",
    story:"Heavy red wool is worked stitch by stitch into cables, in the hand knitting Japanese calls teami. In Showa Japan a hand-knitted sweater was a gift, made at home by someone who had taken the wearer's measure without asking. This pullover comes from a knitter the studio can name. A round neck and a relaxed body sit over a shirt and tie or beneath a coat. Each cable records a single pair of hands.",
    made:"One knitter in Japan makes each pullover by hand over several days. The studio keeps a record of who made which one.",
    cloth:"Wool, 100%. Hand-knitted. Made in Japan." },
  'last-button-vest': { name:"Sebiro Vest", line:"A waistcoat that keeps the old rules",
    story:"Grey wool dobby gives this vest a small woven check, visible at arm's length. It follows the waistcoat of the sebiro, the Japanese salaryman's business suit, down to its pointed front hem, and some trace the word to Savile Row. The vest keeps the rule credited to Edward VII, with the last button left open, and sits under a jacket or alone over a shirt. An English custom endures in the Japanese office uniform.",
    made:"Mills in Bishu, in Aichi, weave the check on dobby looms, which lift single threads to draw the pattern. They still run this slow weave on older machines.",
    cloth:"Wool dobby, 100%. Made in Japan." },
  'heavy-wale-single-breasted-jacket': { name:"Koruten Jacket", line:"A country cloth given office form",
    story:"Wide-wale brown corduroy, koruten in Japanese, belongs to the countryside and the weekend. SOSHIOTSUKI gives it the shape of an office jacket, with notched lapels and a three-button front. With the Koruten Trousers it forms a full office suit in the cloth of a country walk. On its own it goes over a knit. The ridges of the wale hide the creases a train seat leaves in smoother cloth, and the jacket arrives composed.",
    made:"The corduroy comes from Fukude, in Shizuoka. A Japanese tailoring workshop shapes the front with a steam iron, then sets the lapels by hand.",
    cloth:"Cotton corduroy, 100%. Made in Japan." },
  'wool-beaver-single-breasted-jacket': { name:"Sumi Jacket", line:"A black jacket as deep as ink",
    story:"The wool and cashmere cloth has a beaver finish. The mill raises its surface, then presses it flat until it turns dense and soft and takes in the light like sumi ink on calligraphy paper. A three-button front and notched lapels keep the single-breasted black jacket plain, so the cloth is seen first. In Japan a black suit goes to weddings and to funerals. This one belongs as well to the ordinary working week.",
    made:"Mills in Bishu, in Aichi, weave and finish the cloth. Beaver finishing takes several rounds of raising and pressing, and few mills in Japan still practise it.",
    cloth:"Wool 90%, cashmere 10%. Beaver finish. Made in Japan." },
  'inside-lapel-jacket': { name:"Uchi Jacket", line:"A jacket composed inside and out",
    story:"Kersey-grey wool forms a double-breasted jacket with wide peak lapels and a long, relaxed line taken from 1980s tailoring. The inner lapel is finished like the outer one, so the front keeps its shape when the jacket is worn open. Japanese office workers divide people into uchi and soto, members of their own company and outsiders. Open among colleagues and buttoned before a client, the jacket presents the same finish to both.",
    made:"A Japanese workshop tailors it from Bishu wool. The tailor pads the inner lapel by hand with the same stitches as the outer one, which doubles the handwork on the front.",
    cloth:"Wool, 100%. Kersey grey. Made in Japan." },
  'open-placket-jacket': { name:"Kakushi Jacket", line:"A jacket that keeps its buttons hidden",
    story:"The kersey-grey wool wraps across the body like a double-breasted coat and keeps its buttons hidden, kakushi in Japanese, behind a fly front. Peak lapels and a long front give it the authority of a department head's suit from the bubble era. Because the placket is concealed, the cloth runs unbroken from collar to hem. With no button in view, the closed front leaves the hands at rest through a long meeting.",
    made:"A Japanese workshop tailors it from Bishu wool and sews the hidden placket as a second layer of cloth behind the front, a detail taken from formal overcoats.",
    cloth:"Wool, 100%. Kersey grey. Made in Japan." },
  'big-shoulder-shawl-collar-jacket': { name:"Kaicho Jacket", line:"A jacket built on a chairman's shoulder",
    story:"Camel wool and cashmere are shaped around a big, rounded shoulder, the shoulder of the Italian suits at the head of bubble-era boardroom tables. A shawl collar runs unbroken from neck to button, and the front falls soft from that shoulder. Japanese companies promoted by seniority, and a man could wait thirty years to sit at that table as kaicho, the company chairman. The jacket carries the shoulder of that seat.",
    made:"The wool and cashmere come from Bishu mills. The tailor builds the shoulder by hand from layers of soft padding, so it rounds over the end of the arm.",
    cloth:"Wool 90%, cashmere 10%. Camel. Made in Japan." },
  'cow-suede-harrington-jacket': { name:"Doyo Jacket", line:"A Harrington given a tailor's precision",
    story:"Matte black sheep suede is cut to the Harrington, which began in England in the 1930s as a golf jacket, an origin that suits a salaryman whose Saturday often ends on the course with a client. The jacket keeps its ease and adds a tailor's precision, with a small open collar and a five-button front. It is cut for the man in a suit from Monday to Friday who still needs a jacket on doyo, Saturday.",
    made:"Tanneries in Himeji, in Hyogo, where leather has been worked for more than a thousand years, finish the suede. Suede shows every mark, so one cutter lays out each jacket from a single batch of skins to keep the colour even.",
    cloth:"Sheep suede. Made in Japan." },
  'draped-construction-bowed-lapel-jacket': { name:"Ojigi Jacket", line:"A draped jacket bowing at the lapel",
    story:"A heavy, fluid rayon hangs from the shoulder, and the front is built without canvas so the cloth drapes over the chest. The 1980s salaryman wore an Italian suit as proof of success, and SOSHIOTSUKI remakes that suit in Japan, for a label that reads Made in Japan. The lapel curves away from the body in a slight ojigi, the bow a salaryman gives a client. The cloth holds the courtesy of that gesture.",
    made:"Japanese mills weave the rayon on slow shuttle looms, which give it its weight and fall. With no canvas inside, the tailor shapes the front with the iron and with hand stitches.",
    cloth:"Rayon, 100%. A heavy, fluid cloth, chosen so the jacket hangs from the shoulder. Made in Japan." },
  'oiled-leather-blouson': { name:"Aji Blouson", line:"Oiled leather that deepens with wear",
    story:"Oiled camel cow leather softens with wear and takes its wearer's shape. A belted waist and a square buckle give it the weight of a coat on a short, light body. SOSHIOTSUKI showed it at Pitti Uomo in Florence in January 2026. It is made to be kept for life, as a Showa company kept its staff. The camel darkens and creases settle at the elbow, a change Japanese leather lovers call aji, flavour.",
    made:"A tannery in Himeji, in Hyogo, works oils into the hide over several weeks. A Japanese workshop then cuts and sews the blouson.",
    cloth:"Oiled cow leather. Camel. Made in Japan." },
  'paraffin-cotton-coat': { name:"Tsuyu Coat", line:"A waxed trench for the rainy season",
    story:"Paraffin wax lets rain run off the cotton, and the cloth softens a little with each wearing. Double-breasted and belted, with cuff straps, the beige coat follows the trench, a form SOSHIOTSUKI sent down the Florence runway in January 2026. In Tokyo it is the coat for tsuyu, the June rainy season, and for the walk from the station when an umbrella covers half the body. Each rain leaves its trace on the cloth.",
    made:"Mills in Kurashiki, in Okayama, a centre of Japanese canvas weaving, weave the cotton. A workshop then waxes it by hand in small batches.",
    cloth:"Cotton 100%, paraffin-waxed. Made in Japan." },
  'open-placket-clasic-drill-coat': { name:"Tsukin Coat", line:"A black coat drawn from the commute",
    story:"Black wool drill falls below the knee in a long double-breasted line with wide peak lapels. SOSHIOTSUKI takes the silhouette from Tokyo businessmen on their way to work, one of its oldest references, and makes it softer through the shoulder and wider in the drape. During tsukin, the morning commute, it joins the other dark coats on the Shinjuku platform at eight. Its difference appears in motion, when the drape begins to move.",
    made:"Mills in Bishu weave the wool drill, a tight diagonal weave that stands up to rain and crowded trains. A Japanese workshop cuts and sews it.",
    cloth:"Wool drill, 100%. Black. Made in Japan." },
  'open-placet-cashmere-coat': { name:"Shusse Coat", line:"A long coat that marks a promotion",
    story:"This beige cashmere-blend coat falls below the knee in a double-breasted line, with peak lapels and flap pockets. In late-1980s Tokyo, a manager marked his shusse, the step up the company ladder, with a long cashmere coat over his soft suit. SOSHIOTSUKI cuts it warm and generous, with room for a suit jacket underneath. On the walk home after the promotion dinner, it carries the bearing of a new rank.",
    made:"Mills in Bishu weave the cashmere blend and brush it to lift the fibres for warmth. One Japanese tailoring workshop cuts and sews each coat.",
    cloth:"Cashmere 76%, acrylic 24%. Beige. Made in Japan." },
  'juzu-necklace': { name:"Juzu Necklace", line:"Prayer beads worn close to the collar",
    story:"Onyx and silver beads follow the form of juzu, Buddhist prayer beads. Many Japanese office workers keep a black tie and a string of juzu in a desk drawer for a colleague's funeral at short notice. SOSHIOTSUKI takes the beads out of the drawer and strings them close against the shirt collar. The onyx sits heavy at the collarbone, felt with each bow. A ritual object enters the everyday dress of the office.",
    made:"Juzu makers in Kyoto, a trade that has worked near the temples for centuries, string the necklace. They drill and polish each bead by hand before setting the silver.",
    cloth:"Onyx, silver. Made in Japan." },
};

PRODUCTS.forEach(p => { p.store = p.name; if (STORY[p.h] && STORY[p.h].name) p.name = STORY[p.h].name; });

const tileLine = l => l.split(/(?<=\.)\s/)[0];

const PRIZE = {
  lead:'On 3 September 2025 in Paris, Soshiotsuki won the LVMH Prize. Esquire called it the prize’s first big win for a pure tailoring designer.',
  jury:'Jonathan Anderson, Phoebe Philo, Sarah Burton, Nigo, Nicolas Ghesquière and Stella McCartney were among the jury.',
  quoteArnault:{ q:'He expressed emotion and know-how. There’s the way he constructs tailoring — it’s very detailed — the way he sources materials, and then there’s this creative spirit. It was quite unanimous.', who:'Delphine Arnault, founder of the LVMH Prize', src:'ESQ' },
  mission:{ q:'Soshiotsuki’s mission is to define a new Japanese clothing tradition to replace the kimono.', who:'Soshi Otsuki, to the jury', src:'ID' },
  after:{ q:'The LVMH Prize gave me confidence to know that the subtle nuances of Japanese sensibility, which I thought might be hard to communicate in the West, were truly appreciated.', who:'Soshi Otsuki', src:'TEN' },
  first:'Nine years earlier, two collections in, he had been shortlisted for the same prize. “In 2016, very few Japanese brands had been nominated, so I felt satisfied just being selected.” In 2025 he came back to win.',
  timeline:[
    ['2015', 'Soshiotsuki is founded in Tokyo.', 'JP'],
    ['2016', 'Shortlisted for the LVMH Prize, after two collections.', 'JP'],
    ['2019', 'Tokyo New Designer Award.', 'NUM'],
    ['2025', 'LVMH Prize, Paris, 3 September.', 'NUM'],
    ['2026', 'Guest designer at Pitti Uomo, Florence: his first runway show. January.', 'TEN'],
    ['2026', 'First show at Paris Fashion Week, Spring Summer 2027. June.', 'WWD'],
  ],
};
