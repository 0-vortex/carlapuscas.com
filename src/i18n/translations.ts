export const locales = ['en', 'ro', 'hu'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

type TranslationKeys = {
  // Navigation
  nav: {
    home: string
    about: string
    services: string
    blog: string
    contact: string
    menu: string
    closeMenu: string
    languageLabel: string
  }
  // Hero
  hero: {
    headline: string
    headlineAccent: string
    subtitle: string
    cta: string
    ctaSecondary: string
  }
  // Services section
  services: {
    label: string
    title: string
    subtitle: string
    clinical: { title: string; description: string }
    educational: { title: string; description: string }
    vocational: { title: string; description: string }
    learnMore: string
  }
  // Blog section
  blog: {
    label: string
    title: string
    subtitle: string
    readMore: string
    minRead: string
    backToArticles: string
    suggestTopic: string
    suggestTopicCta: string
    tags: Record<string, string>
  }
  // Contact CTA
  cta: {
    title: string
    subtitle: string
    button: string
  }
  // Contact page
  contact: {
    label: string
    title: string
    subtitle: string
    infoTitle: string
    email: string
    location: string
    locationValue: string
    locationOnline: string
    responseTime: string
    responseTimeValue: string
    formTitle: string
    name: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    serviceInterest: string
    serviceSelect: string
    serviceClinical: string
    serviceEducational: string
    serviceVocational: string
    serviceNotSure: string
    message: string
    messagePlaceholder: string
    send: string
    sending: string
    successTitle: string
    successMessage: string
    sendAnother: string
    errorMessage: string
  }
  // About page
  about: {
    label: string
    title: string
    subtitle: string
    storyTitle: string
    storyP1: string
    storyP2: string
    storyP3: string
    educationTitle: string
    educationItems: string[]
    approachTitle: string
    approachText: string
    ctaText: string
    ctaButton: string
  }
  // Services page
  servicesPage: {
    label: string
    title: string
    subtitle: string
    whoItsFor: string
    whatToExpect: string
    ctaTitle: string
    ctaSubtitle: string
    ctaButton: string
    clinical: {
      title: string
      description: string
      whoFor: string[]
      expect: string
    }
    educational: {
      title: string
      description: string
      whoFor: string[]
      expect: string
    }
    vocational: {
      title: string
      description: string
      whoFor: string[]
      expect: string
    }
  }
  // Footer
  footer: {
    credentials: string
    copyright: string
    contactLink: string
  }
  // 404
  notFound: {
    code: string
    title: string
    message: string
    goHome: string
    getInTouch: string
  }
  // Meta
  meta: {
    siteTitle: string
    siteDescription: string
  }
}

export const translations: Record<Locale, TranslationKeys> = {
  // ---------------------------------------------------------------------------
  // ENGLISH
  // ---------------------------------------------------------------------------
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      blog: 'Blog',
      contact: 'Contact',
      menu: 'Menu',
      closeMenu: 'Close menu',
      languageLabel: 'Language',
    },
    hero: {
      headline: 'Helping you find',
      headlineAccent: 'clarity',
      subtitle:
        'Clinical and educational psychology grounded in warmth and evidence. I am here to help.',
      cta: 'Get in touch',
      ctaSecondary: 'Read the blog',
    },
    services: {
      label: 'Services',
      title: 'How I can help',
      subtitle:
        'Every person is different. I offer tailored approaches that meet you where you are and help you get where you want to be.',
      clinical: {
        title: 'Clinical Psychology',
        description:
          'Evidence-based therapy for anxiety, depression, and emotional wellbeing. A safe space to explore, understand, and heal.',
      },
      educational: {
        title: 'Educational Psychology',
        description:
          'Assessments and tailored support for learning differences, neurodevelopmental needs, and academic confidence at every stage.',
      },
      vocational: {
        title: 'Vocational Counseling',
        description:
          'Guidance for career transitions, vocational planning, and finding meaningful work aligned with your strengths and values.',
      },
      learnMore: 'Learn more',
    },
    blog: {
      label: 'Blog',
      title: 'Latest articles',
      subtitle:
        'Thoughts on mental health, education, and the everyday practice of living well.',
      readMore: 'Read more',
      minRead: 'min read',
      backToArticles: 'Back to articles',
      suggestTopic:
        'Have a question or a topic you would like me to write about?',
      suggestTopicCta: 'Send a suggestion',
      tags: { Therapy: 'Therapy', Wellbeing: 'Wellbeing', Education: 'Education', Career: 'Career' },
    },
    cta: {
      title: 'The first step is simple',
      subtitle:
        'Whether you have questions or are ready to book a session, I would love to hear from you.',
      button: 'Get in touch',
    },
    contact: {
      label: 'Contact',
      title: "Let's Start a Conversation",
      subtitle:
        'Whether you have a question, want to book a session, or simply need to talk — I am here and happy to listen.',
      infoTitle: 'Contact Information',
      email: 'Email',
      location: 'Location',
      locationValue: 'In-person sessions available in Oradea, Strada William Shakespeare Nr. 5, Romania.',
      locationOnline: 'Online sessions available worldwide.',
      responseTime: 'Response Time',
      responseTimeValue:
        'I typically respond within 24 to 48 hours during business days.',
      formTitle: 'Send a Message',
      name: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      serviceInterest: 'Service Interest',
      serviceSelect: 'Select a service (optional)',
      serviceClinical: 'Clinical Psychology',
      serviceEducational: 'Educational Psychology',
      serviceVocational: 'Vocational Counseling',
      serviceNotSure: 'Not sure yet',
      message: 'Message',
      messagePlaceholder: 'Tell me a little about what brings you here...',
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message sent',
      successMessage:
        'Thank you for reaching out. I will be in touch soon.',
      sendAnother: 'Send another message',
      errorMessage:
        'Something went wrong. Please try again or email me directly.',
    },
    about: {
      label: 'About',
      title: 'About Carla',
      subtitle:
        'A psychologist who believes in meeting people where they are — and walking alongside them toward where they want to be.',
      storyTitle: 'My Story',
      storyP1:
        'I am a clinical and educational psychologist with a deep commitment to understanding the whole person — not just the symptoms, but the story behind them. My work spans clinical practice, educational support, and vocational counseling, drawing on years of training and a genuine belief that every individual has the capacity for growth.',
      storyP2:
        'I trained in clinical psychology with a focus on evidence-based approaches, including cognitive-behavioral therapy, psychodynamic methods, and integrative techniques. Over time, my practice naturally expanded to include educational psychology — helping children, teens, and families navigate learning differences, developmental challenges, and school-related stress.',
      storyP3:
        'Vocational counseling became a natural extension of my work, as I witnessed how deeply career uncertainty can affect mental health and sense of self. I help individuals at all stages of life find clarity, purpose, and direction in their professional paths.',
      educationTitle: 'Education',
      educationItems: [
        'Master of Clinical Psychology',
        'Master of Educational Psychology',
        'Certified Vocational Counselor',
      ],
      approachTitle: 'My Approach',
      approachText:
        "I practice with warmth, curiosity, and respect. My approach is integrative — I draw from multiple therapeutic frameworks to tailor support to each person's unique needs. I believe in collaboration: you are the expert on your own life, and I am here to offer tools, perspective, and a safe space to explore.",
      ctaText: 'Ready to take the next step?',
      ctaButton: 'Get in touch',
    },
    servicesPage: {
      label: 'Services',
      title: 'How I can help',
      subtitle:
        'Three areas of practice, one shared foundation: empathy, evidence, and a genuine belief in your capacity for growth.',
      whoItsFor: "Who it's for",
      whatToExpect: 'What to expect',
      ctaTitle: 'Not sure which service is right for you?',
      ctaSubtitle:
        'That is completely okay. Reach out and we can figure it out together.',
      ctaButton: 'Get in touch',
      clinical: {
        title: 'Clinical Psychology',
        description:
          'Evidence-based therapy for anxiety, depression, trauma, life transitions, and relational difficulties. I work with adults and older adolescents using an integrative approach grounded in cognitive-behavioral, psychodynamic, and compassion-focused frameworks.',
        whoFor: [
          'Adults experiencing anxiety, depression, or burnout',
          'Individuals processing grief, loss, or trauma',
          'People navigating major life changes or relationship challenges',
          'Those seeking deeper self-understanding and emotional resilience',
        ],
        expect:
          'An initial assessment session to understand your needs, followed by a collaboratively designed treatment plan. Sessions are typically weekly or fortnightly, in person or online.',
      },
      educational: {
        title: 'Educational Psychology',
        description:
          'Comprehensive assessments and support for children, teens, and families facing learning differences, developmental challenges, or school-related stress. I collaborate with schools and families to create environments where every learner can thrive.',
        whoFor: [
          'Children and adolescents with learning difficulties or ADHD',
          'Families seeking clarity on developmental or behavioral concerns',
          'Schools looking for assessment, recommendations, and staff guidance',
          'Parents navigating educational transitions or school placement',
        ],
        expect:
          'A thorough psycho-educational assessment, a clear written report with actionable recommendations, and a follow-up session to discuss findings and next steps.',
      },
      vocational: {
        title: 'Vocational Counseling',
        description:
          'Structured guidance for career exploration, decision-making, and professional development. Whether you are a student choosing a path, a professional considering a change, or someone re-entering the workforce, I help you connect your strengths and values to meaningful work.',
        whoFor: [
          'Students and young adults exploring career directions',
          'Professionals considering a career change or feeling stuck',
          'Individuals returning to work after a break',
          'Anyone seeking greater purpose and alignment in their work life',
        ],
        expect:
          'Interest and aptitude assessments, structured reflection exercises, and one-on-one sessions to build a clear, personalized action plan.',
      },
    },
    footer: {
      credentials: 'Clinical & Educational Psychologist',
      copyright: 'Carla Puscas. All rights reserved.',
      contactLink: 'Contact',
    },
    notFound: {
      code: '404',
      title: 'Page not found',
      message: 'The page you are looking for does not exist.',
      goHome: 'Go home',
      getInTouch: 'Get in touch',
    },
    meta: {
      siteTitle: 'Carla Puscas — Clinical & Educational Psychologist',
      siteDescription:
        'Clinical and educational psychology grounded in warmth and evidence. Therapy, assessments, and vocational counseling in Oradea and online.',
    },
  },

  // ---------------------------------------------------------------------------
  // ROMANIAN (formal "dumneavoastra" register)
  // ---------------------------------------------------------------------------
  ro: {
    nav: {
      home: 'Acasă',
      about: 'Despre mine',
      services: 'Servicii',
      blog: 'Blog',
      contact: 'Contact',
      menu: 'Meniu',
      closeMenu: 'Închide meniul',
      languageLabel: 'Limbă',
    },
    hero: {
      headline: 'Vă ajut să găsiți',
      headlineAccent: 'claritatea',
      subtitle:
        'Psihologie clinică și educațională, fundamentată pe căldură umană și dovezi științifice. Sunt aici pentru dumneavoastră.',
      cta: 'Luați legătura',
      ctaSecondary: 'Citiți blogul',
    },
    services: {
      label: 'Servicii',
      title: 'Cum vă pot ajuta',
      subtitle:
        'Fiecare persoană este unică. Ofer abordări personalizate care pornesc de acolo unde vă aflați și vă însoțesc către locul în care doriți să ajungeți.',
      clinical: {
        title: 'Psihologie clinică',
        description:
          'Terapie bazată pe dovezi științifice pentru anxietate, depresie și echilibru emoțional. Un spațiu sigur în care să explorați, să înțelegeți și să vă vindecați.',
      },
      educational: {
        title: 'Psihologie educațională',
        description:
          'Evaluări și sprijin personalizat pentru dificultăți de învățare, nevoi de neurodezvoltare și consolidarea încrederii în performanța școlară, la fiecare etapă.',
      },
      vocational: {
        title: 'Consiliere vocațională',
        description:
          'Orientare pentru tranziții profesionale, planificare vocațională și găsirea unei activități cu sens, în acord cu punctele dumneavoastră forte și valorile personale.',
      },
      learnMore: 'Aflați mai multe',
    },
    blog: {
      label: 'Blog',
      title: 'Ultimele articole',
      subtitle:
        'Reflecții despre sănătatea mintală, educație și practica de zi cu zi a unei vieți echilibrate.',
      readMore: 'Citiți mai mult',
      minRead: 'min de citit',
      backToArticles: 'Înapoi la articole',
      suggestTopic:
        'Aveți o întrebare sau un subiect despre care ați dori să scriu?',
      suggestTopicCta: 'Trimiteți o sugestie',
      tags: { Therapy: 'Terapie', Wellbeing: 'Bunăstare', Education: 'Educație', Career: 'Carieră' },
    },
    cta: {
      title: 'Primul pas este simplu',
      subtitle:
        'Fie că aveți întrebări, fie că sunteți pregătit să programați o ședință, mi-ar face plăcere să aud de la dumneavoastră.',
      button: 'Luați legătura',
    },
    contact: {
      label: 'Contact',
      title: 'Să începem o conversație',
      subtitle:
        'Fie că aveți o întrebare, doriți să programați o ședință sau pur și simplu aveți nevoie să vorbiți cu cineva — sunt aici și vă ascult cu plăcere.',
      infoTitle: 'Informații de contact',
      email: 'Email',
      location: 'Locație',
      locationValue:
        'Ședințe în cabinet disponibile în Oradea, Strada William Shakespeare Nr. 5, România.',
      locationOnline: 'Ședințe online disponibile la nivel internațional.',
      responseTime: 'Timp de răspuns',
      responseTimeValue:
        'De regulă răspund în 24 până la 48 de ore, în zilele lucrătoare.',
      formTitle: 'Trimiteți un mesaj',
      name: 'Nume',
      namePlaceholder: 'Numele dumneavoastră',
      emailLabel: 'Email',
      emailPlaceholder: 'dumneavoastra@exemplu.com',
      serviceInterest: 'Serviciul dorit',
      serviceSelect: 'Selectați un serviciu (opțional)',
      serviceClinical: 'Psihologie clinică',
      serviceEducational: 'Psihologie educațională',
      serviceVocational: 'Consiliere vocațională',
      serviceNotSure: 'Nu sunt încă sigur/sigură',
      message: 'Mesaj',
      messagePlaceholder:
        'Povestiți-mi pe scurt ce v-a determinat să mă contactați...',
      send: 'Trimiteți mesajul',
      sending: 'Se trimite...',
      successTitle: 'Mesaj trimis',
      successMessage:
        'Vă mulțumesc că mi-ați scris. Vă voi contacta în cel mai scurt timp.',
      sendAnother: 'Trimiteți un alt mesaj',
      errorMessage:
        'Ceva nu a funcționat corect. Vă rugăm să încercați din nou sau să îmi scrieți direct pe email.',
    },
    about: {
      label: 'Despre mine',
      title: 'Despre Carla',
      subtitle:
        'Un psiholog care crede în a întâmpina oamenii acolo unde se află — și în a merge alături de ei către locul în care doresc să ajungă.',
      storyTitle: 'Povestea mea',
      storyP1:
        'Sunt psiholog clinician și educațional, profund dedicată înțelegerii persoanei în integralitatea sa — nu doar simptomelor, ci și poveștii din spatele lor. Activitatea mea acoperă practica clinică, sprijinul educațional și consilierea vocațională, bazându-mă pe ani de formare profesională și pe convingerea autentică că fiecare individ are capacitatea de a crește și de a se transforma.',
      storyP2:
        'M-am format în psihologie clinică cu accent pe abordări bazate pe dovezi științifice, incluzând terapia cognitiv-comportamentală, metode psihodinamice și tehnici integrative. Cu timpul, practica mea s-a extins în mod firesc către psihologia educațională — sprijinind copii, adolescenți și familii în navigarea dificultăților de învățare, a provocărilor de dezvoltare și a stresului legat de mediul școlar.',
      storyP3:
        'Consilierea vocațională a devenit o extensie naturală a muncii mele, pe măsură ce am observat cât de profund poate afecta incertitudinea profesională sănătatea mintală și sentimentul identității personale. Ajut persoane din toate etapele vieții să găsească claritate, sens și direcție în traseul lor profesional.',
      educationTitle: 'Formare profesională',
      educationItems: [
        'Master în Psihologie Clinică',
        'Master în Psihologie Educațională',
        'Consilier vocațional atestat',
      ],
      approachTitle: 'Abordarea mea',
      approachText:
        'Practic cu căldură, curiozitate și respect. Abordarea mea este integrativă — apelez la multiple cadre terapeutice pentru a adapta sprijinul la nevoile unice ale fiecărei persoane. Cred în colaborare: dumneavoastră sunteți expertul propriei vieți, iar eu sunt aici să vă ofer instrumente, perspectivă și un spațiu sigur pentru explorare.',
      ctaText: 'Pregătit să faceți următorul pas?',
      ctaButton: 'Luați legătura',
    },
    servicesPage: {
      label: 'Servicii',
      title: 'Cum vă pot ajuta',
      subtitle:
        'Trei domenii de practică, o singură fundație comună: empatie, dovezi științifice și convingerea autentică în capacitatea dumneavoastră de creștere.',
      whoItsFor: 'Cui se adresează',
      whatToExpect: 'La ce să vă așteptați',
      ctaTitle:
        'Nu sunteți sigur care serviciu este potrivit pentru dumneavoastră?',
      ctaSubtitle:
        'Este perfect în regulă. Scrieți-mi și vom găsi împreună cea mai bună variantă.',
      ctaButton: 'Luați legătura',
      clinical: {
        title: 'Psihologie clinică',
        description:
          'Terapie bazată pe dovezi științifice pentru anxietate, depresie, traumă, tranziții de viață și dificultăți relaționale. Lucrez cu adulți și adolescenți mai mari, folosind o abordare integrativă fundamentată pe cadre cognitiv-comportamentale, psihodinamice și centrate pe compasiune.',
        whoFor: [
          'Adulți care se confruntă cu anxietate, depresie sau epuizare profesională',
          'Persoane care procesează doliul, pierderea sau trauma',
          'Oameni care trec prin schimbări majore de viață sau dificultăți relaționale',
          'Cei care doresc o înțelegere mai profundă de sine și reziliență emoțională',
        ],
        expect:
          'O ședință inițială de evaluare pentru a vă înțelege nevoile, urmată de un plan de tratament conceput în colaborare. Ședințele au loc de obicei săptămânal sau la două săptămâni, în cabinet sau online.',
      },
      educational: {
        title: 'Psihologie educațională',
        description:
          'Evaluări complexe și sprijin pentru copii, adolescenți și familii care se confruntă cu dificultăți de învățare, provocări de dezvoltare sau stres legat de mediul școlar. Colaborez cu școlile și familiile pentru a crea medii în care fiecare elev să poată prospera.',
        whoFor: [
          'Copii și adolescenți cu dificultăți de învățare sau ADHD',
          'Familii care doresc claritate privind preocupările de dezvoltare sau comportament',
          'Școli care au nevoie de evaluări, recomandări și îndrumare pentru cadre didactice',
          'Părinți care navighează tranziții educaționale sau alegerea unei școli',
        ],
        expect:
          'O evaluare psiho-educațională temeinică, un raport scris clar cu recomandări concrete și acționabile, precum și o ședință de follow-up pentru a discuta concluziile și pașii următori.',
      },
      vocational: {
        title: 'Consiliere vocațională',
        description:
          'Orientare structurată pentru explorarea carierei, luarea deciziilor și dezvoltarea profesională. Fie că sunteți student la început de drum, profesionist care ia în considerare o schimbare sau cineva care reintră pe piața muncii, vă ajut să vă conectați punctele forte și valorile cu o muncă plină de sens.',
        whoFor: [
          'Elevi, studenți și tineri adulți care explorează direcții de carieră',
          'Profesioniști care iau în considerare o schimbare de carieră sau se simt blocați',
          'Persoane care se întorc la muncă după o pauză',
          'Oricine dorește mai mult sens și aliniere în viața profesională',
        ],
        expect:
          'Evaluări de interese și aptitudini, exerciții structurate de reflecție și ședințe individuale pentru a construi un plan de acțiune clar și personalizat.',
      },
    },
    footer: {
      credentials: 'Psiholog clinician și educațional',
      copyright: 'Carla Puscas. Toate drepturile rezervate.',
      contactLink: 'Contact',
    },
    notFound: {
      code: '404',
      title: 'Pagina nu a fost găsită',
      message: 'Pagina pe care o căutați nu există.',
      goHome: 'Înapoi acasă',
      getInTouch: 'Luați legătura',
    },
    meta: {
      siteTitle: 'Carla Puscas — Psiholog clinician și educațional',
      siteDescription:
        'Psihologie clinică și educațională fundamentată pe căldură umană și dovezi științifice. Terapie, evaluări și consiliere vocațională în Oradea și online.',
    },
  },

  // ---------------------------------------------------------------------------
  // HUNGARIAN (formal "On" register)
  // ---------------------------------------------------------------------------
  hu: {
    nav: {
      home: 'Kezdőlap',
      about: 'Rólam',
      services: 'Szolgáltatások',
      blog: 'Blog',
      contact: 'Kapcsolat',
      menu: 'Menü',
      closeMenu: 'Menü bezárása',
      languageLabel: 'Nyelv',
    },
    hero: {
      headline: 'Segítséget nyújtok a',
      headlineAccent: 'tisztánlátáshoz',
      subtitle:
        'Melegséggel és tudományos megalapozottsággal végzett klinikai és nevelési pszichológia. Azért vagyok itt, hogy segítsek.',
      cta: 'Lépjen kapcsolatba velem',
      ctaSecondary: 'Olvassa a blogot',
    },
    services: {
      label: 'Szolgáltatások',
      title: 'Hogyan segíthetek',
      subtitle:
        'Minden ember egyedi. Személyre szabott megközelítéseket kínálok, amelyek ott találnak Önre, ahol éppen tart, és oda segítik, ahová el szeretne jutni.',
      clinical: {
        title: 'Klinikai pszichológia',
        description:
          'Bizonyítékokon alapuló terápia szorongásra, depresszió kezelésére és érzelmi egyensúly megteremtésére. Egy biztonságos tér a felfedezéshez, a megértéshez és a gyógyuláshoz.',
      },
      educational: {
        title: 'Nevelési pszichológia',
        description:
          'Felmérések és egyénre szabott támogatás tanulási különbségekhez, idegfejlődési szükségletekhez és az iskolai önbizalom erősítéséhez minden életkorban.',
      },
      vocational: {
        title: 'Pályaválasztási tanácsadás',
        description:
          'Útmutatást nyújtok karrierváltozásokhoz, pályatervezéshez és az Ön erősségeihez és értékeihez igazodó, értelmes munka megtalálásához.',
      },
      learnMore: 'Részletek',
    },
    blog: {
      label: 'Blog',
      title: 'Legfrissebb cikkek',
      subtitle:
        'Gondolatok a lelki egészségről, a nevelésről és a kiegyensúlyozott élet mindennapi gyakorlatáról.',
      readMore: 'Tovább olvasom',
      minRead: 'perc olvasás',
      backToArticles: 'Vissza a cikkekhez',
      suggestTopic:
        'Van kérdése, vagy van egy téma, amelyről szívesen olvasna?',
      suggestTopicCta: 'Küldjön javaslatot',
      tags: { Therapy: 'Terápia', Wellbeing: 'Jóllét', Education: 'Oktatás', Career: 'Karrier' },
    },
    cta: {
      title: 'Az első lépés egyszerű',
      subtitle:
        'Akár kérdései vannak, akár kész időpontot egyeztetni, örömmel hallok Önről.',
      button: 'Lépjen kapcsolatba velem',
    },
    contact: {
      label: 'Kapcsolat',
      title: 'Kezdjünk el beszélgetni',
      subtitle:
        'Akár kérdése van, akár időpontot szeretne egyeztetni, akár csak beszélgetni szeretne — itt vagyok, és szívesen meghallgatom.',
      infoTitle: 'Elérhetőségek',
      email: 'Email',
      location: 'Helyszín',
      locationValue:
        'Személyes konzultációk Nagyváradon (Oradea), Strada William Shakespeare Nr. 5, Románia.',
      locationOnline: 'Online konzultációk világszerte elérhetők.',
      responseTime: 'Válaszidő',
      responseTimeValue:
        'Munkanapokon általában 24–48 órán belül válaszolok.',
      formTitle: 'Írjon üzenetet',
      name: 'Név',
      namePlaceholder: 'Az Ön neve',
      emailLabel: 'Email',
      emailPlaceholder: 'on@pelda.hu',
      serviceInterest: 'Melyik szolgáltatás érdekli',
      serviceSelect: 'Válasszon szolgáltatást (nem kötelező)',
      serviceClinical: 'Klinikai pszichológia',
      serviceEducational: 'Nevelési pszichológia',
      serviceVocational: 'Pályaválasztási tanácsadás',
      serviceNotSure: 'Még nem tudom pontosan',
      message: 'Üzenet',
      messagePlaceholder: 'Meséljen röviden arról, mi hozta ide...',
      send: 'Üzenet küldése',
      sending: 'Küldés folyamatban...',
      successTitle: 'Üzenet elküldve',
      successMessage:
        'Köszönöm, hogy írt. Hamarosan felveszem Önnel a kapcsolatot.',
      sendAnother: 'Újabb üzenet küldése',
      errorMessage:
        'Valami hiba történt. Kérem, próbálkozzon újra, vagy írjon közvetlenül emailben.',
    },
    about: {
      label: 'Rólam',
      title: 'Carláról',
      subtitle:
        'Egy pszichológus, aki hisz abban, hogy az embereket ott kell megszólítani, ahol éppen tartanak — és végig kell kísérni őket azon az úton, amerre menni szeretnének.',
      storyTitle: 'Az én történetem',
      storyP1:
        'Klinikai és nevelési pszichológus vagyok, aki mélyen elkötelezett a teljes személy megértése iránt — nemcsak a tünetek, hanem a mögöttük rejtő történet iránt is. Munkám felöleli a klinikai gyakorlatot, a nevelési támogatást és a pályaválasztási tanácsadást, évek képzésére és arra az őszinte meggyőződésre építve, hogy minden emberben megvan a fejlődés és a változás képessége.',
      storyP2:
        'Klinikai pszichológiából szereztem képesítést, a bizonyítékokon alapuló megközelítésekre összpontosítva, beleértve a kognitív viselkedésterápiát, a pszichodinamikus módszereket és az integratív technikákat. Idővel a gyakorlatom természetes módon bővült a nevelési pszichológia felé — segítve gyerekeknek, kamaszoknak és családoknak a tanulási nehézségek, fejlődési kihívások és az iskolai stressz kezelésében.',
      storyP3:
        'A pályaválasztási tanácsadás munkám természetes kiterjesztésévé vált, amint felismertem, milyen mélyen érintheti a pályaválasztási bizonytalanság a lelki egészséget és az önazonosság-érzést. Az élet minden szakaszában segítek egyéneknek, hogy tisztánlátást, célt és irányt találjanak szakmai útjukon.',
      educationTitle: 'Végzettség',
      educationItems: [
        'Mesterdiploma klinikai pszichológiából',
        'Mesterdiploma nevelési pszichológiából',
        'Minősített pályaválasztási tanácsadó',
      ],
      approachTitle: 'Megközelítésem',
      approachText:
        'Melegséggel, kíváncsisággal és tisztelettel dolgozom. Megközelítésem integratív — többféle terápiás keretrendszerből merítek, hogy mindenkinek az egyedi igényeihez tudjam igazítani a támogatást. Hiszek az együttműködésben: Ön a saját életének a szakértője, én pedig azért vagyok itt, hogy eszközöket, perspektívát és biztonságos teret kínáljak a felfedezéshez.',
      ctaText: 'Kész a következő lépésre?',
      ctaButton: 'Lépjen kapcsolatba velem',
    },
    servicesPage: {
      label: 'Szolgáltatások',
      title: 'Hogyan segíthetek',
      subtitle:
        'Három gyakorlati terület, egyetlen közös alap: empátia, tudományos megalapozottság és őszinte hit az Ön fejlődési képességében.',
      whoItsFor: 'Kinek szól',
      whatToExpect: 'Mire számíthat',
      ctaTitle: 'Nem biztos benne, melyik szolgáltatás az Önnek való?',
      ctaSubtitle:
        'Ez teljesen rendben van. Írjon nekem, és közösen kitaláljuk a megoldást.',
      ctaButton: 'Lépjen kapcsolatba velem',
      clinical: {
        title: 'Klinikai pszichológia',
        description:
          'Bizonyítékokon alapuló terápia szorongás, depresszió, trauma, életváltozások és kapcsolati nehézségek esetén. Felnőttekkel és idősebb serdülőkkel dolgozom integratív megközelítéssel, amely kognitív viselkedésterápiás, pszichodinamikus és együttérzésre összpontosító keretrendszereken alapul.',
        whoFor: [
          'Szorongással, depresszióval vagy kiégéssel küszködő felnőttek',
          'Gyászt, veszteséget vagy traumát feldolgozó személyek',
          'Jelentős életváltozásokon vagy kapcsolati kihívásokon átesők',
          'Mélyebb önismeretre és érzelmi ellenállóképességre vágyók',
        ],
        expect:
          'Egy bevezető felmérő konzultáció az Ön igényeinek megértésére, amelyet közösen megtervezett kezelési terv követ. A konzultációk általában hetente vagy kéthetente zajlanak, személyesen vagy online.',
      },
      educational: {
        title: 'Nevelési pszichológia',
        description:
          'Átfogó felmérések és támogatás gyerekeknek, kamaszoknak és családoknak, akik tanulási különbségekkel, fejlődési kihívásokkal vagy iskolai stresszel szembesülnek. Együttműködöm az iskolákkal és családokkal, hogy olyan környezetet teremtsünk, amelyben minden tanuló kibontakoztathatja a képességeit.',
        whoFor: [
          'Tanulási nehézségekkel vagy ADHD-val élő gyerekek és kamaszok',
          'Fejlődési vagy viselkedési aggályok miatt tisztánlátást kereső családok',
          'Felmérést, ajánlásokat és pedagógiai útmutatást kereső iskolák',
          'Iskolaváltásban vagy iskolaválasztásban támogatást kereső szülők',
        ],
        expect:
          'Alapos pszicho-edukációs felmérés, világos írásos jelentés konkrét, megvalósítható ajánlásokkal, valamint utókövető konzultáció az eredmények és a további lépések áttekintéséhez.',
      },
      vocational: {
        title: 'Pályaválasztási tanácsadás',
        description:
          'Strukturált útmutatás a karrierfelfedezéshez, döntéshozatalhoz és szakmai fejlődéshez. Akár diák, aki utat választ, akár szakember, aki változáson gondolkodik, akár valaki, aki visszatér a munkaerőpiacra — segítséget nyújtok abban, hogy erősségeit és értékeit értelmes munkával köthesse össze.',
        whoFor: [
          'Pályairányt kereső diákok és fiatal felnőttek',
          'Karrierváltozáson gondolkodó vagy megrekedést érző szakemberek',
          'Szünet után a munkaerőpiacra visszatérő személyek',
          'Bárkinek, aki több célt és összhangot keres a munkaéletében',
        ],
        expect:
          'Érdeklődési és alkalmassági felmérések, strukturált önreflexiós gyakorlatok és egyéni konzultációk egy világos, személyre szabott cselekvési terv kidolgozásához.',
      },
    },
    footer: {
      credentials: 'Klinikai és nevelési pszichológus',
      copyright: 'Carla Puscas. Minden jog fenntartva.',
      contactLink: 'Kapcsolat',
    },
    notFound: {
      code: '404',
      title: 'Az oldal nem található',
      message: 'A keresett oldal nem létezik.',
      goHome: 'Vissza a kezdőlapra',
      getInTouch: 'Lépjen kapcsolatba velem',
    },
    meta: {
      siteTitle: 'Carla Puscas — Klinikai és nevelési pszichológus',
      siteDescription:
        'Melegséggel és tudományos megalapozottsággal végzett klinikai és nevelési pszichológia. Terápia, felmérések és pályaválasztási tanácsadás Nagyváradon és online.',
    },
  },
}

export function t(locale: Locale): TranslationKeys {
  return translations[locale] || translations[defaultLocale]
}
