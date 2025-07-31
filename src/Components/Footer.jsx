import React from 'react'
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "react-icons/si"

function Footer() {
    return (
        <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-6">Capture Master</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Capturing life's most precious moments with artistic vision and professional excellence.
              </p>
              <div className="flex space-x-6">
                {[<SiInstagram/>, <SiFacebook />, <SiX />, <SiYoutube />].map((platform, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Services</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Wedding Photography</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Portrait Photography</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Event Photography</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Commercial Photography</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Videography</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li>+1 (555) 123-4567</li>
                <li>info@brothersscreation.com</li>
                <li>123 Photography Lane<br />Creative District, CA 90210</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; {new Date().getFullYear()} Capture Master - Photography & Films. All rights reserved.</p>
            <p className='text-base mt-4'>Developed by Shukardeen Gahlot</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer
