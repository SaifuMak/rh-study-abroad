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
        bannerImg: "/images/banners/uk.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Quis ipsum suspendisse ultrices gravida.",
        "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        "Curabitur non nulla sit amet nisl tempus convallis."
      ]
    }
  },
  canada: {
    name: "Canada",
    image: "/images/home/countries/canada.jpg",
    details: {
      intro: {
        headline: "Study in Canada",
        bannerImg: "/images/banners/canada.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Vivamus magna justo, lacinia eget consectetur sed.",
        "Pellentesque in ipsum id orci porta dapibus.",
        "Donec sollicitudin molestie malesuada."
      ]
    }
  },
  australia: {
    name: "Australia",
    image: "/images/home/countries/australia.jpg",
    details: {
      intro: {
        headline: "Study in Australia",
        bannerImg: "/images/banners/australia.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Praesent sapien massa, convallis a pellentesque nec.",
        "Vestibulum ac diam sit amet quam vehicula elementum.",
        "Curabitur aliquet quam id dui posuere blandit."
      ]
    }
  },
  'new-zealand': {
    name: "New Zealand",
    image: "/images/home/countries/new-zealand.jpg",
    details: {
      intro: {
        headline: "Study in New Zealand",
        bannerImg: "/images/banners/new-zealand.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Nulla quis lorem ut libero malesuada feugiat.",
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.",
        "Sed porttitor lectus nibh."
      ]
    }
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
        headline: "Study in Sweden",
        bannerImg: "/images/banners/sweden.jpg",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus."
      },
      features: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Curabitur non nulla sit amet nisl tempus convallis.",
        "Mauris blandit aliquet elit.",
        "Vivamus magna justo, lacinia eget consectetur sed."
      ]
    }
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
