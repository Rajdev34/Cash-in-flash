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
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm text-2xl">
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
