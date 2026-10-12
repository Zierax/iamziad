/* ============================================================
   data.js — all site content, EN + AR.
   Facts here are taken from verified records only. Nothing
   that reads as a crime claim, and no unverifiable number.
   ============================================================ */

const PROFILE = {
  name: 'Ziad Salah',
  nameAr: 'زياد صلاح',
  alias: 'Zierax',
  age: 18,
  role: 'systems guy who lives in Giza',
  roleAr: 'شخص بيعمل شغل systems في الجيزة',
  location: 'Giza, Egypt',
  locationAr: 'الجيزة، مصر',
  portrait: 'ziad.jpg'
};

/* ---------------- Internet map ---------------- */

const MAP_NODES = [
  { id: 'github',    label: 'GitHub',     handle: 'Zierax',        x: 0.50, y: 0.44, weight: 10, kind: 'code',
    url: 'https://github.com/Zierax', note: '131 repos', noteAr: '١٣١ repo' },
  { id: 'div36',     label: 'Division-36', handle: '@Division-36', x: 0.26, y: 0.62, weight: 6,  kind: 'code',
    url: 'https://github.com/Division-36', note: 'my own lab', noteAr: 'معمل أنا عامله' },
  { id: 'h1',        label: 'HackerOne',  handle: '@0xzyo',        x: 0.72, y: 0.26, weight: 7,  kind: 'sec',
    url: 'https://hackerone.com/0xzyo', note: 'top 90 VDP', noteAr: 'أعلى ٩٠ في VDP' },
  { id: 'x',         label: 'X',          handle: '@Zierax_x',     x: 0.83, y: 0.63, weight: 6,  kind: 'social',
    url: 'https://x.com/Zierax_x' },
  { id: 'insta',     label: 'Instagram',  handle: '@z14d.d',       x: 0.14, y: 0.24, weight: 5,  kind: 'social',
    url: 'https://instagram.com/z14d.d' },
  { id: 'linkedin',  label: 'LinkedIn',   handle: '/in/z14d',      x: 0.63, y: 0.80, weight: 5,  kind: 'pro',
    url: 'https://linkedin.com/in/z14d' },
  { id: 'medium',    label: 'Medium',     handle: '@0xzyo',        x: 0.36, y: 0.16, weight: 3,  kind: 'pro',
    url: 'https://medium.com/@0xzyo' },
  { id: 'thm',       label: 'TryHackMe',  handle: '/p/Zierax',     x: 0.08, y: 0.80, weight: 4,  kind: 'sec',
    url: 'https://tryhackme.com/p/Zierax' },
  { id: 'scholar',   label: 'Scholar',    handle: '7BeAeLcAAAAJ',  x: 0.90, y: 0.44, weight: 4,  kind: 'pro',
    url: 'https://scholar.google.com/citations?hl=en&user=7BeAeLcAAAAJ', note: 'preprints', noteAr: 'preprints' },
  { id: 'orcid',     label: 'ORCID',      handle: '0009-0002-6813-2416', x: 0.45, y: 0.92, weight: 3, kind: 'pro',
    url: 'https://orcid.org/0009-0002-6813-2416' },
  { id: 'leetcode',  label: 'LeetCode',   handle: '/u/Zierax',     x: 0.18, y: 0.46, weight: 3,  kind: 'code',
    url: 'https://leetcode.com/u/Zierax' },
  { id: 'hn',        label: 'Hacker News', handle: 'Zierax',      x: 0.78, y: 0.94, weight: 3,  kind: 'code',
    url: 'https://hn.algolia.com/?query=Zierax' },
  { id: 'portfolio', label: 'Portfolio',  handle: 'the site',      x: 0.56, y: 0.62, weight: 5,  kind: 'me',
    url: 'https://ziad-portfolio-six.vercel.app', note: 'the real one', noteAr: 'الموقع الأصلي' }
];

const MAP_KINDS = {
  me:    { color: '--neon',    label: 'me',     labelAr: 'أنا' },
  code:  { color: '--cyan',    label: 'code',   labelAr: 'كود' },
  sec:   { color: '--mag',     label: 'security', labelAr: 'أمن' },
  pro:   { color: '--amber',   label: 'work',   labelAr: 'شغل' },
  social:{ color: '--fg-faint', label: 'social', labelAr: 'سوشيال' }
};

/* ---------------- Now ---------------- */

const NOW = {
  stamp: 'October 2026',
  stampAr: 'أكتوبر ٢٠٢٦',
  cells: [
    { h: 'Where', hAr: 'فين', body: 'A room in Giza. Same city I grew up in, same Wi-Fi that taught me everything.', bodyAr: 'أوضة في الجيزة. نفس المدينة اللي اتعلمت فيها كل حاجة.' },
    { h: 'Building', hAr: 'بنبني', body: 'Small things that actually run. Sandboxes, classifiers, tools I use myself.', bodyAr: 'حاجات صغيرة بتشتغل فعلاً. ساند بوكس، كلاسيفايرز، وأدوات أنا نفسه بستخدمها.' },
    { h: 'Writing', hAr: 'بكتب', body: 'Two novels. Both Arabic. The sequel is the one keeping me up.', bodyAr: 'روايتين. الاتنين عربي. التانية هي اللي بتخليني صاحي.' },
    { h: 'Lifting', hAr: 'رفع حديد', body: 'Deadlifts most mornings. The bar does not care about my sleep schedule.', bodyAr: 'دِدليفट معظم الصبح. البار مش فارق معاه جدول نومي.' },
    { h: 'Learning', hAr: 'بتعلم', body: 'Something new every few weeks. Currently: proofs I do not understand yet.', bodyAr: 'حاجة جديدة كل أسبوعين. دلوقتي: براهين لسه مش فاهمها.' },
    { h: 'Sleep', hAr: 'النوم', body: 'It happens. It is not a schedule, it is a negotiation I keep losing.', bodyAr: 'بيحصل. مش جدول، ده تفاوض خدته فيه كل مرة.' }
  ]
};

/* ---------------- Projects ---------------- */

const PROJECTS = [
  {
    id: 'i-like-u',
    name: 'I-Like-U',
    nameAr: 'I-Like-U',
    kicker: 'a game boy that says something for me',
    kickerAr: 'جيم بوي بيقول حاجة بدلي',
    blurb: 'I can debug 3,000 lines of async at 3 AM without sweating, but saying "I like you" out loud is a complete kernel panic. So I built a whole fake 1989 handheld to say it instead. Procedural chiptune, scanlines, four different confession personalities, and a hesitation engine that types something awkward, panics, deletes it, and says the honest thing anyway.',
    blurbAr: 'أقدر أعمل debug لـ ٣٠٠٠ سطر كود الساعة ٣ الفجر من غير ما أتعرق، بس أقول "أنا بحبك" بصوت عالي؟ kernel panic كامل. عشان كده عملت جيم بوي وهمية من ١٩٨٩ تقولها بدلي. موسيقى متولّدة برمجياً، شاشة بخطوط، وأربع شخصيات مختلفة للاعتراف، وكمان محرك تردد يكتب حاجة محرجة، يفزع، يمسحها، ويقول الحاجة الصح في الآخر.',
    tags: ['JavaScript', 'React', 'Web Audio', 'MIT'],
    live: 'https://i-like-u-kappa.vercel.app',
    source: 'https://github.com/Zierax/I-Like-U',
    facts: [
      { v: 'MIT', l: 'licensed' },
      { v: '0 KB', l: 'audio files' },
      { v: '4', l: 'companions' }
    ],
    note: 'The honest answer to a question I was too nervous to type.',
    noteAr: 'الإجابة الصادقة لسؤال أنا كنت خايف أكتبه.'
  },
  {
    id: 'admitgpt',
    name: 'AdmitGPT',
    nameAr: 'AdmitGPT',
    kicker: 'from student to students',
    kickerAr: 'من طالب لطلبة',
    blurb: 'University admissions runs on fear and vague percentages. So I wrote the actual model: every weight, every cap, every limitation is visible in a transparency tab, and it all runs in your browser. No accounts, no data collection. If your number is wrong you can open the formula and see exactly why.',
    blurbAr: 'قبول الجامعات شغال على الخوف ونسب مبهمة. عشان كده كتبت النموذج نفسه: كل وزن وكل حد وكل limitation باين في صفحة الشفافية، وكله بيشتغل في المتصفح بتاعك. من غير حسابات ومن غير ما ناخد أي بيانات. لو الرقم بتاعك غلط، افتح المعادلة وشوف ليه بالظبط.',
    tags: ['TypeScript', 'Next.js', '5.2 MB model', 'local compute'],
    live: 'https://admitgpt.pages.dev/',
    source: 'https://github.com/Zierax/AdmitGPT',
    facts: [
      { v: '1,122', l: 'profiles' },
      { v: '100%', l: 'local' },
      { v: '0', l: 'tracking' }
    ],
    note: 'Built because I went through it and did not like the guessing.',
    noteAr: 'اتبنى عشان أنا عديت فيها ومكانش عاجبني التخمين.'
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    nameAr: 'البورتفوليو',
    kicker: 'the professional one, with the technical stuff',
    kickerAr: 'الاحترافي، اللي فيه الشغل التقني',
    blurb: 'This site is the human behind the code. If you want the CV, the systems, the papers and the receipts, that is the other one.',
    blurbAr: 'الموقع ده الإنسان ورا الكود. لو عايز الـ CV والأنظمة والأوراق والإثباتات، التاني هو ده.',
    tags: ['TypeScript', 'live'],
    live: 'https://ziad-portfolio-six.vercel.app',
    source: 'https://github.com/Zierax/Ziad-Portfolio',
    facts: [{ v: 'live', l: 'always' }],
    note: 'This site says "don\'t judge my career from here". That was not an accident.',
    noteAr: 'الموقع ده بيقول "ما تحكمش على شغلي من هنا". دي كانت مقصودة.'
  }
];

/* ---------------- Q&A ---------------- */

const QA = [
  { q: 'So are you a hacker or what?', qAr: 'يعني انت haccker ولا إيه؟',
    a: 'I report vulnerabilities for a living and I pay my rent that way. The dramatic version of this story is on the internet, the boring accurate version is: read code carefully, write it down, tell the people who own it.',
    aAr: 'أنا بلّغ عن ثغرات عشان أ-living، وده اللي بياكل عيشي. النسخة الدراماتيكية من القصة دي متشيرة على النت، والنسخة المملة والدقيقة هي: اقرأ كود بتركيز، اكتبه، وقوله لللي مالكه.' },

  { q: 'Why is there a personal site and not just a CV?', qAr: 'ليه في موقع شخصي أصلاً ومش بس CV؟',
    a: 'Because every professional page I ever saw is written by someone trying to impress a recruiter. I wanted one place where the person writing it is allowed to be a person. Judge the career on the portfolio, this is just what is left.',
    aAr: 'عشان كل صفحة احترافية أنا شفتها كاتبها حد بيحاول يبهر recruiter. أنا عايز مكان واحد الشخص اللي كاتبه مسموحله يكون شخص. قيّم الشغل على البورتفوليو، ده بس اللي فاضل.' },

  { q: 'Do you actually go to school?', qAr: 'انت فعلاً بتروح مدرسة؟',
    a: 'I finished secondary. I do not sit in classrooms. Nobody took attendance and nobody wrote a single line about me, which meant I got to build things instead of pretending to care.',
    aAr: 'خلصت الثانوي. مش بقعد في فصول. محدش كان بيحضر ولا محدش كتب عني سطر واحد، ف ده خلاني أبني حاجات بدل ما أعمل تمثيل إنّي مهتم.' },

  { q: 'What is the I-Like-U story? Did it work?', qAr: 'قصة I-Like-U كانت إيه؟ اشتغلت؟',
    a: 'I built an entire 8-bit handheld console, added chiptune synthesis, four confession modes and a character who gets nervous, so I could avoid sending three words of text. She said no. So now it is an open source project with a MIT license and strangers sending it to other people. The rejection turned into the nicest thing I ever shipped.',
    aAr: 'بنيت جيم بوي ٨-بت كاملة، وحطيت موسيقى متولّدة، وأربع modes للاعتراف وشخصية بتتلخبط، عشان أتجنب مبعتش ٣ كلمات. قالت لأ. فبقى دلوقتي مشروع open source برخصة MIT وناس بتبعته لناس تانية. الرفض بقى أحلى حاجة أنا/sklearnتها.' },

  { q: 'Why build AdmitGPT when admissions is not your thing?', qAr: 'ليه بنيت AdmitGPT أصلاً والقبول مش مجالك؟',
    a: 'Because I went through it, got told "strong candidate" and never once got told why. Everyone sells the answer and hides the arithmetic. So I published the arithmetic. Every weight, every cap, every place it is wrong. It runs in your browser and it never phones home.',
    aAr: 'عشان أنا عديت فيها، وقولولي "مرشّح قوي" ومحدش قاللي ليه. الكل بيبيع الإجابة ويخبّي الحساب. ف أنا نشرت الحساب. كل وزن وكل حد وكل مكان غلط فيه. بيشتغل في متصفحك ومش بيبعت لحد.' },

  { q: 'What do you do all day?', qAr: 'بتعمل إيه طول اليوم؟',
    a: 'Read something, build something, lift something, repeat until it works. The order changes. The days where all three happen are the good ones.',
    aAr: 'أقرأ حاجة، أبني حاجة، أرفع حاجة، وأعيد لحد ما تشتغل. الترتيب بيتغير. الأيام اللي التلاتة بيحصلوا فيها مع بعض هي الأيام الكويسة.' },

  { q: 'Are you a morning person?', qAr: 'انت من ناس الصبح؟',
    a: 'The opposite. My day is structurally broken and I sleep whenever I want to stop being conscious for a while. This has been a problem for years and I have accepted it as a lifestyle.',
    aAr: 'العكس تماماً. يومي مكسور من أساسه وبنام وقت ما عايز أوقف الوعي شوية. ده مشكلة من سنين وأنا قبلتها كـ lifestyle.' },

  { q: 'What is the thing you are worst at?', qAr: 'إيه أسوأ حاجة فيك؟',
    a: 'Saying things out loud in order. I can write a 40-page argument and then send a one-word reply. Every person who has talked to me for more than ten minutes already figured this out.',
    aAr: 'إن أقول الحاجات بصوت عالي وبترتيب. أقدر أكتب محاضرة ٤٠ صفحة وبعدين أبعت رد كلمة واحدة. أي حد قعد معايا أكتر من ١٠ دقايق فهم ده.' },

  { q: 'Do you like being called a "genius" or a "wunderkind"?', qAr: 'بتحب حد يسمّيك عبقري أو child prodigy؟',
    a: 'Not really. Those words mean someone stopped checking. I would rather be the person whose claims you can open and verify, because in about six months the first version of that is the only thing still standing anyway.',
    aAr: 'مش بصراحة. الكلمتين دول معناه إن حد وقف يتأكد. أنا أكون الشخص اللي تقدر تفتح ادعاءاته وتتحقق منه أحسن، لإن بعد ٦ شهور النسخة الأولى دي هي اللي هتفضل واقفة.' },

  { q: 'Why so many tabs?', qAr: 'ليه TABs كتير أوي؟',
    a: 'Because I lose the one I was using. And because being able to name fourteen things at once makes the work feel like it has a shape. It does not, but the tabs help.',
    aAr: 'عشان بضيّع اللي بستخدمه. ولأن قدرتك تسمّي ١٤ حاجة في نفس الوقت بتدي للشغل شكل. هو مش فعلاً بياخد شكل، بس الـ tabs بيساعدوا.' },

  { q: 'What is the weirdest thing in your repo?', qAr: 'أغرب حاجة في الـ repo بتاعك؟',
    a: 'There is a scanner that checks every Grafana CVE I could collect into one version-aware script. It has more stars than most of my actual research. I am choosing to be happy about it.',
    aAr: 'في scanner بيجمّع كل ثغرات Grafana اللي قدرت أجمعها في سكريبت واحد فاهم رقم النسخة. عدد النجوم بتاعه أكبر من معظم البحث بتاعي. أنا مختار أفرح بيه.' },

  { q: 'Do you hate people?', qAr: 'انت بتكره الناس؟',
    a: 'No. I get tired of lazy thinking, which looks a lot like stupidity from the outside, but those are different things. Be nice to me, think before you speak, and we will get along fine.',
    aAr: 'لأ. أنا بتعب من التفكير الكسول، وده شكله من برّه زي الغباء، بس هما حاجتين مختلفتين. كن لطيف معايا، وفكّر قبل ما تتكلم، وهنتعامل كويس.' },

  { q: 'What was the first thing you ever built?', qAr: 'أول حاجة بنيتها كانت إيه؟',
    a: 'Small scripts to make my own machine behave. Then scanners to make other machines behave. The direction never really changed, only the resolution.',
    aAr: 'سكريبتات صغيرة تخلي آلاتي تتصرف صح. بعدين scanners يخلي آلات ناس تانية تتصرف صح. الاتجاه نفسه ما اتغيرش، بس الدقة زادت.' },

  { q: 'You said "deterministic systems engineer" and then apologised for it. Why?', qAr: 'قلت "مهندس أنظمة حتمي" وبعدين اعتذرت. ليه؟',
    a: 'Because a title is a compression and I used one that compressed too much. It sounded like I claimed to know the future. I do not. The honest title is that I like building things that behave the same way twice, and I am still working on what that is called.',
    aAr: 'عشان اللقب ضغط، وأنا استخدمت لقب بيضغط أوي. حسم كأني عارف المستقبل. أنا لأ. اللقب الصادق إني بحب أبني حاجات بتدي نفس النتيجة مرتين نفس النتيجة، وأنا لسه شغال على اسمها إيه.' },

  { q: 'If someone gave you a month with no internet, what happens?', qAr: 'لو حد اداني شهر من غير نت، هيحصل إيه؟',
    a: 'I write. It is the one output that does not require a single network round trip. I would finish something, resent it, and then have nothing to complain about.',
    aAr: 'هبكتب. دي المخرج الوحيد اللي مش محتاج شبكة خالص. هخلص حاجة، أزهق منها، وبعدها ميبقاش ليا أي حاجة أ complain عليها.' },

  { q: 'What are you actually proud of?', qAr: 'انت فعلاً فخور بإيه؟',
    a: 'Not the trophies. I am proud that when I say something is broken, there is usually a file, a hash, or a number that proves it, and when someone argues I can just show them instead of typing.',
    aAr: 'مش الكؤوس. أنا فخور إن لما بقول إن فيه حاجة باظة، غالباً بيكون فيه ملف أو hash أو رقم بيثبتها، ولما حد يعارضني أقدر أظهرله بدل ما أكتب.' },

  { q: 'What is the plan?', qAr: 'الخطة إيه؟',
    a: 'Finish the second novel. Keep the systems small and working instead of big and impressive. Learn the proofs I keep pretending I understand. Lift a bit more than I should.',
    aAr: 'أخلص الرواية التانية. أخلي الأنظمة صغيرة وشغالة بدل كبيرة ومبهرة. أتعلم البراهين اللي بأفترض طول الوقت إني فاهمها. أرفع أكتر من اللازم.' },

  { q: 'Why is there a countdown on this page?', qAr: 'ليه في countdown في الصفحة دي؟',
    a: 'Because there is a date, and the title of what happens on that date is locked. It is not a secret, it is a puzzle. Read the page, use what you find, and if you get it you are as informed as I am.',
    aAr: 'عشان في تاريخ، وعنوان اللي هيحصل في التاريخ ده مقفول. مش سر، ده ألغاز. اقرأ الصفحة، استخدم اللي فيها، ولو كسرته هتبقى عارف زيي بالظبط.' }
];

/* ---------------- Values ---------------- */

const VALUES = [
  { h: 'God', hAr: 'الله',
    b: 'Not because I grew up in Egypt, but because a creator as a first principle is the only framing I never managed to argue my way out of.',
    bAr: 'مش لأني اتربيت في مصر، لكن لأن خالق كـ"مبدأ أول" هو الإطار الوحيد اللي مقدرتش أخرج منه بالجدال.' },
  { h: 'Carbon first', hAr: 'الكربون الأول',
    b: 'Anything made of carbon that can feel pain outranks anything else on my list, including my own deadlines. Not a cute rule, just an ordering I try to keep.',
    bAr: 'أي حاجة من الكربون تقدر تحس بألم بتسبق أي حاجة تانية في قائمتي، حتى الـ deadlines بتاعتي. مش قاعدة لطيفة، دي ترتيب بحاول ألتزم بيه.' },
  { h: 'The dead end', hAr: 'الطريق المسدود',
    b: 'A dead end is not a failure, it is the exact point where the system has run out of room and the only way forward is changing the rules. Most people stop one street earlier.',
    bAr: 'الطريق المسدود مش فشل، ده النقطة بالظبط اللي النظام خلص فيه مكان والطريقة الوحيدة للقدام إنك تغيّر القواعد. معظم الناس بيقفوا شارع قبلها.' }
];

/* ---------------- Quotes (trimmed set) ---------------- */

const QUOTES = [
  { g: 'Determinism & Systems', gAr: 'المنطق الحتمي والأنظمة', items: [
    { t: 'An error does not become a flaw until you refuse to patch it.', a: 'Systems Axiom',
      tAr: 'الخطأ مش بيبقى عيب لحد ما ترفض تصلحه.', aAr: 'Systems Axiom' },
    { t: 'We are all running on inherited operating systems, trying to compile clean logic with corrupted data.', a: 'Ziad',
      tAr: 'كلنا شغالين على أنظمة تشغيل موروثة، بنحاول نجمّع منطق نظيف ببيانات فاسدة.', aAr: 'زياد' },
    { t: 'Nature does not balance books with mercy. It balances them with arithmetic.', a: 'Ziad',
      tAr: 'الطبيعة مش بتوازن دفاترها بالرحمة، بتوازنها بالحساب.', aAr: 'زياد' },
    { t: 'If a system cannot handle the truth of its own logs, it deserves to crash.', a: 'Systems Axiom',
      tAr: 'لو نظام مش قادر يستحمل حقيقة سجلاته، فهو يستحق ينهار.', aAr: 'Systems Axiom' },
    { t: 'Optimization is the quietest form of violence. You cut away parts of yourself to fit a narrower box.', a: 'Ziad',
      tAr: 'التحسين أهدأ أشكال العنف. بتقطع من نفسك عشان تدخل صندوق أضيق.', aAr: 'زياد' },
    { t: 'The universe operates on hard constraints. Your feelings are variables negotiating with gravity.', a: 'Ziad',
      tAr: 'الكون شغال بقيود صارمة. مشاعرك متغيرات بتتفاوض مع الجاذبية.', aAr: 'زياد' },
    { t: 'God does not play dice.', a: 'Einstein', tAr: 'الله ما بلعبش النرد.', aAr: 'أينشتاين' }
  ]},
  { g: 'Writing & Dark Material', gAr: 'الكتابة والمحتوى الغامق', items: [
    { t: 'You cannot cure a disease that is satisfied with its host.', a: 'The Holy Theft',
      tAr: 'مينفعش تعالج مرض راضي بمضيفه.', aAr: 'السرقة المقدسة' },
    { t: 'The gods are just entities that survived their own initialization sequence.', a: 'The Holy Theft',
      tAr: 'الآلهة مجرد كيانات نجت من تسلسل تهيئة نفسه.', aAr: 'السرقة المقدسة' },
    { t: 'Hope is a low-priority process that delays the inevitable system termination.', a: 'Malkhar',
      tAr: 'الأمل عملية أولويتها واطية بتأجل إنهاء النظام الحتمي.', aAr: 'ملخار' },
    { t: 'The abyss does not run away when you light a candle; it retreats to the edge of the room and waits.', a: 'Nietzsche',
      tAr: 'الهاوية مش بتهرب لما تشعل شمعة، هي بترجع لركن الأوضة وتستنى.', aAr: 'نيتشه' }
  ]},
  { g: 'Iron', gAr: 'الحديد', items: [
    { t: 'The iron does not lie to you. It weighs exactly what it weighs.', a: 'Ziad',
      tAr: 'الحديد ما بيكدبش عليك. بيزن بالظبط اللي بيوزنه.', aAr: 'زياد' },
    { t: 'Defeat is an uncalibrated load. Adjust the weight or let the structure break.', a: 'Lifting Axiom',
      tAr: 'الهزيمة حمل مش متظبظ. ظبّط الوزن أو خلّي الهيكل ينكسر.', aAr: 'Lifting Axiom' },
    { t: 'Fatigue is just noisy telemetry. Ignore the packet, hold the spine, execute the lift.', a: 'Lifting Axiom',
      tAr: 'الإرهاق مجرد telemetry مزعج. تجاهل الباكت، ثبّت العمود الفقري، نفّذ الرفعة.', aAr: 'Lifting Axiom' },
    { t: 'We do not build strength to carry light loads. We build it so the heavy ones feel ordinary.', a: 'Ziad',
      tAr: 'إحنا مش بنبني قوة عشان نcarry أحمال خفيفة. بنبنيها عشان التقيلة تحس عادية.', aAr: 'زياد' }
  ]},
  { g: 'Brutalist', gAr: 'حقائق عارية', items: [
    { t: 'Knowledge without execution is just high-fidelity noise.', a: 'Ziad',
      tAr: 'المعرفة من غير تنفيذ مجرد noise بدقة عالية.', aAr: 'زياد' },
    { t: 'Silence is often a full database waiting for the correct query command.', a: 'Ziad',
      tAr: 'السكات غالباً قاعدة بيانات كاملة مستنية أمر الـ query الصح.', aAr: 'زياد' },
    { t: 'You are not required to finish the work, but neither are you free to abandon it.', a: 'Pirkei Avot',
      tAr: 'انت مش مطلوب منك تخلص الشغل، بس كمان مش حر تسيبه.', aAr: 'بيركي أفوت' },
    { t: 'Verily, man is in a state of loss.', a: 'Quran 103:2', tAr: 'إن الإنسان لفي خسر.', aAr: 'القرآن ١٠٣:٢' }
  ]}
];

/* ---------------- Music (drive ids unchanged) ---------------- */

const MUSIC = [
  { name: 'السرقة المقدسة — إلى ما لا يُقصد', nameEn: 'The Holy Theft — To What Is Not Intended', chapter: 1, driveId: '1ltP4d7nkYexVIyIM0TZ_8pQ2d5pHKPwq' },
  { name: 'الأوبرا', nameEn: 'OPera', chapter: 2, driveId: '1nEZmkalQY_aWpzD68QwFCKC_33M5mKTM' },
  { name: 'خطوة الخالق', nameEn: "The Creator's Move", chapter: 3, driveId: '1sL3hAYIWWWMIu6dOtWtK2APUKN0VFFmh' },
  { name: 'تنبيه إلهي', nameEn: 'God Alert', chapter: 4, driveId: '1x27BokDXG2vwJ1Bu9JMocKrx1G5xRO70' },
  { name: 'الضربة', nameEn: 'Whiplash', chapter: 5, driveId: '157JogD6tLR81z1gFgCFa0a1f3S7bVG5F' },
  { name: 'القطعة الأخيرة', nameEn: 'The Last Piece', chapter: 6, driveId: '1opSqtV2gsmIsnCcdqoce-4UHtjzYrg-q' },
  { name: 'قبل النهاية', nameEn: 'Before the End', chapter: 7, driveId: '1Td9waVoYx3ssbTowK94X8MPzUON0ICNn' },
  { name: 'الكاتدرائية الساقطة', nameEn: 'The Fallen Cathedral', chapter: 8, driveId: '1c4wQZgySe3bvEvUValp8EMEWDi61vAni' }
];

/* ---------------- Novels (text lives in novels.js) ---------------- */

const NOVEL_INDEX = [
  {
    id: 'holy-theft',
    title: 'The Holy Theft',
    titleAr: 'السرقة المقدسة',
    subtitleEn: 'A novel by Ziad Salah',
    subtitleAr: 'رواية لزياد صلاح',
    noteEn: 'A story about the end of the world, the nature of evil, and the price of playing God.',
    noteAr: 'قصة عن نهاية العالم، وطبيعة الشر، وثمن لعب دور الإله.',
    orderEn: 'Read this one first.',
    orderAr: 'اقرأ دي الأول.',
    blurbEn: 'Hell teaches people not to expect anything beautiful early. Repetition becomes nature, and when pain is your nature you stop looking for its source. A child in that hell is listening anyway.',
    blurbAr: 'الجحيم بيعلّم الناس ميستناش حاجة حلوة بدري. التكرار بيبقى طبيعة، ولما الألم يبقى طبيعتك بتبطل تدور على مصدره. طفل في الجحيم ده بيسمع على أي حال.'
  },
  {
    id: 'zeus',
    title: 'Zeus',
    titleAr: 'زيوس',
    subtitleEn: 'The story of a god who was human — before time devoured him',
    subtitleAr: 'قصة الإله اللي كان إنسان — قبل ما الزمن يبلعه',
    noteEn: 'The prequel. Chronologically first, but written second.',
    noteAr: 'القصة السابقة زمنياً. بتتقرأ الأول زمنياً، بس اتكتبت تانية.',
    orderEn: 'Read this one second.',
    orderAr: 'اقرأ دي التانية.',
    blurbEn: 'He was not born out of myth. He was born out of a real betrayal, from the exact moment a woman decided loneliness justifies everything, and that she was old enough to be alone with it.',
    blurbAr: 'هو ما اتولدش من أسطورة. اتولد من خيانة حقيقية، من اللحظة بالظبط اللي امرأة قررت فيها إن الوحدة بتبرر كل حاجة، وإنها تكون عندها سن كافي إنها تبقى لوحدها.'
  }
];
