'use client';
import Aos from 'aos';
import React, { useEffect } from 'react';

const Companies = () => {
  // Company logos - using placeholder URLs for demo
  const companies = [
    { name: "Instacart", logo: "/companies/Instacart_logo_and_wordmark.svg" },
    { name: "Slack", logo: "/companies/Slack_Technologies_Logo.svg" },
    { name: "HubSpot", logo: "/companies/HubSpot_Logo.svg" },
    { name: "Shopify", logo: "/companies/shopify-2.svg" },
    { name: "Attentive", logo: "/companies/attentive-logo-dark-svg.svg" }
  ];

   useEffect(() => {
      Aos.init(); // Optional: Add animation duration
    }, []);

  return (
    <section data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="md:mx-[50px] mx-[20px] bg-white max-w-full h-auto py-16">
      <div className="px-10 py-10 bg-primary text-white flex flex-col items-center gap-8 overflow-hidden rounded-2xl">
        <h1 className="text-sm font-jakarta">Trusted by world's best companies</h1>

        {/* Scroll container */}
        <div className="w-full overflow-hidden">
          {/* Scrolling content - only animate the parent div */}
          <div className="flex animate-infinite-scroll w-max" >
            {/* Triple the logos for smoother infinite effect */}
            {[...Array(3)].map((_, groupIdx) => (
              <div key={groupIdx} className="flex items-center justify-center">
                {companies.map((company, idx) => (
                  <div 
                    key={`${groupIdx}-${idx}`} 
                    className="w-32 h-16 flex items-center justify-center mx-8"
                  >
                    {/* Apply filter for SVG color adjustment */}
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="w-full h-full object-contain"
                      style={{ 
                        filter: "brightness(0) invert(1)" // Makes SVGs white
                      }} 
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;