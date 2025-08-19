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
        "service_9gwc0ej",   // Replace with EmailJS service ID
        "template_mrkjbac",  // Replace with EmailJS template ID
        formData,
        "eR6hz0BNrUgdvufJy"    // Replace with EmailJS public key
      )
      .then(
        (result) => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
            <div className="lg:w-1/3 bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Call Us</h4>
                  <p className="text-gray-600">+91-9850007428</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8am-6pm</p>
                </div>
              </div>

              <div className="flex items-start">
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

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Visit Us</h4>
                  <p className="text-gray-600">123 Smile Avenue</p>
                  <p className="text-gray-600">Dental City, DC 12345</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaClock className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Clinic Hours</h4>
                  <p className="text-gray-600">Monday-Friday: 8am-6pm</p>
                  <p className="text-gray-600">Saturday: 9am-3pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-200">
              <h4 className="font-medium text-gray-800 mb-3">
                Emergency Contact
              </h4>
              <div className="flex items-center">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <FaTooth className="text-red-600" />
                </div>
                <p className="text-gray-600">After hours: +91-9130703905</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-gray-50 rounded-xl p-8">
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

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-96 w-full bg-gray-200 flex items-center justify-center">
            {/* Replace with your actual map embed */}
            <div className="text-center p-8">
              <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800">Our Clinic Location</h4>
              <p className="text-gray-600 mt-2">123 Smile Avenue, Dental City, DC 12345</p>
              <a 
                href="https://www.google.com/maps/place/Alephata,+Maharashtra+412411/@19.1853762,74.0938317,16z/data=!3m1!4b1!4m6!3m5!1s0x3bdd23b81f4508ed:0xbb9dfa367a216b6!8m2!3d19.1829311!4d74.0959445!16s%2Fg%2F11xk1wncy?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
