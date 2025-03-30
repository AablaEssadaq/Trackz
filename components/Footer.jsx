'use client';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { MdArrowOutward } from 'react-icons/md';

const Footer = () => {
  return (
    <section className='bg-background py-8 px-4 sm:px-6 md:px-8 lg:px-12 w-full'>
      {/* Logo Section */}
      <div className="flex items-center mb-8">
        <img 
          src="/Logo-removebg-preview (2).png" 
          className="w-12 h-12 sm:w-16 sm:h-16" 
          alt="Trackz Logo" 
        />
        <h1 className="text-text font-jakarta text-lg sm:text-xl font-semibold tracking-wide">
          Trackz
        </h1>
      </div>
      
      {/* Main Footer Content */}
      <div className='w-full flex flex-col lg:flex-row gap-8'>
        {/* Links Section */}
        <div className='w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-8'>
          <div className='flex flex-col items-start gap-3'>
            <h1 className='text-sm font-jakarta font-semibold'>Invest</h1>
            <p className='text-xs text-text/70 font-medium'><a href="#" className="hover:text-primary transition-colors">Business CRM</a></p>
            <p className='text-xs text-text/70 font-medium'><a href="#" className="hover:text-primary transition-colors">Email Marketing</a></p>
            <p className='text-xs text-text/70 font-medium'><a href="#" className="hover:text-primary transition-colors">Sales Automation</a></p>
            <p className='text-xs text-text/70 font-medium'><a href="#" className="hover:text-primary transition-colors">Fundrising</a></p>
          </div>
          
          <div className='flex flex-col items-start gap-3'>
            <h1 className='text-sm font-jakarta font-semibold'>Pricing</h1>
            <p className='text-xs text-text/70 font-medium capitalize'><a href="#" className="hover:text-primary transition-colors">CRM for service</a></p>
            <p className='text-xs text-text/70 font-medium capitalize'><a href="#" className="hover:text-primary transition-colors">CRM for sales</a></p>
            <p className='text-xs text-text/70 font-medium capitalize'>
              <a href="#" className='flex gap-1 items-center hover:text-primary transition-colors'>
                Custom pricing <MdArrowOutward className='text-xs'/>
              </a>
            </p>
          </div>
          
          <div className='flex flex-col items-start gap-3'>
            <h1 className='text-sm font-jakarta font-semibold'>Company</h1>
            <p className='text-xs text-text/70 font-medium capitalize'><a href="#" className="hover:text-primary transition-colors">About us</a></p>
            <p className='text-xs text-text/70 font-medium capitalize'><a href="#" className="hover:text-primary transition-colors">Careers</a></p>
            <p className='text-xs text-text/70 font-medium capitalize'><a href="#" className="hover:text-primary transition-colors">Contact</a></p>
            <p className='text-xs text-text/70 font-medium capitalize'><a href="#" className="hover:text-primary transition-colors">Help center</a></p>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className='w-full lg:w-1/4 flex flex-col items-start gap-2'>
          <h1 className='text-sm font-jakarta font-semibold'>Subscribe</h1>
          <p className='text-xs text-text/70 font-medium'>Update for our latest newsletter</p>
          <form className='flex flex-col gap-2.5 w-full mt-4'>
            <input 
              type="email" 
              placeholder='Your email address'
              className="text-sm bg-white border border-text/20 rounded-lg px-3 py-2 w-full"
            />
            <button className="cursor-pointer flex items-center justify-center gap-2 bg-primary text-white rounded-lg p-2 text-sm hover:bg-primary/90 hover:shadow-lg transform transition-all duration-300">
              Sign Up <MdArrowOutward className='text-base'/>
            </button>
          </form>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <hr className='w-full text-text/30 my-6'/>
      <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-4'>
        <p className='text-xs text-text/70 font-medium order-2 sm:order-1'> 
          © Trackz Copyright 2022. All rights Reserved.
        </p>
        <div className='flex gap-4 order-1 sm:order-2'>
          <a href='#' className="hover:text-primary transition-colors"><FaTwitter className='text-lg'/></a>
          <a href='#' className="hover:text-primary transition-colors"><FaLinkedin className='text-lg'/></a>
          <a href='#' className="hover:text-primary transition-colors"><FaFacebook className='text-lg'/></a>
        </div>
      </div>
    </section>
  );
};

export default Footer;