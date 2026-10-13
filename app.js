const forms = document.querySelectorAll('[data-registration-form]');
const countdown = document.querySelector('.countdown-clock');
const themeList = document.querySelector('.theme-list');
let siteLanguage = 'en';

const arabicCopy = {
  'Skip to content': 'انتقل إلى المحتوى',
  'Main navigation': 'التنقل الرئيسي',
  Conference: 'المؤتمر',
  'Scientific themes': 'المحاور العلمية',
  Registration: 'التسجيل',
  Register: 'سجّل الآن',
  'WORLD DIABETES DAY 2026': 'اليوم العالمي للسكري 2026',
  'Diabetes': 'السكري',
  'in Focus': 'في دائرة الضوء',
  'A scientific meeting for the questions shaping diabetes care in internal medicine.': 'لقاء علمي يناقش أبرز القضايا التي ترسم ملامح رعاية مرضى السكري في مجال الطب الباطني',
  'Register as an Attendee': 'سجّل كمشارك',
  'Become a Sponsor': 'كن راعيًا للمؤتمر',
  'Arabic Association for the Study of Diabetes and Metabolism (AASD)': 'الجمعية العربية لدراسة أمراض السكري والتمثيل الغذائي',
  DATE: 'التاريخ',
  VENUE: 'المكان',
  ORGANIZER: 'التنظيم',
  '15 November 2026': '15 نوفمبر 2026',
  'Semiramis InterContinental Cairo': 'فندق سميراميس إنتركونتيننتال القاهرة',
  'science event management': 'ساينس إيفنت مانجمنت',
  'Scroll to conference introduction': 'انتقل إلى مقدمة المؤتمر',
  'Conference patronage': 'رعاية المؤتمر',
  'UNDER THE PATRONAGE OF': 'تحت رعاية',
  'Police Medical Services Sector · Ministry of Interior Affairs': 'قطاع الخدمات الطبية · وزارة الداخلية',
  'Until we meet in Cairo': 'حتى نلتقي في القاهرة',
  Days: 'يوم',
  Hours: 'ساعة',
  Minutes: 'دقيقة',
  Seconds: 'ثانية',
  'Time remaining until the conference begins': 'الوقت المتبقي حتى بدء المؤتمر',
  'The conference date has arrived': 'حلّ موعد المؤتمر',
  'A clearer view': 'رؤية أوضح',
  'of diabetes care': 'لرعاية مرضى السكري',
  'World Diabetes Day – Diabetes in Focus brings internal medicine perspectives together around the clinical decisions that matter across the course of diabetes.': 'يجمع مؤتمر اليوم العالمي للسكري – السكري في دائرة الضوء خبرات الطب الباطني لمناقشة القرارات السريرية المهمة في مختلف مراحل رعاية مرضى السكري',
  'Through a focused scientific exchange, the conference will explore prevention, evolving therapies, and the management of complications across cardiovascular, renal, metabolic, and other areas of care.': 'من خلال حوار علمي متخصص، يناقش المؤتمر سبل الوقاية والعلاجات الحديثة والتعامل مع المضاعفات في مجالات القلب والكلى والتمثيل الغذائي وغيرها',
  'Explore the scientific themes': 'استكشف المحاور العلمية',
  '15 NOVEMBER 2026': '15 نوفمبر 2026',
  'SEMIRAMIS INTERCONTINENTAL CAIRO': 'سميراميس إنتركونتيننتال القاهرة',
  'The field, in focus': 'مجالات علمية تحت المجهر',
  'Preview poster: ': 'معاينة ملصق: ',
  'Diabetes and Cardiovascular Disease': 'السكري وأمراض القلب والأوعية الدموية',
  'Diabetes and Kidney Disease': 'السكري وأمراض الكلى',
  'Preventing Diabetes Complications': 'الوقاية من مضاعفات السكري',
  'Insulin Therapy: When and How?': 'العلاج بالإنسولين: متى وكيف؟',
  'SGLT2 Inhibitors: Beyond Diabetes': 'مثبطات SGLT2: فوائد تتجاوز السكري',
  'GLP-1 Receptor Agonists: Beyond Glucose Control': 'ناهضات مستقبلات GLP-1: ما بعد ضبط سكر الدم',
  'New Medications in Diabetes: What’s New?': 'أدوية جديدة للسكري: ما المستجد؟',
  'Diabetes and Dyslipidemia': 'السكري واضطراب دهون الدم',
  'Diabetes and Hypertension': 'السكري وارتفاع ضغط الدم',
  'Diabetic Foot: Prevention Saves Limbs': 'القدم السكري: الوقاية تحمي الأطراف',
  'Diabetes and Eye Health': 'السكري وصحة العين',
  'Obesity and Diabetes: Two Epidemics, One Challenge': 'السمنة والسكري: وباءان وتحدٍ واحد',
  'Diabetes Prevention: From Risk to Action': 'الوقاية من السكري: من تقييم المخاطر إلى العمل',
  'The Future of Diabetes Care': 'مستقبل رعاية مرضى السكري',
  'Diabetes 2026: Where Are We Now?': 'السكري في 2026: أين وصلنا؟',
  'Scientific themes are subject to programme development.': 'المحاور العلمية قابلة للتعديل مع تطور البرنامج',
  'Join the conversation': 'شارك في الحوار',
  'Bring your clinical perspective': 'أضف خبرتك السريرية',
  "Share your professional details to register as an attendee for Diabetes in Focus.": 'أدخل بياناتك المهنية للتسجيل مشاركًا في مؤتمر السكري في دائرة الضوء',
  'CONFERENCE DATE': 'تاريخ المؤتمر',
  'Your professional details': 'بياناتك المهنية',
  'All fields marked * are required.': 'جميع الحقول المميزة بـ * مطلوبة',
  'Full name': 'الاسم بالكامل',
  'Medical specialty': 'التخصص الطبي',
  'e.g. Internal medicine': 'مثال: الطب الباطني',
  'Job title or professional role': 'المسمى الوظيفي أو الدور المهني',
  'Your role': 'المسمى الوظيفي',
  'Hospital, institution, or organization': 'المستشفى أو المؤسسة أو جهة العمل',
  'Where you work': 'جهة العمل',
  'Email address': 'البريد الإلكتروني',
  'Phone number': 'رقم الهاتف',
  'Include country code': 'أضف مفتاح الدولة',
  'I understand my information will be used by the conference team to manage this registration and follow up about the event.': 'أوافق على استخدام بياناتي لإدارة التسجيل والتواصل معي بشأن المؤتمر',
  'Submit attendee registration': 'إرسال تسجيل المشارك',
  "Let's explore participation": 'لنستكشف فرص المشاركة',
  'Tell the conference team how your organization would like to discuss sponsorship.': 'أخبر فريق المؤتمر بكيفية رغبة مؤسستك في مناقشة الرعاية',
  'Organization contact': 'بيانات ممثل المؤسسة',
  'Share an initial point of contact; the team will follow up.': 'أدخل بيانات التواصل الأولية وسيتابع معك فريق المؤتمر',
  'Company or organization name': 'اسم الشركة أو المؤسسة',
  'Organization name': 'اسم المؤسسة',
  'Contact person': 'الشخص المسؤول عن التواصل',
  'Professional title': 'المسمى الوظيفي',
  'Your title': 'المسمى الوظيفي',
  'Business email': 'البريد الإلكتروني للعمل',
  'Sponsorship interest': 'مجال الاهتمام بالرعاية',
  'Select an interest': 'اختر مجال الاهتمام',
  'I would like to discuss sponsorship': 'أرغب في مناقشة فرص الرعاية',
  'Please share available sponsorship information': 'يرجى إرسال معلومات الرعاية المتاحة',
  'Other inquiry': 'استفسار آخر',
  'Additional message': 'رسالة إضافية',
  'Anything you would like the conference team to know?': 'أي معلومات تود مشاركتها مع فريق المؤتمر؟',
  'I understand my information will be used by the conference team to respond to this inquiry.': 'أوافق على استخدام بياناتي للرد على هذا الاستفسار',
  'Send sponsorship inquiry': 'إرسال استفسار الرعاية',
  'Scientific exchange.': 'حوار علمي',
  'Diabetes in focus.': 'السكري في دائرة الضوء',
  '15 NOVEMBER 2026 · CAIRO, EGYPT': '15 نوفمبر 2026 · القاهرة، مصر',
  'SCIENCE EVENT MANAGEMENT': 'ساينس إيفنت مانجمنت',
  'BACK TO TOP ↑': 'العودة إلى الأعلى ↑',
  'World Diabetes Day – Diabetes in Focus, Cairo 2026': 'اليوم العالمي للسكري – السكري في دائرة الضوء، القاهرة 2026',
  'World Diabetes Day – Diabetes in Focus': 'اليوم العالمي للسكري – السكري في دائرة الضوء',
  'World Diabetes Day – Diabetes in Focus conference logo': 'شعار مؤتمر اليوم العالمي للسكري – السكري في دائرة الضوء',
  'Ministry of Interior Affairs': 'وزارة الداخلية',
  'Police Medical Services Sector': 'قطاع الخدمات الطبية',
  'Ministry of Interior Affairs and Police Medical Services Sector': 'وزارة الداخلية وقطاع الخدمات الطبية',
  'Please correct the highlighted fields.': 'يرجى تصحيح الحقول الموضحة',
  'Too many attempts. Please try again in a few minutes.': 'محاولات كثيرة، يرجى إعادة المحاولة بعد بضع دقائق',
  'The submission could not be processed. Check the form and try again.': 'تعذر معالجة الطلب، يرجى مراجعة النموذج والمحاولة مرة أخرى',
  'The submission could not be read. Check the form and try again.': 'تعذرت قراءة البيانات، يرجى مراجعة النموذج والمحاولة مرة أخرى',
  'Check the form fields and try again.': 'يرجى مراجعة بيانات النموذج والمحاولة مرة أخرى',
  'Registration is temporarily unavailable. Please try again later.': 'التسجيل غير متاح مؤقتًا، يرجى المحاولة لاحقًا',
  'We could not process your submission. Please try again.': 'تعذر معالجة طلبك، يرجى المحاولة مرة أخرى',
  'We could not complete your submission. Please try again.': 'تعذر إكمال طلبك، يرجى المحاولة مرة أخرى',
};

const themeTitles = [
  'Diabetes and Cardiovascular Disease',
  'Diabetes and Kidney Disease',
  'Preventing Diabetes Complications',
  'Insulin Therapy: When and How?',
  'SGLT2 Inhibitors: Beyond Diabetes',
  'GLP-1 Receptor Agonists: Beyond Glucose Control',
  'New Medications in Diabetes: What’s New?',
  'Diabetes and Dyslipidemia',
  'Diabetes and Hypertension',
  'Diabetic Foot: Prevention Saves Limbs',
  'Diabetes and Eye Health',
  'Obesity and Diabetes: Two Epidemics, One Challenge',
  'Diabetes Prevention: From Risk to Action',
  'The Future of Diabetes Care',
  'Diabetes 2026: Where Are We Now?',
];

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setFirstText(selector, value) {
  const element = document.querySelector(selector);
  if (!element) return;
  const textNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) textNode.nodeValue = value;
}

function setLanguage(language) {
  siteLanguage = language;
  const isArabic = language === 'ar';
  const translate = (english) => arabicCopy[english] || english;

  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.title = isArabic
    ? 'اليوم العالمي للسكري 2026 | السكري في دائرة الضوء'
    : 'World Diabetes Day 2026 | Diabetes in Focus';
  document.querySelector('meta[name="description"]').content = isArabic
    ? 'سجّل في مؤتمر اليوم العالمي للسكري – السكري في دائرة الضوء، مؤتمر الطب الباطني العلمي في القاهرة بتاريخ 15 نوفمبر 2026'
    : 'Register for World Diabetes Day – Diabetes in Focus, an Internal Medicine Scientific Conference in Cairo on 15 November 2026.';

  const toggle = document.querySelector('.language-toggle');
  toggle.textContent = isArabic ? 'English' : 'العربية';
  toggle.lang = isArabic ? 'en' : 'ar';
  toggle.setAttribute('aria-label', isArabic ? 'Switch language to English' : 'Switch language to Arabic');

  setText('.skip-link', translate('Skip to content'));
  document.querySelector('.wordmark').setAttribute('aria-label', translate('World Diabetes Day – Diabetes in Focus, Cairo 2026'));
  document.querySelector('.wordmark-logo').alt = translate('World Diabetes Day – Diabetes in Focus');
  document.querySelector('.hero-art img').alt = translate('World Diabetes Day – Diabetes in Focus conference logo');
  document.querySelector('.main-nav').setAttribute('aria-label', translate('Main navigation'));
  document.querySelectorAll('.main-nav a').forEach((link, index) => {
    link.textContent = translate(['Conference', 'Scientific themes', 'Registration'][index]);
  });
  setFirstText('.header-action', translate('Register'));
  setText('.hero-kicker', translate('WORLD DIABETES DAY 2026'));
  const heroTitle = document.querySelector('#hero-title');
  heroTitle.childNodes[0].nodeValue = `${translate('Diabetes')}\n`;
  heroTitle.querySelector('em').textContent = translate('in Focus');
  setText('.hero-description', translate('A scientific meeting for the questions shaping diabetes care in internal medicine.'));
  setFirstText('.hero-actions .button-primary', translate('Register as an Attendee'));
  setFirstText('.hero-actions .button-secondary', translate('Become a Sponsor'));
  setText('.collaboration', translate('Arabic Association for the Study of Diabetes and Metabolism (AASD)'));
  document.querySelector('.hero-bottom').setAttribute('aria-label', isArabic ? 'تفاصيل المؤتمر' : 'Conference details');
  document.querySelectorAll('.hero-bottom div').forEach((item, index) => {
    item.querySelector('span').textContent = translate(['DATE', 'VENUE', 'ORGANIZER'][index]);
    item.querySelector('strong').textContent = translate([
      '15 November 2026',
      'Semiramis InterContinental Cairo',
      'science event management',
    ][index]);
  });
  document.querySelector('.scroll-cue').setAttribute('aria-label', translate('Scroll to conference introduction'));

  document.querySelector('.patronage').setAttribute('aria-label', translate('Conference patronage'));
  setText('.patronage-copy > span', translate('UNDER THE PATRONAGE OF'));
  setText('.patronage-copy > strong', translate('Police Medical Services Sector · Ministry of Interior Affairs'));
  document.querySelectorAll('.ministry-marks').forEach((marks) => marks.setAttribute('aria-label', translate('Ministry of Interior Affairs and Police Medical Services Sector')));
  document.querySelectorAll('.ministry-marks img').forEach((image) => {
    image.alt = translate(image.src.endsWith('/s.png') ? 'Ministry of Interior Affairs' : 'Police Medical Services Sector');
  });

  setText('#countdown-title', translate('Until we meet in Cairo'));
  countdown?.setAttribute('aria-label', translate('Time remaining until the conference begins'));
  document.querySelectorAll('.countdown-unit small').forEach((unit, index) => {
    unit.textContent = translate(['Days', 'Hours', 'Minutes', 'Seconds'][index]);
  });

  const aboutTitle = document.querySelector('#about-title');
  aboutTitle.childNodes[0].nodeValue = `${translate('A clearer view')}\n`;
  aboutTitle.childNodes[2].nodeValue = translate('of diabetes care');
  document.querySelectorAll('.intro-copy p').forEach((paragraph, index) => {
    paragraph.textContent = translate([
      'World Diabetes Day – Diabetes in Focus brings internal medicine perspectives together around the clinical decisions that matter across the course of diabetes.',
      'Through a focused scientific exchange, the conference will explore prevention, evolving therapies, and the management of complications across cardiovascular, renal, metabolic, and other areas of care.',
    ][index]);
  });
  setFirstText('.text-link', translate('Explore the scientific themes'));
  document.querySelectorAll('.intro-rule span').forEach((item, index) => {
    item.textContent = translate(['15 NOVEMBER 2026', 'SEMIRAMIS INTERCONTINENTAL CAIRO'][index]);
  });

  setText('#themes-title', translate('The field, in focus'));
  document.querySelectorAll('.theme-list li').forEach((item, index) => {
    const heading = item.querySelector('h3');
    const englishTitle = themeTitles[index];
    heading.textContent = translate(englishTitle);
    item.querySelector('.theme-image-trigger').setAttribute('aria-label', `${translate('Preview poster: ')}${translate(englishTitle)}`);
  });
  setText('.themes-note', translate('Scientific themes are subject to programme development.'));

  setText('#registration-title', translate('Join the conversation'));
  document.querySelectorAll('.journey-aside h3').forEach((heading, index) => {
    heading.textContent = translate(['Bring your clinical perspective', "Let's explore participation"][index]);
  });
  document.querySelectorAll('.journey-copy').forEach((copy, index) => {
    copy.textContent = translate([
      'Share your professional details to register as an attendee for Diabetes in Focus.',
      'Tell the conference team how your organization would like to discuss sponsorship.',
    ][index]);
  });
  document.querySelectorAll('.journey-meta').forEach((meta) => {
    meta.querySelectorAll('span').forEach((label, index) => {
      label.textContent = translate(index === 0 ? 'CONFERENCE DATE' : 'VENUE');
    });
    meta.querySelectorAll('strong').forEach((value, index) => {
      value.textContent = translate(index === 0 ? '15 November 2026' : 'Semiramis InterContinental Cairo');
    });
  });
  document.querySelectorAll('.form-panel').forEach((panel, index) => {
    const heading = panel.querySelector('.form-panel-heading h3');
    heading.textContent = translate(index === 0 ? 'Your professional details' : 'Organization contact');
    const note = panel.querySelector('.form-panel-heading > div > span');
    note.textContent = translate(index === 0 ? 'All fields marked * are required.' : 'Share an initial point of contact; the team will follow up.');
  });

  const attendeeFields = [
    ['Full name', 'Your full name'],
    ['Medical specialty', 'e.g. Internal medicine'],
    ['Job title or professional role', 'Your role'],
    ['Hospital, institution, or organization', 'Where you work'],
    ['Email address', 'name@example.com'],
    ['Phone number', 'Include country code'],
  ];
  const sponsorFields = [
    ['Company or organization name', 'Organization name'],
    ['Contact person', 'Full name'],
    ['Professional title', 'Your title'],
    ['Business email', 'name@company.com'],
    ['Phone number', 'Include country code'],
    ['Sponsorship interest', null],
    ['Additional message', 'Anything you would like the conference team to know?'],
  ];
  [attendeeFields, sponsorFields].forEach((fieldTranslations, formIndex) => {
    const fields = document.querySelectorAll('.form-panel')[formIndex].querySelectorAll('.field');
    fields.forEach((field, index) => {
      const [label, placeholder] = fieldTranslations[index];
      const labelNode = Array.from(field.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
      if (labelNode) labelNode.nodeValue = `${translate(label)} `;
      const control = field.querySelector('input, select, textarea');
      if (placeholder && control instanceof HTMLInputElement || placeholder && control instanceof HTMLTextAreaElement) {
        control.placeholder = translate(placeholder);
      }
      if (control instanceof HTMLSelectElement) {
        control.options[0].textContent = translate('Select an interest');
        control.options[1].textContent = translate('I would like to discuss sponsorship');
        control.options[2].textContent = translate('Please share available sponsorship information');
        control.options[3].textContent = translate('Other inquiry');
      }
    });
  });

  document.querySelectorAll('.privacy-check > span').forEach((copy, index) => {
    copy.textContent = translate([
      'I understand my information will be used by the conference team to manage this registration and follow up about the event.',
      'I understand my information will be used by the conference team to respond to this inquiry.',
    ][index]);
  });
  setFirstText('.attendee-panel .form-submit', translate('Submit attendee registration'));
  setFirstText('.sponsor-panel .form-submit', translate('Send sponsorship inquiry'));

  const footer = document.querySelector('.footer-top > p');
  footer.childNodes[0].nodeValue = `${translate('Scientific exchange.')}\n`;
  footer.childNodes[2].nodeValue = translate('Diabetes in focus.');
  document.querySelectorAll('.footer-bottom span').forEach((item, index) => {
    item.textContent = translate(['15 NOVEMBER 2026 · CAIRO, EGYPT', 'SCIENCE EVENT MANAGEMENT'][index]);
  });
  setFirstText('.footer-bottom a', translate('BACK TO TOP ↑'));

  document.querySelectorAll('.form-feedback[data-english-message]').forEach((feedback) => {
    feedback.textContent = isArabic ? feedback.dataset.arabicMessage : feedback.dataset.englishMessage;
  });
  document.querySelectorAll('.field-error[data-english-error]').forEach((error) => {
    error.textContent = isArabic ? translateFieldError(error.dataset.fieldName, error.dataset.englishError) : error.dataset.englishError;
  });
}

document.querySelector('.language-toggle').addEventListener('click', () => {
  setLanguage(siteLanguage === 'en' ? 'ar' : 'en');
});

if (themeList) {
  const closePreviews = (except) => {
    themeList.querySelectorAll('.theme-image-trigger[aria-expanded="true"]').forEach((trigger) => {
      if (trigger !== except) trigger.setAttribute('aria-expanded', 'false');
    });
  };

  themeList.addEventListener('click', (event) => {
    const trigger = event.target.closest('.theme-image-trigger');
    if (!trigger) return;
    const open = trigger.getAttribute('aria-expanded') !== 'true';
    closePreviews();
    trigger.setAttribute('aria-expanded', String(open));
  });

  themeList.addEventListener('focusin', (event) => {
    const trigger = event.target.closest('.theme-image-trigger');
    if (trigger?.matches(':focus-visible')) {
      closePreviews(trigger);
      trigger.setAttribute('aria-expanded', 'true');
    }
  });

  themeList.addEventListener('focusout', (event) => {
    const trigger = event.target.closest('.theme-image-trigger');
    if (trigger && !trigger.contains(event.relatedTarget)) {
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('pointerdown', (event) => {
    if (!event.target.closest('.theme-image-trigger')) closePreviews();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const openTrigger = themeList.querySelector('.theme-image-trigger[aria-expanded="true"]');
    if (!openTrigger) return;
    closePreviews();
    openTrigger.focus();
  });
}

if (countdown) {
  const eventDate = new Date('2026-11-15T00:00:00+02:00').getTime();
  let countdownInterval;
  const units = {
    days: countdown.querySelector('[data-countdown-days]'),
    hours: countdown.querySelector('[data-countdown-hours]'),
    minutes: countdown.querySelector('[data-countdown-minutes]'),
    seconds: countdown.querySelector('[data-countdown-seconds]'),
  };

  const updateCountdown = () => {
    const remaining = Math.max(0, eventDate - Date.now());
    const totalSeconds = Math.floor(remaining / 1000);
    const formatNumber = (number) => new Intl.NumberFormat(siteLanguage === 'ar' ? 'ar-EG' : 'en', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }).format(number);
    units.days.textContent = formatNumber(Math.floor(totalSeconds / 86400));
    units.hours.textContent = formatNumber(Math.floor((totalSeconds % 86400) / 3600));
    units.minutes.textContent = formatNumber(Math.floor((totalSeconds % 3600) / 60));
    units.seconds.textContent = formatNumber(totalSeconds % 60);

    if (remaining === 0) {
      countdown.setAttribute('aria-label', siteLanguage === 'ar'
        ? arabicCopy['The conference date has arrived']
        : 'The conference date has arrived');
      window.clearInterval(countdownInterval);
    }
    return remaining > 0;
  };

  if (updateCountdown()) {
    countdownInterval = window.setInterval(updateCountdown, 1000);
  }
}

const messages = {
  attendee: {
    en: 'Your attendee registration has been saved. ',
    ar: 'تم حفظ تسجيلك كمشارك. ',
  },
  sponsor: {
    en: 'Your sponsorship inquiry has been saved. ',
    ar: 'تم حفظ استفسارك بشأن الرعاية. ',
  },
};

const arabicFieldNames = {
  fullName: 'الاسم بالكامل',
  specialty: 'التخصص الطبي',
  role: 'المسمى الوظيفي',
  organization: 'جهة العمل',
  email: 'البريد الإلكتروني',
  phone: 'رقم الهاتف',
  company: 'اسم الشركة أو المؤسسة',
  contactPerson: 'الشخص المسؤول عن التواصل',
  title: 'المسمى الوظيفي',
  interest: 'مجال الاهتمام بالرعاية',
  message: 'الرسالة الإضافية',
  privacyAccepted: 'الموافقة على سياسة الخصوصية',
};

function translateFieldError(name, message) {
  const field = arabicFieldNames[name] || 'هذا الحقل';
  const limit = message.match(/must be (\d+) characters or fewer\./);
  if (limit) return `يجب ألا يتجاوز حقل ${field} ${limit[1]} حرفًا`;
  if (message.startsWith('Enter your ')) return `يرجى إدخال ${field}`;
  if (message === 'Enter a valid email address.') return 'يرجى إدخال بريد إلكتروني صحيح';
  if (message === 'Enter a phone number with at least 7 digits.') return 'يرجى إدخال رقم هاتف يتكون من 7 أرقام على الأقل';
  if (message === 'Choose a valid sponsorship interest.') return 'يرجى اختيار مجال صحيح للاهتمام بالرعاية';
  if (message === 'Please confirm the privacy notice to continue.') return 'يرجى الموافقة على إشعار الخصوصية للمتابعة';
  if (message === 'Choose a valid registration type.') return 'يرجى اختيار نوع تسجيل صحيح';
  return arabicCopy[message] || (siteLanguage === 'ar' ? 'تعذر إكمال الطلب، يرجى المحاولة مرة أخرى' : message);
}

function setFieldError(form, name, message) {
  const control = form.elements.namedItem(name);
  if (!control) return;
  const field = control.closest('.field, .privacy-check');
  control.setAttribute('aria-invalid', 'true');
  const error = field?.querySelector('.field-error');
  if (error) {
    error.id = `${form.dataset.kind}-${name}-error`;
    error.dataset.fieldName = name;
    error.dataset.englishError = message;
    error.textContent = siteLanguage === 'ar' ? translateFieldError(name, message) : message;
    control.setAttribute('aria-describedby', error.id);
  }
}

function clearErrors(form) {
  form.querySelectorAll('[aria-invalid="true"]').forEach((control) => {
    control.removeAttribute('aria-invalid');
    control.removeAttribute('aria-describedby');
  });
  form.querySelectorAll('.field-error').forEach((error) => {
    error.textContent = '';
    delete error.dataset.englishError;
    delete error.dataset.fieldName;
  });
}

function displayFeedback(form, state, message, arabicMessage = message) {
  const feedback = form.querySelector('.form-feedback');
  feedback.dataset.state = state;
  feedback.dataset.englishMessage = message;
  feedback.dataset.arabicMessage = arabicMessage;
  feedback.textContent = siteLanguage === 'ar' ? arabicMessage : message;
}

forms.forEach((form) => {
  form.addEventListener('input', (event) => {
    if (event.target.matches('input, select, textarea')) {
      event.target.removeAttribute('aria-invalid');
      event.target.removeAttribute('aria-describedby');
      const error = event.target.closest('.field, .privacy-check')?.querySelector('.field-error');
      if (error) {
        error.textContent = '';
        delete error.dataset.englishError;
        delete error.dataset.fieldName;
      }
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (form.dataset.submitting === 'true') return;
    clearErrors(form);
    const feedback = form.querySelector('.form-feedback');
    feedback.textContent = '';
    feedback.removeAttribute('data-state');
    delete feedback.dataset.englishMessage;
    delete feedback.dataset.arabicMessage;

    const payload = Object.fromEntries(new FormData(form).entries());
    payload.kind = form.dataset.kind;
    payload.privacyAccepted = form.elements.namedItem('privacyAccepted').checked;
    const button = form.querySelector('[type="submit"]');
    const originalText = button.innerHTML;
    form.dataset.submitting = 'true';
    button.disabled = true;
    button.innerHTML = `<span class="button-spinner">${siteLanguage === 'ar' ? 'جارٍ الإرسال…' : 'Submitting…'}</span>`;

    try {
      const response = await fetch('/api/registrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) {
        if (result.fields) {
          Object.entries(result.fields).forEach(([name, message]) => setFieldError(form, name, message));
          const firstInvalid = form.querySelector('[aria-invalid="true"]') || form.querySelector('.privacy-check input');
          firstInvalid?.focus();
        }
        throw new Error(result.error || 'We could not process your submission. Please try again.');
      }

      const successMessage = messages[payload.kind][siteLanguage];
      if (result.emailStatus === 'sent') {
        displayFeedback(form, 'success', `${messages[payload.kind].en}A confirmation has been sent to your email address.`, `${successMessage}أُرسل تأكيد إلى بريدك الإلكتروني`);
        form.reset();
      } else if (result.emailStatus === 'not_configured') {
        displayFeedback(form, 'warning', `${messages[payload.kind].en}Email notifications are not configured, so no confirmation email was sent. The conference team can follow up once email is enabled.`, `${successMessage}إشعارات البريد الإلكتروني غير مفعّلة حاليًا، لذا لم يُرسل تأكيد بالبريد. يمكن لفريق المؤتمر المتابعة بعد تفعيل البريد الإلكتروني`);
        form.reset();
      } else {
        displayFeedback(form, 'warning', `${messages[payload.kind].en}The email service could not complete notifications. Your submission is saved; please contact wdd-egy@elmawy.com if you need confirmation.`, `${successMessage}تعذر إرسال إشعارات البريد الإلكتروني. تم حفظ طلبك؛ يرجى التواصل مع wdd-egy@elmawy.com إذا احتجت إلى تأكيد`);
        form.reset();
      }
    } catch (error) {
      const englishMessage = error.message || 'We could not complete your submission. Please try again.';
      displayFeedback(form, 'error', englishMessage, translateFieldError('', englishMessage));
    } finally {
      form.dataset.submitting = 'false';
      button.disabled = false;
      button.innerHTML = originalText;
    }
  });
});