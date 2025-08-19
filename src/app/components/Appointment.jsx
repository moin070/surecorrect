"use client"
import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHashtag } from "react-icons/fa";
import emailjs from "emailjs-com";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Phone Validation
  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/; // only 10 digits
    return regex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate phone before sending
    if (!validatePhone(formData.phone)) {
      setError("📱 Phone number must be exactly 10 digits.");
      setTimeout(() => setError(""), 3000); // clear after 3 sec
      return;
    }

    // Send Email via EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS Template ID
        formData,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setSubmitted(true);
          setFormData({
            name: "",
            phone: "",
            email: "",
            address: "",
            pincode: "",
          });
          setTimeout(() => setSubmitted(false), 5000);
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <section id="appointment" className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Book Your Appointment</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Begin your smile transformation journey with SureCorrect today
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Book Your Appointment</h3>

              {/* ✅ Error Message */}
              {error && (
                <div className="mb-4 text-red-600 text-center font-medium">
                  {error}
                </div>
              )}

              {submitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Appointment Request Sent!</h4>
                  <p className="text-gray-600 mb-4">We'll contact you shortly to confirm your booking.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Name */}
                    <div className="flex items-center border-b border-gray-200 py-2">
                      <FaUser className="text-gray-400 mr-3" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="flex-1 py-2 outline-none text-gray-700"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex items-center border-b border-gray-200 py-2">
                      <FaPhone className="text-gray-400 mr-3" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Contact Number"
                        className="flex-1 py-2 outline-none text-gray-700"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="flex items-center border-b border-gray-200 py-2">
                      <FaEnvelope className="text-gray-400 mr-3" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="flex-1 py-2 outline-none text-gray-700"
                        required
                      />
                    </div>

                    {/* Address */}
                    <div className="flex items-center border-b border-gray-200 py-2">
                      <FaMapMarkerAlt className="text-gray-400 mr-3" />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Address"
                        className="flex-1 py-2 outline-none text-gray-700"
                        required
                      />
                    </div>

                    {/* Pincode */}
                    <div className="flex items-center border-b border-gray-200 py-2">
                      <FaHashtag className="text-gray-400 mr-3" />
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="Pincode"
                        className="flex-1 py-2 outline-none text-gray-700"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right side info remains unchanged */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Why Book With SureCorrect?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Fast Appointments</h4>
                      <p className="text-gray-600">Same-week availability for new consultations</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Safety First</h4>
                      <p className="text-gray-600">Sterilized equipment and COVID-safe practices</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Flexible Payments</h4>
                      <p className="text-gray-600">Interest-free installment plans available</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Virtual Consultations</h4>
                      <p className="text-gray-600">Available for follow-ups and initial assessments</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">Clinic Hours</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 3:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Emergency only</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
