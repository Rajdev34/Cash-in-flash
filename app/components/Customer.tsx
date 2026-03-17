import Image from "next/image";

interface HeroProps {
  className?: string;
}

export default function Customer({ className }: HeroProps) {
  return (
    <section
      className={`relative min-h-screen lg:min-h-[600px] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden ${className || ''}`}
      style={{
        background: 'linear-gradient(199.18deg, #EFFDF7 11.77%, #FFFFFF 88.23%)',
      }}
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="space-y-8 lg:space-y-10 w-full">
            <div className="space-y-6">
              <h1 className="font-['Tilt_Warp'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-black">
                Fast Cash <br />
                When You{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#15C15D] to-[#13EC6D] bg-clip-text text-transparent">
                    Need It
                  </span>
                  <svg
                    viewBox="0 0 187 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -bottom-1 left-0 w-full h-[6px]"
                  >
                    <path
                      d="M1.78118 0.0305095C2.82908 -0.0476489... (SVG path remains same)"
                      fill="url(#paint0_linear_hero)"
                    />
                    <defs>
                      <linearGradient id="paint0_linear_hero" x1="0" y1="3.5" x2="187" y2="3.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#15C15D" />
                        <stop offset="1" stopColor="#13EC6D" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              
              <p className="font-poppins font-medium text-lg md:text-xl lg:text-2xl text-gray-600 max-w-prose">
                Affordable loans from $100 to $255. Start moving forward.
              </p>

              {/* Checklist */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-3 md:gap-6">
                {[
                  "Approved in minutes",
                  "Money same day",
                  "Good credit not needed"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-poppins font-medium text-base md:text-lg text-[#353535] whitespace-nowrap">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#15C15D] to-[#13EC6D] font-poppins font-extrabold text-white text-lg shadow-lg hover:opacity-90 transition-opacity">
                Apply now
              </button>
              <p className="font-['Arimo_Hebrew_Subset'] italic text-gray-700 text-base md:text-lg">
                Visit a store or apply online in minutes.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Image src="/images/google.png" alt="Google" width={89} height={36} className="h-8 w-auto object-contain" />
              <Image src="/images/bbB.png" alt="BBB" width={88} height={30} className="h-8 w-auto object-contain" />
              <Image src="/images/consumer.png" alt="Consumer Affairs" width={153} height={30} className="h-8 w-auto object-contain" />
            </div>
          </div>

          {/* Right Image Column - Responsive Grid Layout */}
          <div className="relative w-full max-w-[580px] mx-auto lg:ml-auto">
            <div className="grid grid-cols-12 gap-3 md:gap-4 items-stretch">
              {/* Left side two images */}
              <div className="col-span-5 flex flex-col gap-3 md:gap-4">
                <div className="rounded-2xl overflow-hidden h-[180px] md:h-[270px]">
                  <Image src="/images/image4.jpg" alt="Family" width={278} height={163} className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden h-[100px] md:h-[130px]">
                  <Image src="/images/image3.jpg" alt="Kids" width={163} height={129} className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Right side large image */}
              <div className="col-span-7">
                <div className="rounded-2xl overflow-hidden h-full min-h-[292px] md:min-h-[416px]">
                  <Image src="/images/image2.jpg" alt="Handshake" width={423} height={251} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}