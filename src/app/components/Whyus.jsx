import React from 'react';
import { FaTooth, FaSmile, FaShieldAlt, FaClock, FaMoneyBillWave, FaUserMd } from 'react-icons/fa';

const WhyUs = () => {
  const features = [
    {
      icon: <FaTooth className="text-3xl text-blue-600" />,
      title: "Precision Fit",
      description: "Our SureCorrect aligners use advanced 3D scanning technology for a perfect, comfortable fit every time."
    },
    {
      icon: <FaSmile className="text-3xl text-blue-600" />,
      title: "Visible Results",
      description: "See noticeable changes in your smile within weeks with our optimized tooth movement technology."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Safe Materials",
      description: "FDA-approved, BPA-free plastic that's gentle on your teeth and gums while being highly effective."
    },
    {
      icon: <FaClock className="text-3xl text-blue-600" />,
      title: "Faster Treatment",
      description: "Our proprietary SmartForce technology can reduce treatment time by up to 30% compared to others."
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-blue-600" />,
      title: "Cost Effective",
      description: "High-quality treatment at half the cost of traditional braces with flexible payment options."
    },
    {
      icon: <FaUserMd className="text-3xl text-blue-600" />,
      title: "Expert Supervision",
      description: "All treatments are personally supervised by our certified orthodontic specialists."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="whyus">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose SureCorrect Aligners?</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            The smarter way to straighten your teeth with cutting-edge technology and expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Ready for Your New Smile?</h3>
              <p className="mb-6">
                Take the first step towards confidence with SureCorrect. Our free consultation includes a 3D scan of your teeth and a personalized treatment plan.
              </p>
              <a href='#appointment' className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition duration-300">
                Book Free Consultation
              </a>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48">
                <img 
                  src="/assets/img5.webp" 
                  alt="SureCorrect Aligner Display"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;