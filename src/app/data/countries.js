export const countries = {
  usa: {
    name: "USA",
    image: "/images/home/countries/usa.jpg",
    details: {
      intro: {
        headline: "Study in the USA",
        bannerImg: "/images/countries/usa/banner.jpg",
        content:
          ` The USA stands as a global frontrunner in education, home to a
                            significant proportion of the world’s top- ranked universities, as
                            consistently highlighted by major international rankings.
                            Renowned for its prestigious institutions and an impressive
                            number of Nobel laureates among its faculty, the U.S.offers an
                            unparalleled academic environment.Few nations can rival the
                            breadth and depth of high- ranking universities that the U.S.
                           provides, making it a prime destination for students seeking
                            excellence in education, cutting- edge research, and access to
                            distinguished scholars across various fields.`
      },
      features: {
        bgImg: '/images/countries/usa/feature-bg.png',
        mainImg: '/images/countries/usa/features.jpg',
        altText: 'usa',
        points: [
          "The United States is the world’s third-largest country, comprising 50 states.",
          "Capital: Washington, D.C.",
          "Currency: US Dollar.",
          "The USA welcomes over a million international students annually.",
          "Over 25% of the world’s top 100 universities are located in the USA.",
          "Both Merit-Based and Need-Based Scholarships are available.",
          "Choose from over 4,500 accredited universities and institutions.",
          "12 U.S. cities rank among the world’s best student cities (QS Best Student Cities 2023).",
          "Extensive opportunities for Research, Teaching, and Graduate Assistantships are available."
        ]
      },
      whyStudyIn: {
        title: "Why study in USA",
        bgImg: "/images/countries/usa/usa-flag.jpg",
        description: `Pursue your education within one of the world’s most esteemed higher 
         education systems, where you’ll engage with advanced technology and  groundbreaking research 
         for a deeply immersive and collaborative learning  experience. With a vast selection of institutions, diverse academic disciplines,
           and specialised programs often unavailable elsewhere, the U.S. offers  unparalleled educational opportunities.
            Its uniquely adaptable system allows  you to tailor your studies to align with your academic ambitions and career  objectives.
             Graduate equipped with a global perspective and the practical  skills necessary to excel in the ever-evolving professional 
             landscape.`,
        points: [
          {
            title: "Vibrant Campus Life and Student Support Systems",
            icon: '/images/countries/usa/icons/scholar.svg',
          },
          {
            title: "Abundant Scholarship and Financial Aid Options",
            icon: '/images/countries/usa/icons/cash.svg',
          },
          {
            title: "Multicultural Environment and Global Networking",
            icon: '/images/countries/usa/icons/world.svg',
          },
          {
            title: "Excellent Career Opportunities and High Earning Potential",
            icon: '/images/countries/usa/icons/cash-in-bag.svg',
          },
          {
            title: "Optional Practical Training (OPT) and STEM OPT Extension",
            icon: '/images/countries/usa/icons/connectivity.svg',
          },
          {
            title: "Work Rights and Stay Back",
            icon: '/images/countries/usa/icons/globe-in-document.svg',
          },
          {
            title: "Strong Emphasis on Practical Learning and Skill Development",
            icon: '/images/countries/usa/icons/brain.svg',
          },
          {
            title: "Pioneering Research Opportunities",
            icon: '/images/countries/usa/icons/search.svg',
          },
          {
            title: "Diverse Programs and Flexible Education System",
            icon: '/images/countries/usa/icons/loop.svg',
          },
          {
            title: "World-Class Academic Excellence",
            icon: '/images/countries/usa/icons/globe.svg',
          },
        ]
      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/usa/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "Post-graduation work visas (OPT) extend up to 3 years for STEM graduates.",
          "Curricular Practical Training (CPT) allows up to 12 months of internships during studies.",
        ],
      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        Students have the opportunity to apply for admissions during three
        main intakes throughout the year –
        <strong>September</strong>, <strong>January</strong>, or
        <strong>May</strong> – depending on the university and program
        availability.
          `,
        leftBackgroundImage: "/images/countries/usa/usa-map.jpg",
        rightImage: {
          src: "/images/countries/usa/intake.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "Why is the USA a popular choice for Indian students?",
          ans: "The USA offers world-renowned universities, flexible academic programs, advanced research opportunities, and strong career prospects through CPT and OPT, making it a top destination for Indian students."
        },
        {
          ques: "Do US universities accept India’s 10+2+3 education system for master’s programs?",
          ans: "Yes, many US universities accept the 10+2+3 education system. Acceptance depends on the university and program, and some may require credential evaluation or bridge courses."
        },
        {
          ques: "What are the typical academic requirements for admission to US universities?",
          ans: "Common requirements include academic transcripts, a bachelor’s degree for master’s programs, standardized test scores (if required), English proficiency test scores, SOP, and LORs."
        },
        {
          ques: "What English language proficiency tests are accepted and what are the typical scores?",
          ans: "US universities commonly accept IELTS, TOEFL, PTE, and Duolingo. Typical minimum scores range from IELTS 6.5+, TOEFL 80+, or equivalent depending on the university."
        },
        {
          ques: "Can I get admission to a US university without GRE/GMAT scores?",
          ans: "Yes, many US universities offer GRE/GMAT waivers or do not require them, especially for certain programs or based on academic and professional background."
        },
        {
          ques: "How important is the Statement of Purpose (SOP) and Letters of Recommendation (LORs)?",
          ans: "SOPs and LORs are crucial as they highlight your academic goals, motivation, achievements, and suitability for the program beyond grades and test scores."
        },
        {
          ques: "Is there an age limit or gap year restriction for studying in the USA?",
          ans: "There is no official age limit. Gap years are generally acceptable if justified through work experience, skill development, or other productive activities."
        },
        {
          ques: "What is an I-20 Form, and when do I receive it?",
          ans: "The I-20 is an official document issued by a US university after admission confirmation, required to apply for an F-1 visa."
        },
        {
          ques: "What are the financial requirements for an F-1 visa?",
          ans: "Students must demonstrate sufficient funds to cover tuition, living expenses, and other costs for at least the first year of study in the USA."
        },
        {
          ques: "How long does the F-1 visa interview process take?",
          ans: "The interview itself is usually brief, lasting a few minutes. Visa processing time may vary depending on appointment availability and individual cases."
        },
        {
          ques: "Is health insurance mandatory for international students in the USA?",
          ans: "Yes, most US universities require international students to have valid health insurance for the entire duration of their studies."
        },
        {
          ques: "What are some hidden costs I should be aware of?",
          ans: "Hidden costs may include health insurance, textbooks, housing deposits, transportation, utilities, and personal expenses."
        },
        {
          ques: "Are there many scholarships available for Indian students in the USA?",
          ans: "Yes, Indian students can apply for merit-based scholarships, need-based aid, assistantships, and university-specific funding opportunities."
        },
        {
          ques: "Can I work while studying on an F-1 visa in the USA?",
          ans: "Yes, students can work up to 20 hours per week on-campus during semesters and full-time during official breaks."
        },
        {
          ques: "What is Curricular Practical Training (CPT)?",
          ans: "CPT allows students to gain practical work experience related to their field of study while enrolled, usually after completing one academic year."
        },
        {
          ques: "What is Optional Practical Training (OPT)?",
          ans: "OPT allows international students to work in the USA for up to 12 months after completing their degree in a field related to their studies."
        },
        {
          ques: "What is the STEM OPT Extension?",
          ans: "Students graduating from STEM-designated programs can extend their OPT by an additional 24 months, totaling 36 months of work authorization."
        },
        {
          ques: "What is the H-1B visa, and how does it relate to F-1 students?",
          ans: "The H-1B is a work visa that allows US employers to hire skilled professionals. Many F-1 students transition to H-1B after OPT."
        },
        {
          ques: "Is it possible to get permanent residency (Green Card) in the USA after studying?",
          ans: "Yes, while studying does not guarantee a Green Card, students may become eligible through employment sponsorship, family sponsorship, or other legal pathways."
        }
      ],
    },

  },
  uk: {
    name: "UK",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in the UK",
        bannerImg: "/images/countries/uk/banner.jpg",
        content:
          ` The UK is a dynamic and influential nation, offering a rich tapestry of history,
            innovation, and diverse landscapes. The country holds a significant global economic
            standing, largely driven by its highly developed service sector, particularly robust in
            financial services, with London serving as a world-leading financial hub. British
            society benefits from a well-established welfare state, including the National Health
            Service (NHS), providing universal healthcare. Whilst facing contemporary
            challenges, the nation takes pride in its enduring democratic traditions and vibrant
            cultural scene. From the rugged beauty of the Scottish Highlands and Welsh
            mountains to the rolling hills of England and dramatic coastlines, the UK's varied
            natural environment provides both stunning scenery and ample opportunities for
            outdoor pursuits, contributing to a diverse quality of life for its residents.
            `
      },
      features: {
        bgImg: '/images/countries/uk/map-2.png',
        mainImg: '/images/countries/uk/students.jpg',
        altText: 'usa',
        points: [
          "Capital: London",
          "Official Language: English",
          "Currency: Pound Sterling (GBP)",
          "Main Cities: Birmingham, Manchester, Glasgow, Newcastle, Sheffield, Liverpool, Leeds, Edinburgh, Bristol, Cardiff, Nottingham, Leicester, Belfast"
        ]

      },
      whyStudyIn: {
        title: "Why study in UK",
        bgImg: "/images/countries/uk/banner.jpg",
        description: `With an academic reputation forged over centuries, the UK is home to some of the
                world’s oldest and most prestigious universities, consistently ranking at the pinnacle
                of global education. These institutions boast a rich legacy of welcoming international
                students, offering an unforgettable experience tailored to their diverse needs and
                aspirations.Graduates from UK universities benefit from a wealth of career
                opportunities across various in-demand sectors. For those in Engineering, roles in
                civil, mechanical, aerospace, and electrical engineering are plentiful. Science and
                Technology graduates are highly sought after in areas like software development,
                data science, cybersecurity, and AI. The Business landscape offers strong prospects
                in finance, management consulting, and marketing. Law graduates can pursue
                careers as solicitors or barristers, particularly in corporate or intellectual property law.
                The thriving Arts and creative industries provide avenues in design, film, media, and
                digital marketing.To support international students, a diverse range of scholarships is
                available, including prestigious government-funded schemes like Chevening and
                Commonwealth Scholarships, university-specific awards based on merit or need,
                and subject-specific grants. These scholarships can significantly alleviate financial
                burdens, allowing students to focus on their academic and professional
                development.
                `,
        points: [
          {
            title: "Global Leader in Research and Innovation",
            icon: "/images/countries/usa/icons/search.svg",
          },
          {
            title: "Popular Choice for International Students",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Home to Top-Ranked Universities",
            icon: "/images/countries/usa/icons/globe.svg",
          },
          {
            title: "Strong Focus on Graduate Employability",
            icon: "/images/countries/usa/icons/brain.svg",
          },
          {
            title: "Masters Programs with 1-Year Work Placements",
            icon: "/images/countries/usa/icons/connectivity.svg",
          },
          {
            title: "High Standard of Living",
            icon: "/images/countries/usa/icons/globe-in-document.svg",
          },
          {
            title: "Study Options Without IELTS",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "1-Year Masters & Sandwich Programs",
            icon: "/images/countries/usa/icons/loop.svg",
          },
          {
            title: "Wide Range of Globally Recognised Universities",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Globally Recognised Degrees with Strong Career Value",
            icon: "/images/countries/usa/icons/scholar.svg",
          }

        ]

      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/uk/uk-workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "20 hours per week of work allowed during regular academic sessions.",
          "40 hours per week of work allowed during vacation periods.",
          "International students in the UK are eligible for a 2-year Graduate Visa (Post-Study Work or PSW). Under the UK’s points-based immigration system, STEM graduates and professionals have a streamlined path to work rights, and by securing eligible employment they can qualify for a Skilled Worker Visa, which can ultimately lead to Indefinite Leave to Remain (ILR), granting permanent residency in the UK.",
        ],

      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>September / January</strong><br />
Few universities offering multiple intakes (February, April, May, October and November)

          `,
        leftBackgroundImage: "/images/countries/uk/map.jpg",
        rightImage: {
          src: "/images/countries/uk/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "What are the general financial requirements for a UK Student Visa?",
          ans: "You must demonstrate that you have sufficient funds to cover your tuition fees as stated on your CAS, and living costs. For courses in London, this is currently £1,483 per month, and for outside London, it's £1,136 per month, for up to 9 months."
        },
        {
          ques: "Do I need to prove my English language proficiency?",
          ans: "While formal English language tests like IELTS are common for UK university admissions, many universities offer alternative ways for international students to prove their proficiency: this includes accepting strong English scores from your 12th-exams (State Board, CBSE, ICSE), a Medium of Instruction (MOI) certificate from your previous educational institution confirming that your prior studies were entirely taught in English, or successfully passing an online interview conducted by the university team to assess your spoken English and comprehension skills."
        },
        {
          ques: "What is the Immigration Health Surcharge (IHS) and how much is it?",
          ans: "The IHS is a mandatory fee paid as part of your visa application, which allows you to access the UK's National Health Service (NHS). For students, it's currently £776 per year."
        },
        {
          ques: "International students might be eligible for an IHS refund?",
          ans: "Yes, International students eligible for a full or partial IHS refund."
        },
        {
          ques: "How do international students access healthcare services in the UK once they have paid the IHS?",
          ans: "After paying the IHS, international students can access the NHS in the same way as a permanent UK resident, including GP appointments and hospital treatment. However, some dental, optical, and prescribed medicine costs may still apply."
        },
        {
          ques: "What types of accommodation are available for international students in the UK?",
          ans: "Common options include university-owned halls of residence (catered or self-catered), private luxury student accommodation, homestay with a UK family, or privately rented accommodation."
        },
        {
          ques: "How can an international student open a bank account in the UK?",
          ans: "To open a student bank account, you provide proof of your student status (e.g., UCAS code or university letter), a valid passport/ID, and proof of address. Some banks allow online applications."
        },
        {
          ques: "Can international students bring their family members (dependants) with them to the UK?",
          ans: "Only students pursuing a PhD, or Master's by Research (MRes) lasting at least 9 months can bring their dependents to the UK. For these eligible students, proof of relationship (such as marriage or birth certificates) and sufficient additional funds to cover each dependant's living costs are strictly required. Children must generally be under 18 at the time of application."
        },
        {
          ques: "What is National Insurance (NI) and when do international students need to apply for one?",
          ans: "National Insurance contributions help fund the NHS and certain social security benefits. If you work in the UK, you must have an NI number or apply for one as soon as you start work."
        },
        {
          ques: "What work opportunities exist in the UK after graduation for international students, other than the Graduate visa?",
          ans: "Beyond the Graduate visa, international students can explore the Skilled Worker visa route, requiring a job offer from a licensed UK employer sponsoring a job that meets specific skill and salary levels. Other niche visas for specific talents may also be available."
        },
        {
          ques: "What is the Skilled Worker visa and what are its key requirements for international students?",
          ans: "The Skilled Worker visa requires a confirmed job offer from a UK employer with a Skilled Worker sponsor license. The job must meet appropriate skill levels (RQF3 upwards) and a minimum salary threshold, which can be lower for \"new entrants\" (often former students)."
        },
        {
          ques: "What are some \"new scopes\" or emerging sectors that offer good work opportunities for international students in the UK?",
          ans: "Emerging sectors with high demand include various fields within Technology and IT software development, data science, cybersecurity, Healthcare medical, paramedical, pharmacy and engineering."
        },
        {
          ques: "Can international students drive in the UK with their home country's driving license?",
          ans: "Yes, International students from outside the EEA can drive for up to one year with a valid driving license from their home country or an International Driving Permit. After one year, they must obtain a provisional UK license and pass a UK driving test."
        },
        {
          ques: "Are there any specific academic or research areas that are gaining increased attention in the UK, offering new scope for international students?",
          ans: "Yes, areas like AI, ML, Engineering, Pure Science options, Commerce, Biotechnology, Renewable Energy, and Advanced Manufacturing are seeing significant investment and growth, potentially offering enhanced research and work opportunities for international graduates."
        },
        {
          ques: "What is the general processing time for a UK Student Visa application?",
          ans: "The processing time for a UK Student Visa application is typically around three weeks."
        },
        {
          ques: "What is a CAS?",
          ans: "A Confirmation of Acceptance for Studies (CAS) is a unique electronic reference number issued by a UK university once they have offered you an unconditional place on a course. It is essential for your student visa application, serving as official proof that you have been accepted to study in the UK."
        },
        {
          ques: "Can I apply to more than one university in the UK?",
          ans: "Bachelors applications are submitted through (UCAS) allowing you to select up to five distinct courses at various universities or different courses within the same university, for Masters programmes free to submit applications directly to multiple universities without any prohibition."
        },
        {
          ques: "Can international students work in the UK?",
          ans: "Yes, international students on a Student Visa are generally permitted to work in the UK. If you are on a full-time degree-level course, you can work up to 20 hours per week during term time and full-time during official university vacation periods."
        },
        {
          ques: "Can I visit my home while studying in the UK?",
          ans: "Yes, as an international student with a valid UK Student Visa, you are generally permitted to travel in and out of the UK. It is crucial to ensure that any travel does not interfere with your studies and that you are attending all required classes and engagements. You should inform your university if you plan to be away during term time and ensure your visa remains valid for re-entry."
        },
        {
          ques: "Is there any age limit for studying in the UK?",
          ans: "For a Student Visa, you must be 16 years old or over. While there's a minimum age, there is no upper age limit for studying in the UK. Many mature students from various backgrounds pursue higher education in the UK."
        }
      ],

    },
  },
  canada: {
    name: "Canada",
    image: "/images/home/countries/canada.jpg",
    details: {
      intro: {
        headline: "Study in the Canada",
        bannerImg: "/images/countries/usa/banner.jpg",
        content:
          ` Canada is a top destination for international students because it offers a safe and welcoming environment,
           a high-quality education system, and diverse opportunities for academic and personal growth.
            Students benefit from world-class institutions while enjoying vibrant city life alongside breathtaking natural scenery.
             Canada is a federation made up of ten provinces—British Columbia, Alberta, Manitoba,
              New Brunswick, Newfoundland and Labrador, Ontario, Nova Scotia, Quebec, Prince Edward Island,
               and Saskatchewan—and three territories: the Northwest Territories, Yukon, and Nunavut.
                The capital city is Ottawa, the official languages are English and French, and the national currency is the Canadian Dollar (CAD).
            `
      },
      features: {
        bgImg: '/images/countries/canada/map.png',
        mainImg: '/images/countries/canada/students.jpg',
        altText: 'usa',
        points: [
          "Canada is a federation consisting of ten provinces and three territories.",
          "Provinces: British Columbia, Alberta, Manitoba, New Brunswick, Newfoundland and Labrador, Ontario, Nova Scotia, Quebec, Prince Edward Island, Saskatchewan.",
          "Territories: Northwest Territories, Yukon, Nunavut.",
          "Capital: Ottawa",
          "Official Languages: English and French",
          "Currency: Canadian Dollar (CAD$)"
        ]
      },
      whyStudyIn: {
        title: "Why study in Canada",
        bgImg: "/images/countries/canada/banner.jpg",
        description: `Studying in Canada offers international students a high-quality education in a safe,
                    inclusive, and diverse environment. With affordable tuition and numerous prestigious
                    universities, Canada provides excellent academic opportunities and practical work
                    experience, enhancing both education and career prospects.
                                    `,
        points: [
          {
            title: "High-Quality Education",
            icon: "/images/countries/usa/icons/globe.svg",
          },
          {
            title: "Affordable Tuition Fees",
            icon: "/images/countries/usa/icons/cash.svg",
          },
          {
            title: "Work Opportunities",
            icon: "/images/countries/usa/icons/connectivity.svg",
          },
          {
            title: "Pathways to Permanent Residency",
            icon: "/images/countries/usa/icons/globe-in-document.svg",
          },
          {
            title: "Safe and Inclusive Environment",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Strong and Growing Economy",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "Spouse Accompaniment & Work Rights",
            icon: "/images/countries/usa/icons/home.png",
          },
          {
            title: "Prestigious Universities",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "Scholarship Opportunities",
            icon: "/images/countries/usa/icons/search.svg",
          },
          {
            title: "Globally Recognised Degrees",
            icon: "/images/countries/usa/icons/global-edu.png",
          }

        ]

      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/canada/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "20 hours per week of work allowed during regular academic sessions.",
          "40 hours per week permitted during vacation.",
          "Unlimited on-campus work rights.",
          "Up to 3 years stay-back available for a 2-year study program, or equivalent to the duration of the study program if it is less than 2 years."
        ],

      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>January,  May, September</strong><br />

          `,
        leftBackgroundImage: "/images/countries/canada/map.png",
        rightImage: {
          src: "/images/countries/canada/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "Why should I choose Canada for my studies as an Indian student?",
          ans: "Canada offers a globally recognised education system, diverse culture, excellent post-study work opportunities (PGWP), a safe environment, and often more affordable tuition fees compared to other popular study destinations like the US or UK."
        },
        {
          ques: "Do Canadian educational institutions recognise the 10+2+3 education system from India?",
          ans: "Generally, the 10+2+3 system is accepted for postgraduate (PG) diploma programs. For master's programs, most universities typically require a 10+2+4 background, though some may consider 10+2+3 on a case-by-case basis for specific fields."
        },
        {
          ques: "What are the basic academic requirements to study in Canada for Indian students?",
          ans: "For undergraduate programs, you typically need at least 55% in Class 12. For postgraduate programs, a bachelor's degree with a minimum 55 % is usually required."
        },
        {
          ques: "What are the English language proficiency requirements?",
          ans: "Most institutions accept standardised tests like IELTS, TOEFL, or PTE. For undergraduate programs, an IELTS band of 6.0-6.5 (no band less than 5.5 or 6.0) is often required. For postgraduate programs, it's typically 6.5 (no band less than 6.0)."
        },
        {
          ques: "Can I study in Canada without IELTS?",
          ans: "While highly recommended, some institutions or specific programs may offer conditional admissions without IELTS if you have studied in an English-medium institution for a certain period, or if you can demonstrate English proficiency through other means. However, for visa purposes, IELTS is often preferred."
        },
        {
          ques: "What is a Statement of Purpose (SOP) and why is it important?",
          ans: "SOP is a crucial essay explaining your motivation for choosing Canada, the specific program, your academic background, career goals, and how the program aligns with your aspirations. It helps the admissions committee understand your suitability for the program."
        },
        {
          ques: "Are Letters of Recommendation (LORs) required?",
          ans: "Yes, two LORs are mandatory from professors or employers are often required, especially for postgraduate programs. They provide insights into your academic abilities, work ethic, and potential."
        },
        {
          ques: "How much of a gap after 12th or Degree is acceptable for studying in Canada?",
          ans: "You can justify a study gap after 12th or degree by providing valid reasons such as professional experience/internships, preparing for entrance exams, medical/health-related issues."
        },
        {
          ques: "What are the financial requirements for an Indian student applying for a study permit?",
          ans: "As of 2024, you need to prove you have enough funds to cover your first year's tuition fees PLUS CAD 20,635 for living expenses."
        },
        {
          ques: "What is a Guaranteed Investment Certificate (GIC)?",
          ans: "A GIC is a mandatory deposit of the minimum required living expense amount (currently CAD 20,635) into a Canadian bank. You'll receive a certificate to include in your visa application. A portion of this is released upon arrival, and the rest in monthly installments."
        },
        {
          ques: "How long does the Canada study permit processing take?",
          ans: "Processing times vary based on the volume of applications. It's essential to start your application well in advance."
        },
        {
          ques: "How much does it cost to study in Canada (tuition fees)?",
          ans: "Tuition fees vary widely depending on the university / colleges and level of study. On average, international students can expect to pay between CAD 11,000 to 12,500 diploma & Advanced diploma 13,000 to 19,000 Bachelors and 12,000 to 22,000 post graduation per year."
        },
        {
          ques: "What are the estimated living expenses for an international student in Canada?",
          ans: "The average cost of living can range starting from CAD 7,000 per year, depending on the city, lifestyle, and spending habits."
        },
        {
          ques: "Is health insurance mandatory for international students in Canada?",
          ans: "Yes, all international students in Canada must have health insurance. Some provinces offer provincial health plans for international students, while others require private insurance or university-provided plans. It's crucial to have coverage from the moment you arrive."
        },
        {
          ques: "Are scholarships available for Indian students studying in Canada?",
          ans: "Yes, many Canadian universities and the Canadian government, and various private colleges offer scholarships, grants, and bursaries to international students based on merit, financial need, or specific programs."
        },
        {
          ques: "Can I work while studying in Canada?",
          ans: "Yes, international students with a valid study permit are generally allowed to work up to 20 hours per week during regular academic sessions and full-time during scheduled breaks (e.g., summer vacation). This can be on-campus or off-campus."
        },
        {
          ques: "What is the Post-Graduation Work Permit (PGWP)?",
          ans: "The PGWP allows eligible international graduates to stay and work in Canada after completing their studies. It's an open work permit, meaning you can work for any employer. The duration of the PGWP can be up to three years, depending on the length of your study program."
        },
        {
          ques: "What are the general eligibility criteria for a PGWP?",
          ans: "You must have completed a program of study at an eligible DLI, which was at least eight months long, and have maintained full-time student status during your studies. There are new requirements as of June/July 2025 regarding eligible fields of study and language test results for PGWP. Always check the latest IRCC updates."
        },
        {
          ques: "What are the job prospects in Canada after studying for Indian students?",
          ans: "Canada has a strong job market, especially in sectors like IT, healthcare, engineering, finance, logistics and supply chain, teaching. Having a Canadian degree and work experience from a PGWP significantly improves job prospects."
        },
        {
          ques: "Can I stay in Canada permanently after completing my studies and PGWP?",
          ans: "Yes, Canada encourages international graduates to apply for permanent residency. Common pathways include the Express Entry system (especially the Canadian Experience Class stream) and various Provincial Nominee Programs (PNPs) that often have streams specifically for international graduates."
        },
        {
          ques: "What are the key factors for successful permanent residency application after studying in Canada?",
          ans: "Key factors include Canadian work experience (gained through PGWP) English or French language proficiency, education level, age, and adaptability. Many provincial nominee programs also prioritise candidates with in-demand skills in their respective provinces."
        }
      ],
    },
  },
  australia: {
    name: "Australia",
    image: "/images/home/countries/australia.jpg",
    details: {
      intro: {
        headline: "Study in the Australia",
        bannerImg: "/images/countries/usa/banner.jpg",
        content:
          `Austria, a landlocked nation in Central Europe, borders Germany, Czech Republic,
          Slovakia, Hungary, Slovenia, Italy, Switzerland, and Liechtenstein. This central
          location makes it a significant European crossroads. The country consistently offers
          an exceptional quality of life, boasting stunning Alpine scenery perfect for skiing and
          hiking. Vienna, its capital, is celebrated globally as the "City of Music" with
          world-class cultural institutions. Austria further excels with efficient public transport,
          excellent healthcare, high-quality (often free) education, a robust economy, low crime
          rates, and a strong commitment to renewable energy, making it a highly desirable
          place to live and visit.
            `
      },
      features: {
        bgImg: '/images/countries/canada/map.png',
        mainImg: '/images/countries/canada/students.jpg',
        altText: 'usa',
        points: [
          "Capital: Vienna",
          "Official Language: German",
          "Currency: Euro",
          "Main Cities: Graz, Linz, Salzburg, Innsbruck, Klagenfurt am Wörthersee, Villach, Wels, Sankt Pölten, Dornbirn"
        ]

      },
      whyStudyIn: {
        title: "Why study in Canada",
        bgImg: "/images/countries/canada/banner.jpg",
        description: `Studying in Canada offers international students a high-quality education in a safe,
                    inclusive, and diverse environment. With affordable tuition and numerous prestigious
                    universities, Canada provides excellent academic opportunities and practical work
                    experience, enhancing both education and career prospects.
                                    `,
        points: [
          {
            title: "High-Quality Education",
            icon: "/images/countries/usa/icons/globe.svg",
          },
          {
            title: "Affordable Tuition Fees",
            icon: "/images/countries/usa/icons/cash.svg",
          },
          {
            title: "Work Opportunities",
            icon: "/images/countries/usa/icons/connectivity.svg",
          },
          {
            title: "Pathways to Permanent Residency",
            icon: "/images/countries/usa/icons/globe-in-document.svg",
          },
          {
            title: "Safe and Inclusive Environment",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Strong and Growing Economy",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "Spouse Accompaniment & Work Rights",
            icon: "/images/countries/usa/icons/home.png",
          },
          {
            title: "Prestigious Universities",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "Scholarship Opportunities",
            icon: "/images/countries/usa/icons/search.svg",
          },
          {
            title: "Globally Recognised Degrees",
            icon: "/images/countries/usa/icons/global-edu.png",
          }

        ]

      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/canada/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "20 hours per week of work allowed during regular academic sessions.",
          "40 hours per week permitted during vacation.",
          "Unlimited on-campus work rights.",
          "Up to 3 years stay-back available for a 2-year study program, or equivalent to the duration of the study program if it is less than 2 years."
        ],

      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>January,  May, September</strong><br />

          `,
        leftBackgroundImage: "/images/countries/canada/map.png",
        rightImage: {
          src: "/images/countries/canada/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "Why should I choose Canada for my studies as an Indian student?",
          ans: "Canada offers a globally recognised education system, diverse culture, excellent post-study work opportunities (PGWP), a safe environment, and often more affordable tuition fees compared to other popular study destinations like the US or UK."
        },
        {
          ques: "Do Canadian educational institutions recognise the 10+2+3 education system from India?",
          ans: "Generally, the 10+2+3 system is accepted for postgraduate (PG) diploma programs. For master's programs, most universities typically require a 10+2+4 background, though some may consider 10+2+3 on a case-by-case basis for specific fields."
        },
        {
          ques: "What are the basic academic requirements to study in Canada for Indian students?",
          ans: "For undergraduate programs, you typically need at least 55% in Class 12. For postgraduate programs, a bachelor's degree with a minimum 55 % is usually required."
        },
        {
          ques: "What are the English language proficiency requirements?",
          ans: "Most institutions accept standardised tests like IELTS, TOEFL, or PTE. For undergraduate programs, an IELTS band of 6.0-6.5 (no band less than 5.5 or 6.0) is often required. For postgraduate programs, it's typically 6.5 (no band less than 6.0)."
        },
        {
          ques: "Can I study in Canada without IELTS?",
          ans: "While highly recommended, some institutions or specific programs may offer conditional admissions without IELTS if you have studied in an English-medium institution for a certain period, or if you can demonstrate English proficiency through other means. However, for visa purposes, IELTS is often preferred."
        },
        {
          ques: "What is a Statement of Purpose (SOP) and why is it important?",
          ans: "SOP is a crucial essay explaining your motivation for choosing Canada, the specific program, your academic background, career goals, and how the program aligns with your aspirations. It helps the admissions committee understand your suitability for the program."
        },
        {
          ques: "Are Letters of Recommendation (LORs) required?",
          ans: "Yes, two LORs are mandatory from professors or employers are often required, especially for postgraduate programs. They provide insights into your academic abilities, work ethic, and potential."
        },
        {
          ques: "How much of a gap after 12th or Degree is acceptable for studying in Canada?",
          ans: "You can justify a study gap after 12th or degree by providing valid reasons such as professional experience/internships, preparing for entrance exams, medical/health-related issues."
        },
        {
          ques: "What are the financial requirements for an Indian student applying for a study permit?",
          ans: "As of 2024, you need to prove you have enough funds to cover your first year's tuition fees PLUS CAD 20,635 for living expenses."
        },
        {
          ques: "What is a Guaranteed Investment Certificate (GIC)?",
          ans: "A GIC is a mandatory deposit of the minimum required living expense amount (currently CAD 20,635) into a Canadian bank. You'll receive a certificate to include in your visa application. A portion of this is released upon arrival, and the rest in monthly installments."
        },
        {
          ques: "How long does the Canada study permit processing take?",
          ans: "Processing times vary based on the volume of applications. It's essential to start your application well in advance."
        },
        {
          ques: "How much does it cost to study in Canada (tuition fees)?",
          ans: "Tuition fees vary widely depending on the university / colleges and level of study. On average, international students can expect to pay between CAD 11,000 to 12,500 diploma & Advanced diploma 13,000 to 19,000 Bachelors and 12,000 to 22,000 post graduation per year."
        },
        {
          ques: "What are the estimated living expenses for an international student in Canada?",
          ans: "The average cost of living can range starting from CAD 7,000 per year, depending on the city, lifestyle, and spending habits."
        },
        {
          ques: "Is health insurance mandatory for international students in Canada?",
          ans: "Yes, all international students in Canada must have health insurance. Some provinces offer provincial health plans for international students, while others require private insurance or university-provided plans. It's crucial to have coverage from the moment you arrive."
        },
        {
          ques: "Are scholarships available for Indian students studying in Canada?",
          ans: "Yes, many Canadian universities and the Canadian government, and various private colleges offer scholarships, grants, and bursaries to international students based on merit, financial need, or specific programs."
        },
        {
          ques: "Can I work while studying in Canada?",
          ans: "Yes, international students with a valid study permit are generally allowed to work up to 20 hours per week during regular academic sessions and full-time during scheduled breaks (e.g., summer vacation). This can be on-campus or off-campus."
        },
        {
          ques: "What is the Post-Graduation Work Permit (PGWP)?",
          ans: "The PGWP allows eligible international graduates to stay and work in Canada after completing their studies. It's an open work permit, meaning you can work for any employer. The duration of the PGWP can be up to three years, depending on the length of your study program."
        },
        {
          ques: "What are the general eligibility criteria for a PGWP?",
          ans: "You must have completed a program of study at an eligible DLI, which was at least eight months long, and have maintained full-time student status during your studies. There are new requirements as of June/July 2025 regarding eligible fields of study and language test results for PGWP. Always check the latest IRCC updates."
        },
        {
          ques: "What are the job prospects in Canada after studying for Indian students?",
          ans: "Canada has a strong job market, especially in sectors like IT, healthcare, engineering, finance, logistics and supply chain, teaching. Having a Canadian degree and work experience from a PGWP significantly improves job prospects."
        },
        {
          ques: "Can I stay in Canada permanently after completing my studies and PGWP?",
          ans: "Yes, Canada encourages international graduates to apply for permanent residency. Common pathways include the Express Entry system (especially the Canadian Experience Class stream) and various Provincial Nominee Programs (PNPs) that often have streams specifically for international graduates."
        },
        {
          ques: "What are the key factors for successful permanent residency application after studying in Canada?",
          ans: "Key factors include Canadian work experience (gained through PGWP) English or French language proficiency, education level, age, and adaptability. Many provincial nominee programs also prioritise candidates with in-demand skills in their respective provinces."
        }
      ],
    },
  },
  'new-zealand': {
    name: "New Zealand",
    image: "/images/home/countries/new-zealand.jpg",
    details: {
      intro: {
        headline: "Study in the New Zealand",
        bannerImg: "/images/countries/usa/banner.jpg",
        content:
          `New Zealand, located in Oceania, offers a distinctive blend of world-class education,
          scenic beauty, and high quality of life. Its education system is globally recognised,
          with strong links and continental agreements facilitating qualification acceptance
          worldwide. The landscapes are stunningly diverse, from snow-capped mountains
          and glaciers to pristine beaches and geothermal areas, inspiring an active, outdoor
          lifestyle. Life here is characterised by a strong work-life balance, safe communities,
          and a commitment to sustainability, with subsidised healthcare and education
          contributing to its appeal.
            `
      },
      features: {
        bgImg: '/images/countries/new-zealand/map.png',
        mainImg: '/images/countries/new-zealand/students.jpg',
        altText: 'new-zealand',
        points: [
          "Capital: Wellington",
          "Official Languages: English, Maori",
          "Currency: New Zealand Dollar",
          "Main Cities: Auckland, Christchurch, Hamilton, Tauranga, Dunedin, Napier, Hastings"
        ]


      },
      whyStudyIn: {
        title: "Why study in New Zealand",
        bgImg: "/images/countries/new-zealand/banner.jpg",
        description: `New Zealand stands out as one of the Asia-Pacific region's most prosperous nations,
          having enjoyed considerable economic growth over recent decades. It operates the
          second freest and one of the most globalised economies, with a significant reliance
          on international trade. Key drivers of New Zealand's economy include the thriving
          services sector, alongside robust contributions from mining, manufacturing, forestry,
          agriculture, and dairy. Furthermore, the burgeoning IT sector is making substantial
          headway. Excellent employment prospects can be found across Engineering,
          Business & Finance, Health & Social Services, and IT & Hospitality. While the cost of
          living is relatively higher, it is widely considered a worthwhile investment, given the
          abundant opportunities and the tranquil, high-quality lifestyle the country affords.
                                    `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4',
        points: [
          {
            title: "High Visa Approval Rates with Strong Spouse Work Permit Options & Pay Tuition After Visa Approval",
            icon: "/images/countries/usa/icons/globe-in-document.svg",
          },
          {
            title: "Structured Tertiary Education System with Universities, ITPs & Private Training Establishments",
            icon: "/images/countries/usa/icons/globe.svg",
          },
          {
            title: "Study in a Fully English-Speaking Environment to Accelerate Global Communication Skills",
            icon: "/images/countries/usa/icons/connectivity.svg",
          },
          {
            title: "Universities Ranked Among the Global Elite with Many in the Top 3% Worldwide",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "One of the Safest and Most Peaceful Countries with Strong Student Well-Being Support",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Inclusive Multicultural Society Enriched by Indigenous Māori Heritage",
            icon: "/images/countries/usa/icons/home.png",
          },
          {
            title: "Exceptional Natural Beauty Supporting a Balanced Lifestyle and High Quality of Life",
            icon: "/images/countries/usa/icons/global-edu.png",
          },
          {
            title: "Excellent Post-Study Work Opportunities for International Graduates",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          }

        ]
      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/new-zealand/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "Work up to 25 hours per week during studies and 40 hours per week during scheduled vacations",
          "PhD and Masters by Research students have no work hour restrictions",
          "Spouses of postgraduate students can apply for a full-time open work permit with any employer",
          "Diploma and Graduate Diploma (NZQF Level 7 non-degree or below) allow a 1-year post-study stay",
          "Postgraduate Diploma graduates are eligible for a 1-year post-study stay",
          "Masters degree (NZQF Level 9) graduates are eligible for up to 3 years post-study stay"
        ],
      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>February / July</strong><br />

          `,
        leftBackgroundImage: "/images/countries/new-zealand/map.png",
        rightImage: {
          src: "/images/countries/new-zealand/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "Which continental region is New Zealand located in?",
          ans: "New Zealand is located in Oceania."
        },
        {
          ques: "How do New Zealand universities rank globally?",
          ans: "New Zealand's universities consistently feature among the global elite, with a significant proportion recognised within the top 3% of institutions worldwide."
        },
        {
          ques: "What types of educational institutions are there in New Zealand?",
          ans: "The system comprises 8 state-funded universities, 16 Institutes of Technology and Polytechnics (ITPs), and over 550 Private Training Establishments (PTEs)."
        },
        {
          ques: "What are the main attractions for Indian students to study in New Zealand?",
          ans: "Key attractions include quality-assured education, practical learning, enhanced English proficiency, high employability of qualifications, and a safe, welcoming environment."
        },
        {
          ques: "Do New Zealand qualifications have international recognition?",
          ans: "Yes, New Zealand qualifications are highly sought after by employers globally, providing a competitive edge in the international job market."
        },
        {
          ques: "Is New Zealand a safe country for international students?",
          ans: "New Zealand consistently ranks among the safest and most peaceful countries globally, offering a secure and supportive learning experience."
        },
        {
          ques: "Can students work while studying in New Zealand?",
          ans: "Yes, most student visa holders are permitted to work part-time up to 25 hours per week during studies and 40 hours per week during vacation periods."
        },
        {
          ques: "Do Master's and PhD students have work hour restrictions?",
          ans: "No, Master's by Research and PhD students typically have no restrictions on their working hours."
        },
        {
          ques: "Are spouses of students eligible for work permits?",
          ans: "Yes, spouses of students pursuing a postgraduate qualification can apply for a full-time work permit, allowing them to work for any employer."
        },
        {
          ques: "What is the typical Post-Study Work Visa duration for Diploma and Graduate Diploma holders?",
          ans: "Diploma and Graduate Diploma (NZQF Level 7 non-degree or below) graduates are eligible for a 1-year post-study stay, while Master's degree (NZQF Level 9) graduates can stay back for up to 3 years."
        },
        {
          ques: "What are the promising employment sectors for graduates?",
          ans: "Strong employment prospects exist in Engineering, Business & Finance, Health & Social Services, IT & Hospitality, Agriculture, Forestry, Environment, Civil Engineering, Teaching, Sport Management, Psychology, Design, Education, Culinary Arts, MBA, AI, ML, and Computer Science."
        },
        {
          ques: "Is the cost of living high in New Zealand?",
          ans: "While the standard of living is higher than in India, the quality of life and opportunities offered are widely considered a worthwhile investment."
        },
        {
          ques: "Which are New Zealand's main cities for students?",
          ans: "Major student cities include Auckland, Wellington, Christchurch, Hamilton, Tauranga, and Dunedin."
        },
        {
          ques: "Are tuition fees paid upon visa approval?",
          ans: "For Indian students, tuition fee payment is often required only after visa approval, helping reduce initial financial risk."
        },
        {
          ques: "What is the typical processing time for a New Zealand student visa for Indian applicants?",
          ans: "Processing times generally range from 3 to 8 weeks depending on the institution type; applying at least three months before travel is recommended."
        },
        {
          ques: "Can a student's spouse accompany them to New Zealand?",
          ans: "Yes, partners of students pursuing eligible postgraduate qualifications (Level 8 and above) or specific Green List qualifications may apply for a full-time work visa, while others may be eligible for a visitor visa."
        },
        {
          ques: "How does the New Zealand job market view international graduates?",
          ans: "International graduates are highly valued due to New Zealand’s emphasis on quality education and practical skill development."
        },
        {
          ques: "What is the primary pathway to Permanent Residency (PR) in New Zealand for international graduates?",
          ans: "The most common route is through the Skilled Migrant Category (SMC), which requires meeting criteria related to skilled occupation, English proficiency, and submitting an Expression of Interest."
        },
        {
          ques: "What is the difference between a Resident Visa and a Permanent Resident Visa in New Zealand?",
          ans: "A Resident Visa allows permanent living with travel conditions, while a Permanent Resident Visa offers indefinite travel and stay rights after meeting residency and commitment requirements."
        },
        {
          ques: "How does the Green List impact PR opportunities?",
          ans: "Green List occupations are in high demand and offer faster residency pathways through either straight-to-residence or work-to-residence options."
        }
      ]
    },
  },
  Ireland: {
    name: "Ireland",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in Ireland",
        bannerImg: "/images/banners/ireland.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Pellentesque in ipsum id orci porta dapibus.",
        "Curabitur arcu erat, accumsan id imperdiet et.",
        "Vivamus suscipit tortor eget felis porttitor volutpat."
      ]
    }
  },
  france: {
    name: "France",
    image: "/images/home/countries/canada.jpg",
    details: {
      intro: {
        headline: "Study in France",
        bannerImg: "/images/banners/france.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Vestibulum ac diam sit amet quam vehicula elementum.",
        "Donec rutrum congue leo eget malesuada.",
        "Cras ultricies ligula sed magna dictum porta."
      ]
    }
  },
  germany: {
    name: "Germany",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in Germany",
        bannerImg: "/images/banners/germany.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed porttitor lectus nibh.",
        "Praesent sapien massa, convallis a pellentesque nec.",
        "Nulla quis lorem ut libero malesuada feugiat."
      ]
    }
  },
  sweden: {
    name: "Sweden",
    image: "/images/home/countries/canada.jpg",
    details: {
      intro: {
        headline: "Study in the Sweden",
        bannerImg: "/images/countries/usa/banner.jpg",
        content:
          `Sweden is a Scandinavian country, boasts a highly regarded education system,
          celebrated for its innovative, research-driven programmes and emphasis on
          independent thinking. Its breathtaking landscapes, from expansive forests and
          serene lakes to the unique arctic wilderness, highlight a profound commitment to
          environmental preservation and offer abundant opportunities for outdoor pursuits.
          Renowned for its exceptional quality of life, Sweden provides robust social welfare, a
          commendable work-life balance, and a remarkably safe, inclusive society.
          Economically, it is a prosperous and highly innovative country, driven by a strong
          services sector, advanced technology, and a globalised trade approach.
            `
      },
      features: {
        bgImg: '/images/countries/sweden/map.png',
        mainImg: '/images/countries/sweden/students.jpg',
        altText: 'Sweden',
        points: [
          "Capital: Stockholm",
          "Currency: Swedish Krona (SEK)",
          "Official Language: Swedish (around 90% of Swedes speak English)",
          "Main Cities: Gothenburg, Malmo, Uppsala, Vasteras, Orebro, Linkoping, Helsingborg, Lund, Kalmar"
        ]

      },
      whyStudyIn: {
        title: "Why study in Sweden",
        bgImg: "/images/countries/sweden/banner.jpg",
        description: `The Swedish economy is a highly developed, export-driven powerhouse. Its
                      industrial strength is notable across sectors such as automotive, chemicals, home
                      goods and appliances, iron and steel, pharmaceuticals, precision equipment, and
                      telecommunications. Sweden is home to globally recognised multinational
                      corporations at the forefront of innovation and technology, including Ericsson, Volvo,
                      Scania, Electrolux, SKF, Sandvik, Atlas Copco, and IKEA. Professions offering
                      significant remuneration include law, banking and finance, education, aviation,
                      management, healthcare, and tourism. Sweden consistently achieves high scores in
                      key indicators of living standards, particularly in environmental quality, education and
                      skills, work-life balance, health status, employment and earnings, and personal
                      safety, underscoring a commitment to societal well-being.
                                    `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4',
        points: [
          {
            title: "Semester-Wise Tuition Fee Payment Reducing Upfront Financial Burden",
            icon: "/images/countries/usa/icons/globe-in-document.svg",
          },
          {
            title: "Spouse Eligibility for Full-Time Work Permit for Masters, MRes & PhD Students",
            icon: "/images/countries/usa/icons/couple.svg",
          },
          {
            title: "Globally Ranked Universities Known for Academic Excellence",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "Wide Range of Degree Programs Taught Entirely in English",
            icon: "/images/countries/usa/icons/connectivity.svg",
          },
          {
            title: "Birthplace of World-Leading Multinational Companies & Innovation",
            icon: "/images/countries/usa/icons/globe.svg",
          },
          {
            title: "Strong Export-Driven Economy with High Graduate Employability",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "High Quality of Life with Excellent Safety, Health & Work-Life Balance",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Globally Respected Degrees Opening International Career Opportunities",
            icon: "/images/countries/usa/icons/global-edu.png",
          }
        ]

      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/sweden/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "No fixed limit on work hours for international students during studies",
          "Spouses are eligible for full-time work permits",
          "1 year stay back"
        ],

      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>August / January</strong><br />

          `,
        leftBackgroundImage: "/images/countries/sweden/map.png",
        rightImage: {
          src: "/images/countries/sweden/office.png",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "What is Sweden's reputation for higher education?",
          ans: "Sweden boasts a globally respected, innovative, and research-driven education system known for its emphasis on critical thinking and independent study."
        },
        {
          ques: "How do Swedish universities perform in global rankings?",
          ans: "Several Swedish universities consistently rank highly in prestigious global listings, including the QS World University Rankings, with institutions like KTH Royal Institute of Technology and Lund University often within the top 100."
        },
        {
          ques: "Is Sweden considered a leading nation for innovation?",
          ans: "Yes, Sweden is consistently ranked among the world's most innovative countries, making it an excellent environment for those interested in cutting-edge fields."
        },
        {
          ques: "Are Swedish qualifications recognised internationally?",
          ans: "Absolutely, degrees from Swedish institutions are highly valued and recognised worldwide, enhancing graduates' international employability."
        },
        {
          ques: "How widely is English spoken in Sweden?",
          ans: "English is exceptionally popular and widely spoken across Sweden, with nearly 90% of the population speaking it as a second language, ensuring easy communication."
        },
        {
          ques: "Are there many English-taught programmes available?",
          ans: "Yes, Swedish universities offer a vast array of degree programmes across various disciplines taught entirely in English, catering well to international students."
        },
        {
          ques: "Is IELTS mandatory for STEM students from India?",
          ans: "While most programmes require English proficiency proof like IELTS some universities may offer waivers for STEM students with a strong academic background where English was the medium of instruction"
        },
        {
          ques: "How are tuition fees typically paid in Sweden?",
          ans: "A significant advantage for Indian students is that tuition fees are generally collected on a semester-wise basis, rather than requiring large upfront payments for the entire programme."
        },
        {
          ques: "Are scholarships available for Indian students in Sweden?",
          ans: "Yes, numerous scholarship opportunities exist, including those from the Swedish Institute and individual universities, covering tuition fees and sometimes living costs for eligible students."
        },
        {
          ques: "Can international students work part-time while studying in Sweden?",
          ans: "Yes, students face no explicit hourly limitations on part-time work during term time."
        },
        {
          ques: "What are the general rules for working during university breaks?",
          ans: "During scheduled breaks and holidays, students are typically permitted to work full-time."
        },
        {
          ques: "Can a student's spouse accompany them and gain work rights?",
          ans: "Yes, spouses accompanying students pursuing Master's or PhD qualifications are eligible to apply for a full-time, unrestricted work permit."
        },
        {
          ques: "What are the key employment opportunities for graduates in Sweden?",
          ans: "Promising sectors include IT, engineering, healthcare, business, and pharmaceuticals, with strong demand from Sweden's innovative multinational corporations."
        },
        {
          ques: "Which are the main cities for students in Sweden?",
          ans: "Major student cities include Stockholm (the capital), Gothenburg, Malmö, Uppsala, and Linköping, each offering distinct academic and cultural experiences."
        },
        {
          ques: "What are the typical Post-Study Work Visa durations in Sweden?",
          ans: "Generally, students can apply to extend their residence permit for 12 months after completing their studies to seek employment or become self-employed."
        },
        {
          ques: "Is Permanent Residency (PR) a possibility after studying in Sweden?",
          ans: "Yes, a common pathway to PR is through securing skilled employment after graduation and meeting the requirements of the Skilled Migrant Category."
        },
        {
          ques: "How does the \"Green List\" affect PR opportunities for graduates?",
          ans: "Occupations on Sweden's \"Green List\" are in high demand and can offer accelerated pathways to residency for qualified graduates."
        },
        {
          ques: "What is the primary method for applying to Swedish universities?",
          ans: "Applications are typically centralised and you can approach a leading Sweden education consultant."
        },
        {
          ques: "What are the general financial requirements for a student visa?",
          ans: "Applicants must demonstrate sufficient funds to cover living expenses for their study period."
        },
        {
          ques: "Are there specific advantages for Indian students regarding visa approval?",
          ans: "While not explicitly higher, a clear and streamlined visa process, coupled with genuine intent and complete documentation, supports positive outcomes for Indian applicants."
        }
      ]
    },

  },
  switzerland: {
    name: "Switzerland",
    image: "/images/home/countries/australia.jpg",
    details: {
      intro: {
        headline: "Study in Switzerland",
        bannerImg: "/images/banners/switzerland.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec sollicitudin molestie malesuada.",
        "Curabitur aliquet quam id dui posuere blandit.",
        "Sed porttitor lectus nibh."
      ]
    }
  },
  austria: {
    name: "Austria",
    image: "/images/home/countries/new-zealand.jpg",
    details: {
      intro: {
        headline: "Study in Austria",
        bannerImg: "/images/banners/austria.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Vivamus suscipit tortor eget felis porttitor volutpat.",
        "Pellentesque in ipsum id orci porta dapibus.",
        "Mauris blandit aliquet elit."
      ]
    }
  },
  denmark: {
    name: "Denmark",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in Denmark",
        bannerImg: "/images/banners/denmark.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Curabitur aliquet quam id dui posuere blandit.",
        "Donec rutrum congue leo eget malesuada.",
        "Cras ultricies ligula sed magna dictum porta."
      ]
    }
  },
  finland: {
    name: "Finland",
    image: "/images/home/countries/canada.jpg",
    details: {
      intro: {
        headline: "Study in Finland",
        bannerImg: "/images/banners/finland.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Praesent sapien massa, convallis a pellentesque nec.",
        "Nulla quis lorem ut libero malesuada feugiat.",
        "Mauris blandit aliquet elit."
      ]
    }
  },
  malta: {
    name: "Malta",
    image: "/images/home/countries/australia.jpg",
    details: {
      intro: {
        headline: "Study in Malta",
        bannerImg: "/images/banners/malta.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore.",
        "Vivamus magna justo, lacinia eget consectetur sed.",
        "Curabitur non nulla sit amet nisl tempus convallis."
      ]
    }
  },
  Italy: {
    name: "Italy",
    image: "/images/home/countries/new-zealand.jpg",
    details: {
      intro: {
        headline: "Study in Italy",
        bannerImg: "/images/banners/italy.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Donec sollicitudin molestie malesuada.",
        "Vestibulum ac diam sit amet quam vehicula.",
        "Sed porttitor lectus nibh."
      ]
    }
  },
  latvia: {
    name: "Latvia",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in Latvia",
        bannerImg: "/images/banners/latvia.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Pellentesque in ipsum id orci porta dapibus.",
        "Mauris blandit aliquet elit.",
        "Vivamus suscipit tortor eget felis."
      ]
    }
  },
  netherlands: {
    name: "Netherlands",
    image: "/images/home/countries/canada.jpg",
    details: {
      intro: {
        headline: "Study in the Netherlands",
        bannerImg: "/images/banners/netherlands.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Curabitur arcu erat, accumsan id imperdiet et.",
        "Praesent sapien massa, convallis a pellentesque nec.",
        "Nulla quis lorem ut libero malesuada feugiat."
      ]
    }
  },
  singapore: {
    name: "Singapore",
    image: "/images/home/countries/australia.jpg",
    details: {
      intro: {
        headline: "Study in Singapore",
        bannerImg: "/images/banners/singapore.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed porttitor lectus nibh.",
        "Donec rutrum congue leo eget malesuada.",
        "Cras ultricies ligula sed magna dictum porta."
      ]
    }
  },
  malaysia: {
    name: "Malaysia",
    image: "/images/home/countries/new-zealand.jpg",
    details: {
      intro: {
        headline: "Study in Malaysia",
        bannerImg: "/images/banners/malaysia.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Vivamus magna justo, lacinia eget consectetur sed.",
        "Curabitur aliquet quam id dui posuere blandit.",
        "Mauris blandit aliquet elit."
      ]
    }
  },
  UAE: {
    name: "UAE",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in the UAE",
        bannerImg: "/images/banners/uae.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Praesent sapien massa, convallis a pellentesque nec.",
        "Donec sollicitudin molestie malesuada.",
        "Curabitur non nulla sit amet nisl tempus convallis."
      ]
    }
  }
}
