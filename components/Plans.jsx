'use client';
import { MdArrowOutward } from 'react-icons/md';

const Plans = () => {
  return (
    <section className='md:mx-[50px] mx-[20px] py-8 md:py-14  flex flex-col items-center gap-5 max-w-full'>
      <button disabled className="text-primary uppercase text-xs py-1.5 px-2 border border-gray-300 rounded-lg font-poppins font-semibold">
        Plans
      </button>
      <h1 className='text-3xl md:text-4xl text-text font-jakarta font-bold text-center leading-12'>
        From nothing to something.
      </h1>
      <p className='text-sm text-gray-600 text-center'>
      Designed for every stage of your journey. Start today, no <br/> credit card required.
      </p>

      <div className='my-3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
      <div className='bg-primary rounded-2xl p-8 flex-1 flex flex-col gap-3 text-left hover:scale-102 transition-all duration-300'>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white border-4 border-primary/90">
            <img src='/Logo-removebg-preview (2).png' className='w-3/4 h-3/4'/>
        </div>
        <h1 className='mt-2 text-xl text-white font-jakarta font-semibold'>CRM For Service</h1>
        <p className='text-white/85 text-sm'>Our service solution lets you personalize customer experiences, building loyalty and revenue.</p>
        <button className='cursor-pointer mt-2 bg-white text-primary rounded-xl px-4 py-2.5 text-sm flex justify-between items-center hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transform hover:-translate-y-1 transition-all duration-300'>$49 / Month <MdArrowOutward className='text-lg'/></button>
        </div>
        <div className='bg-secondary rounded-2xl p-8 flex-1 flex flex-col gap-3 text-left hover:scale-102 transition-all duration-300'>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary border-4 border-secondary/80">
            <img src='/Capture_d_écran_2025-03-25_035825-removebg-preview.png' className='w-3/4 h-3/4'/>
        </div>
        <h1 className='mt-2 text-xl text-text font-jakarta font-semibold'>CRM For Sales</h1>
        <p className='text-text text-sm'>Our sales frees you to maximize productivity, maintain pipeline visibility, and grow revenue.</p>
        <button className='cursor-pointer mt-2 bg-primary text-white rounded-xl px-4 py-2.5 text-sm flex justify-between items-center hover:bg-primary/90 hover:shadow-md hover:-translate-y-1 transition-all duration-300'>$59 / Month <MdArrowOutward className='text-lg'/></button>
        </div>
      </div>
      <div className='w-full px-6 md:px-15 py-12 grid max-sm:grid-cols-2 grid-cols-4 md:gap-2 gap-6'>
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-semibold text-text font-poppins'>12+</h1>
            <p className='text-text/80 text-sm'>Years of Experience</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-semibold text-text font-poppins'>286%</h1>
            <p className='text-text/80 text-sm'>Average ROI</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-semibold text-text font-poppins'>25M</h1>
            <p className='text-text/80 text-sm'>Present Value</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-semibold text-text font-poppins'>60+</h1>
            <p className='text-text/80 text-sm'>Markets Served</p>
        </div>
      </div>
    </section>
  );
}

export default Plans;
