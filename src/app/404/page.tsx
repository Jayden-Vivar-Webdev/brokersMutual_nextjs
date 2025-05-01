// /pages/404.js
import React from 'react';

export default function Custom404() {
  return (
    <>
    {/* <!-- Features Section --> */}
    <section className="relative h-[60vh] py-16 md:py-24 bg-slate-50" id="features">
        {/* <!-- Subtle grid pattern overlay --> */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-slate-900"></div>
        </div>
        
        <div className="py-20 container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-blue-600 w-8 mr-4"></div>
              <span className="text-blue-600 font-medium tracking-wider text-sm uppercase">Website Upgrade</span>
              <div className="h-px bg-blue-600 w-8 ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-5">Maintenance is being conducted</h2>
            <p className="text-slate-600 leading-relaxed">Please reach out to us via our contact form if you require immediate support or servicing.</p>
          </div>
          
        </div>
      </section>
      </>
  );
}
