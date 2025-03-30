"use client"

import Aos from "aos"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaCirclePlay, FaX } from "react-icons/fa6"
import { MdArrowOutward, MdKeyboardArrowDown } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"

// Custom animation keyframes
const floatingAnimations = `
  @keyframes float-slow {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-10px) translateX(5px); }
  }
  
  @keyframes float-medium {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-15px) translateX(-8px); }
  }
  
  @keyframes float-fast {
    0%, 100% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-20px) translateX(10px); }
  }
  
  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }
  
  .animate-float-medium {
    animation: float-medium 6s ease-in-out infinite;
  }
  
  .animate-float-fast {
    animation: float-fast 3s ease-in-out infinite;
  }
`

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false) // Track mobile menu state

  const navLinks = [
    { href: "#", label: "Solution", hasDropdown: true },
    { href: "#", label: "Pricing", hasDropdown: false },
    { href: "#", label: "Blog", hasDropdown: false },
    { href: "#", label: "Company", hasDropdown: false },
  ]

  const solutionLinks = [
    { href: "#", label: "Product Overview" },
    { href: "#", label: "Features" },
    { href: "#", label: "Integrations" },
    { href: "#", label: "Enterprise" },
  ]

  useEffect(() => {
    Aos.init(); // Optional: Add animation duration
  }, []);

  useState(() => {
    if (typeof document !== "undefined") {
      const style = document.createElement("style")
      style.innerHTML = floatingAnimations
      document.head.appendChild(style)

      return () => {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
    <>
      {/* Navbar OUTSIDE the section so it floats over */}
      <header className="md:mx-[50px] mx-[20px] mt-4 px-5 md:px-7 py-3.5 bg-white rounded-xl fixed top-0 left-0 right-0 z-50 shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex justify-between items-center gap-2 before:content-[''] before:absolute before:inset-x-0 before:-bottom-2 before:h-2 before:bg-black/5 before:blur-lg before:rounded-b-xl">
        <a href="#" className="w-1/4">
        <div className="flex items-center">
          <img src="/Logo-removebg-preview (2).png" className="md:w-1/7 md:h-1/7 sm:w-1/4 sm:h-1/4 w-1/3 h-1/3" alt="Trackz Logo" />
          <h1 className="text-text font-jakarta lg:text-xl text-lg font-semibold">Trackz</h1>
        </div>
        </a>
        <nav className="hidden md:flex items-center justify-center w-2/4">
          <div className="flex items-center lg:gap-12 gap-8 mr-19 lg:mr-0">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-sm font-normal text-text hover:text-primary transition-colors lg:text-sm flex items-center gap-1"
                >
                  {link.label}
                  {link.hasDropdown && <MdKeyboardArrowDown className="h-4 w-4" />}
                </Link>

                {link.hasDropdown && isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-md py-2 w-48 z-50">
                    {solutionLinks.map((dropdownLink) => (
                      <Link
                        key={dropdownLink.label}
                        href={dropdownLink.href}
                        className="block px-4 py-2 text-sm text-text hover:bg-gray-50 hover:text-primary"
                      >
                        {dropdownLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-end w-1/2 md:w-1/4 gap-2">
          <button className="cursor-pointer px-4 md:px-5 py-2 text-text text-xs font-medium border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
            Login
          </button>
          <button className="cursor-pointer flex items-center gap-1 px-4 md:px-5 py-2 bg-primary text-xs font-medium text-white rounded-lg hover:bg-primary/90 hover:shadow-md transition-all duration-300 whitespace-nowrap">
            Sign Up <MdArrowOutward className='text-sm' />
          </button>
          {/* Mobile Menu Button */}
        <button
         className="cursor-pointer text-primary p-2 focus:outline-none md:hidden" aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <RxHamburgerMenu size={26}/>
        </button>
        </div>

        

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-600 md:hidden w-3/4 max-w-sm p-5`}
        >
          {/* Close Button */}
          <div className="flex justify-end">
          <button className="cursor-pointer text-primary p-2 focus:outline-none text-right" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <span><FaX size={20} /></span>
          </button>
          </div>
          

          {/* Mobile Navigation Links */}
          <nav className="mt-10 flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                <button
                 onClick={() => link.hasDropdown && setIsDropdownOpen(!isDropdownOpen)}
                 className="cursor-pointer text-base font-medium text-text hover:text-primary flex items-center justify-between w-full"
                >
                  {link.label}
                  {link.hasDropdown && <MdKeyboardArrowDown className={`h-5 w-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />}
                 </button>

             {link.hasDropdown && isDropdownOpen && (
             <div className="mt-2 bg-white py-2 w-full">
               {solutionLinks.map((dropdownLink) => (
               <Link key={dropdownLink.label} href={dropdownLink.href} className="block px-4 py-2 text-sm text-text hover:bg-gray-50 hover:text-primary">
               {dropdownLink.label}
              </Link>
           ))}
        </div>
      )}
    </div>
  ))}
</nav>
</div>
</header>


      <section className="relative lg:min-h-screen h-auto w-full pt-[100px] flex justify-center lg:items-center bg-white">
        {/* Decorative background elements */}
        {/* Left curved shape - using aspect-ratio to maintain circular shape */}
        <div className="absolute -left-[10%] top-[5%] w-[45vw] h-[45vw] lg:w-[40vw] lg:h-[40vw] rounded-full bg-gradient-to-b from-[#EDF0FF] to-white opacity-80 animate-float-fast"></div>

        {/* Right curved shape - using aspect-ratio to maintain circular shape */}
        <div className="absolute -right-[10%] top-[20%] w-[45vw] h-[45vw] lg:w-[40vw] lg:h-[40vw] rounded-full bg-gradient-to-b from-[#EDF0FF] to-white opacity-80 animate-float-fast"></div>

        {/* Content */}
        <div className="max-sm:mx-[20px] relative z-10 flex flex-col items-center gap-6 px-4 md:px-10 py-10 md:py-20 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" className="leading-tight text-3xl sm:text-4xl md:text-5xl text-text font-jakarta font-bold text-center">
            One smart solution tool for your business
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" className="text-gray-500 text-center font-normal text-sm md:text-base">
            CRM that works for you, not the other way around. It's lightweight, customizable, and powered by AI
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
            <button data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000" data-aos-once="true" className="w-full sm:w-auto cursor-pointer px-7 py-3 text-white bg-primary text-sm font-medium rounded-xl hover:bg-primary/90 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Start Free Now
            </button>
            <button data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1500" data-aos-once="true" className="w-full sm:w-auto flex justify-center items-center gap-2 cursor-pointer px-7 py-3 text-text border border-background text-sm font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
              <FaCirclePlay className="text-primary" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar

