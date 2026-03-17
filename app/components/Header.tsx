"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }
    if (activeMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMenu]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const navItems = [
    { name: "Loans", hasMenu: true },
    { name: "Location", hasMenu: false },
    { name: "Save", hasMenu: true },
  ];

  return (
    <header ref={headerRef} className="w-full relative z-[100] bg-white border-b border-[#E8E8E8]">
      {/* Top Announcement Bar */}
      <div className="w-full bg-white border-b border-[#E8E8E8] py-2 min-h-[43px] flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="hidden md:block font-poppins font-medium text-[14px] lg:text-[16px] leading-relaxed text-[#353535] text-center">
            Get Fast Cash Today: Secure Payday Loans with Instant Approval and Same-Day Deposits. Apply Online in Minutes!
          </p>
          <p className="block md:hidden font-poppins font-normal text-[12px] leading-snug text-[#353535] text-center">
            Fast Cash with Instant Payday Approval
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full h-20 md:h-[99px] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">

          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-4 sm:gap-6 xl:gap-[71px]">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/Logo/logo.png"
                alt="Cash in Flash Logo"
                width={250}
                height={32}
                className="object-contain w-[120px] sm:w-[160px] md:w-[200px] lg:w-[250px] h-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href="#"
                    onClick={(e) => item.hasMenu && e.preventDefault() && setActiveMenu(activeMenu === item.name.toLowerCase() ? null : item.name.toLowerCase())}
                    className={`font-poppins font-medium text-[14px] sm:text-[16px] transition-colors py-8 inline-block ${activeMenu === item.name.toLowerCase() ? "text-[#15C15D]" : "text-[#052116] hover:text-[#15C15D]"
                      }`}
                  >
                    {item.name}
                  </Link>
                  {item.hasMenu && (
                    <div className={`absolute bottom-0 left-0 w-full h-[4px] bg-[#15C15D] transition-transform duration-300 origin-left ${activeMenu === item.name.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} />
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Actions - Desktop */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-4 xl:gap-[35px]">
            <button className="flex items-center gap-2 text-[#052116] font-poppins font-medium text-[14px] sm:text-[16px] hover:text-[#15C15D] transition-colors group">
              <svg width="20" height="20" className="sm:w-6 sm:h-6 group-hover:stroke-[#15C15D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Find a Store</span>
            </button>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="#"
                className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-extrabold text-[14px] sm:text-[16px] transition-all hover:shadow-lg active:scale-95 bg-gradient-to-r from-[#15C15D] to-[#13EC6D]"
              >
                Apply now
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-[#15C15D4D] bg-white text-[#052116] font-extrabold text-[14px] sm:text-[16px] transition-all hover:bg-green-50 hover:border-[#15C15D] active:scale-95"
              >
                Log in
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#052116] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[95] bg-[#0C1D17] text-white transition-transform duration-500 flex flex-col ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image src="/images/Logo/logo.png" alt="Cash in Flash Logo" width={180} height={24} className="object-contain" />
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-white/5 last:border-0">
              <button
                onClick={() => item.hasMenu && toggleMobileSection(item.name.toLowerCase())}
                className="w-full flex items-center justify-between py-4 text-xl sm:text-2xl font-black active:text-[#15C15D]"
              >
                {item.name}
                {item.hasMenu && (
                  <span className={`transition-transform duration-300 ${expandedSection === item.name.toLowerCase() ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                )}
              </button>

              {expandedSection === item.name.toLowerCase() && (
                <div className="pb-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="bg-[#1B3229]/50 rounded-2xl p-4 sm:p-6 space-y-4">
                    {/* Submenu Links */}
                    {item.name === 'Loans' ? (
                      <>
                        <ul className="space-y-2">
                          {["Cash Advance", "Contact Us", "Make a Payment", "Locations"].map(link => (
                            <li key={link}><Link href="#" className="flex items-center text-lg font-bold group">{link}<span className="ml-auto text-[#15C15D]">→</span></Link></li>
                          ))}
                        </ul>
                        <ul className="space-y-2 pt-2">
                          {["FAQs", "Glossary of financial terms"].map(link => (
                            <li key={link}><Link href="#" className="flex items-center text-lg font-bold group">{link}<span className="ml-auto text-[#15C15D]">→</span></Link></li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <ul className="space-y-2">
                        {["Tools", "FAQ", "Glossary of financial terms", "Contact"].map(link => (
                          <li key={link}><Link href="#" className="flex items-center text-lg font-bold group">{link}<span className="ml-auto text-[#15C15D]">→</span></Link></li>
                        ))}
                      </ul>
                    )}
                    <p className="text-[#13EC6D] text-sm font-black uppercase tracking-widest pt-2">MONEY. FIGURED OUT</p>
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link href="#" className="flex items-center gap-3 py-4 text-xl sm:text-2xl font-black border-b border-white/5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Find a Store
          </Link>
        </div>

        {/* Mobile Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#162920] border-t border-white/10 flex flex-col gap-3 sm:gap-4">
          <Link href="#" className="w-full py-3 sm:py-4 rounded-full text-white font-extrabold text-center text-lg shadow-xl active:scale-95 transition-all bg-gradient-to-r from-[#15C15D] to-[#13EC6D]">Apply now</Link>
          <Link href="#" className="w-full py-3 sm:py-4 rounded-full border-2 border-white/20 bg-transparent text-white font-extrabold text-center text-lg active:scale-95 transition-all hover:bg-white/10">Log in</Link>
        </div>
      </div>
    </header>
  );
}
