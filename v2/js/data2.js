

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
  'drape-facing-shirt': { name:"Nekutai Shirt", line:"A shirt with the tie sewn in",
    story:"A strip of blue tie silk runs down the front of this saxe cotton shirt, where a tie would hang. You never have to knot it, and you can't leave it on the train home. Soshi Otsuki builds his collections from the uniform of the Japanese office, and here he sews its most familiar accessory, the nekutai, into the shirt. Button it to the collar for the meeting and open the top button once it ends.",
    made:"Mills in Nishiwaki, in the Banshu region of Hyogo, dye the cotton yarn before they weave it. The facing silk comes from Nishijin in Kyoto, where weavers have made obi for centuries and now weave neckties too.",
    cloth:"Cotton, 100%. Facing in silk tie fabric. Made in Japan." },
  'heavy-wale-dress-shirt': { name:"Chairo Shirt", line:"A dress shirt in wide-wale corduroy",
    story:"The shirt keeps the rules of a dress shirt, down to the pointed collar and buttoned cuffs. Otsuki makes it in wide-wale corduroy, a cloth you would expect on a weekend jacket. Its colour is chairo, Japanese for the brown of tea. Across the collection he takes pieces from the office wardrobe and cuts them in the cloths of a day at home. Tuck it under a jacket on Monday, or wear it open over a T-shirt on Sunday.",
    made:"Mills in Fukude, in Shizuoka, weave most of Japan's corduroy. Workshops there cut the pile of each wale with fine blades, the step that raises the ridges.",
    cloth:"Cotton corduroy, 100%, a heavy wale. Made in Japan." },
  'bias-cut-heavy-wale-dress-shirt': { name:"Naname Shirt", line:"A corduroy dress shirt cut on the bias",
    story:"Otsuki takes the wide-wale corduroy of the Chairo Shirt, in off-white, and cuts it naname, on the diagonal. The ridges cross your chest at forty-five degrees, and the cloth, stiff when cut straight, drapes on the bias. It keeps the pointed collar and pale buttons of a dress shirt and feels like one you have owned for years. From across the office it reads as a plain dress shirt; up close the ridges run on a slant.",
    made:"A Japanese workshop cuts and sews it from Fukude corduroy. The cutter lays each panel at an angle and matches the wale at every seam, which takes more cloth than a straight cut.",
    cloth:"Cotton corduroy, 100%, cut on the bias. Made in Japan." },
  'regular-collar-shirt': { name:"Teiji Shirt", line:"A white office shirt with a tonal stripe",
    story:"In Japan the white dress shirt has its own word, waishatsu, from the English \"white shirt\", and a salaryman wears one five days a week. Otsuki keeps to the original with a regular collar and a tonal stripe you see only up close. A soft shoulder lets it move under a jacket, and Otsuki fits the collection's tailoring over it. The collar still sits flat when teiji, the official end of the working day, has come and gone.",
    made:"Mills in the Banshu region of Hyogo weave the stripe from dyed yarn, so the stripe is part of the cloth. A Japanese workshop sews it with single-needle seams, which lie flatter than the twin-needle seams on most shirts.",
    cloth:"Cotton, 100%. White with a tonal stripe. Made in Japan." },
  'reversible-sewing-wool-shirt': { name:"Ura-Omote Shirt", line:"A wool shirt you can wear either side out",
    story:"Otsuki closes every seam of this black wool shirt and finishes both faces, so you choose which one people see. A soft collar and room through the shoulder let it wear like a light jacket. Japanese calls an honest colleague ura-omote no nai hito, a person with no back and front, who is the same at the desk as at home. This shirt has two good sides, which is the next best thing.",
    made:"The wool comes from Bishu, in Aichi, Japan's main wool-weaving region. A Japanese workshop sews each seam twice and binds it by hand, so both sides show a clean edge.",
    cloth:"Wool, 100%. Made in Japan." },
  'kimono-lining-shirt': { name:"Uramasari Shirt", line:"Cut from deadstock kimono lining silk",
    story:"In the Edo period, the shogunate's sumptuary laws barred merchants from dressing above their rank, so the rich ones hid their best silk in the linings of their haori and kimono. They called the habit uramasari, \"the lining wins\". Otsuki cuts this shirt from deadstock lining silk and turns that hidden layer outward. In grey, the pattern reads as texture from a desk away. A point collar and a long, straight body follow the Western dress shirt, so it passes the office dress code the Edo merchant had to dodge.",
    made:"Japanese mills wove this silk to line kimono, and the rolls never reached a tailor. The studio buys them from wholesalers in Kyoto, so each pattern lasts as long as its roll.",
    cloth:"Silk, 100%. Deadstock kimono lining silk. Made in Japan." },
  'heavy-wale-high-west-double-pocket-pants': { name:"Koruten Trousers", line:"High-waisted wide-leg trousers in corduroy",
    story:"The trousers sit high on the waist and fall wide to the shoe, in the cut men wore to Tokyo offices in the late 1980s. A second front pocket and a long, unbroken line keep the volume tidy. With the Koruten Jacket they make a suit in corduroy, which Japanese has long called koruten. The pair puts the office uniform in a weekend cloth. With a white shirt and the Chokki Gilet, they are ready for a Saturday at the department store.",
    made:"Mills in Fukude, in Shizuoka, weave and pile-cut the corduroy. A Japanese workshop sews the trousers and shapes the waistband by hand so the high rise sits flat.",
    cloth:"Cotton corduroy, 100%. Made in Japan." },
  'double-inverted-tuck-trousers': { name:"Baburu Trousers", line:"Two deep pleats on each side",
    story:"Two inverted tucks on each side give these kersey-grey wool trousers the deep pleats salarymen wore in the baburu, the bubble economy of the late 1980s. The tucks open as you walk and close when you stop, so the cloth falls straight from hip to shoe. A high rise holds all that volume at the waist. They share their grey with the Uchi and Kakushi jackets, and the pleats have lasted longer than the boom did.",
    made:"Mills in Bishu, in Aichi, weave the wool. A tailor in Japan sets each tuck by hand and presses it in, so the pleats hold after a day at a desk.",
    cloth:"Wool, 100%. Kersey grey. Made in Japan." },
  'knit-gilet': { name:"Chokki Gilet", line:"The suit waistcoat, knitted in wool",
    story:"Otsuki takes the waistcoat from the three-piece suit and knits it in beige wool, so it moves with you. A deep V neck and a short body keep the line of tailoring, and it sits as well under a jacket as over a white shirt. The Sebiro Vest is the woven version for the office, and this is the one for a day off. Your grandfather would recognise it across a room, and he would still call it a chokki.",
    made:"Knitters in Yamagata, a prefecture of knitting mills, make it on older, slow flat-bed machines. They then link the neck and armholes by hand.",
    cloth:"Wool, 100%. Made in Japan." },
  'cable-handmade-knit-pullover': { name:"Teami Pullover", line:"A cable pullover from one named knitter",
    story:"A knitter builds the cables of this heavy red wool pullover stitch by stitch, in the hand knitting Japanese calls teami. In Showa Japan a hand-knitted sweater was a gift, made at home by someone who had measured you without asking. This one comes from a knitter the studio can name. A round neck and a relaxed body let it go over a shirt and tie when the office is cold, or under a coat on the way in.",
    made:"One knitter in Japan makes each pullover by hand, which takes several days. The studio keeps a record of who made which one.",
    cloth:"Wool, 100%. Hand-knitted. Made in Japan." },
  'last-button-vest': { name:"Sebiro Vest", line:"A tailored waistcoat in grey wool dobby",
    story:"Otsuki cuts this vest in grey wool dobby, with a small woven check that shows at arm's length. It follows the waistcoat of the salaryman's sebiro, the Japanese business suit, down to its pointed front hem. Some trace the word to Savile Row. It keeps the rule credited to Edward VII, so you leave the last button open. Wear it under a jacket, or alone over a shirt when the office turns up the heating and the jackets go on the backs of chairs.",
    made:"Mills in Bishu, in Aichi, weave the check on dobby looms, which lift single threads to draw the pattern. They still run this slow weave on older machines.",
    cloth:"Wool dobby, 100%. Made in Japan." },
  'heavy-wale-single-breasted-jacket': { name:"Koruten Jacket", line:"A suit jacket in brown corduroy",
    story:"Wide-wale brown corduroy, koruten in Japanese, belongs to the countryside and the weekend. Otsuki gives it the shape of an office jacket, with notched lapels and a three-button front. With the Koruten Trousers it makes a full suit for the office, in the cloth of a country walk. On its own it goes over a knit, and the ridges hide the creases a train seat leaves in a smoother cloth.",
    made:"The corduroy comes from Fukude, in Shizuoka. A Japanese tailoring workshop shapes the front with a steam iron, then sets the lapels by hand.",
    cloth:"Cotton corduroy, 100%. Made in Japan." },
  'wool-beaver-single-breasted-jacket': { name:"Sumi Jacket", line:"Black wool and cashmere, pressed to a matte finish",
    story:"The wool and cashmere cloth has a beaver finish. The mill raises its surface, then presses it flat until it turns dense and soft and takes in the light like sumi ink on calligraphy paper. The black single-breasted jacket keeps to a three-button front and notched lapels, so you notice the cloth first. In Japan a black suit goes to weddings and to funerals, and this one also goes to work on an ordinary Tuesday.",
    made:"Mills in Bishu, in Aichi, weave and finish the cloth. Beaver finishing takes several rounds of raising and pressing, and few mills in Japan still do it.",
    cloth:"Wool 90%, cashmere 10%. Beaver finish. Made in Japan." },
  'inside-lapel-jacket': { name:"Uchi Jacket", line:"A double-breasted jacket with a finished inner lapel",
    story:"The double-breasted kersey-grey jacket opens onto wide peak lapels and a long, relaxed line taken from 1980s tailoring. Otsuki finishes the inner lapel like the outer one, so the front keeps its shape when you wear it open. Japanese office workers sort people into uchi and soto, your own company and outsiders. Wear it open among colleagues, and button it for the client.",
    made:"A Japanese workshop tailors it from Bishu wool. The tailor pads the inner lapel by hand with the same stitches as the outer one, which doubles the handwork on the front.",
    cloth:"Wool, 100%. Kersey grey. Made in Japan." },
  'open-placket-jacket': { name:"Kakushi Jacket", line:"A double-breasted jacket with hidden buttons",
    story:"The kersey-grey jacket wraps across the body like a double-breasted coat and keeps its buttons hidden, kakushi in Japanese, behind a fly front. Peak lapels and a long front give it the authority of a bubble-era department head's suit, and the hidden placket lets the cloth run unbroken from collar to hem. In a long meeting, it gives your hands nothing to fiddle with.",
    made:"A Japanese workshop tailors it from Bishu wool and sews the hidden placket as a second layer of cloth behind the front, a detail taken from formal overcoats.",
    cloth:"Wool, 100%. Kersey grey. Made in Japan." },
  'big-shoulder-shawl-collar-jacket': { name:"Kaicho Jacket", line:"A big, rounded shoulder and a shawl collar",
    story:"Otsuki builds this camel wool and cashmere jacket around a big, rounded shoulder, the shoulder of the Italian suits at the head of bubble-era boardroom tables. A shawl collar runs unbroken from neck to button, and the front falls soft from that shoulder. Japanese companies promoted by seniority, and a man could wait thirty years to sit at that table as kaicho, the company chairman. The jacket lends you his shoulders in the meantime.",
    made:"The wool and cashmere come from Bishu mills. The tailor builds the shoulder by hand from layers of soft padding, so it rounds over the end of the arm.",
    cloth:"Wool 90%, cashmere 10%. Camel. Made in Japan." },
  'cow-suede-harrington-jacket': { name:"Doyo Jacket", line:"A suede Harrington for Saturday",
    story:"The Harrington began in England in the 1930s as a golf jacket, a fitting start for a salaryman whose Saturday often ends on the course with a client. Otsuki keeps its ease and adds a tailor's precision, with a small open collar and a five-button front. He cuts it in matte black sheep suede for the man who wears a suit from Monday to Friday and still needs a jacket on doyo, Saturday.",
    made:"Tanneries in Himeji, in Hyogo, where people have worked leather for more than a thousand years, finish the suede. Suede shows every mark, so one cutter lays out each jacket from a single batch of skins to keep the colour even.",
    cloth:"Sheep suede. Made in Japan." },
  'draped-construction-bowed-lapel-jacket': { name:"Ojigi Jacket", line:"A draped jacket with a bowed lapel",
    story:"The 1980s salaryman wore an Italian suit as proof of success, and Otsuki remakes that suit in Japan, for a label that reads Made in Japan. He cuts it from a heavy, fluid rayon that hangs from the shoulder, and builds the front without canvas so the cloth drapes over the chest. The lapel curves away from the body in a slight ojigi, the bow a salaryman gives a client.",
    made:"Japanese mills weave the rayon on slow shuttle looms, which give it its weight and fall. With no canvas inside, the tailor shapes the front with the iron and hand stitches.",
    cloth:"Rayon, 100%. A heavy, fluid cloth, chosen so the jacket hangs from the shoulder. Made in Japan." },
  'oiled-leather-blouson': { name:"Aji Blouson", line:"Oiled leather that darkens as you wear it",
    story:"Oiled cow leather in camel softens with wear and takes the shape of the person inside it. A belted waist and a square buckle close it with the weight of a coat, while the short body keeps it light. Otsuki sent it out in his Florence show at Pitti Uomo in January 2026. Keep it the way a Showa company kept its staff, for life. The camel darkens and the creases settle where your arms bend, and Japanese leather lovers call that change aji, flavour.",
    made:"A tannery in Himeji, in Hyogo, works oils into the hide over several weeks. A Japanese workshop then cuts and sews the blouson.",
    cloth:"Oiled cow leather. Camel. Made in Japan." },
  'paraffin-cotton-coat': { name:"Tsuyu Coat", line:"A waxed cotton trench for the rainy season",
    story:"Paraffin wax lets rain run off the cotton, and the cloth softens a little each time you wear it. Double-breasted and belted, with straps at the cuffs, the beige coat follows the trench. Otsuki sent trench coats down the runway in Florence in January 2026. In Tokyo it is the coat for tsuyu, the June rainy season, and the walk from the station when an umbrella covers only half of you.",
    made:"Mills in Kurashiki, in Okayama, a centre of Japanese canvas weaving, weave the cotton. A workshop then waxes it by hand in small batches.",
    cloth:"Cotton 100%, paraffin-waxed. Made in Japan." },
  'open-placket-clasic-drill-coat': { name:"Tsukin Coat", line:"A long black coat for the morning train",
    story:"Cut in black wool drill, the coat falls below the knee in a long double-breasted line with wide peak lapels. Otsuki takes its silhouette from Tokyo businessmen on their way to work, one of his oldest references, and makes it softer through the shoulder and wider in the drape. In the tsukin, the morning commute, it blends in with the other dark coats on the Shinjuku platform at eight, until you walk and the drape moves.",
    made:"Mills in Bishu weave the wool drill, a tight diagonal weave that stands up to rain and crowded trains. A Japanese workshop cuts and sews it.",
    cloth:"Wool drill, 100%. Black. Made in Japan." },
  'open-placet-cashmere-coat': { name:"Shusse Coat", line:"A long, double-breasted coat in a cashmere blend",
    story:"In late-1980s Tokyo, a manager marked his shusse, the step up the company ladder, with a long cashmere coat over his soft suit. This beige coat falls below the knee in a double-breasted line with peak lapels and flap pockets. Otsuki cuts it warm and generous, with room for a suit jacket underneath, for the walk home after the promotion dinner, when the Ginza taxis are all taken.",
    made:"Mills in Bishu weave the cashmere blend and brush it to lift the fibres for warmth. One Japanese tailoring workshop cuts and sews each coat.",
    cloth:"Cashmere 76%, acrylic 24%. Beige. Made in Japan." },
  'juzu-necklace': { name:"Juzu Necklace", line:"A necklace of onyx and silver beads",
    story:"Onyx and silver beads follow the form of juzu, Buddhist prayer beads. Many Japanese office workers keep a black tie and a string of juzu in a desk drawer for a colleague's funeral at short notice. Otsuki takes the beads out of the drawer and strings them to sit close against the shirt collar. The onyx sits heavy at the collarbone, and you feel it each time you bow.",
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
