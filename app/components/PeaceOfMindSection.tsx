import Image from "next/image";

export default function PeaceOfMindSection() {
  return (
    <section
        className="relative w-[390px] h-[242px] opacity-100 bg-cover bg-center md:w-full md:h-[276px]"
        style={{ backgroundImage: "url('/images/image12.jpg')" }}
    >
        <Image
            src="/images/Logo/logo.png"
            alt="Logo"
            width={148}
            height={19}
            className="absolute top-[35px] left-[121px] md:w-[250px] md:h-[32px] md:top-[40px] md:left-[595px]"
        />

        {/* Text */}
        <p className="absolute w-[228px] h-[49px] top-[88px] left-[81px] text-center font-['Spartan'] font-normal text-[20px] leading-[34px] text-black md:w-[680px] md:h-[42px] md:top-[117px] md:left-[380px] md:text-[35px] md:leading-[42px]">
            More than a loan. It’s peace of mind.
        </p>

        {/* Button */}
        <button className="absolute w-[120px] h-[36px] top-[171px] left-[135px] rounded-[40px] bg-[linear-gradient(86.41deg,#15C15D_1.64%,#13EC6D_98.36%)] flex items-center justify-center md:w-[125px] md:h-[47px] md:top-[199px] md:left-[658px]">
            
            <span className="font-['Poppins'] font-medium text-[16px] leading-[27px] text-white">
            Apply now
            </span>

        </button>

    </section>
  );
}