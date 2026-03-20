// import Image from "next/image";

// export default function PeaceOfMindSection() {
//   return (
//     <section
//         className="relative w-full max-w-[390px] sm:max-w-screen-xl mx-auto h-[242px] opacity-100 bg-cover bg-center lg:h-[276px] lg:mt-24 lg:rounded-[20px] overflow-hidden"
//         style={{ backgroundImage: "url('/images/image12.jpg')" }}
//     >
//         <Image
//             src="/images/Logo/logo.png"
//             alt="Logo"
//             width={148}
//             height={19}
//             className="absolute top-[35px] left-1/2 -translate-x-1/2 lg:w-[250px] lg:h-[32px] lg:top-[40px]"
//         />

//         {/* Text */}
//         <p className="absolute w-[228px] h-[49px] top-[88px] left-1/2 -translate-x-1/2 text-center font-['Spartan'] font-normal text-[20px] leading-[34px] text-black lg:w-[680px] lg:h-[42px] lg:top-[117px] lg:text-[35px] lg:leading-[42px]">
//             More than a loan. It’s peace of mind.
//         </p>

//         {/* Button */}
//         <button className="absolute w-[120px] h-[36px] top-[171px] left-1/2 -translate-x-1/2 rounded-[40px] bg-[linear-gradient(86.41deg,#15C15D_1.64%,#13EC6D_98.36%)] flex items-center justify-center lg:w-[125px] lg:h-[47px] lg:top-[199px]">

//             <span className="font-['Poppins'] font-medium text-[16px] leading-[27px] text-white">
//             Apply now
//             </span>

//         </button>

//     </section>
//   );
// }
"use client";

import Image from "next/image";

export default function PeaceOfMind() {
    return (
     <section 
  className="relative w-full min-h-[280px] lg:h-[276px] flex items-center justify-center overflow-hidden py-16"
  style={{ backgroundColor: '#E4FDF2' }}
>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/image12.jpg"
                    alt="Peace of mind"
                    fill
                    className="object-cover"
                    priority
                />
               <div className="absolute inset-0 bg-[#E4FDF2]/80" />
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
                <h2 className="text-[#052116] text-[28px] sm:text-3xl md:text-5xl tracking-tight mb-8 md:mb-12 max-w-[800px] leading-tight">
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
