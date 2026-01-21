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
          src: "/images/countries/usa/office.jpg",
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
        headline: "Study in the Ireland",
        bannerImg: "/images/countries/usa/banner.jpg",
        content:
          `Ireland is a vibrant and strategically positioned European nation, celebrated for its
          exceptional economic dynamism and high quality of life. The country boasts a remarkably
          robust economy, significantly bolstered by (FDI), making it a prominent global destination for
          international capital. This influx of FDI has been instrumental in establishing Ireland as a
          pre-eminent centre for global ICT, pharmaceutical, and financial services companies. Irish
          society benefits from a well-regarded healthcare system and a strong commitment to
          democratic principles, fostering an environment of trust and cultural richness. From its
          verdant landscapes and dramatic coastlines to its welcoming communities, Ireland offers a
          serene backdrop for a balanced lifestyle. The consistently high academic standards of Irish
          universities further empower their graduates to make a substantial impact within academia,
          cutting-edge research, and the competitive global business arena, presenting exceptionally
          promising career prospects across a host of global corporations that have chosen Ireland for
          significant investment.
          `
      },
      features: {
        bgImg: '/images/countries/Ireland/map.png',
        mainImg: '/images/countries/Ireland/students.jpg',
        altText: 'finland',
        points: [
          "Ireland is the third largest island in Europe",
          "Capital: Dublin",
          "Official Language: English and Irish",
          "Currency: Euro",
          "Main Cities: Cork, Limerick, Galway, Waterford, Belfast, Derry, Craigavan, Dundalk, Drogheda, Swords"
        ]
      },
      whyStudyIn: {
        title: "Why study in Ireland",
        bgImg: "/images/countries/Ireland/banner.jpg",
        description: `Ireland stands as a pivotal European centre, attracting over 1,000 leading
            multinational corporations across diverse sectors. It is notably a key domicile for
            virtually all major global ICT and pharmaceutical companies, alongside being a
            pre-eminent hub for international financial services and banking excellence. This
            concentration of industry giants, including Microsoft, Google, PayPal, Apple, Twitter,
            LinkedIn, Pfizer, GSK, Genzyme, Accenture, CRH, Kerry Group, Kingspan Group,
            Allianz, and AXA Insurance, presents exceptionally promising career prospects. The
            high academic calibre of Irish universities empowers their graduates to make a
            significant impact within academia, research, and the global business arena
                                    `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4',
        points: [
          {
            title: "2nd most peaceful country in the world, just behind Iceland (2025)",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Leading European hub for major multinational corporations",
            icon: "/images/countries/usa/icons/globe.svg",
          },
          {
            title: "Primarily English-speaking country offering a smooth transition for Indian students",
            icon: "/images/countries/usa/icons/connectivity.svg",
          },
          {
            title: "Strong, fast-growing economy driven by high levels of foreign direct investment",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "One of the safest and friendliest countries with a growing Indian student community",
            icon: "/images/countries/usa/icons/life.svg",
          },
          {
            title: "Universities recognised globally for research excellence and innovation",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "Post-study work visa and critical skills permit offer pathways to permanent residency",
            icon: "/images/countries/usa/icons/search.svg",
          },
          {
            title: "Irish universities feature strongly in global rankings, with many in the top 500 and top 100–200",
            icon: "/images/countries/usa/icons/global-edu.png",
          }
        ]

      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/Ireland/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "20 hours per week during regular academic sessions",
          "40 hours per week during vacation",
          "NFQ Level 8 qualification (Honours Bachelors Degree) are eligible for a 12-months stay back",
          "NFQ Level 9 or above qualification (Masters Degree, Master by Research, or PhD) are eligible for a total of 24 months"
        ],
      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>September / January</strong><br /> `,
        leftBackgroundImage: "/images/countries/Ireland/map.png",
        rightImage: {
          src: "/images/countries/Ireland/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "What is a CAS equivalent for an Ireland student visa application?",
          ans: "In Ireland, you'll need a formal \"Letter of Acceptance\" from a recognised Ireland educational institution. This letter serves the same purpose as a CAS, confirming your unconditional offer to study."
        },
        {
          ques: "Can I apply to more than one university in Ireland?",
          ans: "Yes, absolutely. bachelors you apply through the Central Applications Office (CAO) Masters, master by Research and PhD applications, you apply directly to each university, with no limit on the number of applications you can submit."
        },
        {
          ques: "Is there any age limit for studying in Ireland?",
          ans: "To apply for a D-Study Visa, you must generally be 18 years old or over. While there isn't an upper age limit, demonstrating your genuine intention to study is key, regardless of age."
        },
        {
          ques: "Can I visit my home country during my studies in Ireland?",
          ans: "Yes, as an international student with a valid Irish Stamp 2 student immigration permission, you are generally permitted to travel in and out of Ireland. Ensure your travel aligns with your academic schedule and visa validity."
        },
        {
          ques: "What are the general financial requirements for an Ireland Student Visa?",
          ans: "You must demonstrate that you have sufficient funds to cover your tuition fees and living expenses. Currently, you need to show access to at least €10,000 for each year of your studies, in addition to your tuition fees."
        },
        {
          ques: "What are the typical tuition fees for Indian students in Ireland?",
          ans: "Tuition fees in Ireland for international students vary significantly by course and institution, generally ranging from €9,000 to €25,000 per year. Postgraduate degrees, especially in specialised fields like medicine or business, can be higher."
        },
        {
          ques: "Do I need to prove my English language proficiency for Irish universities?",
          ans: "Yes, require a recognised English language test score like IELTS, TOEFL,PTE, or Duolingo English Test"
        },
        {
          ques: "What are the main types of accommodation available for students in Ireland?",
          ans: "Common options include on-campus university accommodation (halls of residence), purpose-built student accommodation (PBSA), private rented accommodation (often shared with other students), and homestays with Irish families."
        },
        {
          ques: "How much should I budget for living expenses in Ireland?",
          ans: "Living costs vary by city, but on average, students should budget between €550 - €850 per month, including accommodation."
        },
        {
          ques: "What is the processing time for an Ireland student visa application from India?",
          ans: "The processing time for an Ireland student visa for Indian applicants can vary, typically ranging from 20 to 35 working days. It is advisable to apply well in advance of your intended travel date."
        },
        {
          ques: "Are scholarships available for Indian students in Ireland?",
          ans: "Yes, numerous scholarships are available for Indian students. These include government scholarships (e.g., Government of Ireland International Education Scholarships), university-specific scholarships (e.g., UCD Global Excellence Scholarships, Trinity College Dublin scholarships), and scholarships from private organisations."
        },
        {
          ques: "How do Irish universities consistently achieve global prominence in rankings?",
          ans: "Ireland universities consistently demonstrate global prominence, with a strong presence within the top 500 of the QS World University Rankings, and key institutions frequently achieving ranks among the top 100-200, due to their high academic standards and research output."
        },
        {
          ques: "What makes Ireland an attractive study destination for Indian students?",
          ans: "Ireland offers world-class education, an English-speaking environment, a safe and welcoming society, strong economic growth driven by substantial Foreign Direct Investment (FDI), and a clear path to gaining international work experience."
        },
        {
          ques: "Can my spouse accompany me while I study in Ireland?",
          ans: "As of recent changes, only students pursuing a Masters by Research or PhD lasting at least 9 months can bring their spouse and children to Ireland. Proof of relationship and sufficient additional funds for each dependant are strictly required"
        },
        {
          ques: "What are the major industries in Ireland offering career opportunities?",
          ans: "Ireland's economy is robust, with significant opportunities in sectors like Information and Communications Technology Pharmaceuticals and Life Sciences, Financial Services, Engineering, and MedTech"
        },
        {
          ques: "What kind of support services do Ireland universities offer international students?",
          ans: "Ireland universities provide comprehensive support services, including international student offices, academic advisors, career services, placement support, counselling, disability support, and social integration programs to help students adapt and succeed."
        },
        {
          ques: "What is the climate like in Ireland?",
          ans: "Ireland has a temperate oceanic climate, characterised by mild, humid, and changeable weather. Extremes of temperature are rare, with mild summers and cool winters, and rainfall occurring throughout the year"
        },
        {
          ques: "How can an Indian student open a bank account in Ireland?",
          ans: "To open a student bank account, you typically need your valued passport, proof of address in Ireland (e.g., university accommodation letter or utility bill), and your letter of acceptance from the university"
        },
        {
          ques: "Which cities in Ireland are popular for Indian students?",
          ans: "Dublin, Cork, Limerick, and Galway are the main cities popular with international students, offering a blend of academic excellence, cultural experiences, and career opportunities."
        },
        {
          ques: "What are Critical Skills Occupations in Ireland?",
          ans: "The Critical Skills Occupations List outlines professions deemed highly skilled and in short supply in Ireland's labour market, such as ICT professionals, engineers, and healthcare workers. Graduates in these fields have enhanced opportunities for gaining employment permits."
        }
      ]

    },
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
        headline: "Study in the Switzerland",
        bannerImg: "/images/countries/switzerland/banner.jpg",
        content:
          `Switzerland, a landlocked European nation, is renowned for its stunning Alpine
          landscapes, pristine lakes, and strict neutrality. A global financial hub, it boasts a
          robust economy driven by banking, high-tech industries, and precision manufacturing
          like watches. Known for its high quality of life, direct democracy, and multiculturalism
          with multiple official languages, Switzerland consistently ranks among the world's
          safest and most prosperous countries.
          `
      },
      features: {
        bgImg: '/images/countries/switzerland/map.png',
        mainImg: '/images/countries/switzerland/students.jpg',
        altText: 'switzerland',

        "points": [
          "Capital: Bern",
          "Official Languages: German, French, Italian, and Romansh",
          "Currency: Swiss Franc (CHF)",
          "Main Cities: Zürich, Geneva, Basel, Lausanne, Lucerne, St. Gallen, Lugano"
        ]

      },
      whyStudyIn: {
        title: "Why study in Switzerland",
        bgImg: "/images/countries/switzerland/banner.jpg",
        description: `Switzerland offers world-class education, home to top universities and CERN,
                      showcasing research excellence. It's the birthplace of hospitality education and a
                      global finance/banking hub. Studying here provides unparalleled international
                      exposure within a highly innovative, multicultural environment. Graduates benefit
                      from strong industry links and a reputation for precision, ensuring a significant
                      investment in their future careers.
                      `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3',
        points: [
          {
            title: "Top-ranked Swiss universities within QS World Rankings top 100",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "World-class education with highly respected global qualifications",
            icon: "/images/countries/usa/icons/cash.svg",
          },
          {
            title: "Strong academic learning combined with paid practical internships",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Excellent networking opportunities with UN bodies and global corporations",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "Internships and scholarships covering up to 40% of study costs",
            icon: "/images/countries/usa/icons/connectivity.svg",
          },
          {
            title: "Multicultural environment with diverse languages and global exposure",
            icon: "/images/countries/usa/icons/globe-in-document.svg",
          }
        ]

      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/switzerland/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "Students' work is prohibited for the initial six months of their Swiss residency.",
          "For the next six months, students are permitted to work 15 hours per week during the academic semester",
          "6 Months Stay Back"
        ]

      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>February / September</strong><br /> `,
        leftBackgroundImage: "/images/countries/switzerland/map.png",
        rightImage: {
          src: "/images/countries/switzerland/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },

      faqItems: [
        {
          ques: "Why should Indian students consider Switzerland for higher education?",
          ans: "Switzerland offers world-class universities, unparalleled research opportunities (like CERN), a strong economy, and a high quality of life, promising excellent international exposure and career foundations."
        },
        {
          ques: "Are Swiss universities highly ranked globally?",
          ans: "Absolutely. Several Swiss universities consistently rank within the top 100 globally (e.g., ETH Zurich, EPFL), ensuring a prestigious and highly regarded education."
        },
        {
          ques: "Are programmes taught in English accessible for Indian students?",
          ans: "Yes, many Bachelors, Masters and PhD programmes, particularly in engineering, sciences, and business, are widely offered in English, making them accessible to Indian students."
        },
        {
          ques: "What are the typical tuition fees for international students in Switzerland?",
          ans: "Tuition fees are generally much lower than in the UK or US, ranging from CHF 500 – 4,000 per semester at public universities, though private institutions are significantly more expensive."
        },
        {
          ques: "What is the estimated monthly cost of living in Switzerland for students?",
          ans: "Living costs are high, ranging from CHF 1,000 – 1,500 (€1,070 – €1,600 approx.) per month, primarily driven by accommodation and food expenses, varying by city."
        },
        {
          ques: "Can Indian students work part-time while studying in Switzerland?",
          ans: "Yes, non-EU/EFTA students can work up to 15 hours per week during the academic semester. However, work is generally prohibited for the initial six months of their stay."
        },
        {
          ques: "Are there full-time work opportunities during holidays?",
          ans: "Yes, during official university semester breaks and holidays, international students are permitted to work full-time (up to 100%) to gain experience and earn income."
        },
        {
          ques: "What are the post-study work or \"stay back\" options for graduates?",
          ans: "After graduation, you can apply for a short-term L permit for up to 6 months to search for a job. Securing a long-term work permit afterwards is highly competitive and depends on finding a skilled job."
        },
        {
          ques: "What are the main intake periods for Swiss universities?",
          ans: "The primary intake is starting September/October with application deadlines for non-EU/EFTA students typically between January and March. A smaller Spring Semester intake also exists."
        },
        {
          ques: "Are scholarships available for Indian students in Switzerland?",
          ans: "Yes, various scholarships are available, including the prestigious Swiss Government Excellence Scholarships (for PhD/research), university-specific scholarships (e.g., ETH Zurich, EPFL), and private grants."
        }
      ]

    },
  },
  austria: {
    name: "Austria",
    image: "/images/home/countries/new-zealand.jpg",
    details: {
      intro: {
        headline: "Study in the Austria",
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
        bgImg: '/images/countries/austria/map.jpg',
        mainImg: '/images/countries/austria/students.jpg',
        altText: 'Austria',

        "points": [
          "Capital: Vienna",
          "Official Language: German",
          "Currency: Euro",
          "Main Cities: Graz, Linz, Salzburg, Innsbruck, Klagenfurt am Worthersee, Villach, Wels, Sankt Polten, Dornbirn"
        ]
      },
      whyStudyIn: {
        title: "Why study in Ireland",
        bgImg: "/images/countries/austria/banner.jpg",
        description: `For Indian students, Austria presents a compelling study abroad option. It offers a
            relatively straightforward work permit system and a vibrant job market primarily
            driven by medium-sized businesses. Graduates can expect a high minimum wage of
            €1,500 monthly, with average annual earnings around €48,317. Crucially, Austria
            publishes an annual "shortage occupations" list, indicating high demand for
            professionals in fields like Power, Mechanical, and Chemical Engineering, Cost
            Accounting, Business Administration, Botany, Zoology, Bio Technology, Culinary
            Arts, and various Medical specialities including Anaesthesiology, Cardiology,
            Dermatology, Endodontics, and Gastroenterology and more. This provides excellent
            post-study work prospects for Indian students.
                                    `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4',
        points: [
          {
            title: "Austrian universities are globally recognised for academic excellence, research, and innovation",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "Wide range of programs available across engineering, IT, healthcare, humanities, and arts",
            icon: "/images/countries/usa/icons/global-edu.png",
          },
          {
            title: "Affordable public university tuition fees, typically between €1,500 and €3,000 per year",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "Many postgraduate programs are taught fully in English, ideal for Indian students",
            icon: "/images/countries/usa/icons/connectivity.svg",
          },
          {
            title: "Austria offers one of the highest qualities of life with safe, liveable cities like Vienna",
            icon: "/images/countries/usa/icons/life.svg",
          },
          {
            title: "Central European location allows easy travel to countries like Germany, Italy, and Switzerland",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Strong post-study work opportunities in fields like IT, healthcare, engineering, and tourism",
            icon: "/images/countries/usa/icons/search.svg",
          },
          {
            title: "Excellent student support services, scholarships, and international student networks like ESN",
            icon: "/images/countries/usa/icons/globe.svg",
          }
        ]
      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/austria/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "20 hours per week during studies.",
          "International students can't typically work full-time during holidays without an LMT.",
          "1 year stay back."
        ],
      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>March / October</strong><br /> `,
        leftBackgroundImage: "/images/countries/austria/map.jpg",
        rightImage: {
          src: "/images/countries/austria/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "Why should Indian students consider Austria for higher education?",
          ans: "Austria offers a world-class education system, affordable tuition fees at public universities, a high quality of life, diverse cultural experiences, and good post-study work opportunities."
        },
        {
          ques: "What are the main intakes for universities in Austria?",
          ans: "The main intakes are Winter (starting October) and Summer (starting March)."
        },
        {
          ques: "Is Austria a safe country for international students?",
          ans: "Yes, Austria is generally considered a very safe country with low crime rates. However, like any major city, petty crime can occur, so general vigilance is advised."
        },
        {
          ques: "What is the quality of education in Austria?",
          ans: "Austria has a highly regarded education system, with several universities consistently ranking among the top globally QS worlds ranking for their academic standards, research, and innovation."
        },
        {
          ques: "Is German language proficiency mandatory for all courses?",
          ans: "No, many Bachelors, Masters, MRes and PhD programmes are taught entirely in English. However, learning German is recommended for daily life and greatly enhances job prospects."
        },
        {
          ques: "What are the general academic requirements for UG, PG, MRes and programmes for Indian students?",
          ans: "You'll typically need a plus two, degree, IELTS, TOEFL or PTE score, updated CV, SOP, LOR and sufficient financial proof etc..."
        },
        {
          ques: "Are there entrance exams for all courses in Austria?",
          ans: "No, not for all. However, specific programmes like Medicine, Psychology, or certain fields often have entrance examinations."
        },
        {
          ques: "How much are tuition fees at public universities for Indian students?",
          ans: "Public universities typically charge low tuition fees for international students, generally ranging from €1,500 to €2,700 per year (approximately INR 1.5 Lakh to 2.7 Lakh)."
        },
        {
          ques: "What are the tuition fees for private universities in Austria?",
          ans: "Private universities are significantly more expensive, with fees typically ranging from €10,000 to €17,500 per year (approximately INR 10 Lakh to 17.5 Lakh)."
        },
        {
          ques: "What is the estimated monthly cost of living for a student in Austria?",
          ans: "On average, expect to spend around €600 to €1,000 per month (approximately INR 60,000 to 1 Lakh), depending on the city and your lifestyle."
        },
        {
          ques: "Are there scholarships available for Indian students in Austria?",
          ans: "Yes, various scholarships are available, including those from the Austrian Agency for Education and Internationalisation and university-specific scholarships,"
        },
        {
          ques: "What are the key financial proof requirements for the student visa?",
          ans: "You need to show sufficient funds to cover your living expenses. €555 a month for students up to 24 years old, and €1,001 a month for students aged 24 and above."
        },
        {
          ques: "Is health insurance mandatory for the student visa?",
          ans: "Yes, comprehensive health insurance is mandatory. You can usually opt for public student health insurance at a preferential rate once in Austria, or secure private insurance beforehand."
        },
        {
          ques: "Can international students work part-time during their studies in Austria?",
          ans: "Yes, students on a \"Residence Permit - Student\" are generally allowed to work up to 20 hours per week. An employer-secured work permit from the AMS is required."
        },
        {
          ques: "Is it possible to work full-time (40 hours) during vacation periods?",
          ans: "Working more than 20 hours a week during holidays usually requires a work permit subject to a LMT by the AMS."
        },
        {
          ques: "What is the \"stay back\" period for international graduates in Austria?",
          ans: "Upon successfully completing your degree (Bachelors, Masters, MRes or PhD), you can extend your Residence Permit for 12 months to seek employment or start a business."
        },
        {
          ques: "What is the RWR Card for Graduates\"?",
          ans: "This is a specific residence and work permit you can apply for if you secure a job offer relevant to your qualifications within the 12-month job search period. It generally does not require an LMT."
        },
        {
          ques: "Can I bring my family with me to Austria while studying?",
          ans: "Family reunification is possible, but it depends on your specific residence permit type and financial stability. Generally, students may find it challenging to bring dependents initially due to stringent financial requirements."
        },
        {
          ques: "What are the long-term residence prospects after studying and working in Austria?",
          ans: "After successfully working on a RWR Card for a specific period (e.g., 21 months within 24 months), you can apply for a RWR Card Plus, which grants unlimited access to the labour market. After 5 years of legal residence, you may be eligible for permanent residence."
        },
        {
          ques: "What is the typical process for applying for a Student Visa for an Indian student?",
          ans: "Indian students usually apply for their student visa at the Austrian Embassy or Consulate General in Delhi, India before travelling to Austria. You'll submit your application, supporting documents, and attend an interview. Once approved, you'll receive a visa to enter Austria, where your residence permit card will be issued."
        }
      ]
    },
  },
  denmark: {
    name: "Denmark",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in the Denmark",
        bannerImg: "/images/countries/usa/banner.jpg",
        content:
          `Denmark, located in Northern Europe and part of Scandinavia, is frequently lauded
          as one of the world's most pleasant, safest, and happiest nations. This reputation
          stems from its exceptional quality of life and high per capita income. The country
          prides itself on advanced education, comprehensive healthcare, and robust civil
          rights, ensuring a socially developed and equitable society. Overall, Denmark offers
          an environment where personal growth flourishes amidst a commitment to well-being
          and democratic values, making it a highly desirable destination for those seeking a
          supportive and enriching experience.
            `
      },
      features: {
        bgImg: '/images/countries/denmark/map.png',
        mainImg: '/images/countries/denmark/students.jpg',
        altText: 'Sweden',
        points: [
          "Capital: Copenhagen",
          "Official Language: Danish",
          "Currency: Danish Krone (DKK)",
          "Main Cities: Aarhus, Odense, Aalborg, Esbjerg"
        ]

      },
      whyStudyIn: {
        title: "Why study in Sweden",
        bgImg: "/images/countries/denmark/banner.jpg",
        description: `Denmark is home to top-tier universities, with several regularly featured in the QS
                        World University Rankings, including the University of Copenhagen, Technical
                        University of Denmark, and Aarhus University. Degrees from these institutions are
                        globally recognised. Beyond academic excellence, Denmark offers significant
                        professional exposure and world-class facilities. Students can work while studying,
                        and crucially, institutions often assist graduates in securing internships and even
                        permanent positions in reputable organisations based on their qualifications and
                        knowledge. This blend of high-quality education and practical career support makes
                        Denmark an attractive destination.
                                    `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5',
        points: [
          {
            title: "Spouses of Students Pursuing State-Approved Masters, MRes or PhD Are Eligible for Full-Time, Unrestricted Work Permits",
            icon: "/images/countries/usa/icons/couple.svg",
          },
          {
            title: "Birthplace of Globally Renowned Multinational Companies Offering Strong Post-Study Employment Opportunities",
            icon: "/images/countries/usa/icons/globe.svg",
          },
          {
            title: "Highly Ranked Education System Consistently Recognised Among the World’s Best for Academic Quality",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "Danish Universities Regularly Featured in Prestigious Global Rankings Such as QS World University Rankings",
            icon: "/images/countries/usa/icons/global-edu.png",
          },
          {
            title: "One of the Safest, Happiest Countries Offering Excellent Quality of Life and Work-Life Balance",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "English Widely Spoken Across Denmark Enabling Smooth Academic, Social and Professional Integration",
            icon: "/images/countries/usa/icons/connectivity.svg",
          },
          {
            title: "Semester-Wise Tuition Fee Payment Structure Reducing Upfront Financial Burden for Indian Students",
            icon: "/images/countries/usa/icons/globe-in-document.svg",
          },
          {
            title: "Strong Export-Driven Economy with High Demand in Renewable Energy, IT, Business, Pharma and Engineering",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "Up to 3 Years Job-Seeking Residence Permit Available After Completing State-Approved Degree Programmes",
            icon: "/images/countries/usa/icons/search.svg",
          },
          {
            title: "Global Leader in Innovation and Sustainability Offering Future-Focused Learning and Career Pathways",
            icon: "/images/countries/usa/icons/globe.svg",
          }
        ]


      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/denmark/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "90 hours per month during studies",
          "40 hours per week during vacation",
          "Bachelors , Masters, MRes and PhD - 3 years stay back",
          "Non-State-Approved Programmes - 6-months stay back"
        ],
      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>September / January</strong><br />

          `,
        leftBackgroundImage: "/images/countries/denmark/map.png",
        rightImage: {
          src: "/images/countries/denmark/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "Where is Denmark located, and what is its overall reputation?",
          ans: "Denmark is in Northern Europe, part of Scandinavia, renowned as one of the world's most pleasant, safest, and happiest nations due to its high quality of life."
        },
        {
          ques: "How do Danish universities rank globally?",
          ans: "Denmark is home to top-tier universities, with several regularly featuring in the QS World University Rankings, reflecting their academic excellence and research prowess."
        },
        {
          ques: "What type of degrees can Indian students pursue in Denmark?",
          ans: "Danish universities offer a wide array of globally recognised Bachelors, Masters, Masters by Research and PhD programmes across various disciplines, taught with a strong focus on innovation."
        },
        {
          ques: "What is the primary language of instruction in Danish universities for international students?",
          ans: "While Danish is the official language, a vast number of programmes, especially at Bachelors, Masters Masters by Research and PhD levels, are taught entirely in English."
        },
        {
          ques: "Is English widely spoken in Denmark?",
          ans: "Yes, English proficiency is very high across Denmark, particularly in urban areas and among younger generations, making daily life and academic interaction smooth for international students."
        },
        {
          ques: "Is IELTS mandatory for Indian students for university admission in Denmark?",
          ans: "Most Danish universities require proof of English proficiency (like IELTS, TOEFL, or PTE with specific score requirements varying by programme and institution."
        },
        {
          ques: "Are tuition fees in Denmark paid per semester?",
          ans: "Yes, tuition fees at Danish universities are typically collected on a semester-wise basis, offering a convenient payment structure for Indian students."
        },
        {
          ques: "Are scholarships available for international students in Denmark?",
          ans: "Yes, various scholarship opportunities exist, including government-funded options and university-specific grants, which can help cover tuition fees and/or living costs."
        },
        {
          ques: "What are the main entry requirements for Indian students?",
          ans: "Requirements typically include academic qualifications, English language proficiency, and demonstration of sufficient funds to cover living expenses."
        },
        {
          ques: "Can international students work part-time while studying in Denmark?",
          ans: "International students in state-approved higher education programmes can work up to 90 hours per month during the study period, during vacation 40 hours per week."
        },
        {
          ques: "How do I know if my chosen programme is \"state-approved\"?",
          ans: "It is crucial to confirm the accreditation status of your programme directly with the university and verify it on the official Danish Agency."
        },
        {
          ques: "What is the \"stay back\" or post-study work option for Denmark?",
          ans: "Graduates from state-approved Bachelor's, Masters, MRes or PhD programmes can apply for a job-seeking residence permit valid for up to three years."
        },
        {
          ques: "Can a student's spouse accompany them and gain work rights?",
          ans: "Yes, spouses accompanying students in state-approved Masters, MRes or PhD programmes are generally eligible to apply for a full-time work permit."
        },
        {
          ques: "What professional exposure can international students expect in Denmark?",
          ans: "Denmark offers excellent professional exposure; institutions often assist graduates in securing internships and even permanent positions in reputable organisations."
        },
        {
          ques: "What are the key employment sectors in Denmark for graduates?",
          ans: "Promising sectors include renewable energy, business, IT, pharmaceuticals, engineering, and maritime industries, driven by a strong focus on innovation."
        },
        {
          ques: "Which are the main cities for students in Denmark?",
          ans: "Copenhagen, the capital Aarhus, Odense, and Aalborg are major student cities, each offering a unique academic and cultural environment."
        },
        {
          ques: "Is Permanent Residency (PR) a pathway after studying in Denmark?",
          ans: "Yes, after securing skilled employment following graduation, it is possible to apply for permanent residency."
        },
        {
          ques: "Does Denmark have any \"Green List\" or \"Positive List\" for in-demand occupations?",
          ans: "Yes, Denmark updates \"Positive Lists\" for highly educated professionals and skilled workers, which identify in-demand occupations that can offer accelerated pathways to work and residency."
        },
        {
          ques: "What is the typical processing time for a Danish student visa application from India?",
          ans: "The processing time for a Denmark student visa generally ranges from 60 to 90 days. It is strongly advisable to apply at least 3-4 months before your intended course start date to account for any potential delays."
        },
        {
          ques: "Are there specific intake periods for universities in Denmark?",
          ans: "Danish universities generally have two main intake periods: the autumn intake (main intake, with applications typically opening in January/February for a September start) and a smaller spring intake (with applications usually opening in August/September for a February start)."
        }
      ]

    },
  },
  finland: {
    name: "Finland",
    image: "/images/home/countries/canada.jpg",
    details: {
      intro: {
        headline: "Study in the Finland",
        bannerImg: "/images/countries/usa/banner.jpg",
        content:
          `Finland, consistently named the happiest country in the world, is a Nordic nation
          celebrated for its exceptional quality of life. The country boasts a robust, wealthy
          economy built on a strong social safety net, cutting-edge technology, and a
          deep-rooted connection to nature. This combination of a well-functioning society,
          high levels of trust, and a focus on well-being over material wealth contributes to the
          unparalleled satisfaction of its citizens. Finland's vast forests and over 180,000 lakes
          provide a serene backdrop for a balanced, low-stress lifestyle that is envied globally.
                      `
      },
      features: {
        bgImg: '/images/countries/finland/map.png',
        mainImg: '/images/countries/finland/students.jpg',
        altText: 'finland',
        points: [
          "Capital: Helsinki",
          "Main Cities: Tampere, Turku, Oulu, Espoo, Vantaa, Jyvaskyla, Kuopio, Lahti, Pori",
          "Official Language: Finnish",
          "Currency: Euro"
        ]


      },
      whyStudyIn: {
        title: "Why study in Finland",
        bgImg: "/images/countries/finland/banner.jpg",
        description: `Finland's education system is globally celebrated for its high quality and innovative
                    approach. Indian students benefit from a learning environment that prioritizes critical
                    thinking and problem-solving over rote memorisation. With many degrees taught in
                    English, there's no language barrier, and the country's universities are consistently
                    ranked among the world's best. The high standard of living and a safe, peaceful
                    environment also provide an ideal setting for academic focus and personal growth.
                                    `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5',
        points: [
          {
            title: "A globally renowned educational model",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "7 Finnish universities are ranked within the top 500 globally",
            icon: "/images/countries/usa/icons/global-edu.png",
          },
          {
            title: "Students' spouses are eligible to accompany them",
            icon: "/images/countries/usa/icons/couple.svg",
          },
          {
            title: "Fast-track offer letters and a leading visa success ratio",
            icon: "/images/countries/usa/icons/connectivity.svg",
          },
          {
            title: "Gaps in your studies and age are not a barrier",
            icon: "/images/countries/usa/icons/globe-in-document.svg",
          },
          {
            title: "Affordable tuition fee",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "13 universities, 22 universities of applied sciences",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "500+ English-taught bachelors and masters programs",
            icon: "/images/countries/usa/icons/globe.svg",
          },
          {
            title: "Stay-back counts toward permanent residency",
            icon: "/images/countries/usa/icons/search.svg",
          },
          {
            title: "High quality of life with a safe, student-friendly environment and strong work–life balance",
            icon: "/images/countries/usa/icons/life.svg",
          }

        ]
      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/finland/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "30 hours per week of work allowed during regular academic sessions",
          "Full-time work allowed without hourly restrictions during university holidays such as summer and winter breaks",
          "Post-study work permit: 2 years"
        ],

      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>August / January</strong><br />

          `,
        leftBackgroundImage: "/images/countries/finland/map.png",
        rightImage: {
          src: "/images/countries/finland/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "Why is Finland a good place to study?",
          ans: "Finland has an excellent education system that is highly respected globally for its quality and innovative teaching methods."
        },
        {
          ques: "What are the main types of universities?",
          ans: "There are traditional universities, which focus on research, and universities of applied sciences, which are more practical and career-focused."
        },
        {
          ques: "Can I study English?",
          ans: "Yes, there are over 500 + bachelors and masters programmes taught in English."
        },
        {
          ques: "Are there any age limits for students?",
          ans: "No, there are no age restrictions for admission to Finland universities."
        },
        {
          ques: "Is it a problem if I have a gap in my studies?",
          ans: "No, academic gaps are not a concern. Your application is judged on your qualifications, not your study history."
        },
        {
          ques: "What are the main application times?",
          ans: "The biggest application period is in January (one month only) for studies starting in August. There is a smaller intake in January."
        },
        {
          ques: "Do I need to take a test to get in?",
          ans: "Admission is based on your previous qualifications and may include an entrance exam."
        },
        {
          ques: "Can my family come with me?",
          ans: "Yes, you can be accompanied by your spouse and children."
        },
        {
          ques: "How expensive is it to live in Finland?",
          ans: "Living costs for students can be around €600 to €900 per month."
        },
        {
          ques: "What is student life like?",
          ans: "Student life is very active, with many clubs, events, and unique traditions."
        },
        {
          ques: "Is it a safe country?",
          ans: "Yes, Finland is a very safe and secure country, known for its low crime rate."
        },
        {
          ques: "Do I have to learn the Finnish language?",
          ans: "No, most Finns speak English very well, but learning some Finnish is a great way to experience the local culture."
        },
        {
          ques: "Can I get student discounts?",
          ans: "Yes, with a student card you can get discounts on food, travel, and various services."
        },
        {
          ques: "What kind of jobs are available for international students?",
          ans: "Common part-time jobs are in sectors like retail, packing section, delivery, restaurant, hospitality, or as research assistants. After graduation, opportunities are strong in technology and engineering."
        },
        {
          ques: "Does the stay-back period count towards permanent residency?",
          ans: "Yes, the two-year period spent looking for work can be included in the time required for a permanent residence permit."
        },
        {
          ques: "Are there any restrictions on working full-time?",
          ans: "You are allowed to work full-time without any hourly limits during official university holidays."
        },
        {
          ques: "Is student accommodation easy to find?",
          ans: "Student housing foundations offer affordable accommodation, but it is important to apply for it as soon as possible."
        },
        {
          ques: "Are there scholarships available for international students?",
          ans: "Yes, many universities offer scholarships to international students to help cover tuition fees."
        },
        {
          ques: "What is the student housing situation in Finland?",
          ans: "Student housing foundations (lHOAS) are non-profit organisations that provide affordable and comfortable apartments for students in many cities."
        },
        {
          ques: "Most trusted education consultant in Kerala for Finland?",
          ans: "RH Study Abroad is one of the highly-rated and reputable education consultants in Kerala for Finland."
        }
      ]

    },
  },
  malta: {
    name: "Malta",
    image: "/images/home/countries/australia.jpg",
    details: {
      intro: {
        headline: "Study in the Malta",
        bannerImg: "/images/countries/usa/banner.jpg",
        content:
          `Malta, a picturesque archipelago in the heart of the Mediterranean, is a highly
            attractive Schengen country boasting over 300 days of sunshine annually. This
            welcoming EU member state offers a high quality of life, rich 7,000-year history, and
            stunning natural beauty with numerous beaches and dive sites. English is an official
            language, easing communication for visitors and residents. Malta provides a stable,
            safe environment, a vibrant cultural scene, and a well-regarded education system,
            making it a desirable destination for tourism, living, and business.
          `
      },
      features: {
        bgImg: '/images/countries/malta/map.png',
        mainImg: '/images/countries/malta/students.jpg',
        altText: 'Malta',
        "points": [
          "Capital: Valletta",
          "Currency: Euro",
          "Languages: English, Maltese",
          "Main Cities: Sliema, St. Julian's, Mdina, Rabat, Birkirkara, Mosta, Marsaxlokk, Victoria, St. Paul's Bay"
        ]
      },
      whyStudyIn: {
        title: "Why study in Malta",
        bgImg: "/images/countries/malta/banner.jpg",
        description: `Malta offers an exceptionally appealing study abroad experience. This bilingual
          nation, with English as an official language, ensures a smooth transition for
          international students. Its cost-effectiveness, coupled with a high-quality education
          system, makes it an attractive choice. Furthermore, gaining a Maltese student visa
          grants access to the entire Schengen Area, allowing unrestricted travel across 27
          European countries. Beyond academics, Malta is a haven for outdoor enthusiasts,
          providing ideal conditions for hiking, diving, and various watersports, ensuring a
          well-rounded and enriching experience.
                                    `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3',
        "points": [
          {
            "title": "Malta’s Get Qualified Scheme offers international students a tax credit refund of up to 70% on tuition fees after course completion and starting work in Malta, significantly reducing education costs",
            "icon": "/images/countries/usa/icons/cash-in-bag.svg"
          },
          {
            "title": "Following the British education model and the Bologna Process, Malta provides internationally recognised degrees with tuition fees and living costs that are more affordable than many European destinations",
            "icon": "/images/countries/usa/icons/scholar.svg"
          },
          {
            "title": "With English as one of its official languages, Malta offers Indian students a smooth academic and social transition with no language barrier",
            "icon": "/images/countries/usa/icons/connectivity.svg"
          },
          {
            "title": "A Maltese student visa allows free travel across the Schengen Area, giving students the opportunity to explore 28 European countries during study breaks",
            "icon": "/images/countries/usa/icons/world.svg"
          },
          {
            "title": "Malta is known for its low crime rate and welcoming, multicultural environment, helping international students feel safe and adapt quickly",
            "icon": "/images/countries/usa/icons/life.svg"
          },
          {
            "title": "With over 300 days of sunshine and a Mediterranean lifestyle, Malta offers a healthy balance of academics and outdoor activities",
            "icon": "/images/countries/usa/icons/globe.svg"
          },
          {
            "title": "Malta’s growing economy in sectors like IT, iGaming, financial services, tourism, hospitality, healthcare, and culinary fields attracts multinational companies and offers strong internship and career opportunities",
            "icon": "/images/countries/usa/icons/global-edu.png"
          }
        ]

      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/malta/workrights.jpg",
        altText: "Work rights and stay back",
        "points": [
          "20 hours per week during studies",
          "40 hours per week during semester breaks and holidays",
          "1 year stay back"
        ]

      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>September / February,</strong> few institutions also have intakes in <strong>April, May, and June</strong><br /> `,
        leftBackgroundImage: "/images/countries/malta/map.png",
        rightImage: {
          src: "/images/countries/malta/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      "faqItems": [
        {
          "ques": "Why should Indian students consider Malta for higher education?",
          "ans": "Malta offers a cost-effective, high-quality education in an English-speaking environment, recognised degrees, and a vibrant Mediterranean lifestyle with excellent travel opportunities across Europe."
        },
        {
          "ques": "Is English an official language in Malta, making it easier for Indian students?",
          "ans": "Yes, English is one of Malta's two official languages, alongside Maltese, ensuring no language barrier for Indian students in their studies and daily life."
        },
        {
          "ques": "What is the average tuition fee for international students in Malta?",
          "ans": "Tuition fees vary by program and institution, but generally range from €6,750 to €11,000 per year for undergraduate programs, with postgraduate programs potentially varying."
        },
        {
          "ques": "How much are the estimated living expenses for an Indian student in Malta?",
          "ans": "Monthly living expenses, excluding rent, can range from €400 to €650. Rent for a one-bedroom apartment in central areas can be around €500-€700, but is lower outside city centers or in Gozo."
        },
        {
          "ques": "What are the main academic intakes for universities in Malta?",
          "ans": "The primary intake is typically in September/October (Fall intake). Some institutions also have intakes in February (Spring) and occasionally in April, May, or June for specific programs."
        },
        {
          "ques": "What are the most popular fields of study for international students in Malta?",
          "ans": "Popular courses include Business Administration, Computer Science, Engineering (especially IT), Finance, Hospitality, Tourism, and Digital Marketing."
        },
        {
          "ques": "Does Malta offer a Post-Study Work (PSW) visa for international graduates?",
          "ans": "Yes, Malta offers a Post-Study Work visa, typically allowing graduates to stay for up to one year to seek employment after completing their studies."
        },
        {
          "ques": "Are there opportunities for part-time work for international students during their studies?",
          "ans": "Yes, international students are generally permitted to work up to 20 hours per week during their studies and 40 hours during vacation."
        },
        {
          "ques": "Is IELTS a mandatory requirement for admission to Maltese universities?",
          "ans": "While many universities accept IELTS, TOEFL, PTE or Duolingo English Test, some institutions may accept a Medium of Instruction (MOI) letter as proof of English proficiency."
        },
        {
          "ques": "What is the \"Get Qualified Scheme\" in Malta?",
          "ans": "The \"Get Qualified Scheme\" is a Maltese government initiative allowing individuals, including international students, to receive a refund of up to 70% of their tuition fees as a tax credit upon successful completion of an approved course and starting work in Malta."
        },
        {
          "ques": "What is the typical duration of a UG, PG duration in Malta?",
          "ans": "UG in Malta typically last for three or four years and PG usually take one or two years following the Bologna Process."
        },
        {
          "ques": "Is Malta considered a safe country for international students?",
          "ans": "Yes, Malta is known for its very low crime rate and peaceful environment, making it a safe and welcoming country for international students."
        },
        {
          "ques": "Does a Maltese student visa allow travel to other European countries?",
          "ans": "Yes, a Maltese student visa is a Schengen visa, which permits students to travel freely across 28 European nations within the Schengen Area."
        },
        {
          "ques": "Are there scholarship opportunities for Indian students in Malta?",
          "ans": "Yes, limited scholarships may be available from the Maltese government, individual universities, or private organizations. It's advisable to check specific university websites and government portals."
        },
        {
          "ques": "How important is demonstrating 'genuine intention to study' for a Malta student visa, and what does it involve?",
          "ans": "Demonstrating a genuine intention to study is crucial for a successful visa application. This involves clearly articulating your academic goals, showing how the chosen course aligns with your previous studies and future career aspirations, and proving you intend to return to your home country after completing your studies. A well-written Statement of Purpose (SOP) and consultation with Malta educational consultants also significantly improves the chances of a positive outcome."
        }
      ]


    },
  },
  Italy: {
    name: "Italy",
    image: "/images/home/countries/new-zealand.jpg",
    details: {
      intro: {
        headline: "Study in the Italy",
        bannerImg: "/images/countries/usa/banner.jpg",
        content:
          `Italy boasts a long and distinguished academic history, being home to some of the world's oldest universities, like the University of Bologna (founded in 1088). Its institutions offer high-quality, internationally recognised degrees, particularly strong in fields such as art, fashion, design, architecture, engineering, luxury brand management, automotive design, or culinary arts, and the humanities.
            <br /><br/>
            Compared to other popular study destinations like the UK or USA, Italy generally offers significantly lower tuition fees, especially at public universities. Furthermore, the overall cost of living, including accommodation, food, and transport, is often more manageable, making it an economically attractive option.
            <br /><br/>
            Studying in Italy provides an unparalleled opportunity to immerse yourself in a vibrant and historically rich culture. From ancient Roman ruins to Renaissance art, iconic architecture, and world-famous cuisine, every corner of Italy offers a unique and enriching experience that extends far beyond the classroom.
            <br /><br/>
            While many programmes are now taught in English, studying in Italy provides an immersive environment to learn Italian, a beautiful and influential language. Becoming bilingual can significantly enhance future career prospects, particularly in sectors like tourism, international relations, and fashion.

          `
      },
      features: {
        bgImg: '/images/countries/Italy/map.png',
        mainImg: '/images/countries/Italy/students.jpg',
        altText: 'Rome',

        points: [
          "Capital: Rome",
          "Currency: Euro",
          "Languages: Italian, French, German and Latin",
          "Main Cities: Milan, Naples, Turin, Florence, Venice, Bologna, Genoa, Palermo, Bari"
        ]

      },
      whyStudyIn: {
        title: "Why study in Italy",
        bgImg: "/images/countries/Italy/banner.jpg",
        description: `Italy boasts a long and distinguished academic history, being home to some of the world's oldest universities, like the University of Bologna (founded in 1088). Its institutions offer high-quality, internationally recognised degrees, particularly strong in fields such as art, fashion, design, architecture, engineering, luxury brand management, automotive design, or culinary arts, and the humanities.
              <br/><br/>
              Compared to other popular study destinations like the UK or USA, Italy generally offers significantly lower tuition fees, especially at public universities. Furthermore, the overall cost of living, including accommodation, food, and transport, is often more manageable, making it an economically attractive option.
              <br/><br/>
              Studying in Italy provides an unparalleled opportunity to immerse yourself in a vibrant and historically rich culture. From ancient Roman ruins to Renaissance art, iconic architecture, and world-famous cuisine, every corner of Italy offers a unique and enriching experience that extends far beyond the classroom.
              <br/><br/>
              While many programmes are now taught in English, studying in Italy provides an immersive environment to learn Italian, a beautiful and influential language. Becoming bilingual can significantly enhance future career prospects, particularly in sectors like tourism, international relations, and fashion.

                                    `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4',
        "points": [
          {
            "title": "Industry-collaborated courses in Italy focus on practical skills and real-world exposure, significantly enhancing student employability after graduation",
            "icon": "/images/countries/usa/icons/scholar.svg"
          },
          {
            "title": "Deserving international students benefit from generous financial support including scholarships, tuition fee waivers, accommodation assistance, and meal subsidies, making Italian education highly accessible",
            "icon": "/images/countries/usa/icons/cash-in-bag.svg"
          },
          {
            "title": "Milan, the global capital of fashion and design, offers students unmatched exposure to leading fashion houses, design studios, and creative industries",
            "icon": "/images/countries/usa/icons/world.svg"
          },
          {
            "title": "Italy hosts thousands of diverse industries such as shipbuilding, automotive manufacturing, and textiles, creating strong employment prospects for graduates",
            "icon": "/images/countries/usa/icons/global-edu.png"
          },
          {
            "title": "As the birthplace of iconic luxury and fashion brands like Gucci and Prada, Italy leads global style through exceptional craftsmanship, heritage, and innovation",
            "icon": "/images/countries/usa/icons/life.svg"
          },
          {
            "title": "Home to legendary automotive brands including Ferrari, Lamborghini, and Fiat, Italy’s automotive sector is globally recognised for engineering excellence and performance",
            "icon": "/images/countries/usa/icons/search.svg"
          },
          {
            "title": "Italy is the origin of world-famous food and beverage brands such as Ferrero and Barilla, celebrated globally for quality, tradition, and culinary excellence",
            "icon": "/images/countries/usa/icons/globe.svg"
          },
          {
            "title": "Global energy and infrastructure leaders like Enel and Eni originate from Italy, highlighting the country’s strong presence in energy, utilities, and sustainable development sectors",
            "icon": "/images/countries/usa/icons/connectivity.svg"
          }
        ]
      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/Italy/workrights.jpg",
        altText: "Work rights and stay back",
        "points": [
          "20 hours per week during studies.",
          "40 hours per week during semester breaks and holidays.",
          "Stay-back option of 6–12 months."
        ]

      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>February / September</strong><br /> `,
        leftBackgroundImage: "/images/countries/Italy/map.png",
        rightImage: {
          src: "/images/countries/Italy/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      "faqItems": [
        {
          "ques": "Why should Indian students consider Italy for higher education?",
          "ans": "Italy offers world-class, affordable education with a rich cultural experience, strong industry links (especially in design and engineering), ample scholarship opportunities, and a favourable post-study work environment."
        },
        {
          "ques": "What are the typical tuition fees for international students in Italian public universities?",
          "ans": "Tuition fees at Italian public universities are generally affordable, ranging from approximately €0 to €5,000 per academic year, making it much more economical than many other Western study destinations."
        },
        {
          "ques": "What are the most popular courses for Indian students in Italy?",
          "ans": "Indian students often choose courses in Architecture, Fashion and Design, Engineering, Business & Management (especially MBA), Computer Science, and Arts & Humanities, given Italy's global reputation in these fields."
        },
        {
          "ques": "Can Indian students work part-time while studying in Italy?",
          "ans": "Yes, Indians are permitted to work up to 20 hours per week during academic terms and full-time (up to 40 hours) during official university breaks, provided they obtain the necessary work permit."
        },
        {
          "ques": "What are the post-study work options available for Indian graduates in Italy?",
          "ans": "After completing a Masters, MRes or PhD, Indian students can apply for a Job-Seeking Visa for 6-12 months to find full-time employment and then convert to a work permit."
        },
        {
          "ques": "What are the key documents required for an Italian student visa for Indian citizens?",
          "ans": "Essential documents include a valid passport, acceptance letter from an Italian university, proof of sufficient financial means (€8030 year minimum), accommodation proof, overseas medical insurance, and a statement of purpose."
        },
        {
          "ques": "Are there scholarships available for Indian students in Italy?",
          "ans": "Absolutely. Many Italian universities (e.g., University of Bologna, Politecnico di Milano) and regional bodies offer various scholarships, fee waivers, and welfare benefits like free housing and meal tickets for deserving international students."
        },
        {
          "ques": "What is the estimated cost of living for an Indian student in Italy?",
          "ans": "The average monthly living cost, excluding tuition, ranges from €600 to €900. This covers accommodation, food, transportation, and personal expenses, varying significantly by city (Milan and Rome are generally more expensive)."
        },
        {
          "ques": "What are some top Italian universities popular among international students, including Indians?",
          "ans": "Highly regarded universities include Alma Mater Studiorum – Università di Bologna, Politecnico di Milano, Sapienza University of Rome, University of Padua, Politecnico di Torino, and Bocconi University."
        },
        {
          "ques": "How long does it typically take to process an Italian student visa from India, and what should I keep in mind regarding timing?",
          "ans": "The processing time for an Italian student visa from India can range from 3 to 6 weeks, or even up to 90 days in complex cases. It's highly recommended to apply at least 2-3 months before your course start date to account for any potential delays, especially during peak application seasons. Additionally, once you arrive in Italy, you must apply for a Residence Permit at the local Police Headquarters within 8 days of your arrival."
        }
      ]

    },
  },
  latvia: {
    name: "Latvia",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in the Latvia",
        bannerImg: "/images/countries/usa/banner.jpg",
        content:
          `Latvia, a proud Schengen country, is a hidden gem on the Baltic Sea, boasting wide,
            pristine beaches and extensive, sprawling forests that cover over 50% of its land,
            offering abundant natural beauty. Bordered by Lithuania, Estonia, Russia, and
            Belarus, with sea links to Sweden, Latvia provides a unique geographical position. It
            offers an excellent standard of living at a comparatively low cost. The nation is
            dedicated to providing high-quality education, with many programs available in
            English, making it an attractive and safe destination for international students
          `
      },
      features: {
        bgImg: '/images/countries/Latvia/map.png',
        mainImg: '/images/countries/Latvia/students.jpg',
        altText: 'Latvia',

        points: [
          "Capital: Riga",
          "Language: Latvian",
          "Currency: Euro",
          "Main Cities: Daugavpils, Liepaja, Jelgava, Jurmala, Ventspils, Rezekne, Jekabpils, Valmiera, Ogre"
        ]

      },
      whyStudyIn: {
        title: "Why study in Latvia",
        bgImg: "/images/countries/Latvia/banner.jpg",
        description: `Latvia is an increasingly popular study abroad destination, attracting over 6500
              overseas students annually with its excellent, diverse programmes and expert
              faculties. Renowned for offering some of the world's fastest internet speeds, it
              provides high-quality academic and professional higher education through 36 public
              universities. Following the Bologna system, it offers Bachelor's, Master's, and
              Doctoral degrees, with public grants and scholarships available for top students. As
              a member of the EU, Eurozone, and OECD, Latvia offers a stable and welcoming
              environment with internationally recognised degrees and good post-study work
              opportunities.
                                    `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3',
        "points": [
          {
            "title": "Latvia offers affordable education and living costs compared to many Western European countries, with lower tuition fees and economical expenses for accommodation, food, and transport",
            "icon": "/images/countries/usa/icons/cash-in-bag.svg"
          },
          {
            "title": "Latvian universities follow the Bologna system, ensuring globally recognised degrees with a strong focus on quality education, innovation, and English-taught programmes",
            "icon": "/images/countries/usa/icons/scholar.svg"
          },
          {
            "title": "Latvia has some of the fastest internet speeds in the world, supporting students with seamless access to online learning, research, and digital communication",
            "icon": "/images/countries/usa/icons/connectivity.svg"
          },
          {
            "title": "As a Schengen country, Latvia allows students to travel freely across 28 European countries without additional visas, enabling rich cultural and travel experiences",
            "icon": "/images/countries/usa/icons/world.svg"
          },
          {
            "title": "Latvia is known for its safe, peaceful, and student-friendly environment, with welcoming locals and strong university support services for international students",
            "icon": "/images/countries/usa/icons/life.svg"
          },
          {
            "title": "Latvia’s growing EU-based economy attracts multinational companies, particularly in IT, finance, and shared services, offering internship and career opportunities for graduates",
            "icon": "/images/countries/usa/icons/global-edu.png"
          }
        ]

      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/Latvia/workrights.jpg",
        altText: "Work rights and stay back",
        "points": [
          "20 hours per week during studies",
          "40 hours per week during semester breaks and holidays",
          "6–9 months stay back"
        ]
      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>February / September</strong><br /> `,
        leftBackgroundImage: "/images/countries/Latvia/map.png",
        rightImage: {
          src: "/images/countries/Latvia/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      "faqItems": [
        {
          "ques": "Why is Latvia becoming a popular study destination for Indian students?",
          "ans": "Latvia offers a combination of affordable tuition fees, a lower cost of living compared to other European countries, a high quality of education, and degrees that are globally recognized due to its adherence to the Bologna system."
        },
        {
          "ques": "What are the main benefits of studying in Latvia for international students?",
          "ans": "Key benefits include access to the Schengen Area for easy travel, high-quality education with many English-taught programs, fast internet speeds, and good post-study work opportunities."
        },
        {
          "ques": "Is IELTS mandatory for admission to Latvian universities?",
          "ans": "While many universities accept IELTS, TOEFL, or PTE Academic, some Latvian universities may also accept a Medium of Instruction (MOI) letter from your previous institution, stating that your studies were conducted entirely in English."
        },
        {
          "ques": "What is the average tuition fee for international students in Latvia?",
          "ans": "Tuition fees vary by program and university, but on average, they can range from €1,550 to €11,000 per year. Specialised programs like Medicine or Executive MBAs might be higher."
        },
        {
          "ques": "What is the estimated cost of living in Latvia for an Indian student?",
          "ans": "The average monthly living expenses in Latvia can range from €450 to €650, covering accommodation, food, transportation, and utilities. This can be lower if students opt for university dorms."
        },
        {
          "ques": "What are the most popular courses for international students in Latvia?",
          "ans": "Popular fields of study include Business Administration, Computer Science, Engineering (especially IT and Telecommunications), Medicine (MBBS), and various Master's programs like MBA.BBA Logistic etc.."
        },
        {
          "ques": "Can international students work part-time while studying in Latvia?",
          "ans": "Yes, Bachelors students can work up to 20 hours per week during the academic year and full-time (40 hours/week) during holidays. Masters, MRes and PhD students have no restrictions on working hours."
        },
        {
          "ques": "What are the post-study work options for Indian students in Latvia?",
          "ans": "Bachelor's graduates get a 6-month extension to their residence permit to seek employment or pursue further studies. Masters, MRes and PhD graduates get an initial 6-month extension with the possibility to apply for an additional 9-month extension to look for a job."
        },
        {
          "ques": "Are there scholarships available for Indian students in Latvia?",
          "ans": "Yes, scholarships are available from various sources including the Latvian government (Latvian State Scholarships), specific universities, and private organizations. Indian government scholarships like ICCR also support studies in Latvia."
        },
        {
          "ques": "Is Latvia a safe country for Indian students?",
          "ans": "Yes, Latvia is generally considered a safe country with a low crime rate, offering a peaceful and welcoming environment for international students."
        },
        {
          "ques": "Which Latvian cities are popular for international students?",
          "ans": "While Riga is the capital and most popular, other cities like Daugavpils, Liepāja, Jelgava, and Jūrmala also have universities and attract international students."
        },
        {
          "ques": "Can Indian students get Permanent Residency (PR) in Latvia after studying?",
          "ans": "Yes, it is possible to apply for PR in Latvia after completing your studies and meeting certain criteria, including securing stable employment, demonstrating financial stability, having a clean criminal record, and proving Latvian language proficiency (A2 level minimum)."
        },
        {
          "ques": "Are there opportunities to work for Multinational Corporations in Latvia after graduation?",
          "ans": "Yes, Latvia's growing economy and EU membership have attracted MNCs, particularly in IT, finance, and shared services, creating potential internship and career opportunities for international graduates."
        },
        {
          "ques": "What is the application timeline for Latvian universities for Indian students?",
          "ans": "Deadlines vary by program and university. For undergraduate programs, deadlines are typically between October and January (for Fall intake). For graduate/doctoral programs, deadlines can start from October and may be rolling. It's advisable to apply as early as possible."
        },
        {
          "ques": "What is the success rate for Latvian student visa applications for Indian students?",
          "ans": "The success rate for Latvia student visa applications is generally considered to be quite high, often cited as approximately 93% or above, provided that applicants submit all required documents accurately, genuinely demonstrate their intent to study, and meet all financial and academic requirements. However, it's crucial to be thorough and honest in your application to avoid common rejection reasons like insufficient funds or incomplete documentation. Therefore, please consult a reputable study abroad consultancy to clarify any doubts."
        }
      ]

    },
  },
  netherlands: {
    name: "Netherlands",
    image: "/images/home/countries/canada.jpg",
    details: {
      intro: {
        headline: "Study in the Netherlands",
        bannerImg: "/images/countries/netherlands/banner.jpg",
        content:
          `The Netherlands, a proud EU and Schengen country, offers seamless travel across
            much of Europe. Known for its innovative spirit and high quality of life, it consistently
            ranks among the happiest nations. Despite its small size, it's the world's
            second-largest agricultural exporter. Other positive facts include over 1,000 historic
            windmills, extensive cycling paths (more bikes than people!), and a reputation for
            tolerance. Its strong economy and English proficiency make it welcoming for
            international visitors and residents alike.
          `
      },
      features: {
        bgImg: '/images/countries/netherlands/map.png',
        mainImg: '/images/countries/netherlands/students.jpg',
        altText: 'netherlands',

        "points": [
          "Capital: Amsterdam",
          "Official Language: Dutch",
          "Dutch people also have a high proficiency in English, German, and French",
          "Currency: Euro",
          "Main Cities: Rotterdam, The Hague, Utrecht, Eindhoven, Groningen, Breda, Tilburg, Nijmegen, Almere"
        ]

      },
      whyStudyIn: {
        title: "Why study in Netherlands",
        bgImg: "/images/countries/netherlands/banner.jpg",
        description: `Dutch universities offer cutting-edge courses and world-class facilities. Their
                      teaching style fosters teamwork, developing crucial analytical and problem-solving
                      skills for the global market. Curricula integrate practical elements and excellent
                      industry partnerships, providing valuable internships. This student-centred approach
                      ensures graduates are well-prepared for their careers, further enhanced by the
                      Netherlands' high English proficiency and status as one of the world's safest and
                      happiest nations.
                      `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3',
        points: [
          {
            title: "9 Dutch universities rank among the world’s top 200 in QS Rankings, showcasing strong academic and research excellence.",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "The Dutch economy is driven by advanced industries such as food processing, chemicals, electronics, and engineering.",
            icon: "/images/countries/usa/icons/cash.svg",
          },
          {
            title: "As a global business hub and one of the world’s wealthiest nations, the Netherlands offers excellent professional growth opportunities.",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Key sectors including petroleum refining, metal products, and electrical machinery provide diverse employment options.",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "International graduates enjoy strong post-study career opportunities supported by an innovation-driven economy.",
            icon: "/images/countries/usa/icons/connectivity.svg",
          },
          {
            title: "Over 2,000 English-taught programmes make Dutch higher education accessible to international students.",
            icon: "/images/countries/usa/icons/globe-in-document.svg",
          },
        ]
      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/netherlands/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "16 hours per week during studies",
          "Full-time only during the summer months (June, July, and August).",
          "Post-Study Work Visa"
        ]
      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>February / September</strong><br /> `,
        leftBackgroundImage: "/images/countries/netherlands/map.png",
        rightImage: {
          src: "/images/countries/netherlands/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },

      faqItems: [
        {
          ques: "Why should Indian students consider studying in the Netherlands?",
          ans: "The Netherlands offers a high-quality, globally-recognised education system with numerous English-taught programmes. Its universities are known for their modern infrastructure, innovative teaching methods emphasising teamwork and critical thinking, and strong industry connections, providing excellent career prospects."
        },
        {
          ques: "Are Netherlands universities globally recognised?",
          ans: "Absolutely. The Netherlands boasts an impressive academic landscape, with several of its universities consistently ranking among the top 200 globally in prestigious rankings like the QS World University Rankings, reflecting their academic excellence and research prowess."
        },
        {
          ques: "Is it easy to find English-taught programmes in the Netherlands?",
          ans: "Yes, remarkably so! Dutch universities offer over 2,000 English-taught programmes across various disciplines, making it a very accessible destination for Indian students who wish to pursue higher education without a Dutch language barrier."
        },
        {
          ques: "How multicultural is the student environment in the Netherlands?",
          ans: "The Netherlands is a highly multicultural country, and this is reflected in its universities. Roughly one in every ten university students is an international student, creating a diverse and inclusive learning environment where Indian students can interact with peers from across the globe."
        },
        {
          ques: "What are the typical application intakes for Netherlands universities?",
          ans: "The main intake for Netherlands universities is in September offering the widest range of programmes. There's also a smaller February intake, primarily for certain Master's programmes. Indian students should apply well in advance, especially for the September intake due to visa processing times."
        },
        {
          ques: "What is the estimated cost of living for Indian students in the Netherlands?",
          ans: "The cost of living varies by city, but generally, Indian students can expect to spend between €680 to €900 (approximately INR 68,000 to INR 90,000) per month, excluding tuition fees. This covers accommodation, food, transportation."
        },
        {
          ques: "Are there scholarships available for Indian students?",
          ans: "Yes, numerous scholarships are available. Key scholarships include the NL Scholarship (formerly Holland Scholarship) and the Orange Tulip Scholarship, which is specifically aimed at Indian students. Many universities also offer their own merit-based scholarships. The Erasmus Mundus Joint Master's Degrees also provide excellent opportunities."
        },
        {
          ques: "Can Indian students work part-time while studying in the Netherlands?",
          ans: "Yes, Indian students (non-EU/EEA) are permitted to work up to 16 hours per week during the academic year and full-time during the summer months (June, July, August). An employer will typically need to apply for a work permit (TWV) on your behalf."
        },
        {
          ques: "What is the post-study work visa situation for Indian graduates in the Netherlands?",
          ans: "Indian graduates are eligible for a one-year This allows them to stay in the Netherlands for 12 months after graduation to search for a job as a highly skilled migrant or to start their own business."
        },
        {
          ques: "How is the job market in the Netherlands for international graduates?",
          ans: "The Netherlands offers excellent career opportunities for international graduates, particularly in sectors like industrial food processing, petroleum refining, chemicals, electrical machinery, metal products, and electronics. The country's status as a hub for international business and a wealthy nation contributes to a robust job market."
        }
      ]


    },
  },
  singapore: {
    name: "Singapore",
    image: "/images/home/countries/australia.jpg",
    details: {
      intro: {
        headline: "Study in the Singapore",
        bannerImg: "/images/countries/usa/banner.jpg",
        content:
          `Singapore stands as a beacon of urban excellence and innovation, truly unique due
            to its vibrant multicultural society, seamlessly integrated with efficient, world-class
            infrastructure. This highly developed city-state boasts an incredibly high quality of
            life, underpinned by remarkable cleanliness and safety. As Asia's dynamic financial
            and business hub, it attracts global corporations. Its blend of modern and traditional
            attractions includes a stunning skyline, a vibrant food scene, and lush green spaces.
            Looking ahead, Singapore is committed to a sustainable future, embracing AI and
            advanced digital infrastructure, solidifying its enduring global influence.
          `
      },
      features: {
        bgImg: '/images/countries/singapore/map.png',
        mainImg: '/images/countries/singapore/students.jpg',
        altText: 'Singapore',

        points: [
          "Capital: Singapore",
          "Official Languages: Mandarin, Tamil, Malay, English",
          "Currency: SGD (Singapore Dollar)"
        ]

      },
      whyStudyIn: {
        title: "Why study in Singapore",
        bgImg: "/images/countries/singapore/banner.jpg",
        description: `Singapore truly excels as a global economic powerhouse. Its economy consistently
            ranks as the most open and pro-business worldwide, attracting significant foreign
            investment. Key sectors like IT, Pharmaceuticals, Biotechnology, and Precision
            Engineering thrive, drawing major multinational companies such as Twitter, Dyson,
            Facebook, and Apple, DHL, FedEx, UPS, Singapore Airlines, PSA International,
            Novartis, Roche, 3M, Caterpillar, KPMG, Deloitte, J.P. Morgan, HSBC, DBS Bank to
            establish regional headquarters and R&D labs. This, coupled with exceptional
            connectivity and a robust economy, solidifies its position as Asia's prominent
            business hub. Moreover, Mercer consistently ranks Singapore as the Asian city with
            the highest quality of life, highlighting its liveability.
                                    `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4',
        "points": [
          {
            "title": "Home to world-renowned universities like NUS and NTU, consistently ranked among the top globally, Singapore offers rigorous, high-quality education with degrees recognised and respected worldwide",
            "icon": "/images/countries/usa/icons/scholar.svg"
          },
          {
            "title": "With English as a primary official and business language, Indian students face minimal to no language barrier in academics and daily life, ensuring smooth integration",
            "icon": "/images/countries/usa/icons/connectivity.svg"
          },
          {
            "title": "As a dynamic financial and business hub of Asia, Singapore provides strong exposure to global markets and excellent post-graduation career opportunities with multinational companies",
            "icon": "/images/countries/usa/icons/world.svg"
          },
          {
            "title": "Singapore’s political stability, strong regulations, and innovation-driven economy make it a leading global centre for banking, wealth management, and FinTech",
            "icon": "/images/countries/usa/icons/global-edu.png"
          },
          {
            "title": "Its close geographical proximity to India allows shorter travel times and more affordable flights, making family visits easier and more frequent",
            "icon": "/images/countries/usa/icons/globe.svg"
          },
          {
            "title": "Excellent transfer opportunities are available for students wishing to move to parent university campuses abroad",
            "icon": "/images/countries/usa/icons/search.svg"
          },
          {
            "title": "Beyond academics, Singapore offers a stunning skyline, world-famous hawker food culture, green spaces, and a rich mix of modern and traditional attractions",
            "icon": "/images/countries/usa/icons/life.svg"
          },
          {
            "title": "International students can work part-time during studies and full-time during breaks, gaining practical experience along with strong employment and long-term stay pathways after graduation",
            "icon": "/images/countries/usa/icons/cash-in-bag.svg"
          }
        ]

      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/singapore/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "16 hours per week during studies.",
          "During official academic breaks and holidays, international students are allowed to work full-time, with no specific limitation on working hours."
        ]
      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>January / February / April / May / July / August / October / November</strong><br /> `,
        leftBackgroundImage: "/images/countries/singapore/map.png",
        rightImage: {
          src: "/images/countries/singapore/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      "faqItems": [
        {
          "ques": "Why is Singapore an attractive study destination for Indian students?",
          "ans": "Singapore offers world-class education, a safe and clean environment, excellent post-study career prospects, and close proximity to India, making it a convenient and high-quality choice."
        },
        {
          "ques": "Are Singaporean university degrees recognised internationally?",
          "ans": "Absolutely. Universities in Singapore, particularly the National University of Singapore (NUS) and Nanyang Technological University (NTU), are globally top-ranked and their degrees are highly respected worldwide."
        },
        {
          "ques": "What are the typical academic entry requirements for Indian students?",
          "ans": "Requirements vary by course and university, but generally include strong academic performance in 12th grade and proficiency in English."
        },
        {
          "ques": "Can Indian students work part-time while studying in Singapore?",
          "ans": "Yes, full-time students at approved institutions can work up to 16 hours per week during term time and full-time during official vacations without needing a separate work permit."
        },
        {
          "ques": "What is the estimated cost of living in Singapore for students?",
          "ans": "Excluding tuition, a single student might expect to spend approximately S700–S1200 per month, depending on accommodation and lifestyle choices."
        },
        {
          "ques": "Are scholarships available for Indian students in Singapore?",
          "ans": "Yes, many universities offer merit-based scholarships, tuition grants (like the MOE Tuition Grant for eligible courses), and other financial aid options, often significantly reducing fees."
        },
        {
          "ques": "What accommodation options are popular among students?",
          "ans": "University hostels/dorms, private student residences, and shared HDB (Housing Development Board) flats or condominiums are common choices."
        },
        {
          "ques": "Is Singapore a safe country for international students?",
          "ans": "Singapore is renowned for its very low crime rate and strict laws, making it one of the safest cities globally for students."
        },
        {
          "ques": "What are the post-study work opportunities in Singapore for Indian graduates?",
          "ans": "Singapore offers good prospects, especially in sectors like IT, finance, and engineering. Graduates from approved institutions can apply for a Long-Term Visit Pass (LTVP) to seek employment after graduation."
        },
        {
          "ques": "Is there a large Indian community in Singapore?",
          "ans": "Yes, Singapore has a significant and well-established Indian community, providing a sense of familiarity, cultural events, and support networks."
        },
        {
          "ques": "How efficient is public transport in Singapore?",
          "ans": "Singapore boasts an excellent and highly efficient public transport system, including the MRT (Mass Rapid Transit) and buses, making commuting easy and affordable for students."
        },
        {
          "ques": "What are some unique attractions or experiences for students in Singapore?",
          "ans": "Students can explore Gardens by the Bay, diverse hawker centres with world-class food, Sentosa Island, various cultural precincts, and enjoy a vibrant nightlife, blending modern and traditional experiences."
        },
        {
          "ques": "What support services do universities offer international students?",
          "ans": "Universities provide comprehensive support, including orientation programmes, academic advising, placement support, internship support, mental wellness services, and dedicated international student offices to help with integration and queries."
        },
        {
          "ques": "Are there opportunities for industrial attachments or internships during studies?",
          "ans": "Yes, many programmes in Singaporean universities integrate mandatory or optional industrial attachments and internships, providing valuable real-world experience and industry connections for students."
        },
        {
          "ques": "How long does it typically take to process a Singapore Student Visa?",
          "ans": "The standard processing time for a Singapore Student Visa application is usually 10 to 15 working days after a complete submission. However, it's advisable to apply at least one to two months before your course starts, as processing can take longer during peak periods or if additional information is required."
        }
      ]

    },
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
  dubai: {
    name: "Dubai",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in the Dubai",
        bannerImg: "/images/countries/usa/banner.jpg",
        content:
          `Dubai is a dynamic global metropolis, renowned for its striking modern architecture,
            luxurious lifestyle, and relentless pursuit of innovation. Its culture, while deeply
            rooted in Islamic and Emirati traditions, is remarkably cosmopolitan, home to over
            200 nationalities, with expatriates forming the vast majority of its population. This
            unique blend fosters a truly multicultural environment, offering diverse culinary
            experiences, festivals, and social interactions looking to the future. Dubai is guided
            by its ambitious "D33 Economic Agenda," aiming to double its economy by 2033.
            This involves significant investments in cutting-edge sectors like AI, advanced
            manufacturing, and green technology, alongside a drive to attract top global talent
            and become a leading smart city. Recent agreements, such as the numerous
            Comprehensive Economic Partnership Agreements (CEPAs) with countries including
            India, Turkey, and Azerbaijan, are expanding its trade networks and economic
            partnerships globally, cementing its role as a vital international trade and logistics
            hub. This strategic vision positions Dubai not just as a thriving present-day city, but
            as a proactive shaper of tomorrow's global landscape.
          `
      },
      features: {
        bgImg: '/images/countries/dubai/map.png',
        mainImg: '/images/countries/dubai/students.jpg',
        altText: 'Austria',

        points: [
          "Dubai is internationally renowned for its record-breaking architecture and world-class attractions such as the Burj Khalifa, Palm Jumeirah, Dubai Mall, and Dubai Frame. At the same time, while Islam is the official religion, the city is widely recognised for its openness, religious tolerance, and multicultural environment, where people from diverse nationalities, cultures, and faiths live and work together harmoniously.",
          "Trade and Tourism: A primary economic driver, attracting millions of visitors.",
          "Real Estate and Construction: Known for luxury developments and ambitious projects.",
          "Logistics and Aviation: Home to world-class ports and air cargo hubs.",
          "Financial Services: A significant regional financial centre (DIFC).",
          "Technology and Innovation: Growing focus on AI, blockchain, and e-commerce.",
          "Healthcare and Education: Significant investments and development in these sectors.",
          "Future Innovations: Dubai is actively pursuing futuristic projects, such as the planned launch of city-wide flying taxi services by 2026."
        ]

      },
      whyStudyIn: {
        title: "Why study in Dubai",
        bgImg: "/images/countries/dubai/banner.jpg",
        description: `Dubai is rapidly cementing its reputation as a premier global education hub,
            attracting international students with over 60 world-renowned university campuses
            offering diverse, high-quality programmes. Pursue a world-class degree here to
            significantly advance your global career prospects. The city boasts a vibrant,
            multicultural environment, fostering invaluable networking and cross-cultural
            understanding. Dubai's continuous development as an innovation hub, particularly in
            AI, sustainability, and fintech, ensures students are exposed to cutting-edge
            industries. Recent updates confirm new branch campuses, including India's IIM
            Ahmedabad and Lebanon's American University of Beirut for the 2025/26 academic
            year. Streamlined student visa processes and an emphasis on research further
            enhance Dubai's appeal for a globally advanced career.
                                    `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4',
        points: [
          {
            title: "Dubai hosts branch campuses of top universities from the UK, USA, Australia, and Europe, offering globally recognised degrees",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "A truly global city with over 200 nationalities, giving Indian students rich cross-cultural exposure and networking opportunities",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "English is the primary language of instruction and daily communication, ensuring easy academic and social integration",
            icon: "/images/countries/usa/icons/connectivity.svg",
          },
          {
            title: "One of the world’s safest cities, featuring low crime rates, modern infrastructure, and excellent public amenities",
            icon: "/images/countries/usa/icons/life.svg",
          },
          {
            title: "Strategic location between Asia, Europe, and Africa allows easy travel to India and global destinations",
            icon: "/images/countries/usa/icons/globe.svg",
          },
          {
            title: "Competitive tuition fees, manageable living costs, and multiple scholarship opportunities for international students",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "Fast-growing, innovation-driven economy with strong opportunities in AI, fintech, and renewable energy sectors",
            icon: "/images/countries/usa/icons/global-edu.png",
          },
          {
            title: "Clear post-study work pathways with employer-sponsored work visas in high-demand sectors",
            icon: "/images/countries/usa/icons/search.svg",
          }
        ]

      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/dubai/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "To work legally, students require a work permit issued by the UAE Ministry of Human Resources and Emiratisation (MoHRE). This permit allows them to work up to 20 hours per week during regular academic sessions and up to 40 hours per week during vacations and university holidays. Furthermore, their university must provide a formal letter stating they have no objection to them working part-time, ensuring that such work does not interfere with their studies.",
          "A significant advantage is that income earned from part-time or full time jobs in Dubai is generally tax-free.",
          "If international students achieve a GPA of 3.5 or above, they can be eligible for the UAE Golden Visa (10 years renewable visa).",
          "No national sponsor is needed, and a Golden Visa holder can readily sponsor their family, including spouse and children of all ages, under this visa.",
          "Field of Study: AI, ML, Cyber security, Big Data, Epidemiology and Virology, Computer Engg, Software Engg, Electronic and Electrical Engg, Biotechnology, Genetics and Molecular Engg and other STEM fields."
        ]

      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>January / May / September</strong><br /> `,
        leftBackgroundImage: "/images/countries/dubai/map.png",
        rightImage: {
          src: "/images/countries/dubai/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "Why should Indian students consider Dubai for higher education?",
          ans: "Dubai offers a high-quality, internationally recognised education system, a safe and multicultural environment, excellent career opportunities, and a favourable tax regime upon graduation."
        },
        {
          ques: "Are Dubai universities globally recognised?",
          ans: "Yes, many universities in Dubai are either branches of prestigious international institutions (e.g., UK, France, Malta US and Australian universities) or locally established universities with international accreditation."
        },
        {
          ques: "What are the primary language requirements for admission?",
          ans: "Most programmes are taught in English; admission is possible with or without IELTS."
        },
        {
          ques: "Is a student visa difficult to obtain for Indian nationals?",
          ans: "The process is generally straightforward once admitted to a recognised institution. The university often assists with the visa application, but all documents must be accurate and complete."
        },
        {
          ques: "What key documents are needed for a Dubai student visa?",
          ans: "You'll typically need a valid passport, university acceptance letter, proof of sufficient funds, academic transcripts, a medical fitness certificate, and passport-sized photographs."
        },
        {
          ques: "Can Indian students work part-time while studying in Dubai?",
          ans: "Yes, international students can work part-time (up to 20 hours per week during term and 40 hours during holidays) with a valid work permit issued by the Ministry of Human Resources and Emiratisation (MoHRE)."
        },
        {
          ques: "Is a No Objection Certificate from the university mandatory for working?",
          ans: "Absolutely. Your university must provide a formal NOC stating they have no objection to you working part-time, ensuring it doesn't interfere with your studies."
        },
        {
          ques: "How does one apply for a student work permit in Dubai?",
          ans: "Generally, your employer will initiate the work permit application through MoHRE on your behalf once you have secured a job offer and the university's NOC university team will assist the all process."
        },
        {
          ques: "What types of part-time jobs are commonly available for students?",
          ans: "Common roles include retail sales associate, customer service, hospitality staff, data entry, and sometimes on-campus positions like library or administrative assistants."
        },
        {
          ques: "What is the estimated cost of living for Indian students in Dubai?",
          ans: "Excluding tuition, a single student might expect to spend approximately AED 2,000 - 3,000 per month, depending on accommodation choices and lifestyle."
        },
        {
          ques: "Are tuition fees in Dubai affordable for Indian students?",
          ans: "Tuition fees vary widely by university and programme, but compared to some Western countries, many institutions in Dubai offer competitive fees and scholarships especially considering the quality of education."
        },
        {
          ques: "Are there scholarships available for Indian students in Dubai?",
          ans: "Yes, many universities offer merit-based scholarships, partial tuition waivers, up to 55% and sometimes fully funded programmes, particularly for postgraduate studies."
        },
        {
          ques: "How can I find scholarships for studying in Dubai?",
          ans: "The best approach is to check the official websites of individual universities, as most scholarships are institution-specific."
        },
        {
          ques: "What are the typical accommodation options for students in Dubai?",
          ans: "Options include university-managed dormitories, purpose-built student housing (e.g., KSK Homes, The Myriad), or private shared apartments."
        },
        {
          ques: "Is it safe for Indian students to live in Dubai?",
          ans: "Dubai is renowned for its very low crime rate and is considered one of the safest cities globally, offering a secure environment for international students."
        },
        {
          ques: "What are the public transport options for students?",
          ans: "Dubai boasts an excellent public transport network, including the Metro, buses, and trams. Students can often avail themselves of concessions with a Nol Blue Card."
        },
        {
          ques: "What are the popular courses for Indian students in Dubai?",
          ans: "Business Administration, Engineering, Information Technology, Finance, Hospitality Management, and Media & Communication are consistently popular choices due to demand in the UAE job market."
        },
        {
          ques: "Can Indian students stay and work in Dubai after graduation?",
          ans: "Yes, the UAE offers a \"Post-Graduate Work Permit\" of up to two years, allowing graduates to seek employment. Successful job offers lead to employment visa sponsorship."
        },
        {
          ques: "Are there specific career opportunities for graduates in Dubai?",
          ans: "Dubai's growing economy offers strong prospects in sectors like finance, IT, tourism, logistics, construction, and healthcare, particularly within its many free zones."
        },
        {
          ques: "Do universities in Dubai offer placement support to students?",
          ans: "Most universities provide comprehensive placement support services, including CV workshops, interview preparation, internship placements, and networking events to aid job searching."
        }
      ]
    },
  },

  spain: {
    name: "Spain",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in the Spain",
        bannerImg: "/images/countries/spain/banner.jpg",
        content:
          `Spain, a major economic force in Europe, is fast becoming a magnet for young,
          creative talent. Hundreds of start-ups and entrepreneurs are embarking on new
          ventures, contributing to thriving business sectors. With a more economical cost of
          living and abundant opportunities for sports and socialising, Spain presents itself as
          an ideal location for international education. This diverse European nation, situated
          on the Iberian Peninsula, boasts a rich history and vibrant culture. As a prime tourist
          destination, it offers everything from stunning Mediterranean beaches and dramatic
          mountainous landscapes to iconic cities such as Madrid and Barcelona.
          Furthermore, Spain's full membership of the Schengen Area facilitates seamless
          travel across much of the continent.
          `
      },
      features: {
        bgImg: '/images/countries/spain/map.png',
        mainImg: '/images/countries/spain/students.jpg',
        altText: 'spain',

        "points": [
          "Capital: Madrid",
          "Currency: Euro",
          "Languages: Spanish",
          "Main Cities: Barcelona, Valencia, Seville, Zaragoza, Malaga, Murcia, Palma, Las Palmas de Gran Canaria, Bilbao"
        ]

      },
      whyStudyIn: {
        title: "Why study in Spain",
        bgImg: "/images/countries/dubai/banner.jpg",
        description: `Pursuing an undergraduate or postgraduate degree in Spain significantly boosts your job prospects across Europe and internationally, providing you with a truly global education and perspective.<br><br>
                    Spain offers a notably more economical cost of living than many other popular European study destinations, being approximately 18% cheaper than Germany and over 32% less than France. Additionally, its efficient and reasonably priced public transport networks ensure affordable travel within cities.<br><br>
                    The Spanish higher education system is renowned for its broad and high-standard offerings, with universities consistently achieving global recognition. A wide array of diverse courses are available, often with English-taught programmes, particularly at Masters level.<br><br>
                    Studying in Spain enriches your CV, showcasing your adaptability, cross-cultural understanding, and a global outlook – highly valued attributes for future employers.
                                    `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3',
        points: [
          {
            title: "Spain provides a range of scholarships, grants, and financial aid options, including prestigious programmes like Erasmus Mundus and Fulbright",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "Globally recognised universities attract thousands of international students each year with flexible and high-quality academic programmes",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Affordable public university tuition fees typically range between €2,500 and €3,500 per year, making Spain a budget-friendly choice",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "Spain offers a high quality of life with a safe, student-friendly environment and modern public infrastructure",
            icon: "/images/countries/usa/icons/life.svg",
          },
          {
            title: "Strong career prospects through industry-aligned courses and growing employment opportunities after graduation",
            icon: "/images/countries/usa/icons/global-edu.png",
          },
          {
            title: "Multiple student visa options are available based on course duration, with straightforward application processes",
            icon: "/images/countries/usa/icons/search.svg",
          }
        ]

      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/spain/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "30 hours per week during the academic term",
          "40 hours per week during semester break and holidays",
          "1 year stay back"
        ]
      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>January / September</strong><br /> `,
        leftBackgroundImage: "/images/countries/spain/map.png",
        rightImage: {
          src: "/images/countries/spain/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "Why is Spain becoming a popular study destination for Indian students?",
          ans: "Spain offers high-quality education, a lower cost of living than many other European countries, a vibrant culture, and excellent job prospects after graduation."
        },
        {
          ques: "Is a degree from Spain recognised globally?",
          ans: "Yes, Spanish degrees, especially those from official university programmes, are recognised globally."
        },
        {
          ques: "Is Spain generally safe for international students?",
          ans: "Yes, Spain is considered one of the safest countries in the world, with a friendly and welcoming environment for international students."
        },
        {
          ques: "What are the main intake periods for Spanish universities?",
          ans: "Spain primarily has a Fall intake (September/October), which is the main intake with the most programmes, and a Spring intake (January/February), which has more limited options."
        },
        {
          ques: "How much are the tuition fees for international students at Spanish public universities?",
          ans: "International students, public university tuition fees typically range from €1,500 to €4,000 per year for Bachelors and €2,000 to €5,500 for Masters, MRes and PhD."
        },
        {
          ques: "What is the estimated cost of living in Spain for international students?",
          ans: "The average cost of living can range from approximately €400 to €900 per month, including accommodation, food, transport."
        },
        {
          ques: "What are some common scholarships available for Indian students in Spain?",
          ans: "Popular scholarships include the Erasmus Mundus Scholarship, Spanish Government Scholarships, Fulbright-Nehru Master's Scholarship, and various university-specific scholarships (e.g., UIC Barcelona Scholarship, Barcelona GSE Master Scholarship)."
        },
        {
          ques: "What is the typical processing time for a Spanish student visa for Indian students?",
          ans: "The processing time is typically around 5 weeks, but it can extend to 9 to 10 weeks in some cases. It's advisable to apply 2-3 months before travel."
        },
        {
          ques: "Do international students work part-time while studying in Spain?",
          ans: "Yes, international students on a valid student visa are generally allowed to work part-time for up to 30 hours per week during the academic term."
        },
        {
          ques: "Can students work full-time during university holidays?",
          ans: "Yes, during official university holidays and academic breaks (typically up to three months), students can work full-time without the weekly hour restrictions."
        },
        {
          ques: "What are the stay-back options for international students after graduation in Spain?",
          ans: "Graduates can apply for a \"Residency Permit for Job Search\" (Job Seeker Visa), allowing them to stay for up to 12 months to find employment or start a business."
        },
        {
          ques: "Is the Job Seeker Visa renewable?",
          ans: "The Job Seeker Visa itself is generally non-renewable. Its purpose is to facilitate the transition to a work and residence permit once employment is secured."
        },
        {
          ques: "What happens after I find a job with a Job Seeker Visa?",
          ans: "Once you secure a job offer, especially in a highly skilled position, you can apply to transition from the Job Seeker Visa to a work and residence permit."
        },
        {
          ques: "What are the common accommodation options for students in Spain?",
          ans: "Popular options include university halls of residence, shared apartments, and homestays with local families."
        },
        {
          ques: "Is there a fast-track visa initiative for students affected by visa restrictions from other countries (e.g., the US)?",
          ans: "Yes, Spain has launched \"EduBridge to Spain,\" a fast-track visa scheme aimed at admitting students, including Indian students, who might be impacted by visa restrictions in countries like the US. This programme aims to simplify the transfer of academic progress and prioritises student visa applications at Spanish consular offices."
        }
      ]

    },
  },

  hungary: {
    name: "Hungary",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in the Hungary",
        bannerImg: "/images/countries/hungary/banner.jpg",
        content:
          `Hungary, a captivating Central European nation, joined the European Union in 2004
          and the Schengen Area in 2007. This membership facilitates visa-free travel and
          strengthens economic ties across the continent. Known for its rich history, vibrant
          culture, and stunning architecture, particularly in its capital Budapest, Hungary offers
          a high quality of life with universal healthcare and tuition-free secondary education.
          Its export-oriented economy benefits from EU integration, attracting foreign
          investment and providing access to a vast single market.
          `
      },
      features: {
        bgImg: '/images/countries/hungary/map.png',
        mainImg: '/images/countries/hungary/students.jpg',
        altText: 'spain',

        "points": [
          "Capital: Budapest",
          "Official Language: Hungarian",
          "Currency: Euro",
          "Main Cities: Debrecen, Szeged, Miskolc, Eger, Pecs, Gyor"
        ]

      },
      whyStudyIn: {
        title: "Why study in Hungary",
        bgImg: "/images/countries/hungary/banner.jpg",
        description: `Hungary offers international students a compelling combination of academic
                      excellence and affordability. With a rich higher education history spanning over 650
                      years, its 65 institutions provide over 500 English, German, and French-taught
                      programmes, leading to globally recognised degrees. Living costs and tuition fees
                      are remarkably favourable compared to many competitors, ensuring accessibility.
                      Students benefit from a vibrant multicultural environment, a safe atmosphere, and
                      abundant historical and cultural experiences, making Hungary an outstanding choice
                      for a well-rounded academic journey.
                      `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3',
        points: [
          {
            title: "Many Hungarian universities offer joint degree programmes, allowing students to earn two internationally recognised degrees simultaneously, enhancing global career prospects",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "As per the QS World University Rankings 2026, 10 Hungarian universities have secured their places, reflecting Hungary’s growing reputation for academic excellence",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Students can gain valuable professional experience through Erasmus internships in Hungary, combining academic studies with practical work in a European environment",
            icon: "/images/countries/usa/icons/global-edu.png",
          },
          {
            title: "Numerous local and international companies in Hungary actively offer internship opportunities, providing hands-on industry exposure and strong professional networking",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "IELTS is often not mandatory, with alternative language qualifications accepted, and Hungary also maintains a high student visa approval rate",
            icon: "/images/countries/usa/icons/search.svg",
          },
          {
            title: "Excellent public transportation systems are available at discounted student rates, making travel within cities and across Hungary affordable and convenient",
            icon: "/images/countries/usa/icons/life.svg",
          }
        ]

      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/hungary/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "30 hours per week during studies",
          "Students can work full-time during academic breaks for a maximum of 90 days or 66 working days per year",
          "Stay back 9 months"
        ]

      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>February / September</strong><br /> `,
        leftBackgroundImage: "/images/countries/hungary/map.png",
        rightImage: {
          src: "/images/countries/hungary/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "What are the main advantages for Indian students choosing Hungary for higher education?",
          ans: "Hungary offers high-quality, globally recognized degrees at affordable tuition fees and living costs compared to many Western countries, along with a rich cultural experience in an EU and Schengen nation."
        },
        {
          ques: "Are there specific scholarship opportunities for Indian students in Hungary?",
          ans: "Yes, the most prominent is the Stipendium Hungaricum Scholarship Programme, which provides comprehensive coverage including tuition, accommodation, and a monthly stipend for eligible students."
        },
        {
          ques: "Is IELTS mandatory for Indian students applying to Hungarian universities?",
          ans: "Not always. While many universities accept IELTS, some waive the requirement if your previous education was in English (Medium of Instruction certificate), or they might conduct their own English proficiency tests or interviews."
        },
        {
          ques: "What are the most popular courses for Indian students in Hungary?",
          ans: "Engineering (especially Computer Science), Medicine (MBBS, Nursing and Physiotherapy), Business Administration (MBA), Information Technology, and various Humanities and Social Science programs are highly sought after by Indian students."
        },
        {
          ques: "What is the typical cost of living for an Indian student in Hungary?",
          ans: "On average, living expenses for Indian students in Hungary range from €400 to €700 per month, depending on the city and lifestyle, making it quite affordable."
        },
        {
          ques: "Can Indian students work part-time while studying in Hungary?",
          ans: "Yes, International students with a student residence permit can work up to 30 hours per week during the academic term and full-time (max 90 days/66 working days per year) during academic breaks."
        },
        {
          ques: "What are the post-study work opportunities for Indian graduates in Hungary?",
          ans: "After graduation, Indian students can apply for a \"study-to-work\" residence permit, allowing them to stay for an additional 9 months to find employment or start a business relevant to their studies."
        },
        {
          ques: "How is the Indian student community in Hungary?",
          ans: "Hungary has a growing and supportive Indian student community. Indian student associations exist to help newcomers with adaptation, offer academic guidance, and organize cultural events."
        },
        {
          ques: "Is Hungary a safe country for Indian international students?",
          ans: "Yes, Hungary is generally considered a safe country with low crime rates. The government prioritises the safety of residents and visitors, and major student cities are well-regarded for their security."
        },
        {
          ques: "What are the key visa requirements for Indian students applying to study in Hungary?",
          ans: "Essential documents include a valid passport, acceptance letter from a Hungarian university, SOP, LOR, proof of funds for tuition and living expenses, health insurance, proof of accommodation, and often a demonstration of English proficiency."
        },
        {
          ques: "What is the typical processing time for a Hungarian student visa from India?",
          ans: "The processing time for a Hungarian student visa from India usually ranges from 4 to 9 weeks after submitting all documents and attending the interview. It's advisable to apply well in advance of your course start date."
        },
        {
          ques: "Are Hungarian university degrees recognized in India and globally?",
          ans: "Yes, Hungarian university degrees are highly respected and widely recognised internationally, including in India, due to their adherence to the Bologna Process and European quality assurance standards."
        },
        {
          ques: "How is the connectivity from India to Hungary?",
          ans: "There are direct and connecting flights from major Indian cities like Delhi and Mumbai to Budapest, making travel relatively convenient and accessible for Indian students."
        }
      ]
    },
  },

  slovenia: {
    name: "Slovenia",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in the Slovenia",
        bannerImg: "/images/countries/slovenia/banner.jpg",
        content:
          `Slovenia, a captivating Central European nation, stands out for its unique blend of
          Alpine, Pannonian, Karst, and Mediterranean landscapes. As a safe, green country
          within the EU and Schengen Area, it offers high quality of life, universal healthcare,
          and accessible education. Its diverse terrain includes stunning mountains, ski
          resorts, and picturesque lakes like Bled with its iconic island church and medieval
          castle. The vibrant capital, Ljubljana, boasts a mix of Baroque and 20th-century
          architecture, reflecting a rich cultural tapestry. Slovenia's commitment to
          sustainability and charming natural beauty make it truly unforgettable.
          `
      },
      features: {
        bgImg: '/images/countries/slovenia/map.png',
        mainImg: '/images/countries/slovenia/students.jpg',
        altText: 'slovenia',

        "points": [
          "Capital: Ljubljana",
          "Currency: Euro",
          "Official Language: Slovene",
          "Main Cities: Maribor, Celje, Kranj, Koper, Velenje, Novo Mesto"
        ]

      },
      whyStudyIn: {
        title: "Why study in Slovenia",
        bgImg: "/images/countries/slovenia/banner.jpg",
        description: `Slovenia boasts incredibly diverse and beautiful natural landscapes, from the Julian Alps to the Adriatic coast, providing ample opportunities for outdoor activities. Its central location also ensures excellent, convenient connections for exploring other fascinating European countries.<br><br>

Students in Slovenia will find plenty to keep them engaged beyond academics. The cities, particularly Ljubljana and Maribor, offer a lively social scene with numerous clubs, bars, and student-organised parties, providing exciting opportunities to socialise and unwind.<br><br>

Slovenia offers a fantastic culinary experience, blending Central European, Mediterranean, and Balkan influences. Students can enjoy excellent quality, diverse food options, including traditional dishes and international cuisine, all while maintaining a student-friendly budget.<br><br>

While Slovene is the official language, international students won't need to master it for daily life or studies. Many university programmes are taught entirely in English, and English is widely spoken in major cities and tourist areas, making it easy to get around.<br><br>

Finding suitable accommodation in Slovenia is generally simple and cost-effective for international students. Options range from university dormitories and shared apartments to private rentals, all available at remarkably affordable prices compared to many other European study destinations.

                      `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3',
        points: [
          {
            title: "Slovenia offers significantly lower tuition fees and reasonable living expenses (around €400–€600 monthly), making it a budget-friendly study destination with available scholarships",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "Universities provide a wide range of science, technology, engineering, business, and health science programmes, many taught in English, overcoming language barriers",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Slovenian higher education is known for its strong research-driven and innovation-focused approach, ensuring a cutting-edge learning experience",
            icon: "/images/countries/usa/icons/global-edu.png",
          },
          {
            title: "Students benefit from various discounts on public transport, food, and cultural events, further reducing overall living costs",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "Some Slovenian universities may offer IELTS waivers for students who have completed their previous education in English",
            icon: "/images/countries/usa/icons/search.svg",
          }
        ]


      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/slovenia/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "20 hours per week during studies",
          "International students typically cannot work full-time (40 hours) during holidays on a student permit",
          "After studying in Slovenia, international students must first secure a job offer. They can then apply for a \"Single Permit\", which combines residence and work rights and is directly tied to their employment"
        ]

      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>January / September</strong><br /> `,
        leftBackgroundImage: "/images/countries/slovenia/map.png",
        rightImage: {
          src: "/images/countries/slovenia/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "Why should Indian students consider Slovenia for higher education?",
          ans: "Slovenia offers quality education with recognized degrees, significantly lower tuition fees and living costs than many Western European countries, and a safe, beautiful environment within the EU and Schengen Area."
        },
        {
          ques: "What are the typical tuition fees for international students in Slovenia?",
          ans: "Tuition fees generally range from €2,000–€11,000 per year for Bachelors and Masters and €2,000–€6,000 for PhD programs, making it quite affordable."
        },
        {
          ques: "What are the estimated monthly living costs for an Indian student in Slovenia?",
          ans: "Indian students can expect to budget between €400 to €600 per month, covering accommodation, food (benefiting from subsidised student meals), transport, and other necessities."
        },
        {
          ques: "Are there scholarships available for Indian students in Slovenia?",
          ans: "Yes, Slovenia offers specific scholarships for Indian students, such as those provided by CMEPIUS, focusing on short-term mobility programs, alongside other university-specific aid."
        },
        {
          ques: "Is it mandatory for Indian students to clear IELTS to study in Slovenia?",
          ans: "Not always. While widely accepted, some Slovenian universities may waive IELTS if your previous education was in English (with a Medium of Instruction certificate), or they might conduct their own English proficiency assessments."
        },
        {
          ques: "What are the popular fields of study for Indian students in Slovenia?",
          ans: "Common choices include Computer Science, Business Administration, Engineering, Medicine, Nursing, Humanities, and Social Sciences, with many programs taught in English."
        },
        {
          ques: "Can Indian students work part-time while studying in Slovenia?",
          ans: "Yes, non-EU/EEA students can work part-time up to 20 hours per week through the Student Work system, which helps manage administrative aspects."
        },
        {
          ques: "Is there a \"stay back\" or post-study work visa for Indian graduates in Slovenia?",
          ans: "Slovenia does not offer a dedicated job-seeker visa. To stay and work after graduation, you must first secure an employment contract and then apply for a \"Single Permit,\" which combines residence and work rights."
        },
        {
          ques: "What are the main admission requirements for Indian students applying to Slovenian universities?",
          ans: "Typically, applicants need all academic documents, proof of English proficiency (MOI, IELTS, TOEFL or PTE) a valid passport, SOP, LOR and financial means."
        },
        {
          ques: "What are the main intake periods for admissions in Slovenian universities?",
          ans: "Slovenia primarily has a Fall/Autumn intake (October start) with applications usually from February-March. A secondary Spring/Winter intake (February start) is also available but offers fewer programs."
        }
      ]

    },
  },

  norway: {
    name: "Norway",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in the Norway",
        bannerImg: "/images/countries/norway/banner.jpg",
        content:
          `Norway, a stunning Nordic and Scandinavian nation, is globally acclaimed for its
          dramatic fjords, expansive natural beauty, and remarkably high quality of life. As a
          Schengen Area member and non-EU country, it offers seamless travel and strong
          international ties. Norway champions a robust welfare state, providing universal
          healthcare and comprehensive social security. Consistently topping global happiness
          and development indices, it fosters an exceptional work-life balance and deep
          appreciation for outdoor living. Its prosperous economy, significantly driven by vast
          petroleum and natural gas reserves, underpins this well-being and commitment to
          societal welfare.
          `
      },
      features: {
        bgImg: '/images/countries/norway/map.png',
        mainImg: '/images/countries/norway/students.jpg',
        altText: 'norway',

        "points": [
          "Capital: Oslo",
          "Currency: Euro",
          "Official Language: Norwegian",
          "Main Cities: Bergen, Trondheim, Stavanger, Drammen, Kristiansand, Tromsø"
        ]

      },
      whyStudyIn: {
        title: "Why study in Norway",
        bgImg: "/images/countries/norway/banner.jpg",
        description: `Norway's higher education is globally renowned for its modern facilities,
                    ground-breaking research, and cutting-edge technologies. Institutions, some
                    affiliated with Nobel Prize laureates, maintain high academic standards and
                    innovative teaching, fostering close student-lecturer relationships. Comprising
                    diverse public and private universities, many rank highly internationally (QS, THE,
                    ARWU) and offer numerous programmes taught in English. This commitment to
                    research-driven excellence and accessible learning makes Norway a compelling
                    study destination.
                      `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4',
        points: [
          {
            title: "Studying in Norway means investing in your future, with institutions renowned for quality education and strong focus on students’ overall experience and development.",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "Norway consistently ranks among the world’s happiest countries, offering a high quality of life and exceptional well-being.",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "As a founding member of the United Nations, Norway has a long-standing global influence, with its Foreign Minister serving as the first UN Secretary-General.",
            icon: "/images/countries/usa/icons/globe.svg",
          },
          {
            title: "Historically, many public universities in Norway did not charge tuition fees for international students, making it financially attractive despite recent changes.",
            icon: "/images/countries/usa/icons/cash.svg",
          },
          {
            title: "Norwegian institutions offer globally recognised degrees with modern facilities, innovative teaching methods, and strong academic standards.",
            icon: "/images/countries/usa/icons/search.svg",
          },
          {
            title: "A wide range of university programmes are taught in English, reducing language barriers and supporting smooth integration for Indian students.",
            icon: "/images/countries/usa/icons/connectivity.svg",
          },
          {
            title: "Norway prioritises student well-being with high safety standards, low crime rates, and a strong culture of outdoor and healthy living.",
            icon: "/images/countries/usa/icons/brain.svg",
          },
          {
            title: "Students can explore Norway’s breathtaking fjords, mountains, and Northern Lights, enjoying world-class opportunities for outdoor adventures.",
            icon: "/images/countries/usa/icons/loop.svg",
          }
        ]
      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/norway/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "20 hours per week during the semester",
          "40 hours during vacation and university holidays",
          "The primary way to stay and work after studying in Norway is by securing a job offer from a Norwegian employer, allowing transition to a Skilled Worker Permit."
        ]


      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>August</strong><br /> `,
        leftBackgroundImage: "/images/countries/norway/map.png",
        rightImage: {
          src: "/images/countries/norway/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },
      faqItems: [
        {
          ques: "Why should Indian students choose Norway for higher education?",
          ans: "Norway offers world-class education with high academic standards, a safe and scenic environment, and innovative teaching methods, providing a unique European study experience."
        },
        {
          ques: "Are there tuition fees for Indian students in Norway?",
          ans: "Many Norwegian public universities are tuition free and few have introduced tuition fees for international students from 2023 onwards. Some specialised or private institutions always charged fees."
        },
        {
          ques: "What are the estimated living costs for an Indian student in Norway?",
          ans: "Living costs are generally ranging from NOK 9500 - 15000 per month (€780 - €1,260 approx.), depending on the city and lifestyle. This includes accommodation, food, and transport."
        },
        {
          ques: "What are the main intake periods for admissions in Norway?",
          ans: "Norway primarily has one main intake, the Autumn Intake, with studies starting in August/September. Application deadlines for non-EU/EEA students typically fall between December."
        },
        {
          ques: "Are English proficiency tests like IELTS mandatory for Indian students?",
          ans: "Yes, most Norwegian universities require proof of English proficiency (e.g., IELTS Academic score of 6.0-7.0 or TOEFL or PTE). Some may waive it if your previous degree was taught entirely in English."
        },
        {
          ques: "What kind of academic programs are popular for Indian students in Norway?",
          ans: "Popular fields include Engineering, IT, Natural Sciences, Business, Environmental Studies, and Social Sciences, with numerous Masters and PhD programs offered in English."
        },
        {
          ques: "Can Indian students work part-time while pursuing their studies?",
          ans: "Yes, non-EU/EEA students holding a valid study permit are automatically allowed to work up to 20 hours per week during the semester and full-time during official university holidays."
        },
        {
          ques: "Is there a \"stay back\" or post-study work visa for Indian graduates in Norway?",
          ans: "Norway does not offer a general job-seeker visa. To stay and work post-graduation, you must first secure a skilled job offer and then apply for a \"Skilled Worker Permit\" (residence and work permit)."
        },
        {
          ques: "What are the key documents required for a Norwegian student visa from India?",
          ans: "Documents include an acceptance letter from a Norwegian institution, proof of sufficient funds SOP, LOR, proof of accommodation, valid passport, and academic transcripts."
        },
        {
          ques: "What are the accommodation options for international students in Norway?",
          ans: "Student housing offered by student welfare organisations is the most common and affordable. Private rentals and shared apartments are also options, but often more expensive."
        },
        {
          ques: "Are Norwegian degrees recognized internationally and in India?",
          ans: "Yes, Norwegian degrees are highly respected and internationally recognised, including in India, due to Norway's participation in the Bologna Process and its high academic standards."
        },
        {
          ques: "Does Norway offer scholarships for Indian students?",
          ans: "While scholarships are competitive, several are available. These include university-specific scholarships (e.g., University of Oslo, NTNU), external scholarships, and sometimes, government schemes that cover living costs for specific programs or collaborations."
        }
      ]


    },
  },


  slovakia: {
    name: "Slovakia",
    image: "/images/home/countries/uk.jpg",
    details: {
      intro: {
        headline: "Study in the Slovakia",
        bannerImg: "/images/countries/slovakia/banner.jpg",
        content:
          `Slovakia, a Central European gem, is an EU and Schengen member renowned 
          for its stunning natural landscapes, including the majestic Tatra Mountains,
           and its rich historical heritage, boasting the highest density of castles in Europe.
            It offers an affordable cost of living compared to Western Europe and a safe, welcoming environment.
             With a stable economy and growing industries such as automotive manufacturing, electronics, and information technology,
              Slovakia presents an intriguing blend of culture, nature, and 
          developing opportunities for students, professionals, and investors alike.
          `
      },
      features: {
        bgImg: '/images/countries/slovakia/map.png',
        mainImg: '/images/countries/slovakia/students.jpg',
        altText: 'norway',

        "points": [
          "Capital: Bratislava",
          "Official Language: Slovak",
          "Currency: Euro",
          "Main Cities: Kosice, Presov, Zilina, Nitra, Banska Bystrica, Trnava"
        ]

      },
      whyStudyIn: {
        title: "Why study in Slovakia",
        bgImg: "/images/countries/slovakia/banner.jpg",
        description: `Slovakia offers Indian students an attractive blend of high-quality, English-taught
                  programmes and affordable tuition fees. Its central European location allows easy
                  travel, while reasonable living costs and a safe, welcoming environment ensure a
                  rewarding academic and cultural experience.
                      `,
        gridClass: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3',
        points: [
          {
            title: "High-quality, affordable education with internationally recognised degrees, enhancing global career prospects.",
            icon: "/images/countries/usa/icons/scholar.svg",
          },
          {
            title: "English-taught programmes widely available, ensuring easy academic and social integration for students.",
            icon: "/images/countries/usa/icons/cash.svg",
          },
          {
            title: "Central European location provides excellent, easy travel opportunities across the entire Schengen Area.",
            icon: "/images/countries/usa/icons/world.svg",
          },
          {
            title: "Lower living costs compared to Western Europe, making it a budget-friendly study destination.",
            icon: "/images/countries/usa/icons/cash-in-bag.svg",
          },
          {
            title: "Safe, welcoming environment with a rich culture, perfect for a rewarding international student experience.",
            icon: "/images/countries/usa/icons/connectivity.svg",
          }
        ]

      },
      workRights: {
        title: "Workrights and Stayback",
        bgImage: "/images/countries/slovakia/workrights.jpg",
        altText: "Work rights and stay back",
        points: [
          "20 hours during studies",
          "40 hours during vacation and university holidays",
          "9 months stay back",
          "Study permit time counts as half towards Slovakia's 5-year permanent residence requirement. Job-seeking and subsequent employment permits count fully."
        ]
      },

      intakes: {
        title: "Intakes",
        descriptionHtml: `
        <strong>February / September</strong><br /> `,
        leftBackgroundImage: "/images/countries/slovakia/map.png",
        rightImage: {
          src: "/images/countries/slovakia/office.jpg",
          alt: "Student intake information",
        },
        sectionBg: "#F8F3F5",
      },

      faqItems: [
        {
          ques: "Why should Indian students consider studying in Slovakia?",
          ans: "Slovakia offers a combination of affordable education, quality English-taught programmes, a safe environment, and a central European location for easy travel, making it an appealing choice."
        },
        {
          ques: "Are there tuition fees for Indian students at Slovak universities?",
          ans: "Yes, unlike in the past, most public universities in Slovakia now charge tuition fees for non-EU/EEA students. Fees vary by programme and institution,"
        },
        {
          ques: "What are the typical living expenses for an Indian student in Slovakia?",
          ans: "Monthly living costs, including accommodation, food, and transport, can range from €350 to €650, making it more affordable than many Western European countries. Bratislava is generally more expensive."
        },
        {
          ques: "Are English-taught programmes widely available in Slovakia?",
          ans: "Yes, many Slovak universities, particularly for Bachelors, Masters and PhD levels, offer a wide range of academic programmes completely taught in English, simplifying the language barrier for Indian students."
        },
        {
          ques: "Can Indian students work part-time while studying in Slovakia?",
          ans: "Yes, university students with a valid residence permit can work up to 80 hours per month during their studies and full-time (no hourly restriction) during official university holidays."
        },
        {
          ques: "What are the \"stay back\" options for Indian graduates in Slovakia?",
          ans: "Indian graduates can extend their residence permit for up to 9 months for job searching or starting a business. Upon securing a job, they can transition to a \"Single Permit\" for employment."
        },
        {
          ques: "How does Slovakia's location benefit Indian students?",
          ans: "As an EU and Schengen Area member, Slovakia offers easy and affordable travel access to explore numerous European countries without additional visa requirements, enriching cultural experience."
        },
        {
          ques: "What are the general admission requirements for Indian students?",
          ans: "Typically, applicants need recognised academic qualifications (e.g., higher secondary for Bachelor's), proof of English proficiency (like IELTS/TOEFL), a valid passport, and proof of financial means. Document legalisation may be required."
        },
        {
          ques: "What are the main intake periods for admissions in Slovakia?",
          ans: "The primary intake is the Autumn Intake (September/October start), with applications usually opening from March to July. A smaller Spring Intake (February start) is also available."
        },
        {
          ques: "Are scholarships available for Indian students in Slovakia?",
          ans: "Yes, various scholarships exist, including the National Scholarship Programme of the Slovak Republic, government scholarships for specific development aid, and some university-specific grants. These typically cover living costs or contribute to fees."
        }
      ]
    },
  },


}
