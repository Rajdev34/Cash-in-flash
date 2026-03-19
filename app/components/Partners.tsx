"use client";

import Image from "next/image";

const PartnerLogo = ({ src, alt, width }: { src: string; alt: string; width: number }) => (
    <div className="relative h-8 md:h-10 w-auto flex items-center">
        <Image
            src={src}
            alt={alt}
            width={width}
            height={40}
            className="object-contain w-auto h-full"
        />
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
        <section className="relative w-full bg-white py-10 lg:py-16 overflow-hidden">
            {/* Mobile View - visible until lg (1024px) */}
            <div className="flex flex-row items-center justify-center w-full max-w-[425px] mx-auto h-[41px] px-[30px] gap-[30px] sm:gap-[49px] opacity-100 lg:hidden text-center">
                <Image
                    src="/images/partners/business_insider.png"
                    alt="Business Insider"
                    width={92}
                    height={30}
                    className="object-contain"
                />

                <Image
                    src="/images/partners/usa.png"
                    alt="USA Today"
                    width={124}
                    height={22}
                    className="object-contain"
                />

                <Image
                    src="/images/partners/aol.png"
                    alt="AOL"
                    width={60}
                    height={24}
                    className="object-contain"
                />

            </div>
            {/* Desktop View - visible from lg (1024px) upwards */}
            <div className="hidden lg:flex items-center justify-between max-w-[1200px] w-full mx-auto h-[54px] px-4 relative">
                <Image
                    src="/images/partners/forbes.png"
                    alt="Forbes"
                    width={155}
                    height={38}
                    className="object-contain opacity-100"
                />

                <Image
                    src="/images/partners/business_insider.png"
                    alt="Business Insider"
                    width={123}
                    height={40}
                    className="object-contain opacity-100"
                />

                <Image
                    src="/images/partners/usa.png"
                    alt="USA Today"
                    width={165}
                    height={30}
                    className="object-contain opacity-100"
                />

                <Image
                    src="/images/partners/aol.png"
                    alt="AOL"
                    width={80}
                    height={32}
                    className="object-contain opacity-100"
                />

                <Image
                    src="/images/partners/yahoo.png"
                    alt="Yahoo Finance"
                    width={149}
                    height={54}
                    className="object-contain opacity-100"
                />

            </div>
        </section>
    );
}
