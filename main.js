/**
 * Dr. Ahmed Gouda Nageh | Medical Portfolio Website JavaScript
 * Specialist in General Surgery, Laparoscopy, Bariatric Surgery & Proctology
 */

(function () {
  'use strict';

  // ----------------------------------------------------------------------
  // 1. Bilingual Dictionaries (Arabic & English)
  // ----------------------------------------------------------------------
  const translations = {
    ar: {
      pageTitle: "د. أحمد جودة ناجح | أخصائي الجراحة العامة والمناظير وجراحة السمنة والشرج",
      metaDesc: "الموقع الطبي والمهني الرسمي للدكتور أحمد جودة ناجح - أخصائي الجراحة العامة والمناظير وجراحة السمنة والشرج - الزمالة البريطانية للجراحة العامة. معلومات توعوية ومواعيد العيادات.",
      docName: "د. أحمد جودة ناجح",
      docTitleShort: "أخصائي الجراحة العامة والمناظير",
      navHome: "الرئيسية",
      navAbout: "عن الدكتور",
      navSpecialties: "التخصصات",
      navLibrary: "التوعية الطبية",
      navGallery: "معرض التوعية",
      navTestimonials: "آراء المرضى",
      navClinics: "العيادات",
      navContact: "تواصل معنا",
      btnBookNav: "حجز موعد",
      langBtnText: "English",

      // Hero
      heroBadgeFellowship: "الزمالة البريطانية للجراحة العامة",
      heroDocName: "د. أحمد جودة ناجح",
      heroDocNameEn: "Dr. Ahmed Gouda Nageh",
      heroSpecialty: "أخصائي الجراحة العامة والمناظير وجراحة السمنة والشرج",
      heroBio: "أهلاً بكم في المنصة الطبية الرسمية للتوعية الجراحية وخدمات الرعاية الصحية المتقدمة. تهدف هذه المنصة إلى تقديم معرفة طبية موثوقة ومبسطة، وتيسير الاستفسار وتنسيق المواعيد المباشرة عبر واتساب.",
      btnBookHero: "احجز موعدك عبر واتساب",
      btnExploreSpecialties: "تعرف على التخصصات",
      hlGenSurg: "الجراحة العامة",
      hlLapSurg: "جراحات المناظير",
      hlBarSurg: "جراحة السمنة",
      hlProctoSurg: "جراحات الشرج والمستقيم",
      tabScrubs: "الزي الجراحي (العمليات)",
      tabSuit: "البدلة الرسمية",
      scrubsTag: "صورة معتمدة — أثناء إجراء جراحة مناظير",
      suitTag: "صورة معتمدة — البدلة الرسمية",

      // About
      aboutTag: "الملف المهني",
      aboutTitle: "نبذة عن الدكتور",
      aboutSubtitle: "التزام مهني وأخلاقي بتقديم رعاية جراحية دقيقة وتوعية صحية مبنية على الدلائل الإكلينيكية",
      aboutLeadText: "د. أحمد جودة ناجح، أخصائي الجراحة العامة والمناظير وجراحة السمنة والشرج. تهدف هذه الصفحة إلى التعريف بالتخصصات الطبية وتقديم معلومات توعوية مبسطة تساعد الزائر على فهم الموضوعات الصحية والاستعداد لمناقشتها مع الطبيب المختص.",
      aboutSecondaryText: "تقوم الرؤية الإكلينيكية على أساس التقييم الطبي الدقيق لكل مريض بصورة فردية ومستقلة، واختيار التدخل الجراحي أو المنظاري الأنسب وفق أعلى معايير السلامة ومكافحة العدوى، مع التركيز على المتابعة الدورية المستمرة بعد العمليات لضمان التعافي الأمثل.",
      factItem1: "اعتماد الطرق الجراحية والمنظارية الحديثة لتحقيق أفضل معدلات الأمان وتقليل مدة الاستشفاء.",
      factItem2: "التشخيص الدقيق للحالات المرضية وتحديد أهلية الجراحة وفق المعايير الطبية المعتمدة.",
      factItem3: "تنسيق مواعيد الكشف والاستشارات بسهولة عبر 5 مراكز وعيادات معتمدة.",
      qualTitle: "الزمالة البريطانية للجراحة العامة",
      qualTag: "مؤهل مقدم من صاحب الموقع",
      qualNotice: "تم إدراج هذا المؤهل استنادًا إلى البيانات المقدمة من الطبيب، ويتم تحديث الموقع بسجلات الاعتماد وشهادات التدريب التخصصية فور اعتمادها وتأكيدها رسميًا.",
      btnInquireDoc: "استفسر عن المواعيد مباشرة",

      // Specialties
      specialtiesTag: "الخدمات الطبية",
      specialtiesTitle: "التخصصات الجراحية",
      specialtiesSubtitle: "مجموعة متكاملة من التدخلات الجراحية العامة وجراحات المناظير والسمنة وجراحات الشرج",
      spec1Title: "الجراحة العامة",
      spec1Desc: "تشخيص وعلاج الحالات الجراحية التقليدية بمختلف تصنيفاتها، بما في ذلك جراحات الفتق، استئصال المرارة والزائدة، والأورام السطحية، مع الالتزام الصارم ببروتوكولات الأمان.",
      spec2Title: "جراحات المناظير",
      spec2Desc: "إجراء التدخلات الجراحية الدقيقة عبر شقوق مجهرية متناهية الصغر، مما يقلل بشكل ملموس من الآلام الناتجة عن الجراحة، ويحد من النزيف، ويسرّع وتيرة التعافي والعودة للحياة الطبيعية.",
      spec3Title: "جراحات السمنة",
      spec3Desc: "عمليات تكميم المعدة وجراحات السمنة المفرطة، المبنية على تقييم شامل لمؤشر كتلة الجسم والحالة الصحية العامة، مع وضع خطط المتابعة الغذائية والطبية المستمرة.",
      spec4Title: "جراحات الشرج والمستقيم",
      spec4Desc: "العلاج المتخصص لأمراض الشرج الشائعة كالبواسير، والشرخ الشرجي، والناسور، والخراجات، بأحدث التقنيات الطبية التي تضمن راحة المريض والحد من فرص الانتكاس.",
      btnLearnMore: "اعرف المزيد",

      // Library
      libraryTag: "مكتبة التوعية",
      libraryTitle: "التوعية الطبية الجراحية",
      librarySubtitle: "مقالات طبية مبسطة ومعلومات إرشادية موثوقة لمساعدة المرضى وعائلاتهم على فهم الخيارات العلاجية",
      filterAll: "الكل",
      filterBariatric: "جراحات السمنة",
      filterLap: "جراحات المناظير",
      filterGeneral: "الجراحة العامة",
      filterProcto: "الشرج والمستقيم",
      filterGuide: "تحضير ورعاية المريض",
      catBariatric: "جراحات السمنة",
      catCriteria: "المعايير الطبية",
      catTech: "التقنيات الجراحية",
      catPrep: "إرشادات التحضير",
      catCare: "الرعاية والتعافي",
      catProcto: "جراحة الشرج",
      readTime: "قراءة 4 دقائق",
      btnReadMore: "اقرأ المزيد",
      art1Title: "ما هي عملية تكميم المعدة؟",
      art1Excerpt: "شرح مبسط لطبيعة استئصال جزء من المعدة لتقليص حجمها وسعتها، وكيفية تقييم الملاءمة والمخاطر والبدائل بالتعاون مع الفريق الطبي المعالج.",
      art2Title: "متى قد يحتاج المريض إلى جراحة السمنة؟",
      art2Excerpt: "توضيح مؤشر كتلة الجسم (BMI)، الأمراض المصاحبة، ومحاولات العلاج السابقة، والتأكيد على أن الجراحة ليست قرارًا عشوائيًا لكل من يعاني زيادة الوزن.",
      art3Title: "ما الفرق بين الجراحة المفتوحة وجراحة المناظير؟",
      art3Excerpt: "مقارنة علمية دقيقة حول حجم الشقوق، الأدوات المستخدمة، مدة الاستشفاء، وكيف يتم تحديد النهج الجراحي الأنسب لكل حالة وفق ظروف المريض.",
      art4Title: "كيف يستعد المريض للعملية؟",
      art4Excerpt: "دليل الخطوات التمهيدية قبل التدخل الجراحي: الفحوصات الطبية، مراجعة الأدوية المزمنة، تعليمات الصيام، واستشارة أطباء التخدير والتخصصات ذات الصلة.",
      art5Title: "ما أهمية المتابعة بعد الجراحة؟",
      art5Excerpt: "أهمية الالتزام بالمواعيد المحددة للزيارة الإكلينيكية، ومراقبة التئام الجروح، والتغذية السليمة، والتعامل السريع مع أي أعراض غير معتادة.",
      art6Title: "التوعية بجراحات الشرج والمستقيم",
      art6Excerpt: "معلومات توعوية عامة عن الأعراض الشائعة (الألم، النزيف، التورم) وأهمية الفحص السريري الدقيق دون حرج أو تأجيل لتجنب المضاعفات.",
      templateTitle: "الخدمات الجراحية والتوعية الطبية",
      templateDesc: "تعرّف على مجموعة من الخدمات الجراحية ومعلومات توعوية مبسطة تساعدك على فهم الحالات الطبية وخيارات العلاج. يحدد الطبيب الإجراء الأنسب بعد الفحص والتقييم.",
      svcCountBadge: "30 خدمة جراحية وتوعوية معتمدة",
      svcSearchPlaceholder: "ابحث في الخدمات الجراحية (مثال: مرارة، فتق، بواسير، مناظير...)",
      svcFilterAll: "الكل (30)",
      svcFilterBariatric: "جراحات السمنة والمناظير (5)",
      svcFilterHernia: "جراحات الفتق والجدار البطني (3)",
      svcFilterEndocrine: "جراحات الغدد والثدي والأورام (6)",
      svcFilterProcto: "جراحات الشرج والقولون والجلد (9)",
      svcFilterGeneral: "جراحات عامة وتخصصات أخرى (7)",
      svcShowingCount: "عرض {count} من أصل 30 خدمة",
      svcNoResultsTitle: "لا توجد خدمات مطابقة لبحثك",
      svcNoResultsDesc: "جرّب البحث بكلمات أخرى أو إعادة ضبط عوامل التصفية لعرض كافة الخدمات.",
      svcResetSearch: "إعادة ضبط البحث",
      btnServiceWa: "استفسار عبر واتساب",
      catBariatricLap: "جراحات السمنة والمناظير",
      catHerniaWall: "جراحات الفتق والجدار البطني",
      catEndocrineBreast: "جراحات الغدد والثدي والأورام",
      catProctoSkin: "جراحات الشرج والقولون والجلد",
      catGeneralOther: "جراحات عامة وتخصصات أخرى",

      // 30 Services Arabic
      svc1Title: "عمليات السمنة المتنوعة",
      svc1Desc: "إجراءات جراحية تهدف إلى تقليل حجم المعدة أو تغيير مسار الجهاز الهضمي للمساعدة على إنقاص الوزن، وفقًا لتقييم الحالة.",
      svc2Title: "إصلاح فتق الحجاب الحاجز بالمنظار",
      svc2Desc: "إجراء جراحي لإصلاح فتق الحجاب الحاجز، وقد يساعد في علاج الارتجاع لدى المرضى المناسبين.",
      svc3Title: "استئصال المرارة بالمنظار",
      svc3Desc: "إزالة المرارة في حالات مثل حصوات المرارة المصحوبة بأعراض أو بعض حالات الالتهاب، وفقًا للتقييم الطبي.",
      svc4Title: "استئصال الزائدة الدودية بالمنظار",
      svc4Desc: "إزالة الزائدة الدودية الملتهبة بالمنظار عندما تكون هذه الطريقة مناسبة للحالة.",
      svc5Title: "علاج فرط التعرق بالمنظار",
      svc5Desc: "إجراء متخصص قد يُستخدم لبعض حالات فرط التعرق الشديد، بعد تقييم الخيارات العلاجية ومناقشة الفوائد والمخاطر.",
      svc6Title: "إصلاح الفتق الإربي جراحيًا وبالمنظار",
      svc6Desc: "إعادة الأنسجة البارزة ومعالجة ضعف جدار البطن، وقد تُستخدم شبكة جراحية بحسب الحالة.",
      svc7Title: "إصلاح الفتق السري جراحيًا وبالمنظار",
      svc7Desc: "علاج الفتق حول السرة وإصلاح موضع الضعف في جدار البطن وفقًا للتقييم.",
      svc8Title: "إصلاح الفتق الجراحي",
      svc8Desc: "إصلاح الفتق الذي يظهر في موضع جراحة سابقة، مع اختيار طريقة الترميم المناسبة للحالة.",
      svc9Title: "علاج دوالي الخصية جراحيًا وبالمنظار",
      svc9Desc: "علاج الأوردة المتضخمة حول الخصية في الحالات التي تستدعي التدخل، وفقًا لتقييم الأعراض والخصوبة.",
      svc10Title: "علاج الخصية المعلقة",
      svc10Desc: "تقييم وعلاج الخصية غير النازلة، وقد يتطلب الأمر تدخلًا جراحيًا حسب العمر والحالة.",
      svc11Title: "علاج واستئصال أورام الثدي الحميدة والخبيثة",
      svc11Desc: "تقييم كتل الثدي وعلاجها جراحيًا عند الحاجة، مع مراعاة طبيعة الورم والخطة العلاجية المناسبة.",
      svc12Title: "علاج واستئصال أورام الغدة الدرقية",
      svc12Desc: "تقييم عقيدات وأورام الغدة الدرقية وتحديد الحاجة إلى الاستئصال الجزئي أو الكلي حسب التشخيص.",
      svc13Title: "إصلاح التثدي عند الرجال",
      svc13Desc: "علاج تضخم أنسجة الثدي لدى الرجال جراحيًا في الحالات المناسبة بعد التقييم الطبي.",
      svc14Title: "شفط الدهون وتنسيق القوام",
      svc14Desc: "إجراء لنحت مناطق محددة من الجسم لدى المرشحين المناسبين، ولا يُعد بديلًا عن علاج السمنة أو إنقاص الوزن العام.",
      svc15Title: "علاج البواسير جراحيًا أو بالليزر",
      svc15Desc: "تقييم البواسير واختيار العلاج المناسب حسب شدتها والحالة الصحية، مع توضيح أن الليزر ليس الخيار الأفضل لجميع الحالات.",
      svc16Title: "علاج الناسور الشرجي",
      svc16Desc: "تقييم وعلاج القناة غير الطبيعية بين القناة الشرجية والجلد، مع مراعاة الحفاظ على وظيفة العضلات العاصرة. تُحدد التقنية المناسبة بواسطة الجرّاح.",
      svc17Title: "علاج الشرخ الشرجي",
      svc17Desc: "علاج التمزق في بطانة القناة الشرجية، مع البدء بالعلاج التحفظي عند ملاءمته والنظر في التدخل الجراحي للحالات المختارة.",
      svc18Title: "علاج الكيس الشعري (الناسور العصعصي)",
      svc18Desc: "علاج الكيس أو المسار الشعري في منطقة العصعص، وقد يشمل التنظيف أو الجراحة بحسب الحالة.",
      svc19Title: "فتح وتصريف الخراج الشرجي",
      svc19Desc: "تصريف التجمع الصديدي عند الحاجة وتقييم الحالة لمنع المضاعفات.",
      svc20Title: "علاج الظفر الغائر",
      svc20Desc: "علاج انغراس حافة الظفر في الجلد، مع معالجة الالتهاب واختيار التدخل المناسب حسب شدته.",
      svc21Title: "استئصال الكيس الدهني",
      svc21Desc: "إزالة الكيس الجلدي عند وجود داعٍ طبي أو أعراض، بعد تقييم طبيعة الكتلة.",
      svc22Title: "استئصال الكيس الشعري",
      svc22Desc: "تقييم وإزالة الأكياس أو المسارات المرتبطة بتراكم الشعر، وفقًا للتشخيص.",
      svc23Title: "استئصال الكيس الزلالي",
      svc23Desc: "تقييم الأكياس المملوءة بسائل قرب المفاصل أو الأوتار، وتحديد الحاجة إلى المراقبة أو العلاج أو الاستئصال.",
      svc24Title: "استئصال الطحال",
      svc24Desc: "إزالة الطحال في حالات طبية محددة مثل بعض الإصابات أو أمراض الدم، بعد تقييم دواعي الجراحة ومخاطرها.",
      svc25Title: "استئصال أورام الجهاز الهضمي",
      svc25Desc: "تقييم الأورام الحميدة والخبيثة بالجهاز الهضمي وتحديد الخطة الجراحية المناسبة حسب التشخيص ومكان الورم.",
      svc26Title: "إصلاح الانسداد المعوي",
      svc26Desc: "علاج انسداد الأمعاء وفقًا لسببه وشدته، وقد يتطلب تدخلًا عاجلًا.",
      svc27Title: "فتح وتصريف خراج الثدي",
      svc27Desc: "علاج التجمعات الصديدية بالثدي عند الحاجة، مع تقييم السبب ووضع خطة علاج مناسبة.",
      svc28Title: "علاج القدم السكري",
      svc28Desc: "تقييم جروح وقرح القدم لدى مرضى السكري، مع العناية بالجرح وتحديد الحاجة إلى تدخل جراحي ضمن خطة علاج متكاملة.",
      svc29Title: "ختان الذكور",
      svc29Desc: "إجراء طبي يُناقش وفقًا للعمر والحالة الصحية والموافقة المستنيرة، مع الالتزام بمعايير السلامة والرعاية المناسبة.",
      svc30Title: "علاج الحروق",
      svc30Desc: "تقييم الحروق وتحديد درجة الإصابة، وتنظيف الجروح وتوفير الضمادات والعلاج المناسب بحسب شدة الحالة.",


      // Gallery
      galleryTag: "الوسائط التوعوية",
      galleryTitle: "معرض التوعية والوسائط",
      gallerySubtitle: "رسومات بيانية وفيديوهات توضيحية مبسطة لشرح المفاهيم الجراحية للمرضى بأعلى معايير الخصوصية",
      badgeIllustration: "رسم توضيحي",
      badgeDiagram: "مخطط تشريحي",
      badgeVideo: "فيديو توعوي",
      gal1Title: "مخطط المنافذ الدقيقة لجراحة المناظير",
      gal1Desc: "رسم بياني يوضح أماكن المنافذ المجهرية والأدوات الجراحية داخل تجويف البطن دون فتح جراحي كبير.",
      gal2Title: "تشريح المعدة ومسار عملية التكميم",
      gal2Desc: "توضيح مبسط لموضع قبة المعدة والجزء المستأصل وكيفية تشكيل الأنبوب المعدي الجديد.",
      gal3Title: "إرشادات التحضير قبل الجراحة (فيديو)",
      gal3Desc: "مقطع إرشادي توعوي قيد الإعداد لشرح أهم النصائح للمرضى قبل الدخول إلى غرفة العمليات.",
      galleryEthicalDisclaimer: "إشعار الخصوصية والأخلاقيات الطبية: جميع المواد البصرية المعروضة هنا مخصصة للتثقيف الصحي العام. يلتزم الموقع بعدم نشر صور أو بيانات شخصية تخص المرضى إلا بموافقة كتابية معتمدة ووفقًا لضوابط الخصوصية المنصوص عليها قانونًا وقواعد نقابة الأطباء.",

      // Testimonials
      testimonialsTag: "تجارب حقيقية",
      testimonialsTitle: "رسائل وانطباعات المرضى",
      testimonialsSubtitle: "رسائل شكر وتقدير حقيقية وموثقة وردت من المرضى الكرام، تم حجب الأسماء والصور الشخصية احترامًا لخصوصية المريض واللوائح الطبية.",
      badgeVerifiedReview: "رسالة موثقة",
      testDisclaimerText: "تنويه أخلاقي وطبي: جميع رسائل الشكر المعروضة مأخوذة من تواصل حقيقي مع المرضى بعد التعافي، وقد تم حجب بيانات الهوية تمامًا التزامًا بآداب مهنة الطب وقوانين حماية البيانات الشخصية.",

      // Clinics
      clinicsTag: "مواقع تقديم الخدمة",
      clinicsTitle: "أماكن العيادات",
      clinicsSubtitle: "يقدم د. أحمد جودة ناجح خدمات الكشف والاستشارة الجراحية في 5 عيادات ومجمعات طبية",
      clinic1Badge: "العيادة 1",
      clinic1Name: "البرامون",
      clinic1Desc: "مجمع عباد الرحمن الطبي",
      clinic2Badge: "العيادة 2",
      clinic2Name: "الدنابيق",
      clinic2Desc: "المجمع الطبي",
      clinic3Badge: "العيادة 3",
      clinic3Name: "الخيارية",
      clinic3Desc: "أمام المسجد القديم",
      clinic4Badge: "العيادة 4",
      clinic4Name: "ديمشلت",
      clinic4Desc: "برج التداوي",
      clinic5Badge: "العيادة 5",
      clinic5Name: "ميت مزاح",
      clinic5Desc: "بجوار الوحدة الصحية",
      clinicNote: "مواعيد الكشف والتنسيق متاحة مسبقًا عبر واتساب لضمان راحتكم وتقليل وقت الانتظار.",
      btnBookClinic: "حجز عبر واتساب",

      // Contact
      contactTag: "التواصل المباشر",
      contactTitle: "تواصل مع الدكتور وحجز المواعيد",
      contactSubtitle: "نسعد باستقبال استفساراتكم وترتيب مواعيد الكشف عبر القنوات الرسمية المعتمدة. نوصي بالتواصل عبر واتساب لسرعة الرد وتأكيد التوقيت المناسب.",
      channelWaTitle: "محادثة واتساب الرسمية (مفضلة)",
      channelPhoneTitle: "الاتصال الهاتفي المباشر",
      channelFbTitle: "الصفحة الرسمية على فيسبوك",
      helperTitle: "مساعد حجز المواعيد المباشر",
      helperDesc: "اختر العيادة والتخصص الجراحي المطلوب لإنشاء رسالة استفسار مخصصة ترسل بضغطة زر إلى واتساب الدكتور:",
      lblSelectClinic: "العيادة المرغوبة:",
      lblSelectSpec: "التخصص أو الإجراء المطلوب:",
      btnStartWaChat: "إرسال الاستفسار عبر واتساب",
      bookingNoticeNote: "* إرسال الرسالة عبر واتساب يُعد طلبًا وتنسيقًا للموعد مع العيادة، ويتم تأكيد الموعد النهائي والتوقيت الدقيق مع المريض بعد مراجعة الجدول الإكلينيكي.",

      // Footer
      footerBio: "أخصائي الجراحة العامة والمناظير وجراحة السمنة والشرج — الزمالة البريطانية للجراحة العامة. خدمات طبية وجراحية مبنية على الدلائل الإكلينيكية وسلامة المريض.",
      footerNavTitle: "أقسام الموقع",
      footerClinicsTitle: "فروع العيادات",
      footerContactTitle: "قنوات الاتصال",
      generalDisclaimer: "إخلاء مسؤولية طبية: المعلومات والمقالات الواردة في هذا الموقع مخصصة لأغراض التوعية والتثقيف الصحي العام فقط، ولا تعتبر بأي حال من الأحوال تشخيصًا طبيًا، أو توصية علاجية فردية، أو بديلاً عن الكشف الإكلينيكي المباشر والفحوصات المعملية التي يحددها الطبيب المختص وفقًا للحالة الصحية المستقلة لكل مريض. في الحالات الطارئة، يرجى التوجه فورًا إلى أقرب قسم طوارئ أو مستشفى.",
      footerHostedNotice: "جاهز للنشر والاستضافة عبر GitHub Pages | ملف برمجي موحد ومستقل",
      floatingWaTooltip: "تواصل مع الدكتور واتساب",
      modalBtnWa: "استفسر عن هذه الحالة عبر واتساب",
      modalBtnClose: "إغلاق"
    },
    en: {
      pageTitle: "Dr. Ahmed Gouda Nageh | Specialist in General, Laparoscopic, Bariatric Surgery & Proctology",
      metaDesc: "Official medical portfolio of Dr. Ahmed Gouda Nageh - Specialist in General Surgery, Laparoscopic Surgery, Bariatric Surgery, and Proctology. British Fellowship in General Surgery. Clinic locations & awareness.",
      docName: "Dr. Ahmed Gouda Nageh",
      docTitleShort: "Specialist in General & Laparoscopic Surgery",
      navHome: "Home",
      navAbout: "About Doctor",
      navSpecialties: "Specialties",
      navLibrary: "Medical Education",
      navGallery: "Awareness Gallery",
      navTestimonials: "Patient Reviews",
      navClinics: "Clinics",
      navContact: "Contact Us",
      btnBookNav: "Book Appointment",
      langBtnText: "العربية",

      // Hero
      heroBadgeFellowship: "British Fellowship in General Surgery",
      heroDocName: "Dr. Ahmed Gouda Nageh",
      heroDocNameEn: "أخصائي الجراحة العامة والمناظير",
      heroSpecialty: "Specialist in General Surgery, Laparoscopic Surgery, Bariatric Surgery, and Proctology",
      heroBio: "Welcome to the official medical platform for surgical awareness and advanced patient care. Dedicated to providing trustworthy medical education and seamless direct booking and inquiries via WhatsApp.",
      btnBookHero: "Book via WhatsApp",
      btnExploreSpecialties: "Explore Specialties",
      hlGenSurg: "General Surgery",
      hlLapSurg: "Laparoscopic Surgery",
      hlBarSurg: "Bariatric Surgery",
      hlProctoSurg: "Proctology & Anorectal",
      tabScrubs: "Surgical Scrubs (OR)",
      tabSuit: "Formal Suit",
      scrubsTag: "Verified Photo — Laparoscopic Procedure",
      suitTag: "Verified Photo — Formal Suit",

      // About
      aboutTag: "Professional Profile",
      aboutTitle: "About the Doctor",
      aboutSubtitle: "An ethical and professional commitment to delivering precision surgical care and evidence-based patient education",
      aboutLeadText: "Dr. Ahmed Gouda Nageh, Specialist in General Surgery, Laparoscopic Surgery, Bariatric Surgery, and Proctology. This page aims to introduce his medical specialties and provide clear educational guidance to help visitors understand surgical topics and discuss them effectively with their doctor.",
      aboutSecondaryText: "Clinical practice is rooted in thorough individual assessment for every patient, selecting the most appropriate surgical or minimally invasive laparoscopic technique adhering strictly to infection control and patient safety, with sustained post-operative follow-up to ensure optimal recovery.",
      factItem1: "Adoption of modern surgical and laparoscopic modalities to maximize safety and minimize recovery duration.",
      factItem2: "Accurate clinical evaluation and determining surgical eligibility according to recognized medical guidelines.",
      factItem3: "Convenient consultation coordination across 5 approved medical clinics and centers.",
      qualTitle: "British Fellowship in General Surgery",
      qualTag: "Qualification provided by owner",
      qualNotice: "This qualification is stated based on information supplied by the doctor; formal registration records and training certificates will be updated as independently verified documentation is confirmed.",
      btnInquireDoc: "Inquire About Consultations",

      // Specialties
      specialtiesTag: "Clinical Services",
      specialtiesTitle: "Surgical Specialties",
      specialtiesSubtitle: "A comprehensive scope of general surgical procedures, laparoscopic interventions, bariatrics, and proctology",
      spec1Title: "General Surgery",
      spec1Desc: "Diagnosis and surgical management of common surgical conditions including hernia repairs, cholecystectomy, appendectomy, and soft tissue excisions adhering to rigorous safety protocols.",
      spec2Title: "Laparoscopic Surgery",
      spec2Desc: "Performing minimally invasive interventions through tiny keyhole incisions, significantly reducing postoperative pain, blood loss, and accelerating patient recovery to normal routines.",
      spec3Title: "Bariatric Surgery",
      spec3Desc: "Sleeve gastrectomy and obesity surgeries tailored to thorough body mass index (BMI) evaluation, metabolic assessment, and long-term nutritional and clinical follow-up.",
      spec4Title: "Proctology & Colorectal",
      spec4Desc: "Specialized clinical and surgical management of anorectal disorders including hemorrhoids, anal fissures, fistulae, and abscesses utilizing contemporary patient-friendly techniques.",
      btnLearnMore: "Learn More",

      // Library
      libraryTag: "Education Library",
      libraryTitle: "Surgical Patient Education",
      librarySubtitle: "Clear, evidence-grounded articles and guidance to empower patients and families in understanding clinical choices",
      filterAll: "All Topics",
      filterBariatric: "Bariatric Surgery",
      filterLap: "Laparoscopy",
      filterGeneral: "General Surgery",
      filterProcto: "Proctology",
      filterGuide: "Preparation & Care",
      catBariatric: "Bariatrics",
      catCriteria: "Clinical Criteria",
      catTech: "Surgical Techniques",
      catPrep: "Preparation Guidance",
      catCare: "Recovery & Care",
      catProcto: "Proctology",
      readTime: "4 min read",
      btnReadMore: "Read More",
      art1Title: "What is Sleeve Gastrectomy?",
      art1Excerpt: "A balanced clinical overview of vertical sleeve gastrectomy, volume reduction mechanics, candidate assessment, risks, and alternatives.",
      art2Title: "When Might a Patient Need Bariatric Surgery?",
      art2Excerpt: "Clarifying BMI thresholds, metabolic co-morbidities, prior treatment trials, and emphasizing that surgery is an individualized medical decision.",
      art3Title: "Open Surgery vs. Laparoscopic Surgery?",
      art3Excerpt: "A scientific comparison detailing port incisions, instruments, recovery timelines, and how the clinical team determines the safest approach.",
      art4Title: "How Should a Patient Prepare for Surgery?",
      art4Excerpt: "Essential preoperative guidelines: baseline blood work, medication reviews, fasting instructions, and consultation protocols.",
      art5Title: "The Importance of Postoperative Follow-Up",
      art5Excerpt: "Adherence to clinical visits, surgical wound healing evaluation, dietary staging, and identifying signs that require timely communication.",
      art6Title: "Understanding Proctology & Anorectal Health",
      art6Excerpt: "Guidance on common symptoms (discomfort, bleeding, swelling) and the crucial value of early, dignified clinical examination.",
      templateTitle: "Surgical Services & Clinical Awareness",
      templateDesc: "Explore our spectrum of surgical procedures and simplified clinical guidance to help you understand medical conditions and care options. The doctor determines the optimal approach following in-person examination.",
      svcCountBadge: "30 Verified Surgical & Educational Services",
      svcSearchPlaceholder: "Search surgical services (e.g. gallbladder, hernia, laser, laparoscopy...)",
      svcFilterAll: "All Services (30)",
      svcFilterBariatric: "Bariatric & Laparoscopic (5)",
      svcFilterHernia: "Hernia & Abdominal Wall (3)",
      svcFilterEndocrine: "Endocrine, Breast & Tumors (6)",
      svcFilterProcto: "Proctology, Colon & Skin (9)",
      svcFilterGeneral: "General & Other Specialties (7)",
      svcShowingCount: "Showing {count} of 30 services",
      svcNoResultsTitle: "No matching surgical services found",
      svcNoResultsDesc: "Try alternative search keywords or reset active filters to view all services.",
      svcResetSearch: "Reset Filters & Search",
      btnServiceWa: "Inquire via WhatsApp",
      catBariatricLap: "Bariatric & Laparoscopy",
      catHerniaWall: "Hernia & Abdominal Wall",
      catEndocrineBreast: "Endocrine, Breast & Tumors",
      catProctoSkin: "Proctology, Colon & Skin",
      catGeneralOther: "General & Other Surgeries",

      // 30 Services English
      svc1Title: "Comprehensive Bariatric Procedures",
      svc1Desc: "Surgical procedures aimed at reducing stomach volume or altering digestive pathways to assist with weight reduction, determined by individual clinical assessment.",
      svc2Title: "Laparoscopic Hiatal Hernia Repair",
      svc2Desc: "Minimally invasive surgery to repair hiatal hernia defects, which may help manage reflux symptoms in appropriately evaluated patients.",
      svc3Title: "Laparoscopic Cholecystectomy",
      svc3Desc: "Removal of the gallbladder for symptomatic gallstones or designated inflammatory conditions, following clinical and ultrasound evaluation.",
      svc4Title: "Laparoscopic Appendectomy",
      svc4Desc: "Minimally invasive excision of an inflamed appendix when clinically indicated and deemed suitable for the patient's condition.",
      svc5Title: "Laparoscopic Management of Hyperhidrosis",
      svc5Desc: "A specialized procedure considered for severe hyperhidrosis refractory to conservative care, following thorough discussion of clinical risks and benefits.",
      svc6Title: "Inguinal Hernia Repair (Open & Laparoscopic)",
      svc6Desc: "Reduction of herniated tissue and reinforcement of abdominal wall weakness, utilizing surgical mesh where clinically appropriate.",
      svc7Title: "Umbilical Hernia Repair (Open & Laparoscopic)",
      svc7Desc: "Management of periumbilical herniation and repair of the localized abdominal wall defect according to surgical assessment.",
      svc8Title: "Incisional Hernia Reconstruction",
      svc8Desc: "Repair of herniation occurring at previous surgical incision sites, selecting the optimal anatomical reconstruction approach for each case.",
      svc9Title: "Varicocele Repair (Surgical & Laparoscopic)",
      svc9Desc: "Ligation of dilated veins around the testicle in clinically indicated cases, guided by symptom severity and reproductive evaluation.",
      svc10Title: "Undescended Testis Management (Orchiopexy)",
      svc10Desc: "Clinical evaluation and surgical repositioning for undescended testicles, indicated based on age, ultrasound findings, and pediatric guidelines.",
      svc11Title: "Breast Tumors Management & Excision (Benign & Malignant)",
      svc11Desc: "Diagnostic assessment and surgical excision of breast lumps when indicated, tailoring the multidisciplinary plan to tissue histology.",
      svc12Title: "Thyroid Nodules & Tumors Excision",
      svc12Desc: "Thorough evaluation of thyroid nodules and neoplasms, determining the appropriateness of partial or total thyroidectomy per clinical diagnosis.",
      svc13Title: "Male Gynecomastia Correction",
      svc13Desc: "Surgical correction of enlarged glandular or fatty male breast tissue in suitable candidates following clinical and endocrine evaluation.",
      svc14Title: "Body Contouring & Liposuction",
      svc14Desc: "Localized body contouring for qualified candidates; not a substitute for metabolic obesity treatment or general weight reduction.",
      svc15Title: "Hemorrhoids Treatment (Surgical & Laser)",
      svc15Desc: "Evaluation of hemorrhoidal disease and selection of suitable interventions per grade, clarifying that laser is not universal for every case.",
      svc16Title: "Anal Fistula Management",
      svc16Desc: "Accurate mapping and repair of the tract between anal canal and perianal skin, prioritizing sphincter preservation with surgeon-chosen technique.",
      svc17Title: "Anal Fissure Treatment",
      svc17Desc: "Addressing anoderm mucosal tears, initiating conservative medical therapy where appropriate and considering surgery for chronic refractory cases.",
      svc18Title: "Pilonidal Sinus / Cyst Treatment",
      svc18Desc: "Care for natal cleft pilonidal disease and sinus tracts, ranging from localized debridement to definitive surgical excision based on presentation.",
      svc19Title: "Perianal Abscess Incision & Drainage",
      svc19Desc: "Prompt evacuation of purulent collections to relieve pressure and pain, followed by diagnostic surveillance to prevent secondary fistula formation.",
      svc20Title: "Ingrown Toenail Treatment",
      svc20Desc: "Clinical intervention for ingrown nail edge borders, resolving infection and performing matrix partial excision based on grade.",
      svc21Title: "Sebaceous Cyst Excision",
      svc21Desc: "Complete removal of benign epidermoid cysts when symptomatic, recurrent, or medically indicated, ensuring complete capsule clearance.",
      svc22Title: "Cutaneous Dermoid / Hair Cyst Excision",
      svc22Desc: "Clinical evaluation and surgical removal of skin-associated cystic inclusions and hair-bearing tracts according to diagnosis.",
      svc23Title: "Ganglion Cyst Excision",
      svc23Desc: "Assessment of fluid-filled cysts adjacent to joints or tendon sheaths, determining observation, aspiration, or surgical resection.",
      svc24Title: "Splenectomy",
      svc24Desc: "Removal of the spleen for clearly defined medical indications such as trauma or hematological conditions, weighing benefits and infection precautions.",
      svc25Title: "Gastrointestinal Tumors Resection",
      svc25Desc: "Evaluation of benign and malignant GI lesions, determining optimal oncological resection margins aligned with clinical pathology.",
      svc26Title: "Intestinal Obstruction Management",
      svc26Desc: "Urgent evaluation and management of mechanical or functional bowel obstruction according to underlying etiology and severity.",
      svc27Title: "Breast Abscess Incision & Drainage",
      svc27Desc: "Drainage of breast purulent collections when indicated, addressing the underlying etiology and establishing an appropriate antibiotic and care regimen.",
      svc28Title: "Diabetic Foot Care & Surgery",
      svc28Desc: "Comprehensive evaluation of diabetic ulcers, wound debridement, and infection control within an integrated limb-salvage medical plan.",
      svc29Title: "Male Circumcision",
      svc29Desc: "Medical procedure discussed according to age, general health status, and informed consent, adhering strictly to sterile surgical standards.",
      svc30Title: "Burn Care & Wound Management",
      svc30Desc: "Depth grading, meticulous antiseptic dressing, wound debridement, and specialized burn management tailored to injury degree.",


      // Gallery
      galleryTag: "Educational Media",
      galleryTitle: "Awareness & Media Gallery",
      gallerySubtitle: "Medical illustrations and video resources explaining surgical concepts with the highest regard for patient confidentiality",
      badgeIllustration: "Illustration",
      badgeDiagram: "Anatomy Diagram",
      badgeVideo: "Educational Video",
      gal1Title: "Laparoscopic Keyhole Port Distribution",
      gal1Desc: "Clinical schematic demonstrating minimally invasive optical and instrument access avoiding large open abdominal incisions.",
      gal2Title: "Stomach Anatomy & Sleeve Resection Line",
      gal2Desc: "Demonstrating the lateral resection line along the gastric curvature while preserving natural pyloric continuity.",
      gal3Title: "Pre-Surgical Patient Preparation (Video)",
      gal3Desc: "A video guide in preparation to outline essential preoperative patient instructions directly from Dr. Ahmed.",
      galleryEthicalDisclaimer: "Privacy & Medical Ethics Notice: All visual media featured here are intended strictly for general patient education. The website adheres strictly to medical confidentiality, never exposing identifiable patient data without verified authorization in compliance with medical council regulations.",

      // Testimonials
      testimonialsTag: "Genuine Experiences",
      testimonialsTitle: "Patient Messages & Appreciation",
      testimonialsSubtitle: "Authentic messages received from patients. Identifiable names and avatars are protected in adherence to medical ethics.",
      badgeVerifiedReview: "Verified Feedback",
      testDisclaimerText: "Medical Ethics Note: All patient feedback shown is drawn from verified communications after successful recovery. Identifying details have been anonymized in strict compliance with medical privacy laws.",

      // Clinics
      clinicsTag: "Practice Locations",
      clinicsTitle: "Clinic Locations",
      clinicsSubtitle: "Dr. Ahmed Gouda Nageh provides clinical consultations across 5 established medical centers",
      clinic1Badge: "Clinic 1",
      clinic1Name: "El-Baramoun",
      clinic1Desc: "Ebad El-Rahman Medical Complex",
      clinic2Badge: "Clinic 2",
      clinic2Name: "El-Danabiq",
      clinic2Desc: "The Medical Complex",
      clinic3Badge: "Clinic 3",
      clinic3Name: "El-Kheiria",
      clinic3Desc: "In front of the Old Mosque",
      clinic4Badge: "Clinic 4",
      clinic4Name: "Dimshilt",
      clinic4Desc: "Al-Tadawi Tower",
      clinic5Badge: "Clinic 5",
      clinic5Name: "Mit Mezah",
      clinic5Desc: "Next to the Health Unit",
      clinicNote: "Consultation appointments and coordination are handled in advance via WhatsApp for your convenience.",
      btnBookClinic: "Book via WhatsApp",

      // Contact
      contactTag: "Direct Communication",
      contactTitle: "Contact Doctor & Consultation Bookings",
      contactSubtitle: "We welcome your inquiries and appointment requests through official channels. WhatsApp is recommended for swift response.",
      channelWaTitle: "Official WhatsApp Chat (Preferred)",
      channelPhoneTitle: "Direct Phone Call",
      channelFbTitle: "Official Facebook Page",
      helperTitle: "Direct WhatsApp Booking Assistant",
      helperDesc: "Select your preferred clinic branch and surgical inquiry to generate a tailored message sent directly to Dr. Ahmed's WhatsApp:",
      lblSelectClinic: "Select Clinic:",
      lblSelectSpec: "Procedure or Specialty:",
      btnStartWaChat: "Send Inquiry via WhatsApp",
      bookingNoticeNote: "* Sending this message initiates an appointment request and schedule coordination; exact times are confirmed directly by clinic staff.",

      // Footer
      footerBio: "Specialist in General Surgery, Laparoscopic Surgery, Bariatric Surgery, and Proctology — British Fellowship in General Surgery. Evidence-based care.",
      footerNavTitle: "Navigation",
      footerClinicsTitle: "Clinic Branches",
      footerContactTitle: "Contact Channels",
      generalDisclaimer: "Medical Disclaimer: The information and articles provided on this platform are for general health educational purposes only. They do not constitute a clinical diagnosis, individual medical advice, or a substitute for personal consultation and assessment with a qualified specialist. In emergencies, proceed immediately to the nearest hospital emergency department.",
      footerHostedNotice: "Ready for GitHub Pages deployment | Self-contained static build",
      floatingWaTooltip: "Chat with Doctor on WhatsApp",
      modalBtnWa: "Inquire About This Condition on WhatsApp",
      modalBtnClose: "Close"
    }
  };

  // ----------------------------------------------------------------------
  // 2. Comprehensive Educational Articles Database
  // ----------------------------------------------------------------------
  const educationalArticles = {
    sleeve: {
      category: { ar: "جراحات السمنة", en: "Bariatric Surgery" },
      title: {
        ar: "ما هي عملية تكميم المعدة؟ (Sleeve Gastrectomy)",
        en: "What is Sleeve Gastrectomy?"
      },
      content: {
        ar: `
          <p>تُعد عملية تكميم المعدة بالمنظار (Laparoscopic Sleeve Gastrectomy) إحدى أكثر جراحات السمنة شيوعاً واعتماداً حول العالم؛ حيث تهدف إلى مساعدة المرضى الذين يعانون من السمنة المفرطة على خفض أوزانهم وتحسين حالتهم الصحية العامة.</p>
          
          <h4>كيف يتم إجراء العملية؟</h4>
          <p>تتم العملية بواسطة المنظار الجراحي عبر 3 إلى 4 ثقوب دقيقة في جدار البطن دون الحاجة لفتح جراحي كبير. يتم خلالها استئصال طولي لحوالي 75% إلى 80% من حجم المعدة، بما يشمل قبة المعدة (Gastric Fundus)، وهي المنطقة الرئيسية المسؤولة عن إفراز هرمون الجريلين (هرمون الجوع)، مما يقلل الشهية بشكل ملحوظ ويمنح المريض شعوراً سريعاً بالشبع بعد تناول كميات قليلة من الطعام.</p>
          
          <h4>مزايا تكميم المعدة:</h4>
          <ul>
            <li>الحفاظ على المسار التشريحي الطبيعي للجهاز الهضمي دون قص أو تحويل للأمعاء.</li>
            <li>الحفاظ على صمام البواب الطبيعي للمعدة، مما يقلل فرص حدوث متلازمة الإفراغ السريع (Dumping Syndrome).</li>
            <li>المساهمة في تحسين أو علاج الأمراض المصاحبة للسمنة مثل السكري من النوع الثاني، وارتفاع ضغط الدم، وتوقف التنفس أثناء النوم.</li>
          </ul>

          <div class="modal-disclaimer">
            <strong>إخلاء مسؤولية طبية:</strong> نجاح الجراحة يعتمد على التقييم الطبي الدقيق قبل العملية، والالتزام الصارم بتعليمات التغذية والمتابعة الطبية المنتظمة بعدها. العملية ليست مناسبة لجميع حالات زيادة الوزن.
          </div>
        `,
        en: `
          <p>Laparoscopic Sleeve Gastrectomy is one of the most widely performed and clinically established bariatric procedures worldwide, designed to achieve substantial, sustainable weight reduction in patients with clinical obesity.</p>
          
          <h4>Procedure Mechanism:</h4>
          <p>Performed laparoscopically through small keyhole abdominal incisions, approximately 75–80% of the stomach's lateral volume is resected, including the gastric fundus. This significantly lowers Ghrelin (the hunger hormone) levels, creating early satiety with smaller portions.</p>

          <h4>Key Clinical Advantages:</h4>
          <ul>
            <li>Preserves the natural continuity of the gastrointestinal tract without intestinal bypass or rearrangement.</li>
            <li>Preserves the pyloric sphincter, maintaining physiological gastric emptying and mitigating dumping syndrome.</li>
            <li>Leads to marked improvement or remission of obesity-associated co-morbidities such as Type 2 diabetes and hypertension.</li>
          </ul>

          <div class="modal-disclaimer">
            <strong>Medical Disclaimer:</strong> Suitability depends on individualized multidisciplinary clinical evaluation. Long-term success requires strict adherence to dietary guidelines and structured medical follow-up.
          </div>
        `
      }
    },
    criteria: {
      category: { ar: "المعايير الطبية", en: "Clinical Criteria" },
      title: {
        ar: "متى قد يحتاج المريض إلى جراحة السمنة؟",
        en: "When is Bariatric Surgery Clinically Indicated?"
      },
      content: {
        ar: `
          <p>لا تُعد جراحات السمنة تدخلاً تجميلياً عاماً متاحاً لكل من يرغب في خسارة بضعة كيلوجرامات؛ بل هي إجراءات جراحية علاجية تخضع لضوابط إكلينيكية معتمدة تهدف لحماية صحة المريض من مضاعفات السمنة المفرطة.</p>

          <h4>معايير الترشيح الإكلينيكية المعتمدة:</h4>
          <ul>
            <li><strong>مؤشر كتلة الجسم (BMI):</strong> أن يكون 40 أو أكثر بدون شروط إضافية.</li>
            <li><strong>مؤشر كتلة الجسم بين 35 و 39.9:</strong> مع وجود مرض أو أكثر من الأمراض المزمنة المرتبطة بالسمنة، مثل:
              <ul>
                <li>داء السكري من النوع الثاني.</li>
                <li>ارتفاع ضغط الدم المزمن وأمراض القلب.</li>
                <li>انقطاع التنفس الانسدادي أثناء النوم.</li>
                <li>آلام المفاصل الشديدة ومشاكل الحركة الناتجة عن الوزن.</li>
              </ul>
            </li>
            <li>فشل المحاولات السابقة لإنقاص الوزن عبر الأنظمة الغذائية وممارسة الرياضة تحت إشراف متخصص.</li>
            <li>الاستعداد النفسي والالتزام بتغيير نمط الحياة والمتابعة الدورية بعد العملية.</li>
          </ul>

          <div class="modal-disclaimer">
            <strong>إخلاء مسؤولية:</strong> مؤشر كتلة الجسم وحده ليس المعيار الوحيد؛ يجب إجراء فحص إكلينيكي كامل وتحاليل شاملة وتقييم من فريق التخدير والجراحة.
          </div>
        `,
        en: `
          <p>Bariatric surgery is a therapeutic metabolic intervention rather than a cosmetic procedure, governed by standardized international clinical guidelines.</p>

          <h4>Clinical Eligibility Criteria:</h4>
          <ul>
            <li><strong>Body Mass Index (BMI) ≥ 40:</strong> Significant obesity warranting surgical evaluation.</li>
            <li><strong>BMI 35 to 39.9:</strong> In conjunction with at least one severe obesity-related health co-morbidity, such as:
              <ul>
                <li>Type 2 Diabetes Mellitus.</li>
                <li>Hypertension and cardiovascular strain.</li>
                <li>Obstructive sleep apnea.</li>
                <li>Severe weight-bearing joint arthropathy.</li>
              </ul>
            </li>
            <li>Documented unsuccessful trials of medically supervised lifestyle and dietary modifications.</li>
            <li>Patient commitment to lifelong nutritional staging and regular clinical surveillance.</li>
          </ul>

          <div class="modal-disclaimer">
            <strong>Medical Disclaimer:</strong> Numerical BMI is one parameter among a complete clinical workup including cardiac, endocrine, and anesthesia evaluations.
          </div>
        `
      }
    },
    laparoscopic: {
      category: { ar: "التقنيات الجراحية", en: "Surgical Techniques" },
      title: {
        ar: "ما الفرق بين الجراحة التقليدية وجراحة المناظير؟",
        en: "Open Surgery vs. Minimally Invasive Laparoscopy"
      },
      content: {
        ar: `
          <p>أحدثت جراحة المناظير (Laparoscopy) ثورة حقيقية في طب الجراحة الحديث، حيث مكنت الجراح من إجراء أدق العمليات بكفاءة عالية وبأقل قدر ممكن من التأثير على أنسجة الجسم.</p>

          <h4>أبرز الفروق الجوهرية:</h4>
          <ul>
            <li><strong>حجم الجرح والشق الجراحي:</strong>
              الجراحة التقليدية تتطلب شقاً طويلاً للوصول للأعضاء الباطنية، بينما تتم جراحة المناظير عبر 3 إلى 4 ثقوب مجهرية متناهية الصغر (من 0.5 إلى 1 سم فقط).
            </li>
            <li><strong>مستوى الألم بعد العملية:</strong>
              الألم بعد المنظار أقل بكثير مقارنة بالجراحة المفتوحة، مما يقلل حاجة المريض للمسكنات القوية.
            </li>
            <li><strong>مدة الإقامة في المستشفى وسرعة الاستشفاء:</strong>
              غالبًا ما يغادر مريض المنظار المستشفى خلال 24 ساعة، ويعود لحياته الطبيعية وعمله خلال أيام قليلة مقارنة بأسابيع في الجراحة المفتوحة.
            </li>
            <li><strong>النتائج التجميلية ومعدلات النزيف:</strong>
              تترك جراحة المناظير ندبات شبه غير مرئية وتتميز بمعدلات نزيف والتهاب جروح منخفضة للغاية بفضل الرؤية المكبرة فائقة الدقة (HD).
            </li>
          </ul>

          <div class="modal-disclaimer">
            <strong>إخلاء مسؤولية:</strong> رغم فوائد المناظير، تبقى الجراحة المفتوحة خيارًا علميًا ضروريًا في بعض الحالات الخاصة أو المعقدة وفق تقدير الجراح المعالج.
          </div>
        `,
        en: `
          <p>Minimally invasive laparoscopic surgery has revolutionized modern surgical intervention, delivering high-precision outcomes with minimal trauma to surrounding tissues.</p>

          <h4>Key Clinical Distinctions:</h4>
          <ul>
            <li><strong>Incision Size:</strong> Traditional open surgery requires a large abdominal incision, whereas laparoscopy utilizes 3 to 4 tiny keyhole ports (0.5 to 1 cm).</li>
            <li><strong>Postoperative Pain:</strong> Significantly attenuated pain following keyhole approaches, reducing reliance on high-dose analgesics.</li>
            <li><strong>Hospital Stay & Recovery:</strong> Most laparoscopic patients are safely discharged within 24–48 hours, returning to work within days rather than weeks.</li>
            <li><strong>Cosmetics & Wound Complications:</strong> Minimal scarring and dramatically reduced surgical site infection rates due to high-definition optical visualization.</li>
          </ul>

          <div class="modal-disclaimer">
            <strong>Medical Disclaimer:</strong> While laparoscopy offers significant advantages, open surgery remains an essential and sometimes life-saving clinical choice in complex scenarios.
          </div>
        `
      }
    },
    prep: {
      category: { ar: "إرشادات التحضير", en: "Preparation Guidelines" },
      title: {
        ar: "كيف يستعد المريض للعملية الجراحية؟",
        en: "How Should a Patient Prepare for Surgery?"
      },
      content: {
        ar: `
          <p>يُعد التحضير الجيد قبل الجراحة ركيزة أساسية لضمان سلامة المريض، وتقليل مخاطر التخدير، وتسهيل عملية التعافي السريع بعد العملية.</p>

          <h4>خطوات التحضير الأساسية:</h4>
          <ul>
            <li><strong>الفحوصات والتحاليل المخبرية:</strong> إجراء التحاليل الروتينية (صورة دم كاملة، وظائف كبد وكلى، سيولة الدم، فصيلة الدم، رسم قلب، وأشعة الصدر إذا لزم الأمر).</li>
            <li><strong>مراجعة الأدوية المزمنة:</strong> إبلاغ الطبيب وفريق التخدير بجميع الأدوية والمكملات، خاصة مسيلات الدم (مثل الأسبرين أو الوارفارين) وأدوية السكري والضغط لضبط جرعاتها أو إيقافها مؤقتًا.</li>
            <li><strong>ساعات الصيام (NPO):</strong> الامتناع التام عن تناول الطعام والشراب والماء لمدة لا تقل عن 6 إلى 8 ساعات قبل موعد العملية لتجنب مخاطر الارتجاع أثناء التخدير.</li>
            <li><strong>الإقلاع عن التدخين:</strong> يُنصح بالتوقف عن التدخين قبل العملية بفترة لتحسين وظائف الرئتين وتسريع التئام الأنسجة الجراحية.</li>
          </ul>

          <div class="modal-disclaimer">
            <strong>إخلاء مسؤولية:</strong> المعلومات الواردة للتوعية العامة ولا تغني عن الكشف الطبي أو التشخيص أو الخطة العلاجية التي يحددها الطبيب حسب حالة كل مريض.
          </div>
        `,
        en: `
          <p>Thorough preoperative preparation is critical to surgical success, significantly mitigating anesthesia risks and minimizing postoperative complications.</p>

          <h4>Essential Preparation Guidelines:</h4>
          <ul>
            <li><strong>Diagnostic Lab Tests:</strong> Baseline evaluations (CBC, coagulation profile, kidney & liver functions, ECG, and relevant imaging).</li>
            <li><strong>Medication Review:</strong> Disclosing all ongoing medications (especially anticoagulants/blood thinners, diabetic medications, and antihypertensives) to adjust or hold doses appropriately.</li>
            <li><strong>Fasting Protocols:</strong> Strictly observing fasting instructions (nil per os / NPO) as directed by the anesthesiologist (typically 6–8 hours prior to surgery).</li>
            <li><strong>Smoking Cessation:</strong> Pausing tobacco use prior to surgery optimizes pulmonary function and surgical wound healing.</li>
          </ul>

          <div class="modal-disclaimer">
            <strong>Medical Disclaimer:</strong> The information provided is for general educational awareness and is not a substitute for clinical examination or diagnosis.
          </div>
        `
      }
    },
    followup: {
      category: { ar: "الرعاية والتعافي", en: "Recovery & Care" },
      title: {
        ar: "ما أهمية المتابعة بعد الجراحة؟",
        en: "The Importance of Postoperative Follow-Up"
      },
      content: {
        ar: `
          <p>لا تنتهي الرعاية الطبية بانتهاء العملية الجراحية والخروج من المستشفى؛ بل تُعد مرحلة ما بعد الجراحة مرحلة حاسمة لتحقيق النتائج المرجوة والحفاظ على سلامة المريض.</p>

          <h4>محاور المتابعة الطبية الدورية:</h4>
          <ul>
            <li><strong>مراقبة التئام الجروح:</strong> التأكد من خلو الجروح من علامات الالتهاب أو التورم أو الإفرازات غير الطبيعية، وتحديد توقيت فك الغرز أو الضمادات.</li>
            <li><strong>إدارة وتسكين الألم:</strong> ضبط الأدوية والمسكنات المناسبة لحالة المريض دون إفراط لتسهيل الحركة المبكرة.</li>
            <li><strong>التدرج الغذائي:</strong> اتباع التعليمات الغذائية الخاصة بكل جراحة (خاصة في جراحات الجهاز الهضمي والسمنة) لتجنب عسر الهضم أو القيء أو توسع المعدة.</li>
            <li><strong>العلامات التحذيرية التي تستدعي التواصل الفوري:</strong> ارتفاع درجة الحرارة المفاجئ، الألم الحاد المتزايد الذي لا يستجيب للمسكنات، الغثيان والقيء المستمر، أو ضيق التنفس.</li>
          </ul>

          <div class="modal-disclaimer">
            <strong>إخلاء مسؤولية:</strong> المعلومات الواردة للتوعية العامة ولا تغني عن الكشف الطبي أو التشخيص أو الخطة العلاجية التي يحددها الطبيب حسب حالة كل مريض.
          </div>
        `,
        en: `
          <p>Surgical care does not conclude when the patient leaves the operating theater; structured postoperative follow-up is vital to secure therapeutic outcomes and ensure safety.</p>

          <h4>Key Follow-Up Pillars:</h4>
          <ul>
            <li><strong>Wound Surveillance:</strong> Evaluating surgical sites for signs of infection, abnormal discharge, or delayed healing.</li>
            <li><strong>Pain Optimization:</strong> Tailoring pain management protocols to keep the patient comfortable and encourage early mobilization.</li>
            <li><strong>Gradual Dietary Progression:</strong> Adhering strictly to staged post-op dietary guidelines (crucial in digestive and bariatric surgeries).</li>
            <li><strong>Red Flag Symptoms:</strong> Immediate medical contact is warranted for persistent fever, escalating pain, continuous vomiting, or shortness of breath.</li>
          </ul>

          <div class="modal-disclaimer">
            <strong>Medical Disclaimer:</strong> The information provided is for general educational awareness and is not a substitute for clinical examination or diagnosis.
          </div>
        `
      }
    },
    proctology: {
      category: { ar: "جراحة الشرج", en: "Proctology Care" },
      title: {
        ar: "التوعية بجراحات الشرج والمستقيم",
        en: "Understanding Proctology & Anorectal Health"
      },
      content: {
        ar: `
          <p>تُعد أمراض الشرج والمستقيم من الحالات الطبية الشائعة جدًا، ولكن غالبًا ما يتأخر المرضى في طلب الاستشارة الطبية بسبب الحرج غير المبرر أو اللجوء لوصفات غير دقيقة، مما قد يفاقم الحالة.</p>

          <h4>الأمراض الشائعة وطبيعتها:</h4>
          <ul>
            <li><strong>البواسير (Hemorrhoids):</strong> تمدد وتورم في الأوردة الدموية المحيطة بفتحة الشرج، وتصنف لدرجات مختلفة تحدد طبيعة العلاج التحفظي أو الجراحي أو تقنيات الليزر الحديثة.</li>
            <li><strong>الشرخ الشرجي (Anal Fissure):</strong> تمزق صغير في بطانة القناة الشرجية يسبب ألمًا حادًا أثناء الإخراج ونزيفًا سطحيًا خفيفًا.</li>
            <li><strong>الناسور الشرجي (Anal Fistula):</strong> قناة غير طبيعية تصل بين الغدد الشرجية الداخلية وسطح الجلد الخارجي، وتتطلب تقييمًا جراحيًا دقيقًا.</li>
          </ul>

          <h4>أهمية التشخيص السريري المبكر:</h4>
          <p>لا تتطلب جميع الحالات تدخلاً جراحياً؛ فالعديد منها يستجيب بشكل ممتاز للعلاج الدوائي وتعديل الألياف والسوائل إذا تم الفحص مبكراً. كما يُعد الفحص السريري ضروريًا لاستبعاد أي أسباب أخرى مسؤولة عن النزيف الشرجي.</p>

          <div class="modal-disclaimer">
            <strong>إخلاء مسؤولية:</strong> المعلومات الواردة للتوعية العامة ولا تغني عن الكشف الطبي أو التشخيص أو الخطة العلاجية التي يحددها الطبيب حسب حالة كل مريض.
          </div>
        `,
        en: `
          <p>Anorectal conditions are exceptionally prevalent, yet patients frequently delay seeking clinical consultation due to unwarranted embarrassment, potentially leading to avoidable complications.</p>

          <h4>Common Anorectal Conditions:</h4>
          <ul>
            <li><strong>Hemorrhoids:</strong> Swollen vascular cushions within the anal canal, categorized into clinical grades that dictate conservative, laser, or surgical interventions.</li>
            <li><strong>Anal Fissure:</strong> A minor superficial tear in the anal mucosa causing sharp discomfort during bowel movements and episodic bright red bleeding.</li>
            <li><strong>Anal Fistula:</strong> An abnormal tract communicating between an infected anal crypt gland and the perineal skin, requiring specialized surgical assessment.</li>
          </ul>

          <h4>Importance of Early Clinical Evaluation:</h4>
          <p>Not every anorectal symptom necessitates surgery. Many early-stage conditions resolve successfully with conservative medical management, fiber optimization, and hydration. Crucially, direct clinical examination is mandatory to exclude other underlying etiologies for rectal bleeding.</p>

          <div class="modal-disclaimer">
            <strong>Medical Disclaimer:</strong> The information provided is for general educational awareness and is not a substitute for clinical examination or diagnosis.
          </div>
        `
      }
    }
  };

  // ----------------------------------------------------------------------
  // 3. State Management (Theme & Language)
  // ----------------------------------------------------------------------
  let currentLang = 'ar';
  let currentTheme = 'light';

  try {
    const savedTheme = localStorage.getItem('dr_theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      currentTheme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      currentTheme = 'dark';
    }
  } catch (e) {
    currentTheme = 'light';
  }

  try {
    const savedLang = localStorage.getItem('dr_lang');
    if (savedLang === 'en' || savedLang === 'ar') {
      currentLang = savedLang;
    }
  } catch (e) {
    currentLang = 'ar';
  }

  function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const themeBtn = document.getElementById('themeToggleBtn');

    if (theme === 'dark') {
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
      if (themeBtn) themeBtn.setAttribute('aria-pressed', 'true');
    } else {
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
      if (themeBtn) themeBtn.setAttribute('aria-pressed', 'false');
    }

    try {
      localStorage.setItem('dr_theme', theme);
    } catch (e) {}
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    if (translations[lang] && translations[lang].pageTitle) {
      document.title = translations[lang].pageTitle;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang] && translations[lang].metaDesc) {
      metaDesc.setAttribute('content', translations[lang].metaDesc);
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    const langBtnText = document.getElementById('langBtnText');
    if (langBtnText) {
      langBtnText.textContent = lang === 'ar' ? 'English' : 'العربية';
    }

    if (typeof updateServicesLanguage === 'function') {
      updateServicesLanguage(lang);
    }

    try {
      localStorage.setItem('dr_lang', lang);
    } catch (e) {}
  }

  // ----------------------------------------------------------------------
  // 4. Modal Interactions (Articles, Media, Testimonials Lightbox)
  // ----------------------------------------------------------------------
  const modalOverlay = document.getElementById('articleModalOverlay');
  const modalCategoryBadge = document.getElementById('modalCategoryBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalSecondaryClose = document.getElementById('modalSecondaryClose');
  const modalWaBtn = document.getElementById('modalWaBtn');

  function openModal(category, title, bodyHtml, waSubject) {
    if (!modalOverlay) return;
    modalCategoryBadge.textContent = category;
    modalTitle.textContent = title;
    modalBody.innerHTML = bodyHtml;

    const defaultWaText = currentLang === 'ar'
      ? "السلام عليكم دكتور أحمد، أود الاستفسار عن موضوع: " + title
      : "Hello Dr. Ahmed, I would like to inquire regarding: " + title;

    const subject = waSubject || defaultWaText;
    if (modalWaBtn) {
      modalWaBtn.href = "https://wa.me/201016539193?text=" + encodeURIComponent(subject);
    }

    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  window.openArticleModal = function (articleKey) {
    const article = educationalArticles[articleKey];
    if (!article) return;
    const category = article.category[currentLang];
    const title = article.title[currentLang];
    const body = article.content[currentLang];
    openModal(category, title, body);
  };

  window.openGalleryModal = function (galleryKey) {
    if (galleryKey === 'laparoscopy') {
      const category = currentLang === 'ar' ? "رسم توضيحي" : "Illustration";
      const title = currentLang === 'ar' ? "مخطط المنافذ الدقيقة لجراحة المناظير" : "Laparoscopic Keyhole Port Distribution";
      const body = currentLang === 'ar'
        ? `<div style="text-align:center; margin-bottom:1.5rem;"><img src="assets/images/gallery/laparoscopic-ports.svg" alt="مخطط منافذ المنظار" style="max-height:280px; width:auto; border-radius:12px;"></div><p>يوضح هذا المخطط الطبي طريقة الوصول الآمن للأعضاء الباطنية باستخدام كاميرا المنظار التلسكوبية وأدوات التدخل الدقيقة عبر 3 إلى 4 ثقوب صغيرة، مما يجنب المريض جرح البطن الكبير ويقلل النزيف والآلام بعد الجراحة.</p><div class="modal-disclaimer"><strong>إخلاء مسؤولية:</strong> الرسم مخصص للتثقيف الصحي العام ولا يغني عن الفحص السريري.</div>`
        : `<div style="text-align:center; margin-bottom:1.5rem;"><img src="assets/images/gallery/laparoscopic-ports.svg" alt="Laparoscopic Ports Diagram" style="max-height:280px; width:auto; border-radius:12px;"></div><p>This clinical illustration demonstrates the safe minimally invasive access to abdominal organs via high-definition laparoscopy ports, avoiding traditional large abdominal incisions and reducing postoperative pain and recovery time.</p><div class="modal-disclaimer"><strong>Disclaimer:</strong> Intended solely for general patient education.</div>`;
      openModal(category, title, body);
    } else if (galleryKey === 'sleeve_anatomy') {
      const category = currentLang === 'ar' ? "مخطط تشريحي" : "Anatomy Diagram";
      const title = currentLang === 'ar' ? "تشريح المعدة ومسار عملية التكميم" : "Stomach Anatomy & Sleeve Resection Line";
      const body = currentLang === 'ar'
        ? `<div style="text-align:center; margin-bottom:1.5rem;"><img src="assets/images/gallery/sleeve-anatomy.svg" alt="تشريح المعدة والتكميم" style="max-height:280px; width:auto; border-radius:12px;"></div><p>رسم تشريحي توضيحي يبين استئصال الجزء الأكبر من سعة المعدة بما يشمل قبة المعدة (المنطقة المسؤولة عن هرمون الجريلين)، مع الحفاظ على صمام البواب ومسار الجهاز الهضمي الطبيعي دون أي تحويل للأمعاء.</p><div class="modal-disclaimer"><strong>إخلاء مسؤولية:</strong> الرسم مخصص للتثقيف الصحي العام ولا يغني عن الفحص السريري.</div>`
        : `<div style="text-align:center; margin-bottom:1.5rem;"><img src="assets/images/gallery/sleeve-anatomy.svg" alt="Stomach Anatomy Diagram" style="max-height:280px; width:auto; border-radius:12px;"></div><p>An anatomical schematic showing the vertical resection of the lateral gastric curvature and fundus (the source of Ghrelin hunger hormone), leaving a calibrated tubular sleeve while preserving the pyloric sphincter and natural gastrointestinal continuity.</p><div class="modal-disclaimer"><strong>Disclaimer:</strong> Intended solely for general patient education.</div>`;
      openModal(category, title, body);
    } else if (galleryKey === 'video_guidance') {
      const category = currentLang === 'ar' ? "فيديو توعوي" : "Video Guide";
      const title = currentLang === 'ar' ? "إرشادات التحضير قبل الجراحة" : "Pre-Surgical Patient Preparation";
      const body = currentLang === 'ar'
        ? `<div style="text-align:center; margin-bottom:1.5rem;"><img src="assets/images/gallery/video-guidance-poster.svg" alt="فيديو توعوي" style="max-height:260px; width:auto; border-radius:12px;"></div><p>يجري حاليًا إعداد وتسجيل مقاطع الفيديو التوعوية المعتمدة بصوت وشرح د. أحمد جودة ناجح لتقديم إرشادات مبسطة للمرضى قبل الدخول لغرفة العمليات. سيتم رفع الفيديو فور اعتماده ونشره رسميًا عبر القنوات الطبية المعتمدة.</p><div class="modal-disclaimer"><strong>تنبيه:</strong> سيتم إتاحة الفيديو الطبي فور اكتمال أعمال المونتاج والمراجعة الطبية.</div>`
        : `<div style="text-align:center; margin-bottom:1.5rem;"><img src="assets/images/gallery/video-guidance-poster.svg" alt="Video Guide" style="max-height:260px; width:auto; border-radius:12px;"></div><p>Official patient guidance videos presented by Dr. Ahmed Gouda Nageh are currently being recorded to outline preoperative instructions. The media will be available upon clinical review and approval.</p><div class="modal-disclaimer"><strong>Notice:</strong> Will be published once officially finalized.</div>`;
      openModal(category, title, body);
    }
  };

  window.openTestimonialModal = function (imgSrc, quoteAr, quoteEn) {
    const category = currentLang === 'ar' ? "رسالة مريض موثقة" : "Verified Patient Feedback";
    const title = currentLang === 'ar' ? "انطباع وتجربة مريض بعد الجراحة" : "Post-Procedure Patient Experience";
    const quote = currentLang === 'ar' ? quoteAr : quoteEn;
    const body = `
      <div style="text-align:center; margin-bottom:1.5rem;">
        <img src="${imgSrc}" alt="رسالة المريض" style="max-width:100%; max-height:360px; border-radius:12px; box-shadow:0 4px 18px rgba(0,0,0,0.15);">
      </div>
      <p style="font-size:1.05rem; font-weight:600; text-align:center; color:var(--text-primary); margin-bottom:1rem;">"${quote}"</p>
      <div class="modal-disclaimer">
        <strong>حماية الخصوصية الطبية:</strong> تم حجب الأسماء والصور الشخصية التزاماً بقواعد نقابة الأطباء المصرية وأخلاقيات المهنة، وتم نشر المحتوى بموافقة واعية لأغراض نقل تجربة الرعاية الإكلينيكية الحقيقية.
      </div>
    `;
    openModal(category, title, body);
  };

  // ----------------------------------------------------------------------
  // 5. Hero Portrait Switcher
  // ----------------------------------------------------------------------
  function setupPortraitSwitcher() {
    const btnScrubs = document.getElementById('btnScrubsTab');
    const btnSuit = document.getElementById('btnSuitTab');
    const viewScrubs = document.getElementById('portraitScrubs');
    const viewSuit = document.getElementById('portraitSuit');

    if (!btnScrubs || !btnSuit || !viewScrubs || !viewSuit) return;

    btnScrubs.addEventListener('click', function () {
      btnScrubs.classList.add('active');
      btnScrubs.setAttribute('aria-selected', 'true');
      btnSuit.classList.remove('active');
      btnSuit.setAttribute('aria-selected', 'false');

      viewScrubs.style.display = 'flex';
      viewSuit.style.display = 'none';
    });

    btnSuit.addEventListener('click', function () {
      btnSuit.classList.add('active');
      btnSuit.setAttribute('aria-selected', 'true');
      btnScrubs.classList.remove('active');
      btnScrubs.setAttribute('aria-selected', 'false');

      viewScrubs.style.display = 'none';
      viewSuit.style.display = 'flex';
    });
  }

  // ----------------------------------------------------------------------
  // 6. Medical Education Library Filter Tabs
  // ----------------------------------------------------------------------
  function setupLibraryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const articleCards = document.querySelectorAll('.article-card[data-category]');

    if (!filterBtns.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        articleCards.forEach(function (card) {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ----------------------------------------------------------------------
  // 7. Interactive WhatsApp Booking Assistant
  // ----------------------------------------------------------------------
  function setupWhatsAppBookingHelper() {
    const selectClinic = document.getElementById('selectClinic');
    const selectSpecialty = document.getElementById('selectSpecialty');
    const btnSendCustomWa = document.getElementById('btnSendCustomWa');

    if (!btnSendCustomWa || !selectClinic || !selectSpecialty) return;

    btnSendCustomWa.addEventListener('click', function () {
      const clinic = selectClinic.value;
      const specialty = selectSpecialty.value;

      let msg = "";
      if (currentLang === 'ar') {
        msg = `السلام عليكم، أرغب في الاستفسار عن مواعيد الحجز مع د. أحمد جودة ناجح. شكرًا لكم.\n• العيادة: ${clinic}\n• الخدمة/التخصص: ${specialty}`;
      } else {
        msg = `Hello, I would like to inquire about booking a consultation with Dr. Ahmed Gouda Nageh. Thank you.\n• Clinic: ${clinic}\n• Specialty/Service: ${specialty}`;
      }

      const targetUrl = "https://wa.me/201016539193?text=" + encodeURIComponent(msg);
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // ----------------------------------------------------------------------
  // 8. Mobile Menu & Navigation Interactions
  // ----------------------------------------------------------------------
  function setupNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavPanel = document.getElementById('mobileNavPanel');

    if (mobileMenuBtn && mobileNavPanel) {
      mobileMenuBtn.addEventListener('click', function () {
        const isOpen = mobileNavPanel.classList.toggle('open');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.classList.toggle('body-nav-open', isOpen);
      });

      const mobileLinks = mobileNavPanel.querySelectorAll('a');
      mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          mobileNavPanel.classList.remove('open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('body-nav-open');
        });
      });

      // Close mobile nav when tapping outside (on the backdrop overlay)
      document.addEventListener('click', function (e) {
        if (mobileNavPanel.classList.contains('open') &&
            !mobileNavPanel.contains(e.target) &&
            !mobileMenuBtn.contains(e.target)) {
          mobileNavPanel.classList.remove('open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('body-nav-open');
        }
      });
    }
  }

  // ----------------------------------------------------------------------
  // 8.5. Surgical Services Catalog Search, Filtering & Bilingual WhatsApp
  // ----------------------------------------------------------------------
  let updateServicesLanguage = null;

  function setupServicesCatalog() {
    const searchInput = document.getElementById('servicesSearchInput');
    const searchClearBtn = document.getElementById('servicesSearchClear');
    const filterBtns = document.querySelectorAll('.svc-tab-btn[data-svc-filter]');
    const countDisplay = document.getElementById('servicesShowingCount');
    const noResultsBox = document.getElementById('servicesNoResults');
    const resetBtn = document.getElementById('btnResetServicesFilter');
    const serviceCards = document.querySelectorAll('.service-card-item');

    if (!serviceCards.length) return;

    let activeFilter = 'all';
    let searchQuery = '';

    // Arabic normalization utility for forgiving, user-friendly search
    function normalizeArabic(text) {
      if (!text) return '';
      return text
        .toString()
        .toLowerCase()
        .replace(/[\u064B-\u065F\u0670]/g, '') // remove tashkeel (diacritics)
        .replace(/[إأآا]/g, 'ا')
        .replace(/ة/g, 'ه')
        .replace(/ى/g, 'ي')
        .replace(/[\s\-_]+/g, ' ')
        .trim();
    }

    function updateCounter(visibleCount, totalCount) {
      if (!countDisplay) return;
      if (currentLang === 'ar') {
        countDisplay.textContent = `عرض ${visibleCount} من أصل ${totalCount} خدمة`;
      } else {
        countDisplay.textContent = `Showing ${visibleCount} of ${totalCount} services`;
      }
    }

    function filterServices() {
      const normalizedQuery = normalizeArabic(searchQuery);
      let visibleCount = 0;

      serviceCards.forEach(function (card) {
        const cardCat = card.getAttribute('data-service-cat');
        const matchesCategory = (activeFilter === 'all' || cardCat === activeFilter);

        let matchesSearch = true;
        if (normalizedQuery.length > 0) {
          const title = normalizeArabic(card.querySelector('.service-card-title')?.textContent || '');
          const desc = normalizeArabic(card.querySelector('.service-card-desc')?.textContent || '');
          const cat = normalizeArabic(card.querySelector('.service-card-cat')?.textContent || '');
          matchesSearch = title.includes(normalizedQuery) || desc.includes(normalizedQuery) || cat.includes(normalizedQuery);
        }

        if (matchesCategory && matchesSearch) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      updateCounter(visibleCount, serviceCards.length);

      if (noResultsBox) {
        noResultsBox.style.display = visibleCount === 0 ? 'flex' : 'none';
      }
    }

    // Refresh WhatsApp link query texts and counter text on language switch
    updateServicesLanguage = function (lang) {
      serviceCards.forEach(function (card) {
        const serviceId = card.getAttribute('data-service-id');
        const waLink = card.querySelector('.btn-service-whatsapp');
        if (waLink && serviceId && translations[lang]) {
          const titleKey = `svc${serviceId}Title`;
          const serviceTitle = translations[lang][titleKey] || '';
          const waMessage = lang === 'ar'
            ? `السلام عليكم دكتور أحمد جودة، أود الاستفسار عن: ${serviceTitle}`
            : `Hello Dr. Ahmed, I would like to inquire regarding: ${serviceTitle}`;
          waLink.href = "https://wa.me/201016539193?text=" + encodeURIComponent(waMessage);
        }
      });
      filterServices();
    };

    // Tab filtering
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        activeFilter = btn.getAttribute('data-svc-filter') || 'all';
        filterServices();
      });
    });

    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        searchQuery = searchInput.value;
        if (searchClearBtn) {
          searchClearBtn.style.display = searchQuery.trim().length > 0 ? 'flex' : 'none';
        }
        filterServices();
      });
    }

    // Clear search button
    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', function () {
        if (searchInput) {
          searchInput.value = '';
          searchQuery = '';
          searchClearBtn.style.display = 'none';
          searchInput.focus();
          filterServices();
        }
      });
    }

    // Reset button in empty state
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (searchInput) {
          searchInput.value = '';
          searchQuery = '';
        }
        if (searchClearBtn) {
          searchClearBtn.style.display = 'none';
        }
        activeFilter = 'all';
        filterBtns.forEach(function (b) {
          if (b.getAttribute('data-svc-filter') === 'all') {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
        filterServices();
      });
    }

    // Initial run
    updateServicesLanguage(currentLang);
  }

  // ----------------------------------------------------------------------
  // 9. Document Ready Initialization
  // ----------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
      currentYearEl.textContent = new Date().getFullYear();
    }

    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        applyTheme(currentTheme === 'light' ? 'dark' : 'light');
      });
    }

    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
      langBtn.addEventListener('click', function () {
        applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
      });
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalSecondaryClose) modalSecondaryClose.addEventListener('click', closeModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) closeModal();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
        closeModal();
      }
    });

    setupPortraitSwitcher();
    setupLibraryFilters();
    setupWhatsAppBookingHelper();
    setupNavigation();
    setupServicesCatalog();
  });

})();
