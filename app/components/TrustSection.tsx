import Image from "next/image";

interface TrustSectionProps {
  className?: string;
}

const trustFeatures = [
  {
    title: "9 of 10 Members",
    description: "would recommend Cash in Flash to friends",
    icon: (
      <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.6666 48.125V43.5417C36.6666 41.1105 35.7009 38.7789 33.9818 37.0599C32.2627 35.3408 29.9311 34.375 27.5 34.375H13.75C11.3188 34.375 8.98725 35.3408 7.26817 37.0599C5.54908 38.7789 4.58331 41.1105 4.58331 43.5417V48.125" stroke="currentColor" strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.625 25.2083C25.6876 25.2083 29.7916 21.1043 29.7916 16.0417C29.7916 10.9791 25.6876 6.875 20.625 6.875C15.5624 6.875 11.4583 10.9791 11.4583 16.0417C11.4583 21.1043 15.5624 25.2083 20.625 25.2083Z" stroke="currentColor" strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50.4167 48.1251V43.5417C50.4152 41.5107 49.7392 39.5377 48.4948 37.9324C47.2505 36.3272 45.5082 35.1807 43.5417 34.673" stroke="currentColor" strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36.6667 7.17297C38.6385 7.67783 40.3861 8.82458 41.6342 10.4324C42.8822 12.0403 43.5597 14.0178 43.5597 16.0532C43.5597 18.0886 42.8822 20.0661 41.6342 21.6739C40.3861 23.2818 38.6385 24.4285 36.6667 24.9334" stroke="currentColor" strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Get Approved Quickly",
    description: "Our team reviews your info and gives you an instant decision.",
    icon: (
      <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.5 1.71875C13.2614 1.71875 1.71875 13.2614 1.71875 27.5C1.71875 41.7386 13.2614 53.2812 27.5 53.2812C41.7386 53.2812 53.2812 41.7386 53.2812 27.5C53.2812 13.2614 41.7386 1.71875 27.5 1.71875ZM43.2994 43.2994C39.3818 47.2053 34.1503 49.5128 28.6242 49.7722C23.0982 50.0316 17.6736 48.2244 13.4072 44.7026C9.14094 41.1809 6.3386 36.1969 5.54628 30.7218C4.75396 25.2468 6.02842 19.6728 9.12132 15.0861C12.2142 10.4993 16.904 7.2284 22.2768 5.91059C27.6497 4.59278 33.3207 5.32251 38.1849 7.95759C43.0491 10.5927 46.7581 14.9443 48.589 20.1647C50.42 25.385 50.2418 31.1 48.0892 36.1961C46.9674 38.8516 45.3407 41.264 43.2994 43.2994Z" fill="currentColor" />
        <path d="M16.3281 21.4844H20.625V25.7812H16.3281V21.4844ZM34.375 21.4844H38.6719V25.7812H34.375V21.4844ZM36.3397 33C35.6748 34.6777 34.5199 36.1162 33.0255 37.1279C31.5311 38.1397 29.7666 38.6777 27.9619 38.6719H27.0381C25.2334 38.6778 23.4688 38.1398 21.9743 37.128C20.4799 36.1163 19.3249 34.6778 18.6601 33L18.5227 32.6562H14.8208L15.4688 34.2763C16.3937 36.5885 17.9902 38.5706 20.0523 39.9668C22.1145 41.363 24.5477 42.1093 27.0381 42.1094H27.9619C30.4523 42.1093 32.8855 41.363 34.9477 39.9668C37.0099 38.5706 38.6064 36.5885 39.5313 34.2763L40.1792 32.6562H36.477L36.3397 33Z" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "Testimonial",
    description: "Team reviewed my info, instant decision!",
    icon: (
      <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.5417 45.8334H11.4583C10.2428 45.8334 9.07697 45.3505 8.21743 44.491C7.35789 43.6315 6.875 42.4657 6.875 41.2501V20.6251C6.875 19.4095 7.35789 18.2437 8.21743 17.3842C9.07697 16.5246 10.2428 16.0417 11.4583 16.0417H43.5417C44.7572 16.0417 45.923 16.5246 46.7826 17.3842C47.6421 18.2437 48.125 19.4095 48.125 20.6251V41.2501C48.125 42.4657 47.6421 43.6315 46.7826 44.491C45.923 45.3505 44.7572 45.8334 43.5417 45.8334Z" stroke="currentColor" strokeWidth="3.3" />
        <path d="M37.8125 32.0834C37.5086 32.0834 37.2171 31.9627 37.0022 31.7478C36.7873 31.5329 36.6666 31.2415 36.6666 30.9376C36.6666 30.6337 36.7873 30.3422 37.0022 30.1274C37.2171 29.9125 37.5086 29.7917 37.8125 29.7917C38.1164 29.7917 38.4078 29.9125 38.6227 30.1274C38.8376 30.3422 38.9583 30.6337 38.9583 30.9376C38.9583 31.2415 38.8376 31.5329 38.6227 31.7478C38.4078 31.9627 38.1164 32.0834 37.8125 32.0834Z" fill="currentColor" stroke="currentColor" strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M41.25 16.0417V12.8402C41.2498 12.1378 41.0882 11.4449 40.7776 10.8149C40.467 10.1849 40.0158 9.63472 39.4588 9.20683C38.9018 8.77894 38.2539 8.48479 37.5651 8.3471C36.8764 8.20941 36.1652 8.23187 35.4865 8.41274L10.2781 15.1342C9.302 15.3943 8.43915 15.9696 7.82373 16.7707C7.2083 17.5718 6.87478 18.5538 6.875 19.564V20.625" stroke="currentColor" strokeWidth="3.3" />
      </svg>
    )
  },
];

export default function TrustSection({ className }: TrustSectionProps) {
  return (
    <section
      className={`w-full py-16 md:py-24 relative overflow-hidden flex flex-col items-center justify-center ${className || ''}`}
      style={{
        background: 'linear-gradient(118.99deg, #1B3229 0%, #0C1D17 100%)',
      }}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image1.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto">
          <h1
            className="text-[32px] sm:text-[40px] md:text-[52px] leading-tight font-normal capitalize text-white"
            style={{ fontFamily: "Tilt Warp, sans-serif" }}
          >
            <span className="bg-gradient-to-r from-[#15C15D] to-[#13EC6D] bg-clip-text text-transparent">
              Trusted
            </span>{" "}
            by thousands. Built on relationships.
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {trustFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col md:items-center p-6 md:p-8 bg-[#FFFFFF14] border border-[#FFFFFF1A] backdrop-blur-[24px] rounded-[24px] text-white transition-transform hover:scale-[1.02]"
            >
              {/* Icon Wrapper */}
              <div className="text-white mb-6 md:mb-8 flex justify-start md:justify-center">
                <div className="w-10 h-10 md:w-14 md:h-14">
                  {feature.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 md:text-center">
                <h3
                  className="text-xl md:text-2xl font-bold leading-tight"
                  style={{ fontFamily: "Poppins" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm md:text-lg font-normal text-[#B8B8B8] leading-relaxed"
                  style={{ fontFamily: "Poppins" }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}