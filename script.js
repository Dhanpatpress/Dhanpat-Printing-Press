(() => {
  const root = document.documentElement;
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");
  const languageToggle = document.querySelector(".language-toggle");
  const menuToggle = document.querySelector(".menu-toggle");
  const header = document.querySelector(".site-header");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const translations = {
    hi: {
      "nav.heritage": "विरासत",
      "nav.services": "सेवाएँ",
      "nav.showcase": "प्रिंट संग्रह",
      "nav.contact": "संपर्क",
      "nav.directions": "रास्ता देखें",
      "hero.eyebrow": "चकिया की प्रिंटिंग परंपरा",
      "hero.title": "प्रिंटिंग प्रेस",
      "hero.kicker": "उत्सवों से व्यवसाय तक, प्रिंट की कला।",
      "hero.description": "कालातीत शादी के निमंत्रणों से लेकर पेशेवर कमर्शियल प्रिंटिंग तक — जीवन के खास पलों, काम और रोज़मर्रा के विचारों के लिए।",
      "hero.explore": "प्रिंटिंग देखें",
      "hero.visit": "प्रेस पर आएँ <span aria-hidden=\"true\">↗</span>",
      "hero.quote": "प्रिंट कोटेशन लें <span aria-hidden=\"true\">→</span>",
      "hero.note": "शादी के निमंत्रण हमारी विशेष पहचान हैं। संपूर्ण प्रिंट कार्य हमारी बड़ी तस्वीर है।",
      "heritage.eyebrow": "01 — विरासत",
      "heritage.title": "चकिया की <i>प्रिंटिंग परंपरा।</i>",
      "heritage.description": "पारंपरिक हुनर, आधुनिक प्रिंट के साथ आगे बढ़ता हुआ। धनपत उस भावना के लिए बनाया गया है कि कागज़ की एक शीट किसी अवसर, विचार या व्यवसाय को आगे ले जा सकती है।",
      "heritage.pillar1": "सोच-समझकर चुना कागज़",
      "heritage.pillar2": "बारीक सटीकता",
      "heritage.pillar3": "असल ज़िंदगी के लिए प्रिंट",
      "wedding.eyebrow": "02 — हमारी खासियत",
      "wedding.title": "क्लासिकल भारतीय <i>विवाह निमंत्रण।</i>",
      "wedding.description": "एक मांगलिक निमंत्रण में परतदार कागज़, अलंकरण, रंग और सधे हुए फिनिश की शांत सुंदरता होनी चाहिए।",
      "wedding.subtitle": "ऐसा, जो उस खास अवसर का अपना लगे।",
      "wedding.copy": "डिज़ाइन दिशा से शुरुआत करें, फिर कागज़, इन्सर्ट, लिफाफे और उन बारीकियों के साथ अपना निमंत्रण-सेट बनाएं जो उसे व्यक्तिगत बनाती हैं। पारंपरिक रूपांकन और समृद्ध रंग संयमित भी रह सकते हैं।",
      "wedding.item1": "निमंत्रण, लिफाफा और RSVP का सुंदर मेल",
      "wedding.item2": "आधुनिक संयम के साथ पारंपरिक रूपांकन",
      "wedding.item3": "स्पर्शनीय, प्रीमियम पेपर प्रस्तुति",
      "wedding.link": "निमंत्रण-सेट पर बात करें <span aria-hidden=\"true\">→</span>",
      "services.eyebrow": "03 — संपूर्ण प्रेस",
      "services.title": "हमारी प्रिंटिंग <i>सेवाएँ।</i>",
      "services.description": "अवसरों, संस्थानों, दुकानों, ऑफिस और शेल्फ़ तक — हर काम को एक सधे हुए, भौतिक रूप के साथ।",
      "service.wedding.title": "शादी और निमंत्रण",
      "service.wedding.copy": "परंपरा, व्यक्तित्व और नज़ाकत को एक सोच-समझे प्रिंट में जोड़ने वाले निमंत्रण-सेट।",
      "service.commercial.title": "कमर्शियल प्रिंटिंग",
      "service.commercial.copy": "ब्रोशर, फ्लायर, पैम्फलेट, पोस्टर और प्रचार सामग्री जो आपके प्रस्ताव को छूने योग्य बनाती है।",
      "service.business.title": "बिज़नेस स्टेशनरी",
      "service.business.copy": "विज़िटिंग कार्ड, लेटरहेड, लिफाफे और रोज़मर्रा के ज़रूरी सामान, पेशेवर फिनिश के साथ।",
      "service.books.title": "पुस्तकें और दस्तावेज़",
      "service.books.copy": "प्रिंटेड पन्ने और बंधे दस्तावेज़, जिन्हें पढ़ने, संभालने और सुरक्षित रखने के लिए बनाया गया है।",
      "books.eyebrow": "04 — पन्नों को स्थायी बनाएं",
      "books.title": "पुस्तक प्रिंटिंग और <i>बाइंडिंग।</i>",
      "books.description": "ढीले प्रिंटेड पन्नों के एक तैयार किताब में बदलने का अपना खास क्षण होता है। ऐसा प्रिंट जिसमें वजन, लय और संभालने लायक रीढ़ हो।",
      "books.tag1": "प्रिंटेड पन्ने",
      "books.tag2": "बंधी पुस्तकें",
      "books.tag3": "दस्तावेज़ और रिपोर्ट",
      "books.link": "प्रिंट प्रोजेक्ट पर बात करें <span aria-hidden=\"true\">→</span>",
      "advert.eyebrow": "05 — अपना संदेश साकार करें",
      "advert.title": "विज्ञापन और <i>प्रमोशनल प्रिंट।</i>",
      "advert.description": "पोस्टर, फ्लायर, पैम्फलेट और प्रचार सामग्री एक विचार को ऐसी सतह देते हैं जिस पर लोग रुकें, उसे पकड़ें और उस पर काम करें।",
      "advert.tag1": "पोस्टर",
      "advert.tag2": "फ्लायर और पैम्फलेट",
      "advert.tag3": "प्रमोशनल सामग्री",
      "advert.link": "प्रमोशनल प्रिंट की योजना बनाएं <span aria-hidden=\"true\">→</span>",
      "business.eyebrow": "06 — रोज़मर्रा के व्यवसाय के लिए",
      "business.title": "बिज़नेस प्रिंट जो <i>काम के लिए तैयार है।</i>",
      "business.description": "हर दिन हाथ बदलने वाली चीज़ें स्पष्टता और देखभाल की हकदार हैं: एक कार्ड, लेटरहेड, लिफाफा, प्रिंटेड रिकॉर्ड।",
      "showcase.eyebrow": "07 — प्रिंट की दुनिया",
      "showcase.title": "हर फॉर्मेट बताता है <i>अलग कहानी।</i>",
      "showcase.description": "प्रिंटेड वस्तुओं का एक दृश्य संग्रह जो उत्सव, व्यवसाय और रोज़मर्रा के संवाद को आकार दे सकता है।",
      "filters.all": "सभी",
      "filters.wedding": "विवाह",
      "filters.business": "बिज़नेस",
      "filters.books": "पुस्तकें",
      "filters.advertisement": "विज्ञापन",
      "filters.commercial": "कमर्शियल",
      "showcase.note": "ऊपर दिए गए दृश्य संभावित फॉर्मेट दिखाने के लिए कॉन्सेप्चुअल प्रोडक्ट स्टडीज़ हैं — यह पहले किए गए काम का दावा नहीं है।",
      "why.eyebrow": "08 — धनपत क्यों",
      "why.title": "बेहतरीन प्रिंट शुरू होता है <i>ध्यान से।</i>",
      "why.one.title": "स्पर्श की समझ",
      "why.one.copy": "कागज़, फिनिश, आकार और रंग संदेश का हिस्सा हैं — बाद में सोचने की चीज़ नहीं।",
      "why.two.title": "एक प्रेस, कई ज़रूरतें",
      "why.two.copy": "मांगलिक निमंत्रण से लेकर व्यावहारिक बिज़नेस सामग्री तक, आराम से आगे बढ़ें।",
      "why.three.title": "स्थानीय संवाद",
      "why.three.copy": "स्पष्ट ब्रीफ़, कच्चा विचार या कोई सैंपल लेकर आएँ। अच्छा प्रिंट बात करने से शुरू होता है।",
      "process.eyebrow": "09 — विचार से स्याही तक",
      "process.title": "प्रिंट तक एक <i>स्पष्ट रास्ता।</i>",
      "process.one.title": "अपना ब्रीफ़ लाएँ",
      "process.one.copy": "अपना विचार, उपयोग, मात्रा और उपलब्ध आर्टवर्क या रेफरेंस साझा करें।",
      "process.two.title": "फॉर्मेट चुनें",
      "process.two.copy": "कागज़, लेआउट, फिनिश और मनचाहा अनुभव तय करें।",
      "process.three.title": "इसे भौतिक बनाएं",
      "process.three.copy": "अंतिम डिज़ाइन ऐसी चीज़ बने जिसे आप पकड़, बाँट और इस्तेमाल कर सकें।",
      "quote.eyebrow": "10 — धनपत प्रिंट डेस्क",
      "quote.title": "हमें बताइए कि क्या <i>प्रिंट करना है।</i>",
      "quote.description": "ज़रूरी जानकारी भरें और हम आपके लिए एक साफ़-सुथरी WhatsApp पूछताछ तैयार कर देंगे। फिर एक वास्तविक व्यक्ति कागज़, फॉर्मेट, आर्टवर्क और अगले कदम में मदद करेगा।",
      "quote.assurance": "यहाँ कोई पेमेंट, लॉगिन या फ़ाइल अपलोड नहीं है। WhatsApp खुलने पर आप खुद तय करते हैं कि क्या भेजना है।",
      "quote.formTitle": "अपनी पूछताछ तैयार करें",
      "quote.formDescription": "कुछ जानकारी से शुरुआत में ही अधिक उपयोगी मार्गदर्शन मिल सकेगा।",
      "quote.service.label": "आपको क्या प्रिंट कराना है? <b>*</b>",
      "quote.service.placeholder": "अपनी प्रिंट ज़रूरत चुनें",
      "quote.service.wedding": "विवाह और निमंत्रण प्रिंटिंग",
      "quote.service.business": "बिज़नेस स्टेशनरी",
      "quote.service.commercial": "कमर्शियल और प्रमोशनल प्रिंटिंग",
      "quote.service.books": "पुस्तकें, दस्तावेज़ और बाइंडिंग",
      "quote.service.other": "अन्य / मुझे मार्गदर्शन चाहिए",
      "quote.quantity.label": "अनुमानित मात्रा",
      "quote.size.label": "साइज़ या फॉर्मेट",
      "quote.date.label": "आपको कब तक चाहिए?",
      "quote.details.label": "और कुछ जो हमें जानना चाहिए?",
      "quote.details.placeholder": "रंग, कागज़ की पसंद, अवसर, डिज़ाइन का विचार या कोई सवाल।",
      "quote.privacy": "आपकी जानकारी इसी ब्राउज़र में रहती है, जब तक आप WhatsApp खोलना न चुनें। वहाँ आप आर्टवर्क या रेफरेंस इमेज लगा सकते हैं।",
      "quote.submit": "WhatsApp पूछताछ बनाएँ <span aria-hidden=\"true\">↗</span>",
      "stories.eyebrow": "11 — ग्राहक अनुभव",
      "stories.title": "धनपत के ग्राहकों के <i>सच्चे अनुभव।</i>",
      "stories.copy": "निमंत्रण, बिज़नेस स्टेशनरी, पुस्तकों और रोज़मर्रा के प्रिंट कार्य के लिए धनपत पर भरोसा करने वाले ग्राहकों की कुछ प्रतिक्रियाएँ।",
      "stories.quote": "कोई प्रोजेक्ट सोच रहे हैं? प्रेस पर बातचीत के साथ अगली असली कहानी शुरू करें।",
      "stories.link": "बातचीत शुरू करें <span aria-hidden=\"true\">→</span>",
      "reviews.kicker": "ग्राहक प्रतिक्रियाएँ",
      "reviews.previous": "पिछली प्रतिक्रिया",
      "reviews.next": "अगली प्रतिक्रिया",
      "review.rahul.quote": "“मैंने यहाँ शादी के निमंत्रण कार्ड छपवाए थे और गुणवत्ता से काफी संतुष्ट रहा। हिंदी प्रिंटिंग साफ़ थी, रंग अच्छे आए और प्रिंटिंग से पहले उन्होंने डिज़ाइन में सुधार करने में भी मदद की। जैसा वादा किया था, डिलीवरी समय पर मिल गई।”",
      "review.rahul.name": "राहुल शर्मा",
      "review.rahul.project": "विवाह निमंत्रण",
      "review.arif.quote": "“मुझे पारिवारिक समारोह के लिए उर्दू में निमंत्रण कार्ड चाहिए थे। प्रिंटिंग साफ़-सुथरी थी और उर्दू टेक्स्ट ठीक से अलाइन किया गया था। वे मेरे बदलावों के प्रति भी धैर्यवान रहे। सेवा अच्छी रही और दाम भी उचित थे।”",
      "review.arif.name": "मोहम्मद आरिफ",
      "review.arif.project": "उर्दू निमंत्रण",
      "review.neha.quote": "“मैं यहाँ विज़िटिंग कार्ड और दूसरे बिज़नेस प्रिंटिंग के काम करवाती रही हूँ। गुणवत्ता अच्छी रहती है और वे आमतौर पर तय समय के भीतर काम पूरा कर देते हैं। छोटे बदलावों की ज़रूरत हो तो स्टाफ भी सहयोग करता है।”",
      "review.neha.name": "नेहा सिंह",
      "review.neha.project": "बिज़नेस स्टेशनरी",
      "review.amit.quote": "“मैंने अपनी दुकान के लिए बिल बुक और कैश मेमो छपवाए। प्रिंटिंग साफ़ थी और कागज़ की गुणवत्ता भी अच्छी थी। उन्होंने मेरी ज़रूरत का फॉर्मेट समझा और प्रक्रिया को जटिल बनाए बिना सब तैयार कर दिया।”",
      "review.amit.name": "अमित गुप्ता",
      "review.amit.project": "बिल बुक और कैश मेमो",
      "review.pooja.quote": "“हमने पारिवारिक समारोह के लिए निमंत्रण कार्ड छपवाए। टेक्स्ट में काफ़ी बदलाव थे, लेकिन उन्होंने अंतिम प्रिंटिंग से पहले धैर्यपूर्वक सुधार किए। अंतिम कार्ड अच्छे लगे और समय पर डिलीवर हो गए।”",
      "review.pooja.name": "पूजा वर्मा",
      "review.pooja.project": "पारिवारिक समारोह निमंत्रण",
      "review.sameer.quote": "“मुझे कम समय में बड़ी संख्या में कार्ड छपवाने थे। टीम ने प्रिंटिंग की गुणवत्ता से अधिक समझौता किए बिना मात्रा संभाल ली। उन्होंने कागज़ और फिनिशिंग के कुछ विकल्प भी बताए।”",
      "review.sameer.name": "समीर खान",
      "review.sameer.project": "थोक कार्ड प्रिंटिंग",
      "review.rajesh.quote": "“मैंने यहाँ किताब की बाइंडिंग करवाई। पन्ने ठीक से लगाए गए थे और कवर दोनों तरफ़ अच्छी तरह फिट किया गया था। बाइंडिंग मज़बूत लगती है और कुल फिनिश साफ़-सुथरी थी। नियमित प्रिंटिंग और बाइंडिंग के काम के लिए अच्छी जगह है।”",
      "review.rajesh.name": "राजेश यादव",
      "review.rajesh.project": "पुस्तक बाइंडिंग",
      "review.anjali.quote": "“मैंने अपने छोटे व्यवसाय के लिए बिज़नेस कार्ड ऑर्डर किए। डिज़ाइन और टेक्स्ट साफ़ छपे और कार्ड का फिनिश पेशेवर था। सबसे अच्छी बात यह लगी कि उन्होंने उपलब्ध कागज़ और प्रिंटिंग के विकल्प समझाए, सिर्फ़ दिए हुए काम को प्रिंट नहीं कर दिया।”",
      "review.anjali.name": "अंजलि मिश्रा",
      "review.anjali.project": "बिज़नेस कार्ड",
      "review.faizan.quote": "“मैंने उनकी प्रिंटिंग सेवा व्यक्तिगत और व्यवसायिक, दोनों ज़रूरतों के लिए ली है। उर्दू निमंत्रण कार्ड से लेकर नियमित दस्तावेज़ों और बिल बुक तक, काम लगातार एक-सा रहा है। उनकी गुणवत्ता की तुलना में दाम भी उचित हैं।”",
      "review.faizan.name": "फ़ैज़ान अहमद",
      "review.faizan.project": "व्यक्तिगत और बिज़नेस प्रिंटिंग",
      "review.suresh.quote": "“मैं यहाँ विज़िटिंग कार्ड, बिल और निमंत्रण कार्ड समेत अलग-अलग प्रिंटिंग का काम करवाता रहा हूँ। वे ज़रूरत के अनुसार अलग विकल्प देते हैं और प्रिंटिंग से पहले सुधार करने को तैयार रहते हैं। कुल मिलाकर, एक भरोसेमंद स्थानीय प्रिंटिंग सेवा।”",
      "review.suresh.name": "सुरेश कुमार",
      "review.suresh.project": "रोज़मर्रा की प्रिंटिंग",
      "contact.eyebrow": "12 — मिलें और संपर्क करें",
      "contact.title": "अपने विचार को <i>प्रिंट में बदलें।</i>",
      "contact.copy": "विवाह निमंत्रण, बिज़नेस ज़रूरत या किसी प्रिंटेड प्रोजेक्ट के लिए चकिया में धनपत प्रिंटिंग प्रेस आएँ और सही फॉर्मेट पर व्यक्तिगत रूप से बात करें।",
      "contact.directions": "रास्ता देखें",
      "contact.services": "प्रिंटिंग सेवाएँ देखें",
      "contact.mapLink": "Google Maps में खोलें <span aria-hidden=\"true\">↗</span>",
      "contact.note": "मैप पिन: धनपत प्रिंटिंग प्रेस, चकिया, उत्तर प्रदेश।",
      "whatsapp.label": "व्हाट्सऐप",
      "footer.tagline": "जहाँ परंपरा मिलती है प्रिंट की कला से।",
      "footer.copyright": "© 2026 धनपत प्रिंटिंग प्रेस · चकिया · सर्वाधिकार सुरक्षित।"
    }
  };

  const translatable = [...document.querySelectorAll("[data-i18n]")];
  translatable.forEach((element) => {
    element.dataset.defaultText = element.innerHTML;
  });

  const placeholderTranslatable = [...document.querySelectorAll("[data-i18n-placeholder]")];
  placeholderTranslatable.forEach((element) => {
    element.dataset.defaultPlaceholder = element.placeholder;
  });

  const getSaved = (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const setSaved = (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Browsing in private/restricted contexts should still leave the controls usable.
    }
  };

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    themeColor.setAttribute("content", theme === "dark" ? "#0f1115" : "#f7f1e6");
    setSaved("dhanpat-theme", theme);
  };

  const savedTheme = getSaved("dhanpat-theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

  themeToggle.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  const setLanguage = (language) => {
    const dictionary = language === "hi" ? translations.hi : {};
    translatable.forEach((element) => {
      const key = element.dataset.i18n;
      element.innerHTML = dictionary[key] || element.dataset.defaultText;
    });
    placeholderTranslatable.forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      element.placeholder = dictionary[key] || element.dataset.defaultPlaceholder;
    });

    root.lang = language;
    root.dataset.language = language;
    document.title = language === "hi"
      ? "धनपत प्रिंटिंग प्रेस — प्रिंट की कला"
      : "Dhanpat Printing Press — The Art of Print";

    if (languageToggle) {
      languageToggle.setAttribute("aria-label", language === "hi" ? "Switch to English" : "हिंदी में बदलें");
      languageToggle.querySelector(".button-label").textContent = language === "hi" ? "HI" : "EN";
    }

    const reviewSection = document.querySelector("[data-review-carousel]");
    if (reviewSection) {
      reviewSection.setAttribute("aria-label", language === "hi" ? "ग्राहक प्रतिक्रियाएँ" : "Customer feedback");
      reviewSection.querySelector(".review-dots").setAttribute("aria-label", language === "hi" ? "प्रतिक्रिया नेविगेशन" : "Review navigation");
    }

    setSaved("dhanpat-language", language);
    document.dispatchEvent(new CustomEvent("dhanpat:languagechange"));
  };

  const savedLanguage = getSaved("dhanpat-language");
  setLanguage(savedLanguage === "hi" ? "hi" : "en");

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      setLanguage(root.lang === "hi" ? "en" : "hi");
    });
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const open = header.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    header.querySelectorAll(".site-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  const filterButtons = [...document.querySelectorAll(".filter-button")];
  const galleryItems = [...document.querySelectorAll(".gallery-card")];
  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.classList.contains("active")));
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      galleryItems.forEach((card) => {
        const matches = filter === "all" || card.dataset.category.split(" ").includes(filter);
        card.classList.toggle("is-hidden", !matches);
        card.setAttribute("aria-hidden", String(!matches));
      });
    });
  });

  const reviewCarousel = document.querySelector("[data-review-carousel]");
  if (reviewCarousel) {
    const reviewTrack = reviewCarousel.querySelector("[data-review-track]");
    const reviewCards = [...reviewCarousel.querySelectorAll(".review-card")];
    const previousReview = reviewCarousel.querySelector("[data-review-prev]");
    const nextReview = reviewCarousel.querySelector("[data-review-next]");
    const reviewDots = [...reviewCarousel.querySelectorAll("[data-review-dot]")];
    const reviewCurrent = reviewCarousel.querySelector("[data-review-current]");
    let activeReview = 0;
    let autoplayId = null;

    const updateReview = (nextIndex) => {
      activeReview = (nextIndex + reviewCards.length) % reviewCards.length;
      reviewTrack.style.transform = "translateX(-" + (activeReview * 100) + "%)";
      reviewCurrent.textContent = String(activeReview + 1).padStart(2, "0");

      reviewCards.forEach((card, index) => {
        card.setAttribute("aria-hidden", String(index !== activeReview));
      });

      reviewDots.forEach((dot, index) => {
        const isActive = index === activeReview;
        dot.classList.toggle("active", isActive);
        dot.setAttribute("aria-current", String(isActive));
        dot.setAttribute("aria-label", (root.lang === "hi" ? "प्रतिक्रिया दिखाएँ " : "Show review ") + (index + 1));
      });
    };

    const stopAutoplay = () => {
      if (autoplayId !== null) {
        window.clearInterval(autoplayId);
        autoplayId = null;
      }
    };

    const startAutoplay = () => {
      if (!reducedMotion.matches && reviewCards.length > 1 && autoplayId === null) {
        autoplayId = window.setInterval(() => updateReview(activeReview + 1), 7000);
      }
    };

    previousReview.addEventListener("click", () => {
      updateReview(activeReview - 1);
      stopAutoplay();
      startAutoplay();
    });

    nextReview.addEventListener("click", () => {
      updateReview(activeReview + 1);
      stopAutoplay();
      startAutoplay();
    });

    reviewDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        updateReview(index);
        stopAutoplay();
        startAutoplay();
      });
    });

    reviewCarousel.addEventListener("mouseenter", stopAutoplay);
    reviewCarousel.addEventListener("mouseleave", startAutoplay);
    reviewCarousel.addEventListener("focusin", stopAutoplay);
    reviewCarousel.addEventListener("focusout", (event) => {
      if (!reviewCarousel.contains(event.relatedTarget)) startAutoplay();
    });
    document.addEventListener("visibilitychange", () => (document.hidden ? stopAutoplay() : startAutoplay()));
    document.addEventListener("dhanpat:languagechange", () => updateReview(activeReview));

    updateReview(0);
    startAutoplay();
  }

  const quoteForm = document.querySelector("#quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!quoteForm.reportValidity()) return;

      const formData = new FormData(quoteForm);
      const getValue = (name) => String(formData.get(name) || "").trim();
      const serviceSelect = quoteForm.elements.service;
      const service = serviceSelect.options[serviceSelect.selectedIndex].textContent.trim();
      const quantity = getValue("quantity");
      const format = getValue("format");
      const needBy = getValue("needBy");
      const details = getValue("details");
      const isHindi = root.lang === "hi";

      const lines = isHindi
        ? [
            "नमस्ते धनपत प्रिंटिंग प्रेस,",
            "",
            "मुझे नीचे दिए प्रिंट काम के लिए जानकारी / कोटेशन चाहिए:",
            "• प्रिंट प्रकार: " + service,
            quantity ? "• अनुमानित मात्रा: " + quantity : "",
            format ? "• साइज़ / फॉर्मेट: " + format : "",
            needBy ? "• कब तक चाहिए: " + needBy : "",
            details ? "• अतिरिक्त जानकारी: " + details : "",
            "",
            "कृपया अगले कदम बताएं। धन्यवाद।"
          ]
        : [
            "Hello Dhanpat Printing Press,",
            "",
            "I would like guidance / a quote for this print job:",
            "• Print type: " + service,
            quantity ? "• Approximate quantity: " + quantity : "",
            format ? "• Size / format: " + format : "",
            needBy ? "• Needed by: " + needBy : "",
            details ? "• Additional details: " + details : "",
            "",
            "Please let me know the next step. Thank you."
          ];

      const whatsappUrl = "https://wa.me/919793623203?text=" + encodeURIComponent(lines.filter(Boolean).join("\n"));
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }

  const heroVisual = document.querySelector(".hero-visual");
  const sceneFrame = document.querySelector(".scene-frame");
  if (heroVisual && sceneFrame && !reducedMotion.matches) {
    heroVisual.addEventListener("pointermove", (event) => {
      if (window.innerWidth < 681) return;
      const bounds = heroVisual.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      sceneFrame.style.setProperty("--scene-x", (x * 12) + "px");
      sceneFrame.style.setProperty("--scene-y", (y * 9) + "px");
    });

    heroVisual.addEventListener("pointerleave", () => {
      sceneFrame.style.setProperty("--scene-x", "0px");
      sceneFrame.style.setProperty("--scene-y", "0px");
    });
  }

  if (!reducedMotion.matches && "IntersectionObserver" in window) {
    root.classList.add("enhanced");
    const revealTargets = [
      ...document.querySelectorAll(".heritage, .signature, .services, .feature-section, .business-section, .showcase, .why-section, .process-section, .quote-section, .stories, .location-section")
    ];
    revealTargets.forEach((target) => target.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    revealTargets.forEach((target) => observer.observe(target));
  }

  // Avoid carrying a mobile menu into a wide layout after rotation/resizing.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980 && header.classList.contains("menu-open")) {
      header.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    }
  });

  body.classList.add("ready");
})();
