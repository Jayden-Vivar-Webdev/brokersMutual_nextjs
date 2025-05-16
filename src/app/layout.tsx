import Navbar from "./partials/navbar";
import Footer from "./partials/footer";
import "./output.css";
import "./styles.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      

      <body>
      <Navbar />
        {children}
        <Footer />
        
      </body>
    </html>
  );
};
export default Layout;
//DELETE WHAT IS BELOW WHEN THEY PAY FOR THE HOSTING AND THE INVOICE

// export default function Layout() {
//   return (
//     <>
//     <html lang="en">
// <body className="bg-gradient-to-br from-blue-50 to-white">
//     {/* <!-- Features Section --> */}
//     <section className="relative py-20 md:py-28 " id="features">
//         {/* <!-- Container with max width --> */}
//         <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
//             {/* <!-- Logo placement at top center --> */}
//             <div className="flex justify-center mb-12">
//                 <img 
//                     src="assets/nexa_web.svg" 
//                     alt="Your Company Logo" 
//                     className="h-12 md:h-16 w-auto"
//                 />
//             </div>
//             {/* <!-- Content section with better spacing --> */}
//             <div className="max-w-4xl mx-auto text-center">
//                 {/* <!-- Divider with text --> */}
//                 <div className="inline-flex items-center mb-8">
//                     <div className="h-px bg-blue-400 w-12"></div>
//                     <span className="text-blue-600 font-medium tracking-wider text-sm uppercase mx-4">Hosting Expired</span>
//                     <div className="h-px bg-blue-400 w-12"></div>
//                 </div>
                
//                 {/* <!-- Main heading --> */}
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                     Powered By <span className="text-blue-600">Nexa</span> Web Development
//                 </h2>
                
//                 {/* <!-- Subheading --> */}
//                 <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
//                     Secure hosting with 99.9% uptime guarantee and 24/7 expert support.
//                 </p>
                
//                 {/* <!-- Call-to-action button --> */}
//                 <div className="mt-8">
//                     {/* <a href="#contact" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
//                         Get Started
//                         <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                         </svg>
//                     </a> */}
//                 </div>
//             </div>
//         </div>
        
//         {/* <!-- Decorative elements --> */}
//         <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent opacity-50"></div>
//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent opacity-50"></div>
//     </section>
// </body>
// </html>
    
//       </>
//   );
// }


