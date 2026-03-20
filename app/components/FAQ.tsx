// "use client";

// import { useState } from "react";

// const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="relative w-full max-w-[330px] sm:max-w-none h-auto min-h-[77px] bg-white border border-[#E0EBE780] rounded-[20px] overflow-hidden lg:w-full lg:max-w-[636px] lg:h-[66px] mx-auto lg:mx-0">

//             <div className="absolute w-[286px] h-auto min-h-[37px] top-[20px] left-[22px] flex items-center justify-between gap-[15px] sm:gap-[25px] lg:w-[586px] lg:h-[64px] lg:left-[25px] lg:top-[0px]">

//                 <span className="flex-1 font-['Poppins'] font-medium text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-[#141A1F]">
//                     {question}
//                 </span>

//                 <svg
//                     className="w-[16px] h-[16px] shrink-0"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path
//                         d="M4 6L8 10L12 6"
//                         stroke="#141A1F"
//                         strokeWidth="1.33333"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                 </svg>

//             </div>

//         </div>
//     );
// };

// export default function FAQ() {
//     const faqs = [
//         {
//             question: "Can I qualify for a payday loan with bad credit?",
//             answer: "Yes, many of our lenders focus on your current ability to repay rather than just your credit score. We work with specialized providers who offer options for individuals with various credit backgrounds."
//         },
//         {
//             question: "What can I use a payday loan for?",
//             answer: "Payday loans are designed for short-term, urgent expenses such as medical bills, car repairs, or utility payments. They provide quick access to funds when you need them most."
//         },
//         {
//             question: "How much can I borrow?",
//             answer: "Borrowing limits vary by state and individual circumstances, but typically range from $100 up to $1,000 or more depending on your income and lender requirements."
//         },
//         {
//             question: "How do I repay my payday loan?",
//             answer: "Repayment is usually automated via direct debit from your bank account on your next payday. Some lenders also offer flexible repayment schedules if needed."
//         },
//         {
//             question: "Is the application process complicated?",
//             answer: "Not at all. Our streamlined online form takes just a few minutes to complete. Most customers receive an instant decision and can get funds as soon as the same day."
//         },
//         {
//             question: "Can I get a Payday Loan without a checking account?",
//             answer: "Most lenders require a valid checking account for fund deposition and repayment, but some may offer alternative methods like prepaid cards or in-store pickup. Contact us for specific details."
//         }
//     ];

//     return (
//         <section className="w-full h-auto lg:h-[660px] bg-white py-16 lg:py-24 overflow-hidden relative">

//             <div className="flex flex-col w-full max-w-[330px] sm:max-w-screen-xl gap-[41px] mx-auto px-4
//             lg:relative lg:h-[476px] lg:mt-[32px] lg:flex-row lg:gap-[41px] lg:justify-between z-10">

//                 <div className="flex flex-col w-full max-w-[330px] h-auto gap-[30px] opacity-100 
//                         lg:w-[523px] lg:h-[282px] lg:gap-[45px] mx-auto lg:mx-0">
//                     <div className="flex flex-col w-full max-w-[330px] h-auto gap-[10px] lg:w-[508px] lg:h-[85px] lg:gap-[18px]">

//                         <h2
//                             className="
//                             w-full max-w-[330px] h-auto
//                             text-[#141A1F]
//                             font-['Tilt_Warp'] font-normal
//                             text-[32px] sm:text-[36px] leading-[38px] sm:leading-[41px]
//                             lg:text-[48px] lg:leading-[51px]
//                             lg:max-w-[413px] lg:h-[47px]
//                             "
//                         >
//                             That Says It{" "}

//                             <span className="relative inline-block">
//                                 <span className="bg-gradient-to-r from-[#15C15D] to-[#13EC6D] bg-clip-text text-transparent">
//                                     All
//                                 </span>

//                                 <svg
//                                     className="absolute -bottom-2 left-0 w-full h-4 text-[#15C15D] opacity-60"
//                                     viewBox="0 0 100 10"
//                                     preserveAspectRatio="none"
//                                 >
//                                     <path
//                                         d="M0,5 Q50,12 100,5"
//                                         stroke="currentColor"
//                                         strokeWidth="8"
//                                         fill="transparent"
//                                         strokeLinecap="round"
//                                     />
//                                 </svg>
//                             </span>
//                         </h2>

//                         <p
//                             className="
//                             w-full max-w-[330px] h-auto
//                             text-[#67737E]
//                             font-['Poppins'] font-normal
//                             text-[15px] sm:text-[16px] leading-[21px]
//                             lg:max-w-[508px] lg:h-[20px]
//                             lg:font-medium lg:text-[18px] lg:leading-[26px]
//                             "
//                         >
//                             Have questions? We've got answers.
//                         </p>

//                     </div>
//                     {/* Contact Support Card */}
//                     <div className="relative w-full max-w-[330px] h-[132px] bg-[#F0F9F4] border border-[#15C15D]/10 rounded-[28px] opacity-100 lg:max-w-[523px] lg:h-[152px]">

//                         <div className="absolute w-[48px] h-[48px] top-[24px] left-[24px] bg-[#27B07D33] rounded-full flex items-center justify-center text-xl shadow-sm lg:top-[32px] lg:left-[32px]">
//                             🤔
//                         </div>

//                         <h3 className="absolute w-auto max-w-[168px] h-auto top-[26px] left-[88px] text-[#141A1F] font-['Poppins'] font-semibold text-[15px] sm:text-[16px] leading-[24px] lg:top-[34px] lg:left-[96px]">
//                             Still have questions?
//                         </h3>

//                         <p className="absolute w-auto max-w-[130px] h-auto top-[50px] left-[88px] text-[#67737E] font-['Poppins'] font-normal text-[14px] leading-[20px] lg:top-[58px] lg:left-[96px]">
//                             We're here to help
//                         </p>

//                         <a
//                             href="#"
//                             className="absolute w-auto h-[24px] top-[84px] left-[24px] flex items-center text-[#15C15D] lg:top-[96px] lg:left-[32px]"
//                         >
//                             <span className="relative w-auto h-auto font-['Poppins'] font-medium text-[16px] leading-[24px]">
//                                 Contact Support
//                             </span>

//                             <span className="relative ml-2 w-[16px] h-[24px] flex items-center"><svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M3.88801 8.7041L8.52801 3.6321V5.0401L3.88801 0.000101089H6.36801L10.08 3.9041V4.7681L6.36801 8.7041H3.88801ZM1.41859e-05 5.2801V3.4241H8.40001V5.2801H1.41859e-05Z" fill="#27B07D" />
//                             </svg>
//                             </span>
//                         </a>

//                     </div>
//                 </div>

//                 {/* Right Column: Accordion */}
//                 <div className="flex flex-col w-full max-w-[330px] sm:max-w-none h-auto gap-[16px] opacity-100 lg:w-[636px] lg:h-[476px] mx-auto lg:mx-0">
//                     {faqs.map((faq, index) => (
//                         <FAQItem key={index} {...faq} />
//                     ))}
//                 </div>
//             </div>

//             {/* Decorative Blur Backgrounds */}
//             <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#15C15D]/5 rounded-full blur-[120px] pointer-events-none" />
//             <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#15C15D]/5 rounded-full blur-[110px] pointer-events-none" />
//         </section>
//     );
// }
"use client";

import { useState } from "react";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-[20px] shadow-sm mb-4 overflow-hidden border border-gray-100 transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
                <span className="text-[#052116] font-bold text-lg md:text-xl pr-8">
                    {question}
                </span>
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-8 pb-6 text-gray-600 text-lg leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default function FAQ() {
    const faqs = [
        {
            question: "Can I qualify for a payday loan with bad credit?",
            answer: "Yes, many of our lenders focus on your current ability to repay rather than just your credit score. We work with specialized providers who offer options for individuals with various credit backgrounds."
        },
        {
            question: "What can I use a payday loan for?",
            answer: "Payday loans are designed for short-term, urgent expenses such as medical bills, car repairs, or utility payments. They provide quick access to funds when you need them most."
        },
        {
            question: "How much can I borrow?",
            answer: "Borrowing limits vary by state and individual circumstances, but typically range from $100 up to $1,000 or more depending on your income and lender requirements."
        },
        {
            question: "How do I repay my payday loan?",
            answer: "Repayment is usually automated via direct debit from your bank account on your next payday. Some lenders also offer flexible repayment schedules if needed."
        },
        {
            question: "Is the application process complicated?",
            answer: "Not at all. Our streamlined online form takes just a few minutes to complete. Most customers receive an instant decision and can get funds as soon as the same day."
        },
        {
            question: "Can I get a Payday Loan without a checking account?",
            answer: "Most lenders require a valid checking account for fund deposition and repayment, but some may offer alternative methods like prepaid cards or in-store pickup. Contact us for specific details."
        }
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24 overflow-hidden relative">
            <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

                {/* Left Column: Heading & Support */}
                <div>
                    <h2 className="text-[#052116] text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                        That Says It <span className="relative inline-block">
                            <span className="text-[#15C15D]">All</span>
                            <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#15C15D] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0,5 Q50,12 100,5" stroke="currentColor" strokeWidth="8" fill="transparent" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-[#6B7280] text-xl font-medium mb-12">
                        Have questions? We've got answers.
                    </p>

                    {/* Contact Support Card */}
                    <div className="bg-[#F0F9F4] p-10 rounded-[32px] border border-[#15C15D]/10 max-w-[450px]">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-[#27B07D33] rounded-full flex items-center justify-center shadow-sm text-2xl">
                                🤔
                            </div>
                            <div>
                                <h3 className="text-[#052116] font-extrabold text-xl">Still have questions?</h3>
                                <p className="text-gray-500 font-medium">We're here to help</p>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[#15C15D] font-bold text-lg hover:gap-4 transition-all"
                        >
                            Contact Support <span>→</span>
                        </a>
                    </div>
                </div>

                {/* Right Column: Accordion */}
                <div className="flex flex-col">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </div>
            </div>

            {/* Decorative Blur Backgrounds */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#15C15D]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-[#15C15D]/5 rounded-full blur-[110px] pointer-events-none" />
        </section>
    );
}
