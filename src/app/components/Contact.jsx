"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaTooth,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // validation for phone
  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      setStatus("Phone number must be exactly 10 digits.");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    // EmailJS send
    emailjs
      .send(
        "service_9gwc0ej", // Replace with EmailJS service ID
        "template_mrkjbac", // Replace with EmailJS template ID
        formData,
        "eR6hz0BNrUgdvufJy" // Replace with EmailJS public key
      )
      .then(
        (result) => {
          setStatus("✅ Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again.");
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-white">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Contact SureCorrect
      </h2>
      <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Have questions about your smile journey? Our team is ready to help.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row gap-8">
      {/* Contact Info */}
      <div className="lg:w-2/5 bg-blue-50 rounded-xl p-8 h-fit">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Get in Touch
        </h3>

        <div className="space-y-6">
          {/* Call Us */}
          <div
            className="flex items-start cursor-pointer"
            onClick={() => (window.location.href = "tel:+919850007428")}
          >
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FaPhone className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Call Us</h4>
              <p className="text-gray-600">+91-9850007428</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8am-6pm</p>
            </div>
          </div>

          {/* Email Us */}
          <div
            className="flex items-start cursor-pointer"
            onClick={() =>
              (window.location.href = "mailto:surecorrect.aligners@gmail.com")
            }
          >
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FaEnvelope className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Email Us</h4>
              <p className="text-gray-600">surecorrect.aligners@gmail.com</p>
              <p className="text-sm text-gray-500 mt-1">
                Response within 24 hours
              </p>
            </div>
          </div>

          {/* Visit Us - All three locations */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-800">Our Locations</h4>
            
            {/* Location 1 */}
            <div
              className="flex items-start cursor-pointer p-3 bg-blue-100 rounded-lg"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Smile+Craft+Orthodontic+Care+Center+,+Multi+Speciality+Dental+Clinic+And+OPG+Center/@21.1649832,73.7947979,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdfc97f7efc39fb:0x21eeefb67f5fedb6!8m2!3d21.1649782!4d73.7973728!16s%2Fg%2F11mw5p4zg1?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
                  "_blank"
                )
              }
            >
              <div className="bg-white p-2 rounded-full mr-3">
                <FaMapMarkerAlt className="text-blue-600 text-sm" />
              </div>
              <div>
                <h5 className="font-medium text-gray-700">Smile Craft Orthodontic Care</h5>
                <p className="text-sm text-gray-600">
                  Near Astha hospital Navapur, DIST - Nandurbar Maharashtra, India Pin -425418
                </p>
                <p className="text-sm text-gray-600">7972702409</p>
              </div>
            </div>

            {/* Location 2 */}
            <div
              className="flex items-start cursor-pointer p-3 bg-blue-100 rounded-lg"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/The+Dental+Corner/@19.0055176,73.1168181,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7e9d511d866f7:0x8268984cfed9dca0!8m2!3d19.0055125!4d73.119393!16s%2Fg%2F11f53rv9n1?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D",
                  "_blank"
                )
              }
            >
              <div className="bg-white p-2 rounded-full mr-3">
                <FaMapMarkerAlt className="text-blue-600 text-sm" />
              </div>
              <div>
                <h5 className="font-medium text-gray-700">The Dental Corner</h5>
                <p className="text-sm text-gray-600">
                  Tulsi heights building, near bank of Maharashtra, Gurudwara road, sector 5, new panvel, 410206
                </p>
                <p className="text-sm text-gray-600">70210 61453</p>
              </div>
            </div>

            {/* Location 3 */}
            <div
              className="flex items-start cursor-pointer p-3 bg-blue-100 rounded-lg"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps?q=123+Smile+Avenue+Dental+City+DC+12345",
                  "_blank"
                )
              }
            >
              <div className="bg-white p-2 rounded-full mr-3">
                <FaMapMarkerAlt className="text-blue-600 text-sm" />
              </div>
              <div>
                <h5 className="font-medium text-gray-700">Aikyam Dental System</h5>
                <p className="text-sm text-gray-600">
                  102,Haute capital,ANP atlantis road,Near Jupiter hospital,Baner Pune-411045.
                </p>
                <p className="text-sm text-gray-600">9850007428</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 pt-6 border-t border-blue-200">
          <h4 className="font-medium text-gray-800 mb-3">
            Emergency Contact
          </h4>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => (window.location.href = "tel:+919130703905")}
          >
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <FaTooth className="text-red-600" />
            </div>
            <p className="text-gray-600">After hours: +91-9130703905</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:w-3/5 bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Send Us a Message
        </h3>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              placeholder="10-digit mobile number"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-700 mb-2">
              Subject
            </label>
            <select
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              required
            >
              <option value="">Select a topic</option>
              <option value="consultation">Free Consultation</option>
              <option value="treatment">Treatment Questions</option>
              <option value="billing">Billing Inquiry</option>
              <option value="emergency">Emergency</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>

          {status && (
            <p className="text-center text-sm font-medium text-red-600">
              {status}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

    {/* Map Section with all three locations */}
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Our Clinic Locations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Map 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.156268711684!2d73.7947979!3d21.1649832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdfc97f7efc39fb%3A0x21eeefb67f5fedb6!2sSmile%20Craft%20Orthodontic%20Care%20Center%20-%20Multi%20Speciality%20Dental%20Clinic%20And%20OPG%20Center!5e0!3m2!1sen!2sin!4v1724899999999!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Smile Craft Orthodontic Care Center"
            ></iframe>
          </div>
          <div className="p-4">
            <h4 className="font-semibold text-gray-800">Smile Craft Orthodontic Care</h4>
            <p className="text-sm text-gray-600 mt-1">Near Astha hospital Navapur, Nandurbar, Maharashtra</p>
          </div>
        </div>

        {/* Map 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715919202896!2d73.1168181!3d19.0055176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9d511d866f7%3A0x8268984cfed9dca0!2sThe%20Dental%20Corner!5e0!3m2!1sen!2sin!4v1724900000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="The Dental Corner"
            ></iframe>
          </div>
          <div className="p-4">
            <h4 className="font-semibold text-gray-800">The Dental Corner</h4>
            <p className="text-sm text-gray-600 mt-1">Tulsi heights building, new panvel, 410206</p>
          </div>
        </div>

        {/* Map 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.698210899737!2d73.76231477599999!3d18.54538238255879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf4aeb1ecc9f%3A0x6a5e2e7e7c5f5b1e!2sAikyam%20Dental%20System!5e0!3m2!1sen!2sin!4v1724900000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Aikyam Dental System"
            ></iframe>
          </div>
          <div className="p-4">
            <h4 className="font-semibold text-gray-800">Aikyam Dental System</h4>
            <p className="text-sm text-gray-600 mt-1">Haute capital, Baner, Pune-411045</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
