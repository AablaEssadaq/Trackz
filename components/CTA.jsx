'use client';
import Aos from 'aos';
import { useEffect } from 'react';
import { MdArrowOutward } from 'react-icons/md'

const CTA = () => {

   useEffect(() => {
      Aos.init(); // Optional: Add animation duration
    }, []);

  return (
    <>
       <section className='relative md:mx-[50px] mx-[20px] mb-15 max-sm:px-6 py-19 bg-text rounded-2xl flex flex-col items-center gap-4 max-w-full overflow-hidden bg-gradient-to-b from-text via-[#301f61] to-primary'>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className='text-white text-3xl md:text-4xl font-bold text-center leading-12 font-jakarta'>Let's get you growing. <br/> Without the pains.</h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" className='text-sm text-white/60 text-center'>CRM that works for you, not the other way around. It's lightweight, <br/> customizable, and powered by AI</p>
        <div className='w-1/2 flex justify-center items-center gap-3 mt-3'>
            <button className="w-full sm:w-auto cursor-pointer px-5 py-3 text-white bg-primary text-xs font-medium rounded-xl hover:bg-primary/90 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
              Start Free Now
            </button>
            <button className="w-full sm:w-auto flex justify-center items-center gap-2 cursor-pointer px-5 py-3 bg-white text-text text-xs font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
              Contact Sales
              <MdArrowOutward className="text-sm" />
            </button>
        </div>
       </section>
    </>
  )
}

export default CTA