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
        <section className="relativew-full bg-white py-10 md:py-16 overflow-hidden">
                    {/* On mobile, we specifically show these three as seen in SS */}
            <div className="flex flex-row items-center w-[330px] h-[41px] px-[30px] gap-[49px] opacity-100 md:hidden">

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
                    {/* Desktop View */}
            <div className="hidden md:block relative absolute md:w-[1200px] md:h-[54px] md:left-[120px]">
                <Image
                    src="/images/partners/forbes.png"
                    alt="Forbes"
                    width={155}
                    height={38}
                    className="absolute top-[8px] left-[30px] opacity-100"
                />

                <Image
                    src="/images/partners/business_insider.png"
                    alt="Business Insider"
                    width={123}
                    height={40}
                    className="absolute top-[7px] left-[302px] opacity-100"
                />

                <Image
                    src="/images/partners/usa.png"
                    alt="USA Today"
                    width={165}
                    height={30}
                    className="absolute top-[12px] left-[542px] opacity-100"
                />

                <Image
                    src="/images/partners/aol.png"
                    alt="AOL"
                    width={80}
                    height={32}
                    className="absolute top-[11px] left-[824px] opacity-100"
                />

                <Image
                    src="/images/partners/yahoo.png"
                    alt="Yahoo Finance"
                    width={149}
                    height={54}
                    className="absolute left-[1021px] opacity-100"
                />

            </div>
        </section>
    );
}
