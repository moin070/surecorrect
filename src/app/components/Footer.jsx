import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Contact Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="bg-blue-600 p-2 rounded-full mr-3">
                <FaPhone className="text-white" />
              </span>
              Contact SureCorrect
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-400 mr-3" />
                <span>123 Smile Avenue, Dental City, DC 12345</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-400 mr-3" />
                <span>+91-8446117141</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <span>care@surecorrect.com</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-blue-400 mr-3" />
                <span>Mon-Fri: 8am-6pm | Sat: 9am-3pm</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="https://wa.me/8446117141" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition">
                <FaWhatsapp className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/surecorrect_aligners/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#t" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition">
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Transform Your Smile?</h3>
            <a
              href="#appointment"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 mb-4"
            >
              Book Free Consultation
            </a>
            <p className="text-sm text-gray-400">Connect with us on social media</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} SureCorrect Aligners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}