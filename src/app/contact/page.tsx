import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faHandshake, faLock, faMapMarkerAlt, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return(
        <>
        {/* <!-- Hero Section --> */}
    <section className="contact-hero text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Contact Our Financial Experts</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-secondary-200">Have questions about our services or need financial advice? Reach out to our team of certified professionals.</p>
        </div>
    </section>

    <div className="flex items-center justify-center mb-6 pt-20 pb-10">
          <div className="h-px bg-blue-600 w-8 mr-4"></div>
          <span className="text-blue-600 font-medium tracking-wider text-sm uppercase">Response within 24hrs</span>
          <div className="h-px bg-blue-600 w-8 ml-4"></div>
    </div>
    
    <div className='flex items-center flex-col justify-center px-5 text-center md:px-20 pb-10'>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-5">Contact Us Now</h2>
        <p className="text-slate-600 leading-relaxed">One of your brokers will contact you shortly, we are here to support you. If you need immediate assistance please call us.</p>
    </div>
    


    {/* <!-- Contact Form --> */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="md:flex">
                    <div className="md:w-1/2 bg-slate-900 text-white p-8 md:p-12">
                        <h2 className="text-2xl font-bold mb-4">Get Personalised Financial Advice</h2>
                        <p className="mb-6 text-primary-100">Fill out the form and one of our financial experts will contact you within 24 hours to discuss your needs.</p>
                        
                        <div className="space-y-10 py-10">
                            <div className="flex items-start space-x-2">
                            <FontAwesomeIcon icon={faUser} className="text-sm pt-1 text-blue-500" />
                                
                                <div>
                                    <h4 className="font-bold ">Certified Advisors</h4>
                                    <p className="text-primary-50 text-sm">All our consultants are certified financial planners.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-2">
                            <FontAwesomeIcon icon={faLock} className="text-sm pt-1 text-blue-500" />
                                
                                <div>
                                    <h4 className="font-bold">Secure Communication</h4>
                                    <p className="text-primary-50 text-sm">Your information is protected with bank-level encryption.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-2">
                            <FontAwesomeIcon icon={faHandshake} className="text-sm pt-1 text-blue-500" />
                                
                                <div>
                                    <h4 className="font-bold">No Obligation</h4>
                                    <p className="text-primary-50 text-sm">Initial consultations are completely free with no commitment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 p-8 md:p-12">
                        <h3 className="text-xl font-bold mb-6 text-secondary-900">Send Us a Message</h3>
                        <form 
                                action="https://api.web3forms.com/submit" 
                                method="POST"
                                className="max-w-md mx-auto"
                                >
                                <input 
                                    type="hidden" 
                                    name="access_key" 
                                    value="3c05d15c-bf5d-4dcf-b4b5-412e6ca61337" 
                                />
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-secondary-700 font-medium mb-2">Full Name</label>
                                <input 
                                name="name" 
                                type="text" id="name" 
                                className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                                placeholder="John Smith" required/>
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-secondary-700 font-medium mb-2">Email Address</label>
                                <input name="email" 
                                type="email" 
                                id="email" 
                                className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                                placeholder="john@example.com" required/>
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-secondary-700 font-medium mb-2">Phone Number</label>
                                <input 
                                name="number"
                                type="tel" id="phone" 
                                className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" 
                                placeholder="(+61) 456 567 112"/>
                            </div>
                            
                            
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-secondary-700 font-medium mb-2">Your Message</label>
                                <textarea id="message" className="form-input w-full px-4 py-2 h-30 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Tell us about your financial goals..."></textarea>
                            </div>
                            {/* Honeypot spam protection */}
                            <input 
                                type="hidden" 
                                name="enable_recaptcha" 
                                value="true" 
                                />
                                <input 
                                type="hidden" 
                                name="javascript" 
                                value="true" 
                                />
                            <button type="submit" className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-primary-700 transition shadow-md hover:shadow-lg">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&apos;re conveniently located to serve your safety compliance needs across the region.
            </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information Card - Moved to left */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 order-1 lg:order-1">
                <div className="space-y-6">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-500 text-xl mr-4" />
                    <div>
                    <h3 className="text-xl font-bold mb-1">Head Office</h3>
                    <p className="text-gray-600">
                    5/6 Somerset Ave
                    Narellan NSW 2567
                    <br />
                        Australia
                    </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="text-primary-500 text-xl mr-4" />
                    <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">
                        <a href="tel:1300562642" className="hover:text-primary-600 transition">
                        1300 562 642
                        </a>
                    </p>
                    </div>
                </div>

                <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-primary-500 text-xl mr-4" />
                    <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">
                        <a href="mailto:service@firevolt.com.au" className="hover:text-primary-600 transition">
                        info@brokersmutual.com.au
                        </a>
                    </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <FontAwesomeIcon icon={faClock} className="text-primary-500 text-xl mr-4 mt-1" />
                    <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                        Mon-Fri: 8:00 AM - 5:00 PM<br />
                        Sat: 9:00 AM - 1:00 PM<br />
                        Sun: Closed
                    </p>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                    Operating All Year Round<br />
                    Appointments recommended
                    </p>
                </div>
                </div>
            </div>

            {/* Google Maps Embed - Centered and larger */}
            <div className="lg:col-span-2 order-2 lg:order-2">
                <div className="rounded-xl overflow-hidden shadow-lg h-full min-h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.1285672704726!2d150.7386441!3d-34.040573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f1bbd9cfeb4d%3A0xc74738ad8eceb4dc!2sBrokers%20Mutual%20Acceptance!5e0!3m2!1sen!2sau!4v1746140358922!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="min-h-[400px]"
                    title="Business Location Map"
                ></iframe>
                </div>
            </div>
            </div>

            {/* CTA Buttons - Now side by side under the map */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
                href="https://maps.app.goo.gl/Y6YmdzxeDZHpMVDQA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md hover:shadow-lg flex-1 sm:flex-none sm:w-auto text-center"
            >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Open in Google Maps
            </a>
            <a
                href="tel:1300562642"
                className="inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition shadow-md hover:shadow-lg flex-1 sm:flex-none sm:w-auto text-center"
            >
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-primary-500" />
                Call Us Now
            </a>
            </div>
        </div>
    </section>
    
{/* <!-- Contact Options --> */}
<section className="py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Contact Card 1 --> */}
                <div className="contact-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                    <div className="contact-icon w-16 h-16 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6 mx-auto">
                        
                    <FontAwesomeIcon icon={faPhone} className="text-sm" />
                    
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center">Phone Support</h3>
                    <p className="text-secondary-600 text-center mb-4">Speak directly with a financial advisor during business hours.</p>
                    <div className="text-center">
                        <a href="tel:+18001234567" className="text-primary-600 font-semibold hover:text-primary-800 transition">+1 (800) 123-4567</a>
                        <p className="text-sm text-secondary-500 mt-1">Mon-Fri, 9am-5pm EST</p>
                    </div>
                </div>
                
                {/* <!-- Contact Card 2 --> */}
                <div className="contact-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                    <div className="contact-icon w-16 h-16 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6 mx-auto">
                        
                    <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center">Email Us</h3>
                    <p className="text-secondary-600 text-center mb-4">Send us your questions and we&apos;ll respond within 24 hours.</p>
                    <div className="text-center">
                        <a href="mailto:info@Brokers Mutual.com" className="text-primary-600 font-semibold hover:text-primary-800 transition">info@Brokers Mutual.com</a>
                        <p className="text-sm text-secondary-500 mt-1">General inquiries</p>
                    </div>
                </div>
                
                {/* <!-- Contact Card 3 --> */}
                <div className="contact-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
                    <div className="contact-icon w-16 h-16 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center text-2xl mb-6 mx-auto">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-sm" />
                        
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center">Visit Us</h3>
                    <p className="text-secondary-600 text-center mb-4">Schedule an in-person consultation at our headquarters.</p>
                    <div className="text-center">
                        <p className="text-secondary-700">5/22 Sommerset Ave</p>
                        <p className="text-secondary-700">Narellan, NSW 2567</p>
                        <a href="https://www.google.com/maps/place/Brokers+Mutual+Acceptance/@-34.040573,150.7386441,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12f1bbd9cfeb4d:0xc74738ad8eceb4dc!8m2!3d-34.040573!4d150.7386441!16s%2Fg%2F11bbvpm08b?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" className="text-primary-600 text-sm font-semibold hover:text-primary-800 transition mt-2 inline-block">Get Directions →</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Contact