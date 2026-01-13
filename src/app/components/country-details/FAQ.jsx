"use client"

import { useState } from "react"
import { FiPlus, FiMinus } from "react-icons/fi"
import { MdPlayArrow } from "react-icons/md";

export default function FAQ() {

    const faqItems = [
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
    ]


    return (
        <section className="w-full  bg-white py-12 lg:py-20 xl:py-24 2xl:py-28 px-4">
            <div className=" lg:max-w-10/12 max-w-11/12 mx-auto">
                {/* Title */}
                <h2 className="text-center heading font-semibold  mb-10 2xl:mb-14">
                    Frequently Asked Questions
                </h2>

                {/* Accordion */}
                <div className="space-y-6 lg:pt-8">
                    {faqItems.map((item, index) => (
                        <FaqItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}


function FaqItem({ item, index }) {

    const [isOpened, setIsOpened] = useState(false)

    return (
        <div key={index} className="border  flex flex-col  px-5  w-full rounded-md   border-black/15 ">

            <div onClick={() => setIsOpened(!isOpened)} className=" flex py-4  justify-between  w-full cursor-pointer ">
                <div

                    className="w-full flex items-start gap-1 lg:gap-2 text-left"
                >
                    {/* Number */}
                    <span className="text-black max-md:font-semibold font-medium lg:text-xl text-lg 2xl:text-2xl">
                        {index + 1}.
                    </span>

                    {/* Question */}
                    <span className="lg:text-xl max-md:font-semibold lg:text-lg 2xl:text-2xl font-medium text-black flex-1">
                        {item.ques}
                    </span>

                </div>

                {/* Icon */}
                <div className="ml-auto">
                  <MdPlayArrow className={`text-xl mt-1 ${isOpened ? ' opacity-0' : ''} `} />
                </div>

            </div>

            {/* Answer */}
            <div
                className={`overflow-hidden   transition-all duration-700 ease-in-out ${isOpened ? "max-h-56 " : "max-h-0"
                    }`}
            >
                <p className=" pb-3 max-sm:pl-4 xl:max-w-11/12  md:text-lg  2xl:text-xl text-[#363636] lg:leading-8 2xl:pr-8">
                    {item.ans}
                </p>
            </div>
        </div>
    )
}

