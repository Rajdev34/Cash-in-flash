"use client";

import Image from "next/image";

const ArticleCard = ({ image, title }: { image: string; title: string }) => (
    <div className="flex flex-col gap-4 group cursor-pointer">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
            />
        </div>
        <p className="text-[#4B5563] text-lg font-medium leading-relaxed transition-colors group-hover:text-[#052116]">
            {title}
        </p>
    </div>
);

export default function FinancialEducation() {
    const articles = [
        {
            image: "/images/image9.jpg",
            title: "Secured loans: What they are, how they work, and when to use them"
        },
        {
            image: "/images/image10.jpg",
            title: "How to pay off a loan early: 7 smart ways to save on interest"
        },
        {
            image: "/images/image11.jpg",
            title: "How to get a personal loan"
        }
    ];

    return (
        <section className="w-full bg-white py-24 overflow-hidden relative">
            <div className="max-w-[1240px] mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-[800px] mx-auto mb-12 md:mb-16">
                    <h2 className="text-[#052116] text-[32px] sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
                        Get <span className="relative inline-block">
                            <span className="text-[#15C15D]">Smarter</span>
                            <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-[#15C15D]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0,5 Q50,12 100,5" stroke="currentColor" strokeWidth="6" fill="transparent" strokeLinecap="round" />
                            </svg>
                        </span> With<br />
                        Your Money.
                    </h2>
                    <p className="text-[#6B7280] text-sm md:text-xl font-medium leading-relaxed max-w-[650px] mx-auto px-4 md:px-0">
                        Stop guessing with your money and start making it work harder through smart, actionable strategies.
                    </p>
                </div>

                {/* Article Grid / Mobile Carousel View */}
                <div className="relative mb-12 md:mb-16">
                    {/* Background Blob for Mobile */}
                    <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#15C15D]/10 rounded-full blur-[60px] z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
                        {/* Mobile View: Show middle article */}
                        <div className="md:hidden">
                            <ArticleCard {...articles[1]} />
                        </div>

                        {/* Desktop View: Show all articles */}
                        {articles.map((article, index) => (
                            <div key={index} className="hidden md:block">
                                <ArticleCard {...article} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-12">
                    <div className="w-8 md:w-6 h-2 md:h-2 bg-[#15C15D] rounded-full" />
                    <div className="w-2 md:w-2 h-2 md:h-2 border border-black rounded-full" />
                    <div className="w-2 md:w-2 h-2 md:h-2 border border-black rounded-full" />
                </div>

                {/* CTA Button */}
                <div className="flex justify-center px-6 md:px-0">
                    <button className="w-full sm:w-auto bg-[#15C15D] text-white px-10 py-4 rounded-full font-extrabold text-lg hover:bg-[#13EC6D] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20">
                        Explore financial education
                    </button>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-[#15C15D]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-[#15C15D]/5 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute top-[10%] left-[45%] w-[300px] h-[300px] bg-[#15C15D]/5 rounded-full blur-[90px] pointer-events-none" />

            {/* Decorative Blob near middle */}
            <div className="absolute top-[40%] left-[45%] w-[200px] h-[200px] bg-[#15C15D]/10 rounded-full blur-[80px] pointer-events-none transform rotate-45" />
        </section>
    );
}
