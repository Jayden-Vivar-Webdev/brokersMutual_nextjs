"use client"; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return(
        <>
        <footer className="bg-gray-900 text-white py-12" id="contact">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Company Information */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          
          <span className="text-xl font-semibold">Brokers Mutual</span>
        </div>
        <p className="text-gray-400 leading-relaxed">
          Empowering your financial journey with trusted solutions and expert guidance.
        </p>
        <div className="flex space-x-4">
          {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={`${social} link`}
            >
              <i className={`fab fa-${social}`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-medium mb-6">Quick Links</h3>
        <ul className="space-y-3">
          {['About Us', 'Services', 'Our Team', 'Testimonials', 'Contact'].map((link) => (
            <li key={link}>
              <a
                href="/404"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      {/* <div>
        <h3 className="text-lg font-medium mb-6">Our Services</h3>
        <ul className="space-y-3">
          {[
            'Loan Solutions',
            'Investment Planning',
            'Wealth Management',
            'Retirement Strategies',
            'Tax Optimization'
          ].map((service) => (
            <li key={service}>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {service}
              </a>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-medium mb-6">Contact Us</h3>
        <address className="not-italic space-y-4">
          <div className="flex items-start gap-3">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-sm pt-1" />
            
            <span className="text-gray-400">
              5/6 Somerset Ave<br />
              Narellan NSW 2567<br />
              Australia
            </span>
          </div>
          <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faPhone} className="text-sm" />
            
            <a href="tel:1300562642" className="text-gray-400 hover:text-white">
                1300 562 642
            </a>
          </div>
          <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
            <a href="mailto:info@brokersmutual.com" className="text-gray-400 hover:text-white">
              info@brokersmutual.com
            </a>
          </div>
        </address>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-800 my-8"></div>

    {/* Bottom Bar */}
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Brokers Mutual. All rights reserved.
      </p>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
          Terms of Service
        </a>
        <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
          Sitemap
        </a>
      </div>
    </div>
  </div>
</footer>
        </>
    )
}

export default Footer;


    