import React from 'react'
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "react-icons/si"

function Contact() {
    return (
        <section id="contact" className="py-24 bg-bgTwo">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-4xl font-bold text-secondary mb-6 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-xl md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to capture your special moments? Let's discuss your project and create something beautiful together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-secondary mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-center p-6 bg-gray-50 rounded-2xl transition-colors duration-300">
                  <div className="bg-secondary p-4 rounded-xl mr-6">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Phone</h4>
                    <p className="text-gray-600 text-base">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center p-6 bg-gray-50 rounded-2xl transition-colors duration-300">
                  <div className="bg-secondary p-4 rounded-xl mr-6">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Email</h4>
                    <p className="text-gray-600 text-base">info@capturemaster.com</p>
                  </div>
                </div>
                
                <div className="flex items-center p-6 bg-gray-50 rounded-2xl transition-colors duration-300">
                  <div className="bg-secondary p-4 rounded-xl mr-6">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Studio Address</h4>
                    <p className="text-gray-600 text-base">123 Photography Lane<br />Creative District, CA 90210</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-semibold text-gray-900 text-xl mb-6">Follow Us</h4>
                <div className="flex space-x-4">
                  {[<SiInstagram className='text-primary' />, <SiFacebook className='text-primary' />, <SiX className='text-primary' />, <SiYoutube className='text-primary' />].map((platform, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="bg-secondary p-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <span >{platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-3">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 text-lg"
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="event">Event Photography</option>
                    <option value="commercial">Commercial Photography</option>
                    <option value="videography">Videography Services</option>
                    <option value="editing">Photo Editing</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 text-lg resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-black text-primary hover:text-white cursor-pointer py-4 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-101 shadow-lg hover:shadow-xl text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact
