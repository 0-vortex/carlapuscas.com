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
      locationValue: 'In-person sessions available in Cluj-Napoca, Romania.',
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
        'Graduate Diploma in Educational Psychology',
        'Certified Vocational Counselor',
        'Ongoing professional development in trauma-informed care',
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
        'Clinical and educational psychology grounded in warmth and evidence. Therapy, assessments, and vocational counseling in Cluj-Napoca and online.',
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
        'Ședințe în cabinet disponibile în Cluj-Napoca, România.',
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
        'Diplomă postuniversitară în Psihologie Educațională',
        'Consilier vocațional atestat',
        'Dezvoltare profesională continuă în îngrijirea informată de traumă',
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
          'Studenți și tineri adulți care explorează direcții de carieră',
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
        'Psihologie clinică și educațională fundamentată pe căldură umană și dovezi științifice. Terapie, evaluări și consiliere vocațională în Cluj-Napoca și online.',
    },
  },

  // ---------------------------------------------------------------------------
  // HUNGARIAN (formal "On" register)
  // ---------------------------------------------------------------------------
  hu: {
    nav: {
      home: 'Kezdolap',
      about: 'Rolam',
      services: 'Szolgaltatasok',
      blog: 'Blog',
      contact: 'Kapcsolat',
      menu: 'Menu',
      closeMenu: 'Menu bezarasa',
      languageLabel: 'Nyelv',
    },
    hero: {
      headline: 'Segitseget nyujtok a',
      headlineAccent: 'tisztanlatashoz',
      subtitle:
        'Melegseggel es tudomanyos megalapozottsaggal vegzett klinikai es nevelesi pszichologia. Azert vagyok itt, hogy segitsek.',
      cta: 'Lepjen kapcsolatba velem',
      ctaSecondary: 'Olvassa a blogot',
    },
    services: {
      label: 'Szolgaltatasok',
      title: 'Hogyan segithetek',
      subtitle:
        'Minden ember egyedi. Szemelyreszabott megkozeliteseket kinalok, amelyek ott talalnak Onre, ahol eppen tart, es oda segitik, ahova el szeretne jutni.',
      clinical: {
        title: 'Klinikai pszichologia',
        description:
          'Bizonyitekokon alapulo terapia szorongasra, depresszio kezelesere es erzelmi egyensuly megteremtesere. Egy biztonsagos ter a felfedezeshez, a megerteshez es a gyogyulashoz.',
      },
      educational: {
        title: 'Nevelesi pszichologia',
        description:
          'Felmeresek es egyenre szabott tamogatas tanulasi kulonbsegekhez, idegfejlodesi szuksegletekhez es az iskolai onbizalom erositesehez minden eletkorban.',
      },
      vocational: {
        title: 'Palyavalasztasi tanacsadas',
        description:
          'Utmutatat nyujtok karriervaltozasokhoz, palyatervezeshez es az On erossegeihez es ertekeihez igazodo, ertelmes munka megtalalasahoz.',
      },
      learnMore: 'Reszletek',
    },
    blog: {
      label: 'Blog',
      title: 'Legfrissebb cikkek',
      subtitle:
        'Gondolatok a lelki egeszsegrol, a nevelesrol es a kiegyensulyozott elet mindennapi gyakorlatarol.',
      readMore: 'Tovabb olvasom',
      minRead: 'perc olvasas',
      backToArticles: 'Vissza a cikkekhez',
      suggestTopic:
        'Van kerdese, vagy van egy tema, amelyrol szivesen olvasna?',
      suggestTopicCta: 'Kuldjeon javaslatot',
    },
    cta: {
      title: 'Az elso lepes egyszeru',
      subtitle:
        'Akar kerdesei vannak, akar kesz idopontot egyeztetni, orommel hallok Onrol.',
      button: 'Lepjen kapcsolatba velem',
    },
    contact: {
      label: 'Kapcsolat',
      title: 'Kezdjunk el beszelgetni',
      subtitle:
        'Akar kerdese van, akar idopontot szeretne egyeztetni, akar csak beszelgetni szeretne — itt vagyok, es szivesen meghallgatom.',
      infoTitle: 'Elerhetosegek',
      email: 'Email',
      location: 'Helyszin',
      locationValue:
        'Szemelyes konzultaciok Kolozsvarott (Cluj-Napoca), Romaniaban.',
      locationOnline: 'Online konzultaciok vilagszerte elerhetok.',
      responseTime: 'Valaszido',
      responseTimeValue:
        'Munkanapokon altalaban 24-48 oran belul valaszolok.',
      formTitle: 'Irjon uzenetet',
      name: 'Nev',
      namePlaceholder: 'Az On neve',
      emailLabel: 'Email',
      emailPlaceholder: 'on@pelda.hu',
      serviceInterest: 'Melyik szolgaltatas erdekli',
      serviceSelect: 'Valasszon szolgaltatast (nem kotelezo)',
      serviceClinical: 'Klinikai pszichologia',
      serviceEducational: 'Nevelesi pszichologia',
      serviceVocational: 'Palyavalasztasi tanacsadas',
      serviceNotSure: 'Meg nem tudom pontosan',
      message: 'Uzenet',
      messagePlaceholder: 'Meseljen roviden arrol, mi hozta ide...',
      send: 'Uzenet kuldese',
      sending: 'Kuldes folyamatban...',
      successTitle: 'Uzenet elkuldve',
      successMessage:
        'Koszonom, hogy irt. Hamarosan felveszem Onnel a kapcsolatot.',
      sendAnother: 'Ujabb uzenet kuldese',
      errorMessage:
        'Valami hiba tortent. Kerem, probalkozzon ujra, vagy irjon kozvetlenul emailben.',
    },
    about: {
      label: 'Rolam',
      title: 'Carlarol',
      subtitle:
        'Egy pszichologus, aki hisz abban, hogy az embereket ott kell megszolitani, ahol eppen tartanak — es vegig kell kiserni oket azon az uton, amerre menni szeretnenek.',
      storyTitle: 'Az en tortenetem',
      storyP1:
        'Klinikai es nevelesi pszichologus vagyok, aki melyen elkotelezett a teljes szemely megertese irant — nemcsak a tunetek, hanem a mogottuk rejto tortenet irant is. Munkam feloleli a klinikai gyakorlatot, a nevelesi tamogatast es a palyavalasztasi tanacsadast, evek kepzesere es arra az oszinte meggyozodesre epitve, hogy minden emberben megvan a fejlodes es a valtozas kepessege.',
      storyP2:
        'Klinikai pszichologiabol szereztem kepesitest, a bizonyitekokon alapulo megkozelitesekre osszpontositva, beleertve a kognitiv viselkedesterapiat, a pszichodinamikus modszereket es az integrativ technikakat. Idovel a gyakorlatom termeszetes modon bovult a nevelesi pszichologia fele — segitve gyerekeknek, kamaszoknak es csaladoknak a tanulasi nehezsegek, fejlodesi kihivasok es az iskolai stressz kezeleseben.',
      storyP3:
        'A palyavalasztasi tanacsadas munkam termeszetes kiterjeszteseve valt, amint felismertem, milyen melyen erintheti a palyavalasztasi bizonytalansag a lelki egeszseget es az onazonossag-erzest. Az elet minden szakaszaban segitsek egyeneknek, hogy tisztanlatast, celt es iranyt talaljanak szakmai utjukon.',
      educationTitle: 'Vegzettseg',
      educationItems: [
        'Mesterdiploma klinikai pszichologiabol',
        'Posztgradualis diploma nevelesi pszichologiabol',
        'Minositett palyavalasztasi tanacsado',
        'Folyamatos szakmai fejlodes a traumainformalt gondozas teruleten',
      ],
      approachTitle: 'Megkozelitesem',
      approachText:
        'Melegseggel, kivancsisaggal es tisztelettel dolgozom. Megkozelitesem integrativ — tobbfele terapias keretrendszerbol meritek, hogy mindenkinek az egyedi igenyeihez tudjam igazitani a tamogatast. Hiszek az egyuttmukodesben: On a sajat eletenek a szakertoje, en pedig azert vagyok itt, hogy eszkozoket, perspektivat es biztonsagos teret kinaljak a felfedezeshez.',
      ctaText: 'Kesz a kovetkezo lepesre?',
      ctaButton: 'Lepjen kapcsolatba velem',
    },
    servicesPage: {
      label: 'Szolgaltatasok',
      title: 'Hogyan segithetek',
      subtitle:
        'Harom gyakorlati terulet, egyetlen kozos alap: empatia, tudomanyos megalapozottsag es oszinte hit az On fejlodesi kepessegeben.',
      whoItsFor: 'Kinek szol',
      whatToExpect: 'Mire szamithat',
      ctaTitle: 'Nem biztos benne, melyik szolgaltatas az Onnek valo?',
      ctaSubtitle:
        'Ez teljesen rendben van. Irjon nekem, es kozosen kitalaljuk a megoldast.',
      ctaButton: 'Lepjen kapcsolatba velem',
      clinical: {
        title: 'Klinikai pszichologia',
        description:
          'Bizonyitekokon alapulo terapia szorongas, depresszio, trauma, eletvaltozasok es kapcsolati nehezsegek eseten. Felnottekkel es idosebb serdulokkel dolgozom integrativ megkozelitessel, amely kognitiv viselkedesterapias, pszichodinamikus es egyutterzesre osszpontosito keretrendszereken alapul.',
        whoFor: [
          'Szorongassal, depresszioval vagy kiegessel kuszkodo felnottek',
          'Gyaszt, veszteseget vagy traumat feldolgozo szemelyek',
          'Jelentos eletvaltozasokon vagy kapcsolati kihivasokon atesok',
          'Melyebb onismeretre es erzelmi ellenallokepessegre vagyok',
        ],
        expect:
          'Egy bevezeto felmero konzultacio az On igenyeinek megertesere, amelyet kozosen megtervezett kezelesi terv kovet. A konzultaciok altalaban hetente vagy kethetente zajlanak, szemelyesen vagy online.',
      },
      educational: {
        title: 'Nevelesi pszichologia',
        description:
          'Atfogo felmeresek es tamogatas gyerekeknek, kamaszoknak es csaladoknak, akik tanulasi kulonbsegekkel, fejlodesi kihivasokkal vagy iskolai stresszel szembesulnek. Egyuttmukodom az iskolakkal es csaladokkal, hogy olyan kornyezetet teremtsunk, amelyben minden tanulo kibontakoztathatja a kepessegeit.',
        whoFor: [
          'Tanulasi nehezsegekkel vagy ADHD-val elo gyerekek es kamaszok',
          'Fejlodesi vagy viselkedesi aggalyok miatt tisztanlatast kereso csaladok',
          'Felmerest, ajanlasokat es pedagogiai utmutatast kereso iskolak',
          'Iskolavaltasban vagy iskolavalasztasban tamogatast kereso szulok',
        ],
        expect:
          'Alapos pszicho-edukacios felmeres, vilagos irasos jelentes konkret, megvalosithato ajanlasokkal, valamint utokoveto konzultacio az eredmenyek es a tovabbi lepesek attekintesehez.',
      },
      vocational: {
        title: 'Palyavalasztasi tanacsadas',
        description:
          'Strukturalt utmutatas a karrierfelfedezeshez, donteshozatalhoz es szakmai fejlodeshez. Akar diak, aki utat valaszt, akar szakember, aki valtozason gondolkodik, akar valaki, aki visszater a munkaeropiacra — segitseget nyujtok abban, hogy erossegeit es ertekeit ertelmes munkaval kothesse ossze.',
        whoFor: [
          'Palyairanyt kereso diakok es fiatal felnottek',
          'Karriervaltozason gondolkodo vagy megrekedest erzo szakemberek',
          'Szunet utan a munkaeropiacra visszatero szemelyek',
          'Barkinek, aki tobb celt es osszhangot keres a munkaeleteben',
        ],
        expect:
          'Erdeklodesi es alkalmassagi felmeresek, strukturalt onreflexios gyakorlatok es egyeni konzultaciok egy vilagos, szemelyreszabott cselekvesi terv kidolgozasahoz.',
      },
    },
    footer: {
      credentials: 'Klinikai es nevelesi pszichologus',
      copyright: 'Carla Puscas. Minden jog fenntartva.',
      contactLink: 'Kapcsolat',
    },
    notFound: {
      code: '404',
      title: 'Az oldal nem talalhato',
      message: 'A keresett oldal nem letezik.',
      goHome: 'Vissza a kezdolapra',
      getInTouch: 'Lepjen kapcsolatba velem',
    },
    meta: {
      siteTitle: 'Carla Puscas — Klinikai es nevelesi pszichologus',
      siteDescription:
        'Melegseggel es tudomanyos megalapozottsaggal vegzett klinikai es nevelesi pszichologia. Terapia, felmeresek es palyavalasztasi tanacsadas Kolozsvaron es online.',
    },
  },
}

export function t(locale: Locale): TranslationKeys {
  return translations[locale] || translations[defaultLocale]
}
