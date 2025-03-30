'use client'
import Aos from 'aos';
import { useEffect } from 'react';
import { FaCoins } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { RiStackFill } from 'react-icons/ri';

const Solutions = () => {
    useEffect(() => {
        Aos.init(); // Optional: Add animation duration
      }, []);

    return (
      <>
        <section className="md:mx-[50px] mx-[20px] max-w-full h-auto px-6 md:px-12 py-8 md:py-14  flex flex-col items-start max-sm:items-center gap-3">
          <button
            disabled
            className="md:ml-2 text-primary uppercase text-sm md:text-xs py-1.5 px-2 border border-gray-300 rounded-lg font-poppins font-semibold"
          >
            Solutions
          </button>
          <div className="w-full py-3 flex max-sm:flex-col md:justify-between items-center gap-4">
            <h1 data-aos="fade-right" data-aos-duration="500" data-aos-once="true" className="md:w-1/2 text-3xl md:text-4xl text-center md:text-left font-bold font-jakarta leading-12">
              Build a solution <br /> that's truly your own.{" "}
            </h1>
            <p data-aos="fade-left" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="md:w-1/2 max-sm:text-center px-3 text-gray-500 font-normal">
              Manage all things equity in one place, with Trackz, you get the all-in-one sales and marketing automation
              platform designed to help your small business grow.
            </p>
          </div>
          <div className="w-full mt-3 py-4 flex max-sm:flex-col md:justify-between items-center gap-14">
            <div className="md:w-1/2 p-10 md:p-12 bg-secondary flex justify-center items-center rounded-xl">
              <img
                src="/undraw_email-campaign_2z6t.svg"
                alt="marketing illustration"
                className="object-contain lg:w-1/2 lg:h-1/2"
              />
            </div>
            <div className="md:w-1/2 grid grid-cols-1 gap-6">
              <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" className="flex items-center md:items-start gap-6">
                <div className="w-1 bg-background h-20 rounded-full"></div>
                <div className="md:flex-1 py-2">
                  <div className="flex items-center gap-x-2">
                    <RiStackFill className="text-2xl" />
                    <h2 className="text-text text-xl font-semibold font-poppins text-left">Business CRM</h2>
                  </div>
                  <p className="text-gray-500 mt-2 ml-8 text-sm w-3/4">Get organized and automate follow-up with Keap's client management software</p>
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="flex items-start gap-6">
                <div className="w-1 bg-primary h-20 rounded-full"></div>
                <div className="flex-1 py-2">
                  <div className="flex items-center gap-x-2 text-primary">
                    <IoIosMail className="text-2xl" />
                    <h2 className="text-xl font-semibold font-poppins text-left">Email Marketing</h2>
                  </div>
                  <p className="text-gray-500 mt-2 ml-8 text-sm w-3/4">Convert more leads with easy-to-build emails plus automation & CRM</p>
                </div>
              </div>
              <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="flex items-start gap-6">
                <div className="w-1 bg-background h-20 rounded-full"></div>
                <div className="flex-1 py-2">
                  <div className="flex items-center gap-x-2">
                    <FaCoins className="text-2xl" />
                    <h2 className="text-text text-xl font-semibold font-poppins text-left">Sales Automation</h2>
                  </div>
                  <p className="text-gray-500 mt-2 ml-8 text-sm w-3/4">Automation capabilities were built to amplify every stage of your sales cycle</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default Solutions
  
  