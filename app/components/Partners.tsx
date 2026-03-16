"use client";

import Image from "next/image";

const PartnerLogo = ({ src, alt, width }: { src: string; alt: string; width: number }) => (
    <div className="flex items-center justify-center px-4 md:px-8 shrink-0">
        <div className="relative h-8 md:h-10 w-auto flex items-center">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={40}
                className="object-contain w-auto h-full"
            />
        </div>
    </div>
);

export default function Partners() {
    const partners = [
        { src: "/images/partners/forbes.png", alt: "Forbes", width: 140 },
        { src: "/images/partners/business_insider.png", alt: "Business Insider", width: 180 },
        { src: "/images/partners/usa.png", alt: "USA Today", width: 160 },
        { src: "/images/partners/aol.png", alt: "AOL", width: 90 },
        { src: "/images/partners/yahoo.png", alt: "Yahoo Finance", width: 150 },
    ];

    return (
        <section className="w-full bg-white py-10 md:py-16 border-b border-gray-50 overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6">
                <div className="flex flex-row flex-wrap items-center justify-center md:justify-between gap-6 sm:gap-10 md:gap-0 opacity-100 transition-opacity duration-500">
                    {/* On mobile, we specifically show these three as seen in SS */}
                    <div className="flex items-center gap-6 sm:gap-12 md:hidden">
                        <Image src="/images/partners/business_insider.png" alt="Business Insider" width={140} height={30} className="object-contain h-6 sm:h-8 w-auto grayscale" />
                        <Image src="/images/partners/usa.png" alt="USA Today" width={140} height={30} className="object-contain h-6 sm:h-8 w-auto grayscale" />
                        <Image src="/images/partners/aol.png" alt="AOL" width={80} height={30} className="object-contain h-6 sm:h-8 w-auto grayscale" />
                    </div>
                    {/* Desktop View */}
                    <div className="hidden md:flex flex-row items-center justify-between w-full grayscale h-10">
                        {partners.map((partner, index) => (
                            <PartnerLogo key={index} {...partner} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
