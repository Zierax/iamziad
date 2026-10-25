/* ============================================================
   qa.js — the Q&A, in original order.
   Entries 1-25 are Ziad's originals, kept VERBATIM in EN and AR.
   New questions are merged in after, in the same [Q]/[A] shape.
   Six of the earlier entries were removed on his instruction.
   ============================================================ */

const QA = [
  /* ---------- originals, verbatim ---------- */
  { q: 'Does Ziad prefer Asian girls or Latinas?', qAr: 'هل يفضل زياد الفتيات الآسيويات أم اللاتينيات؟',
    a: 'Why do you even care? Latinas, of course.',
    aAr: 'ليه أصلاً مهتم؟ اللاتينيات طبعاً.' },

  { q: "What is Ziad's body count?", qAr: 'ما هو الـ body count بتاع زياد؟',
    a: 'Zero, sadly :<', aAr: 'صفر، للأسف :<' },

  { q: "What is Ziad's favorite food?", qAr: 'إيه هو أكلك المفضل؟',
    a: 'Latinas. Literally the best thing on earth.',
    aAr: 'اللاتينيات. literally أحسن حاجة على الأرض.' },

  { q: "What is Ziad's favorite drink?", qAr: 'إيه مشروبك المفضل؟',
    a: 'Lemon mint with soda (with Latina).',
    aAr: 'ليمون نعناع مع صودا (مع لاتينية).' },

  { q: 'What is the thing Ziad hates the most?', qAr: 'أكتر حاجة بتكرهها إيه؟',
    a: 'Matcha, stupid people and anyone hate Latinas.',
    aAr: 'الماتشا، الأغبياء، وأي حد يكره اللاتينيات.' },

  { q: 'What is your absolute red flag in a girl? (And yes, we know you like Latinas, but give us technical data).',
    qAr: 'إيه absolute red flag في البنت بالنسبالك؟ (وآه عارفين إنك بتحب اللاتينيات، بس عايزين technical data)',
    a: "I will not say if she's not Latina that's a red flag, I used that too much, so; si ella no es Latina, y este español.",
    aAr: 'مش هقول إنها لو مش لاتينية يبقا red flag، استعملت الجملة دي كتير. ف: si ella no es Latina, y este español.' },

  { q: 'If a girl asks you to explain what "Axiom-Bio" does on a first date, do you give her a 3-hour low-level architecture lecture or do you just lie and say you build web apps?',
    qAr: 'لو بنت سألتك في أول ميعاد تشرح لها "Axiom-Bio" بيعمل إيه، هتعمل لها محاضرة 3 ساعات في low-level architecture ولا هتكذب وتقول إنك بتعمل web apps؟',
    a: 'I will say I love Kanye West.', aAr: 'هقول إن أنا بحب Kanye West.' },

  { q: "What is Ziad's favorite video game?", qAr: 'إيه أحسن لعبة فيديو بالنسبة لك؟',
    a: "Sekiro: Shadows Die Twice, Assassin's Creed II, and Assassin's Creed IV: Black Flag. If you can't parry in Sekiro, don't talk to me.",
    aAr: "Sekiro: Shadows Die Twice، Assassin's Creed II، و Assassin's Creed IV: Black Flag. لو مش عارف تعمل parry في Sekiro، لا تكلمني." },

  { q: "Who is Ziad's favorite rapper/singer?", qAr: 'مين مغنيك المفضل؟',
    a: 'Kanye West, King Von, Ken Carson, Chief keef, Karol G, Nicki Minaj',
    aAr: 'Kanye West, King Von, Ken Carson, Chief Keef, Karol G, Nicki Minaj' },

  { q: 'How many languages do you speak?', qAr: 'بتتكلم كام لغة؟',
    a: 'Arabic (Native), English (Fluent - I AM CHIEF KEEFFFF), Spanish (A2), and basic Chinese/Russian/Portuguese. Enough strings to navigate almost any localized environment.',
    aAr: 'عربي (أم)، إنجليزي (طلق - I AM CHIEF KEEFFFF)، إسباني (A2)، ومبادئ صيني/روسي/برتغالي. كمية strings كافية عشان أتحرك في أي بيئة محلية.' },

  { q: "What's a faster runtime: You explaining to your mom why you're awake at 4:00 AM listening to Kanye West, or Planck-99 detecting a kernel exploit?",
    qAr: 'إيه الأسرع: إنك تشرح لأمك ليه صاحي الساعة 4 الفجر بتسمع Kanye West، ولا Planck-99 يكتشف kernel exploit؟',
    a: "Once my mom said to me that I am too aggressive and I could be awake for days to finish what I am doing whatever it is, then she said I am going to lose my mind soon (don't worry mama, Already lost it :>).",
    aAr: 'مرة أمي قالت لي إني aggressive أوي وممكن أفضّل صاحي أيام عشان أخلص اللي بعمله، وبعدين قالت إني هخلي دماغي قريب (لا تقلقي يا ماما، خليتها من زمان :>).' },

  { q: "If your metacognitive AI framework cleared rigorous scientific reports peer reviews, why can't you write a script to convince your parents that 500kg leg presses are safe for an 18-year-old?",
    qAr: 'لو إطارك المعرفي الفوقي اللي اجتاز مراجعات علمية صارمة، ليه مش عارف تكتب سكريبت تقنع أهلك إن 500kg leg presses آمنة لواحد عنده 18 سنة؟',
    a: "500kg are not safe by any chance and don't try to do that, not at home or the f*cking gym, okay?",
    aAr: '500kg مش آمنة بأي شكل من الأشكال، متحاولش تعمل كده، لا في البيت ولا في الجيم، فاهمني؟' },

  { q: "Bro, be honest: If your Internet connection cuts out for 48 hours, do you become a normal teenager who touches grass, or does your execution completely crash?",
    qAr: 'بصراحة يا صاحبي: لو النت فصل 48 ساعة، هتتحول لمراهق عادي يلمس العشب ولا الـ execution بتاعتك هتكرش خالص؟',
    a: 'Ahhh question, I will write a new novel or story btw.',
    aAr: 'اوه سؤال حلو، هكتب رواية أو قصة جديدة btw.' },

  { q: 'What is your sleep schedule?', qAr: 'إيه نظام نومك؟',
    a: "Night owl and day veteran. My day is f*cked up so basically I sleep whenever I feel like I want to temporarily die.",
    aAr: 'بومة ليل ومخضرم نهار. يومي مدمر لذا أنام عندما أشعر أنني أريد الموت مؤقتاً.' },

  { q: 'Are you a nice guy to work with?', qAr: 'هل أنت شخص لطيف في الشغل؟',
    a: "I am literally an angel and the most chill person you'll ever work with. But as I said it before: I hate stupid people. All you have to do is not be lazy with your thinking. If you are naturally stupid, there's no problem, but if you are just lazy, go back to sleep. It's easier.",
    aAr: 'أنا حرفياً ملاك وأهدأ شخص هتشتغل معاه. لكن زي ما قلت قبل كده: أنا بكره الأغبياء. كل اللي عليك تعمله إنك متبقاش كسول في تفكيرك. لو أنت غبي بالفطرة، مفيش مشكلة. لكن لو أنت كسول، ارجع نام. أسهل.' },

  { q: 'What exactly is my quote?', qAr: 'ما هي مقولتي بالضبط؟',
    a: '"If you ever felt like you are stupid, good luck — you are. If you felt you are smart enough, so you are stupid." So how can we know who is smart and who is stupid? Just shut up and do your work.',
    aAr: '"إذا شعرت يوماً أنك غبي، حظاً موفقاً — أنت غبي. إذا شعرت أنك ذكي بما فيه الكفاية، فأنت غبي." إذاً كيف نعرف من الذكي ومن الغبي؟ فقط اصمت واعمل.' },

  { q: 'How does Ziad survive the Egyptian public school system?', qAr: 'كيف ينجو زياد من نظام المدارس الحكومية المصرية؟',
    a: "I don't go to school. Nobody gives a shit about me there, no logs at all. GitHub has given me logs since 2019 so I love it. I hate school and stupid people (again).",
    aAr: 'أنا لا أذهب إلى المدرسة. لا أحد يهتم بي هناك، لا سجلات على الإطلاق. GitHub أعطاني سجلات منذ 2019 لذلك أحبه. أنا أكره المدرسة والأغبياء (مرة أخرى).' },

  { q: 'If you are so dangerous and can compromise global networks, why can\'t you just hack the Egyptian education system and give yourself 100% in high school?',
    qAr: 'لو أنت خطير لدرجة إنك تقدر تخترق شبكات عالمية، ليه مش تقدر تخترق نظام التعليم المصري وتدّي نفسك 100% في الثانوية؟',
    a: "For real, I DON'T GIVE A SINGLE F*CK.", aAr: 'بجد، أنا مش مهتم خالص.' },

  { q: 'HOW THE F*CK AN 18 y/o HAS 10 YEARS OF EXPERIENCE!!', qAr: 'إزاي شخص عنده 18 سنة عنده 10 سنين خبرة بحق الجحيم؟!',
    a: "I don't even know I swear, it just happened. Check my GitHub logs, also I've been a director when I was 14-15 in marketing, so yeah I just do it because I love it",
    aAr: 'وأنا مش عارف بصراحة، حصلت كده. راجع GitHub logs بتاعتي، وبرضه كنت مدير وأنا عندي 14-15 سنة في التسويق، فهما بعمل كده لأني بحبه' },

  { q: 'Why the alias "Zierax" or "Zy0x"?', qAr: 'ليه اخترت الاسم المستعار "Zierax" أو "Zy0x"؟',
    a: "Because a legal name is just a label assigned to your birth coordinates without your consent. An alias is a string you define yourself.",
    aAr: 'لأن الاسم القانوني مجرد لصقة اتحطت على إحداثيات ميلادك من غير موافقتك. الاسم المستعار هو string بتعرّفه بنفسك.' },

  { q: 'How can someone reach Ziad?', qAr: 'كيف يمكن لشخص ما الوصول إلى زياد؟',
    a: 'I am not a celebrity, but type "Zierax" on Google and enjoy the first 10 pages.',
    aAr: 'أنا لست مشهوراً، ولكن اكتب "Zierax" على Google واستمتع بأول 10 صفحات.' },

  { q: 'Why is this section even on a deep-tech website?', qAr: 'ليه القسم ده أصلاً موجود على موقع تقني عميق؟',
    a: "Because I own the server, and I can. If you're offended, go cry about it on Twitter.",
    aAr: 'لأني باملك السيرفر، وبقدر. لو زعلك الكلام، اذهب وابكي على تويتر.' },

  { q: 'Do you believe in luck?', qAr: 'هل تؤمن بالحظ؟',
    a: 'Luck is just an uncalculated variable. If you failed, your math was wrong or your sample size was too small. Fix the input, don\'t blame the dice. God does not play dice.',
    aAr: 'الحظ مجرد متغير لم يتم حسابه. إذا فشلت، رياضياتك كانت غلط أو حجم العينة أقل من اللازم. صلّح المدخلات، لالقي باللوم على النرد. الله لا يلعب النرد.' },

  { q: 'What programming language does Ziad absolutely despise?', qAr: 'ما هي لغة البرمجة التي يكرهها زياد كرهاً مطلقاً؟',
    a: 'Python, when people use it for things that should have been written in C or Rust. Interpreted languages are for people who like to negotiate with execution time. I don\'t negotiate.',
    aAr: 'Python، عندما يستخدمها الناس لأشياء كان المفروض تكتب بـ C أو Rust. اللغات المفسّرة للناس اللي بيحبوا يتفاوضوا مع وقت التنفيذ. أنا لا أتفاوض.' },

  { q: 'What is your favorite (instrumental) music genre when you are compiling logic?', qAr: 'إيه نوع الموسيقى (الآلي) المفضل بتاعك وأنت بتكتب كود؟',
    a: 'Aggressive rage or classical-opera hybrids. The contrast between brute-force bass and mathematical symmetry in opera keeps the brain at maximum throughput.',
    aAr: 'Aggressive rage أو مزيج كلاسيكي-أوبرالي. التباين بين الباس الوحشي والتناسق الرياضي في الأوبرا يخلّي العقل عند أقصى إنتاجية.' },

  { q: 'What Planck-99, and why should anyone care about nanosecond latency?', qAr: 'إيه Planck-99، وليه أي حد يهتم بسرعة النانوثانية؟',
    a: "It's a zero-dependency, ultra-low-latency malware detection engine I architected for MCU-class hardware. It achieves a 30-73ns latency at the Linux Kernel audit level. Why care? Because the EU CRA regulation window demands real-time compliance, not bloated, high-latency security scripts that negotiate with hardware cycles.",
    aAr: 'هو محرك كشف برمجيات خبيثة بدون أي اعتماديات خارجية، بزمن استجابة فائق الانخفاض، صممته للهاردوير من فئة MCU. يحقق زمن استجابة 30-73 نانوثانية على مستوى Linux Kernel audit. وليه تهمك؟ لأن نافذة تنظيم EU CRA تتطلب امتثال فوري، مش سكريبتات أمنية عالية زمن الاستجابة بتتفاوض مع دورات الهاردوير.' },

  /* ---------- new, same shape ---------- */
  { q: 'Are you really writing these questions and then answering them? Are you crazy bro?',
    qAr: 'هل أنت حقًا بتكتب الأسئلة دي وبتجاوب عليها؟ هل أنت مجنون يا صديقي؟',
    a: 'AHHHHHHHH, that is my server :>', aAr: 'اهههههههه، السيرفر بتاعي يسطا :>' },

  { q: 'Do you build a game boy to tell a girl you like her? What is that, what happened?',
    qAr: 'بتبني جيم بوي عشان تقول لبنتي إنك بتحبها؟ إيه ده، إيه اللي حصل؟',
    a: 'That is exactly what happened. I can debug 3,000 lines of async at 3 AM without sweating, but saying "I like you" out loud is a complete kernel panic. So I built a whole fake 1989 handheld to say it instead — procedural chiptune, scanlines, four confession personalities, and a character who gets nervous, types something awkward, deletes it, and says the honest thing anyway. She said no. So now it is an open source project with an MIT license and strangers send it to other people. The rejection turned into the nicest thing I ever shipped.',
    aAr: 'ده بالظبط اللي حصل. أقدر أعمل debug لـ ٣٠٠٠ سطر كود الساعة ٣ الفجر من غير ما أتعرق، بس أقول "أنا بحبك" بصوت عالي؟ kernel panic كامل. فبنيت جيم بوي وهمية من ١٩٨٩ تقولها بدلي — موسيقى متولّدة برمجياً، خطوط شاشة، أربع شخصيات للاعتراف، وشخصية بتتلخبط، تكتب حاجة محرجة، تمسحها، وتقول الحاجة الصح في الآخر. قالت لأ. فبقى دلوقتي مشروع open source برخصة MIT وناس بتبعته لناس تانية. الرفض بقى أحلى حاجة أنا خرجتها.' },

  { q: 'And AdmitGPT? You are 18, why do you care about university admissions?',
    qAr: 'و AdmitGPT؟ انت ١٨، ليه يهمك قبول الجامعات؟',
    a: 'Because I went through it, got told "strong candidate" and never once got told why. Everyone sells the answer and hides the arithmetic. So I published the arithmetic — every weight, every cap, every place it is wrong. It runs in your browser, it never phones home, and the formula is open. Built by a student who did not like guessing, for students who should not have to.',
    aAr: 'عشان أنا عديت فيها، وقولولي "مرشّح قوي" ومحدش قاللي ليه. الكل بيبيع الإجابة ويخبّي الحساب. ف أنا نشرت الحساب — كل وزن، كل حد، وكل مكان هو غلط فيه. بيشتغل في متصفحك، مش بيبعت لحد، والمعادلة مفتوحة. اتبنى من طالب مش عاجبه التخمين، لطلبة مفروض ما يحتاجوش تخمين.' },

  { q: 'So are you a hacker or what?', qAr: 'يعني انت hacker ولا إيه؟',
    a: 'I report vulnerabilities for a living and that pays my rent. Programs I have worked on include AT&T, IBM, CBRE and a DoD vulnerability disclosure program. The dramatic version of this story is all over the internet; the boring accurate version is: read code carefully, write it down, and tell the people who own it.',
    aAr: 'أنا بلّغ عن ثغرات عشان أ-living، وده اللي بياكل عيشي. برامج اشتغلت عليها فيها AT&T و IBM و CBRE و برنامج إفصاح ثغرات تابع لوزارة الدفاع. النسخة الدراماتيكية من القصة دي متشيرة على النت، والنسخة المملة والدقيقة هي: اقرأ كود بتركيز، اكتبه، وقوله لللي مالكه.' },

  { q: 'Why is there a personal site and not just a CV?', qAr: 'ليه في موقع شخصي أصلاً ومش بس CV؟',
    a: 'Because every professional page I ever saw is written by someone trying to impress a recruiter. I wanted one place where the person writing it is allowed to be a person. Judge the career on the portfolio — this is just what is left.',
    aAr: 'عشان كل صفحة احترافية أنا شفتها كاتبها حد بيحاول يبهر recruiter. أنا عايز مكان واحد الشخص اللي كاتبه مسموحله يكون شخص. قيّم الشغل على البورتفوليو — ده بس اللي فاضل.' },

  { q: 'Do you actually go to school?', qAr: 'انت فعلاً بتروح مدرسة؟',
    a: 'I finished secondary. I do not sit in classrooms. Nobody took attendance and nobody wrote a single line about me, which meant I got to build things instead of pretending to care.',
    aAr: 'خلصت الثانوي. مش بقعد في فصول. محدش كان بيحضر ولا محدس كتب عني سطر واحد، ف ده خلاني أبني حاجات بدل ما أعمل تمثيل إنّي مهتم.' },

  { q: 'What is the weirdest thing in your repo?', qAr: 'أغرب حاجة في الـ repo بتاعك؟',
    a: 'There is a Grafana scanner that collects every CVE I could get into one version-aware script. It has more stars than most of my actual research. I am choosing to be happy about it.',
    aAr: 'في سكanner لـ Grafana بيجمّع كل ثغرة CVE قدرت أجمعها في سكريبت واحد فاهم رقم النسخة. عدد النجوم بتاعه أكبر من معظم البحث بتاعي. أنا مختار أفرح بيه.' },

  { q: 'Are you a nice guy to work with? Wait, you already said that.', qAr: 'هل أنت لطيف في الشغل؟ استنى، انت ده قلتّه.',
    a: 'I said what I said. I am not going to soften it because a website made me feel like I should.',
    aAr: 'قلت اللي قلته. مش هخففه عشان موقع خلّاني حاسس إن المفروض أخففه.' },

  { q: 'What is the plan?', qAr: 'الخطة إيه؟',
    a: 'Finish the second novel. Keep the systems small and working instead of big and impressive. Learn the proofs I keep pretending I understand. Lift a bit more than I should.',
    aAr: 'أخلص الرواية التانية. أخلي الأنظمة صغيرة وشغالة بدل كبيرة ومبهرة. أتعلم البراهين اللي بأفترض طول الوقت إني فاهمها. أرفع أكتر من اللازم.' },

  { q: 'Why is there a countdown on this page?', qAr: 'ليه في countdown في الصفحة دي؟',
    a: 'Because there is a date, and the title of what happens on that date is locked. It is not a secret, it is a puzzle. Read the page, use what you find, and if you get it you are as informed as I am.',
    aAr: 'عشان في تاريخ، وعنوان اللي هيحصل في التاريخ ده مقفول. مش سر، ده ألغاز. اقرأ الصفحة، استخدم اللي فيها، ولو كسرته هتبقى عارف زيي بالظبط.' }
];