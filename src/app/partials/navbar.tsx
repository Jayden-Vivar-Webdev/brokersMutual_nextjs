"use client"; 
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';  // Import Link from next/link
import Image from 'next/image'; // Import Image from next/image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <header className="bg-white shadow-sm sticky top-0 z-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center lg:justify-between items-center">
          <div className="flex items-center text-2xl font-bold">
          
          <Link href={'/'}>
          <Image
            src="/assets/logo.webp"
            alt="logo"
            height={12}
            width={70}
            ></Image>
          </Link>
          

            <span className="text-secondary-900"></span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex gap-10">
                <li>
                <Link 
                    href="/"
                    className={`nav-link relative pb-1 transition ${
                      pathname === '/' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-secondary-600 hover:text-primary-600'
                    }`}
                  >
                      Home
                  </Link>
                </li>
                <li>
                <Link 
                    href="/"
                    className={`nav-link relative pb-1 transition ${
                      pathname === '/404' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-secondary-600 hover:text-primary-600'
                    }`}
                  >
                   
                      Join us
                    
                  </Link>
                </li>
                <li>
                <Link 
                    href="/apply"
                    className={`nav-link relative pb-1 transition ${
                      pathname === '/404' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-secondary-600 hover:text-primary-600'
                    }`}
                  >
                   
                      Apply
                    
                  </Link>
                </li>
                <li>
                <Link 
                    href="/404"
                    className={`nav-link relative pb-1 transition ${
                      pathname === '/404' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-secondary-600 hover:text-primary-600'
                    }`}
                  >
                    
                      About Us
                   
                  </Link>
                </li>
                
                {/* <li>
                <Link 
                    href="/contact"
                    className={`nav-link relative pb-1 transition ${
                      pathname === '/contact' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-secondary-600 hover:text-primary-600'
                    }`}
                  >
                    
                      Contact
                  
                  </Link>
                </li> */}
              </ul>
            </nav>
            <Link href="/contact">
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition shadow-md hover:shadow-lg">
                Contact Us Now
            </button>
            </Link>
          </div>

          <button
            className="lg:hidden text-2xl focus:outline-none text-secondary-600 absolute right-6"
            id="mobile-menu-button"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} />
            {/* Ensure FontAwesome is properly installed */}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4" id="mobile-menu">
            <nav>
              <ul className="space-y-3" style={{justifyItems: 'center'}}>
                <li>
                  <Link href="/"
                    onClick={() => {toggleMobileMenu()}}
                    className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      Home
                    
                  </Link>
                </li>
                <li>
                  <Link href="/404"
                    onClick={() => {toggleMobileMenu()}}
                    className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      About
                    
                  </Link>
                </li>
                <li>
                  <Link href="/404"
                    onClick={() => {toggleMobileMenu()}}
                    className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      Services
                    
                  </Link>
                </li>
                
               
                <li>
                  <Link href="/contact"
                    onClick={() => {toggleMobileMenu()}}
                    className="block hover:text-primary-600 px-3 py-2 rounded-lg transition text-secondary-600">
                      Contact
                    
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"}>
                  <button
                    className="block bg-primary-600 text-white px-6 py-2 rounded-lg font-medium text-center hover:bg-primary-700 transition shadow-md">
                      Contact Us
                    
                  </button>
                  </Link>
                  
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
      
    </header>
    
  );
};

export default Navbar;
