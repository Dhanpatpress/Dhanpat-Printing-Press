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
      "stories.eyebrow": "10 — ग्राहक अनुभव",
      "stories.title": "असल प्रतिक्रिया <i>यहीं होनी चाहिए।</i>",
      "stories.copy": "यह स्थान अनुमति के साथ जोड़ी जाने वाली सत्यापित ग्राहक कहानियों के लिए रखा गया है। प्रिंट की प्रतिष्ठा असली काम से बने, बनाई हुई प्रशंसा से नहीं।",
      "stories.quote": "कोई प्रोजेक्ट सोच रहे हैं? प्रेस पर बातचीत के साथ अगली असली कहानी शुरू करें।",
      "stories.link": "बातचीत शुरू करें <span aria-hidden=\"true\">→</span>",
      "contact.eyebrow": "11 — मिलें और संपर्क करें",
      "contact.title": "अपने विचार को <i>प्रिंट में बदलें।</i>",
      "contact.copy": "विवाह निमंत्रण, बिज़नेस ज़रूरत या किसी प्रिंटेड प्रोजेक्ट के लिए चकिया में धनपत प्रिंटिंग प्रेस आएँ और सही फॉर्मेट पर व्यक्तिगत रूप से बात करें।",
      "contact.directions": "रास्ता देखें",
      "contact.services": "प्रिंटिंग सेवाएँ देखें",
      "contact.note": "स्थान: चकिया, उत्तर प्रदेश। यात्रा से पहले वर्तमान संपर्क विवरण की पुष्टि कर लें।",
      "footer.tagline": "जहाँ परंपरा मिलती है प्रिंट की कला से।"
    }
  };

  const translatable = [...document.querySelectorAll("[data-i18n]")];
  translatable.forEach((element) => {
    element.dataset.defaultText = element.innerHTML;
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

    root.lang = language;
    root.dataset.language = language;
    document.title = language === "hi"
      ? "धनपत प्रिंटिंग प्रेस — प्रिंट की कला"
      : "Dhanpat Printing Press — The Art of Print";

    if (languageToggle) {
      languageToggle.setAttribute("aria-label", language === "hi" ? "Switch to English" : "हिंदी में बदलें");
      languageToggle.querySelector(".button-label").textContent = language === "hi" ? "HI" : "EN";
    }

    setSaved("dhanpat-language", language);
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
      ...document.querySelectorAll(".heritage, .signature, .services, .feature-section, .business-section, .showcase, .why-section, .process-section, .stories, .location-section")
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
