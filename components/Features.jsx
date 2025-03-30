'use client';
import React, { useEffect } from 'react';
import { FaChartPie } from 'react-icons/fa6';
import { BsLightningFill, BsStars, BsToggles } from 'react-icons/bs';
import { HiBellAlert } from 'react-icons/hi2';
import { MdArrowOutward } from 'react-icons/md';
import Aos from 'aos';

const Features = () => {

  useEffect(() => {
          Aos.init(); // Optional: Add animation duration
        }, []);

  return (
    <section className='md:mx-[50px] mx-[20px] mb-15 bg-background rounded-xl px-6 md:px-2 lg:px-14 py-14 md:py-18 flex flex-col items-center gap-5 max-w-full'>
      <button disabled className="text-primary uppercase text-sm md:text-xs py-1.5 px-2 border border-gray-300 rounded-lg font-poppins font-semibold">
        Features
      </button>
      <h1 className=' text-3xl md:text-4xl text-text font-jakarta font-bold text-center leading-10 md:leading-12'>
        Your customers are always <br /> connected.
      </h1>
      <p className='text-sm text-gray-600 text-center'>
        Customer relationship management tool for everyone who <br /> values collaboration.
      </p>

      {/* First row: 3 cards spanning full width with horizontal margins */}
      <div data-aos="zoom-in" data-aos-duration='1000' data-aos-once="true" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:mx-16 px-3 md:px-6 mt-3">
        <div className='bg-white rounded-lg p-6 flex-1 flex flex-col gap-2 text-left'>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-primary shadow-sm">
            <FaChartPie className='text-2xl'/>
        </div>
        <h1 className='mt-2 text-xl text-text font-jakarta font-semibold'>Contact Analysis</h1>
        <p className='text-gray-600 text-sm'>Get deeper insights into your contacts at a single glance.</p>
        </div>
        <div className='bg-white rounded-lg p-6 flex-1 flex flex-col gap-2 text-left'>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-primary shadow-sm">
            <BsToggles className='text-2xl'/>
        </div>
        <h1 className='mt-2 text-xl text-text font-jakarta font-semibold'>Tiered sorting</h1>
        <p className='text-gray-600 text-sm'>Organize your contacts in any way that comes to mind.</p>
        </div>
        <div className='bg-white rounded-lg p-6 flex-1 flex flex-col gap-2 text-left'>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-primary shadow-sm">
            <HiBellAlert className='text-2xl'/>
        </div>
        <h1 className='mt-2 text-xl text-text font-jakarta font-semibold'>Automatic enrichment</h1>
        <p className='text-gray-600 text-sm'>Get deeper insights into your contacts at a glance.</p>
        </div>
        </div>

      {/* Second row: 2 centered cards with extra padding on the sides */}
      <div data-aos="zoom-in" data-aos-duration='1000' data-aos-once="true" className='grid grid-cols-1 md:grid-cols-2 gap-6 max-sm:px-3 max-sm:mt-1 w-full md:w-2/3 justify-center'>
      <div className='bg-white rounded-lg p-6 flex-1 flex flex-col gap-2 text-left'>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-primary shadow-sm">
            <BsLightningFill className='text-2xl'/>
        </div>
        <h1 className='mt-2 text-xl text-text font-jakarta font-semibold'>Quick actions</h1>
        <p className='text-gray-600 text-sm'>Streamline your workflow with easy and customizable shortcuts.</p>
        </div>
        <div className='bg-white rounded-lg p-6 flex-1 flex flex-col gap-2 text-left'>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white text-primary shadow-sm">
            <BsStars className='text-2xl'/>
        </div>
        <h1 className='mt-2 text-xl text-text font-jakarta font-semibold'>Powered by AI</h1>
        <p className='text-gray-600 text-sm'>AI content assistant is the extra pair of helping hands you need.</p>
        </div>
      </div>
      <div className='flex justify-center items-center w-full mt-4'>
          <button className="cursor-pointer flex items-center gap-1 px-5 py-2 bg-primary text-sm text-white rounded-lg hover:bg-primary/90 hover:shadow-md transition-all duration-300">
            Learn More <MdArrowOutward className='text-sm' />
          </button>
      </div>
    </section>
  );
}

export default Features;
