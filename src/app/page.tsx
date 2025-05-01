import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <!-- Hero Section --> */}
    <section className="bg-slate-900 relative overflow-hidden" id="home">
        {/* <!-- Subtle grid pattern overlay --> */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTSA2MCAwIEwgMCAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9Ik0gMCAwIEwgNjAgNjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTSA2MCAwIEwgMCA2MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')]"></div>
        </div>
        
        {/* <!-- Accent color bar --> */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
        
        <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* <!-- Text Content: Takes up 3/5 of the space --> */}
            <div className="lg:col-span-3">
              <div className="max-w-3xl">
                <div className="flex items-center mb-6">
                  <div className="h-px bg-blue-600 w-12 mr-4"></div>
                  <span className="text-blue-500 font-medium tracking-wider text-sm uppercase">Financial Excellence</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Allow Brokers Mutual To Help You Choose The Right Loan</h1>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">Our comprehensive financial services are designed to assist our clients, enhance borrowing capabilities, and secure the best interest rates.</p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-200">Expert Financial Advisory</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-200">Risk Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-200">Strategic Planning</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 ">
                  <a href="/contact" className="z-50 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-300 text-center">
                    Schedule Consultation
                  </a>
                  <a href="/404" className="z-50 px-6 py-3 border border-slate-600 text-slate-200 font-medium rounded hover:border-blue-500 hover:text-blue-400 transition duration-300 text-center">
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
            
            {/* <!-- Chart/Graph Visual: Takes up 2/5 of the space --> */}
            <div className="lg:col-span-2 relative">
              <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-4 md:p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-slate-200 font-medium">Secured Loans</h3>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                  </div>
                </div>
                
                {/* <!-- Simplified chart representation --> */}
                <div className="relative h-64">
                  {/* <!-- Chart background grid --> */}
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                    <div className="border-b border-r border-slate-700"></div>
                    <div className="border-b border-r border-slate-700"></div>
                    <div className="border-b border-r border-slate-700"></div>
                    <div className="border-b border-slate-700"></div>
                    <div className="border-b border-r border-slate-700"></div>
                    <div className="border-b border-r border-slate-700"></div>
                    <div className="border-b border-r border-slate-700"></div>
                    <div className="border-b border-slate-700"></div>
                    <div className="border-b border-r border-slate-700"></div>
                    <div className="border-b border-r border-slate-700"></div>
                    <div className="border-b border-r border-slate-700"></div>
                    <div className="border-b border-slate-700"></div>
                    <div className="border-r border-slate-700"></div>
                    <div className="border-r border-slate-700"></div>
                    <div className="border-r border-slate-700"></div>
                    <div className=""></div>
                  </div>
                  
                  {/* <!-- Line chart --> */}
                  <div className="absolute bottom-0 left-0 right-0 h-full">
                    {/* <!-- Blue line (main) --> */}
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,80 Q25,70 33,40 T50,35 T66,45 T75,30 T100,10" stroke="rgb(37, 99, 235)" strokeWidth="2" fill="none" />
                      <path d="M0,80 Q25,70 33,40 T50,35 T66,45 T75,30 T100,10 V100 H0 Z" fill="rgb(37, 99, 235)" fillOpacity="0.1" />
                    </svg>
                    
                    {/* <!-- Grey line (benchmark) --> */}
                    <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,70 Q20,65 40,60 T60,55 T80,60 T100,50" stroke="rgb(100, 116, 139)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                    </svg>
                  </div>
                  
                  {/* <!-- Labels --> */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-400">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-6 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-slate-300">Brokers Mutual</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-slate-500 rounded-full mr-2"></div>
                    <span className="text-slate-300">Other Lenders</span>
                  </div>
                  <div className="text-blue-500 font-medium">+12.6%</div>
                </div>
              </div>
              
              {/* <!-- Small positioned decoration elements --> */}
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-600 rounded-full opacity-10 blur-lg"></div>
            </div>
          </div>
        </div>
        
        {/* <!-- Bottom border accent --> */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800"></div>
      </section>


      {/* <!-- Services Section --> */}
<section className="relative .bg-secondary-50 py-16 md:py-24 bg-white" id="services">
    {/* <!-- Subtle grid pattern overlay --> */}
   
    <div className="container mx-auto px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <div className="h-px bg-blue-600 w-8 mr-4"></div>
          <span className="text-blue-600 font-medium tracking-wider text-sm uppercase">Premium Services</span>
          <div className="h-px bg-blue-600 w-8 ml-4"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-5">Comprehensive Financial Solutions</h2>
        <p className="text-slate-600 leading-relaxed">Our tailored financial services are designed to optimize your wealth management strategy and drive sustainable growth for your business and personal goals.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* <!-- Service 1 --> */}
        <div className="bg-white border border-slate-200 rounded-lg shadow-md transition duration-300 hover:shadow-lg overflow-hidden group">
          <div className="relative h-48 overflow-hidden">
            {/* <!-- Using a gradient overlay instead of an external image --> */}
            <div className="absolute inset-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="absolute bg-[url('/assets/car_loan.jpg')] bg-cover inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Car Loans</h3>
            <p className="text-slate-600 leading-relaxed mb-5">Secure the right car loan for your needs with our expert guidance and smart comparison tools designed to match your budget, credit profile, and vehicle goals.</p>
            <div className="pt-4 border-t border-slate-100">
              <a href="#" className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        
        <div className="bg-white border border-slate-200 rounded-lg shadow-md transition duration-300 hover:shadow-lg overflow-hidden group">
          <div className="relative h-48 overflow-hidden">
            {/* <!-- Using a gradient overlay instead of an external image --> */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-800 opacity-90 group-hover:opacity-100 transition duration-300"></div>
            <div className="absolute bg-[url('/assets/truck_loan.jpg')] bg-cover inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Truck Loans</h3>
            <p className="text-slate-600 leading-relaxed mb-5">Drive your business forward with our tailored truck loan solutions, competitive financing options, and long-term support designed to keep you on the road.</p>
            <div className="pt-4 border-t border-slate-100">
              <a href="#" className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        
        <div className="bg-white border border-slate-200 rounded-lg shadow-md transition duration-300 hover:shadow-lg overflow-hidden group">
          <div className="relative h-48 overflow-hidden">
            {/* <!-- Using a gradient overlay instead of an external image --> */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-blue-600 opacity-90 group-hover:opacity-100 transition duration-300"></div>
            <div className="absolute inset-0 bg-[url('/assets/motorbike_loan.jpg')] bg-cover  flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Motorbike Loans</h3>
            <p className="text-slate-600 leading-relaxed mb-5">Hit the road with confidence through our flexible motorbike loan options, low-rate financing, and personalized support built for your riding lifestyle.</p>
            <div className="pt-4 border-t border-slate-100">
              <a href="#" className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
       
        <div className="bg-white border border-slate-200 rounded-lg shadow-md transition duration-300 hover:shadow-lg overflow-hidden group">
          <div className="relative h-48 overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-500 opacity-90 group-hover:opacity-100 transition duration-300"></div>
            <div className="absolute inset-0 bg-[url('/assets/caravan_loan.jpg')] bg-cover  flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Caravan Loans</h3>
            <p className="text-slate-600 leading-relaxed mb-5">Explore without limits with our tailored caravan loan solutions, featuring competitive rates, flexible terms, and expert guidance for your next great escape.</p>
            <div className="pt-4 border-t border-slate-100">
              <a href="#" className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        
        <div className="bg-white border border-slate-200 rounded-lg shadow-md transition duration-300 hover:shadow-lg overflow-hidden group">
          <div className="relative h-48 overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-blue-700 opacity-90 group-hover:opacity-100 transition duration-300"></div>
            <div className="absolute inset-0 bg-[url('/assets/boat_loan.jpg')] bg-cover  flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Boat Loans</h3>
            <p className="text-slate-600 leading-relaxed mb-5">Set sail with ease using our customized boat loan options, offering competitive rates, smooth approvals, and expert support to get you on the water faster.</p>
            <div className="pt-4 border-t border-slate-100">
              <a href="#" className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        
        <div className="bg-white border border-slate-200 rounded-lg shadow-md transition duration-300 hover:shadow-lg overflow-hidden group">
          <div className="relative h-48 overflow-hidden">
            {/* <!-- Using a gradient overlay instead of an external image --> */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-slate-900 opacity-90 group-hover:opacity-100 transition duration-300"></div>
            <div className="absolute inset-0 bg-[url('/assets/jetski_loan.jpg')] bg-cover  flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Jetski Loans</h3>
            <p className="text-slate-600 leading-relaxed mb-5">Make waves with our hassle-free jetski loan solutions—featuring fast approvals, flexible terms, and great rates tailored to your thrill-seeking lifestyle.</p>
            <div className="pt-4 border-t border-slate-100">
              <a href="#" className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="mt-16 z-50">
        <div className="bg-white border border-slate-200 rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Need to secure your loan fast?</h3>
              <p className="text-slate-600 mb-6">Our team of expert financial advisors are ready to develop and help you with your unique circumstances and goals.</p>
              <div>
                <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition duration-300 shadow-md hover:shadow-lg z-50">
                  Schedule Personal Consultation
                </a>
              </div>
            </div>
            
            
            <div className="relative lg:h-[30rem] bg-slate-900 hidden md:block">
              
              <div className="absolute inset-0 opacity-60">
                <div className="h-full w-full bg-[url('/assets/personal_advise.jpg')] bg-cover bg-start"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-blue-300 opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-slate-900/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-slate-900 relative overflow-hidden" id="home">

        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>        
        <div className="container mx-auto px-6 lg:px-8 py-16 md:py-24 lg:py-32">            
            <div className="lg:col-span-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    
                    <div className="p-6">
                        <h3 className="text-white text-4xl md:text-5xl font-bold mb-2">10K+</h3>
                        <p className="text-secondary-200">Happy Clients</p>
                    </div>
                    
                    
                    <div className="p-6">
                        <h3 className="text-white text-4xl md:text-5xl font-bold mb-2">40+</h3>
                        <p className="text-secondary-200">Lenders</p>
                    </div>
                    
                   
                    <div className="p-6">
                        <h3 className="text-white text-4xl md:text-5xl font-bold mb-2">25+</h3>
                        <p className="text-secondary-200">Years Experience</p>
                    </div>
                    
                    
                    <div className="p-6">
                        <h3 className="text-white text-4xl md:text-5xl font-bold mb-2">100%</h3>
                        <p className="text-secondary-200">Client Satisfaction</p>
                    </div>
                </div>
          </div>
        </div>
        
        
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800"></div>
      </section>


    {/* <!-- Features Section --> */}
    <section className="relative py-16 md:py-24 bg-slate-50" id="features">
        {/* <!-- Subtle grid pattern overlay --> */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-slate-900"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-blue-600 w-8 mr-4"></div>
              <span className="text-blue-600 font-medium tracking-wider text-sm uppercase">Our Advantages</span>
              <div className="h-px bg-blue-600 w-8 ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-5">Strategic Advantages with Brokers Mutual</h2>
            <p className="text-slate-600 leading-relaxed">Our comprehensive suite of lenders allows us to secure the best loan for your current financial needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* <!-- Feature 1 --> */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-md transition duration-300 hover:shadow-lg group z-10">
              <div className="p-6 md:p-8">
                <div className="flex items-start mb-5">
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Professional Services</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">You have financial protection form the start, we only allow our clients to borrow what they can afford. We are here for your best interests.</p>
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <span className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* <!-- Feature 2 --> */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-md transition duration-300 hover:shadow-lg group z-10">
              <div className="p-6 md:p-8">
                <div className="flex items-start mb-5">
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Interest Rate Analysis</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">Sophisticated methods to process interet rate data to deliver actionable intelligence and forecast trends with precision guided advise.</p>
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <span className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* <!-- Feature 3 --> */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-md transition duration-300 hover:shadow-lg group z-10">
              <div className="p-6 md:p-8">
                <div className="flex items-start mb-5">
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Transparent Fee Structure</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">All fees for the services we require will be transparently communicated. There is no ambiguity about our pricing or services. So you can be confident in your decision making</p>
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <span className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* <!-- Feature 4 --> */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-md transition duration-300 hover:shadow-lg group z-10">
              <div className="p-6 md:p-8">
                <div className="flex items-start mb-5">
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Enterprise Mobile Platform</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">Financable is an integrated platform that allows us to simplify the process of obtaining necessary data from our clients to process their eligibility for a loan.</p>
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <span className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* <!-- Feature 5 --> */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-md transition duration-300 hover:shadow-lg group z-10">
              <div className="p-6 md:p-8">
                <div className="flex items-start mb-5">
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Dedicated Advisory Team</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">Gain access to certified financial advisors with sector-specific expertise who provide personalised assistance to help you with your next loan.</p>
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <span className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* <!-- Feature 6 --> */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-md transition duration-300 hover:shadow-lg group z-10">
              <div className="p-6 md:p-8">
                <div className="flex items-start mb-5">
                  <div className="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Access to over 40+ Lenders</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">Leverage off our lenders, we have mutiple options and are connected with mutiple lenders all over Australia, which means you have options when selecting your loan.</p>
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <span className="text-blue-600 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* <!-- CTA Banner --> */}
          <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg shadow-xl overflow-hidden">
            <div className="relative p-8 md:p-10">
              {/* <!-- Background accent --> */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.3,-68.1C52.1,-64.5,64.7,-55.8,73.2,-43.8C81.8,-31.8,86.3,-15.9,83.9,-1.4C81.5,13.1,72.2,26.2,61.9,36.6C51.6,46.9,39.2,54.5,26.7,59.6C14.2,64.7,1.5,67.1,-12.8,68.4C-27.1,69.7,-42.1,69.9,-53,63.3C-63.9,56.7,-70.7,43.3,-73.4,29.5C-76.1,15.8,-74.7,1.7,-71.8,-11.5C-68.9,-24.6,-64.4,-36.8,-56,-48.3C-47.6,-59.8,-35.3,-70.5,-21.9,-73.1C-8.6,-75.7,5.8,-70.1,19.7,-66C33.6,-61.9,46.9,-59.2,59.7,-51.9Z" transform="translate(200 200)" fill="currentColor"/>
                </svg>
              </div>
              
              <div className="md:flex items-center justify-between relative z-10">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to secure your next loan?</h3>
                  <p className="text-slate-300">Schedule a consultation with our expert advisors.</p>
                </div>
                <div>
                  <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded transition duration-300">
                    Request Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className="py-20 bg-secondary-50" id="testimonials">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Testimonials</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                <p className="text-secondary-600 max-w-2xl mx-auto">Hear from people who have transformed their financial future with Brokers Mutual.</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
                
                <div className="testimonial-slide active bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-lg text-secondary-700 mb-6 relative">
                        <span className="absolute -top-4 -left-4 text-primary-400 text-4xl opacity-50">&quot;</span>
                        Had the best experience with Stewart who organised my car in less than 3 days, with the best repayment schedule. It was probably the best experience I have had ever in making a purchase. Highly recommend them. Very quick, very straight forward and keeps you in the loop throughout the whole process.
                        <span className="absolute -bottom-4 -right-4 text-primary-400 text-4xl opacity-50">&quot;</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-100">
                        <Image
                          src="/assets/lynne.png"
                          alt="ACE MONEY"
                          width={400} // set your desired width
                          height={400} // set your desired height
                          className="w-full h-full object-cover"
                        />

                        </div>
                        <div>
                            <h4 className="font-bold">Lynne</h4>
                            <p className="text-secondary-500">Car Loan</p>
                        </div>
                    </div>
                </div>
                
                
                <div className="testimonial-slide bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-lg text-secondary-700 mb-6 relative">
                        <span className="absolute -top-4 -left-4 text-primary-400 text-4xl opacity-50">&quot;</span>
                        Stewart was extremely helpful, got our loan approved throughly quickly and we most definitely recommend him for your finance.
                        <span className="absolute -bottom-4 -right-4 text-primary-400 text-4xl opacity-50">&quot;</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-100">
                        <div className="relative w-40 h-40">
                          <Image
                            src="/assets/ACEMONEY.png"
                            alt="ACEMONEY"
                            fill
                            className="object-cover"
                          />
                        </div>

                        </div>
                        <div>
                            <h4 className="font-bold">ACE MONEY</h4>
                            <p className="text-secondary-500">Personal Loan</p>
                        </div>
                    </div>
                </div>
               
                <div className="testimonial-slide bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-lg text-secondary-700 mb-6 relative">
                        <span className="absolute -top-4 -left-4 text-primary-400 text-4xl opacity-50">&quot;</span>
                        Stewart was absolutely amazing when I came to him for some auto finance. He is super fast a reliable. Had me driving out within same day.
                        <span className="absolute -bottom-4 -right-4 text-primary-400 text-4xl opacity-50">&quot;</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-100">
                        <div className="relative w-40 h-40">
                          <Image
                            src="/assets/FK_PLAZMA.png"
                            alt="FK_PLAZMA"
                            fill
                            className="object-cover"
                          />
                        </div>

                        </div>
                        <div>
                            <h4 className="font-bold">FK PLAZMA</h4>
                            <p className="text-secondary-500">Auotmotive Finance</p>
                        </div>
                    </div>
                </div>
                
               
                <div className="flex justify-center mt-8 space-x-2">
                    <button className="slider-dot w-3 h-3 rounded-full bg-gray-300 active bg-primary-600" data-slide="0"></button>
                    <button className="slider-dot w-3 h-3 rounded-full bg-gray-300" data-slide="1"></button>
                    <button className="slider-dot w-3 h-3 rounded-full bg-gray-300" data-slide="2"></button>
                </div>
            </div>
        </div>
    </section>

   
    <section className="cta-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready To Take Control Of Your Financial Future?</h2>
            <p className="text-lg max-w-3xl mx-auto mb-10 text-secondary-200">Join thousands of satisfied clients who are already with Brokers Mutual.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg hover:shadow-xl">Contact Us Now</a>
            </div>
        </div>
    </section>
    </>
  );
}
