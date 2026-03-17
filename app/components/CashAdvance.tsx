"use client";

import Image from "next/image";
import Link from "next/link";

export default function CashAdvance() {
  return (
    <section className="w-full relative overflow-hidden bg-white py-12 md:py-24">
      {/* Background Blobs - Kept absolute as they are decorative */}
      <div className="absolute top-1/4 right-[-100px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-green-50 rounded-full blur-[80px] md:blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-150px] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-green-50 rounded-full blur-[90px] md:blur-[120px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Section - Images */}
          <div className="w-full lg:w-5/12 relative flex flex-col items-center">
            {/* Top Image */}
            <div className="w-full aspect-[423/222] relative rounded-[20px] overflow-hidden shadow-2xl z-20">
              <Image
                src="/images/image5.jpg"
                alt="Happy couple with piggy bank"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Image Container */}
            <div className="w-full aspect-[423/185] relative mt-6 rounded-[20px] overflow-hidden shadow-2xl">
              <Image
                src="/images/image6.jpg"
                alt="Business interaction"
                fill
                className="object-cover"
              />
              
              {/* Happy Customers Badge - Positioned relative to the images */}
              <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-white rounded-full py-2 px-4 md:py-3 md:px-6 shadow-2xl flex items-center gap-3 md:gap-4 z-30">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <Image src={`/images/image${i + 1}.jpg`} alt="User" width={40} height={40} className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[12px] md:text-[15px] font-bold text-gray-900 leading-none mb-1">
                    10k Happy Customers
                  </p>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i} className="text-xs md:text-sm">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="w-full lg:w-7/12 flex flex-col items-start">
            <h2
              className="text-[36px] md:text-[52px] leading-tight font-normal text-black mb-6"
              style={{ fontFamily: "Tilt Warp" }}
            >
              Cash Advances For <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#15C15D] to-[#13EC6D] bg-clip-text text-transparent">
                  Whatever
                </span>
                {/* Underline vector can be placed here if you have the SVG */}
              </span>
              {" "}Comes Next
            </h2>

            <p
              className="text-[16px] md:text-[18px] leading-relaxed font-medium text-[#676F7E] mb-10 max-w-2xl"
              style={{ fontFamily: "Poppins" }}
            >
              Fast online applications, quick approvals, and flexible repayment options so you can access your funds without delay.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-10">
              {[
                { title: "From $100 to $255", desc: "For bills, repairs, deposits, and more" },
                { title: "Fast funding. Simple application", desc: "Direct deposit, get paid faster" },
                { title: "Payments you can afford", desc: "Designed to fit your budget and lifestyle" }
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-[20px] border border-[#E2E4E954] shadow-sm flex flex-col gap-2 min-h-[140px]"
                >
                  <h4
                    className="text-[17px] md:text-[18px] leading-snug font-semibold text-[#353535]"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {card.title}
                  </h4>
                  <p
                    className="text-[14px] md:text-[16px] leading-normal font-normal text-[#676F7E]"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row items-center gap-6">
              <button
                className="px-8 py-3 rounded-full text-white text-[16px] font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg"
                style={{
                  fontFamily: "Poppins",
                  background: "linear-gradient(86.41deg, #15C15D 1.64%, #13EC6D 98.36%)"
                }}
              >
                Apply now
              </button>

              <Link
                href="#"
                className="text-[16px] md:text-[18px] italic text-[#353535] hover:text-[#15C15D] transition-colors"
                style={{ fontFamily: "Arimo Hebrew Subset" }}
              >
                Learn more
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}