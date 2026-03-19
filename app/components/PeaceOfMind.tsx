"use client";

import Image from "next/image";

export default function PeaceOfMind() {
    return (
        <section className="relative w-full min-h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden py-16 bg-[#E4FDF2]">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/image12.jpg"
                    alt="Peace of mind"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-white/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
                {/* Logo */}
                <div className="mb-8 md:mb-10">
                    <Image
                        src="/images/Logo/logo.png"
                        alt="Cash in Flash Logo"
                        width={200}
                        height={50}
                        className="object-contain w-[160px] md:w-[220px]"
                    />
                </div>

                {/* Tagline */}
                <h2 className="text-[#052116] text-[28px] sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-8 md:mb-12 max-w-[800px] leading-tight">
                    More than a loan. It's peace of mind.
                </h2>

                {/* Action Button */}
                <button className="bg-[#00D16B] text-white px-12 md:px-14 py-4 md:py-5 rounded-full font-extrabold text-lg md:text-xl transition-all hover:bg-[#00B85E] hover:scale-105 active:scale-95 shadow-xl shadow-green-500/20">
                    Apply now
                </button>
            </div>
        </section>
    );
}
