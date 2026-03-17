"use client";

import { useState } from "react";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-[330px] h-[77px] bg-white border border-[#E0EBE780] rounded-[20px] overflow-hidden md:w-[636px] md:h-[66px]">

            <div className="absolute w-[286px] h-[37px] top-[20px] left-[22px] flex items-center justify-between gap-[25px] md:w-[586px] md:h-[64px] md:left-[25px] md:top-[0px]">

                <span className="w-[245px] h-[37px] font-['Poppins'] font-medium text-[16px] leading-[24px] text-[#141A1F]">
                {question}
                </span>

                <svg
                className="w-[16px] h-[16px]"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M4 6L8 10L12 6"
                    stroke="#141A1F"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>

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
      <section className="w-full h-auto md:h-[660px] bg-white py-16 md:py-24 overflow-hidden relative">

        <div className="flex flex-col w-[330px] gap-[41px] mx-auto
            md:absolute md:w-[1200px] md:h-[476px] md:top-[128px] md:left-[120px] md:flex-row md:gap-[41px] z-10">

              <div className="flex flex-col w-[330px] h-[234px] gap-[30px] opacity-100 
                        md:w-[523px] md:h-[282px] md:gap-[45px]">
                    <div className="flex flex-col w-[330px] h-[72px] gap-[10px] md:flex md:flex-col md:w-[508px]    md:h-[85px] md:gap-[18px]">

                        <h2
                            className="
                            w-[330px] h-[39px]
                            text-[#141A1F]
                            font-['Tilt_Warp'] font-normal
                            text-[36px] leading-[41px]
                            md:text-[48px] md:leading-[51px]
                            md:w-[413px] md:h-[47px]
                            "
                        >
                            That Says It{" "}

                            <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-[#15C15D] to-[#13EC6D] bg-clip-text text-transparent">
                                All
                            </span>

                            <svg
                                className="absolute -bottom-2 left-0 w-full h-4 text-[#15C15D] opacity-60"
                                viewBox="0 0 100 10"
                                preserveAspectRatio="none"
                            >
                                <path
                                d="M0,5 Q50,12 100,5"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                strokeLinecap="round"
                                />
                            </svg>
                            </span>
                        </h2>

                        <p
                            className="
                            w-[330px] h-[23px]
                            text-[#67737E]
                            font-['Poppins'] font-normal
                            text-[16px] leading-[21px]
                            md:w-[508px] md:h-[20px]
                            md:font-medium md:text-[18px] md:leading-[26px]
                            "
                        >
                            Have questions? We've got answers.
                        </p>

                    </div>
                    {/* Contact Support Card */}
                   <div className="relative w-[330px] h-[132px] bg-[#F0F9F4] border border-[#15C15D]/10 rounded-[28px] opacity-100 md:w-[523px] md:h-[152px]">

                        <div className="absolute w-[48px] h-[48px] top-[24px] left-[24px] bg-[#27B07D33] rounded-full flex items-center justify-center text-xl shadow-sm md:top-[32px] md:left-[32px]">
                            🤔
                        </div>

                        <h3 className="absolute w-[168px] h-[24px] top-[26px] left-[88px] text-[#141A1F] font-['Poppins'] font-semibold text-[16px] leading-[24px] md:top-[34px] md:left-[96px]">
                            Still have questions?
                        </h3>

                        <p className="absolute w-[130px] h-[20px] top-[50px] left-[88px] text-[#67737E] font-['Poppins'] font-normal text-[14px] leading-[20px] md:top-[58px] md:left-[96px]">
                            We're here to help
                        </p>

                        <a
                            href="#"
                            className="absolute w-[149px] h-[24px] top-[84px] left-[24px] flex items-center text-[#15C15D] md:top-[96px] md:left-[32px]"
                        >
                            <span className=" absolute w-[136px] h-[17px] font-['Poppins'] font-medium text-[16px] leading-[24px]">
                            Contact Support
                            </span>

                                <span className="absolute left-[150px] md:left-[152px] top-[11px] w-[16px] h-[24px]"><svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.88801 8.7041L8.52801 3.6321V5.0401L3.88801 0.000101089H6.36801L10.08 3.9041V4.7681L6.36801 8.7041H3.88801ZM1.41859e-05 5.2801V3.4241H8.40001V5.2801H1.41859e-05Z" fill="#27B07D"/>
                                    </svg>
                                </span>
                        </a>

                    </div>
                </div>

                {/* Right Column: Accordion */}
                <div className="flex flex-col w-[330px] h-[542px] gap-[16px] opacity-100 md:w-[636px] md:h-[476px]">
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
