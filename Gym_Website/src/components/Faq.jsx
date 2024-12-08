import { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-white mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              onClick={() => toggleQuestion(0)} 
              className="cursor-pointer px-6 py-4 bg-teal-600 text-white flex justify-between items-center hover:bg-gray-700 transition-all"
            >
              <span className="text-xl font-semibold">What are the gym's hours of operation?</span>
              <span className="text-2xl">{activeIndex === 0 ? '-' : '+'}</span>
            </div>
            {activeIndex === 0 && (
              <div className="px-6 py-4 text-gray-700">
                Our gym is open Monday to Friday from 6:00 AM to 9:00 PM, and on weekends from 8:00 AM to 6:00 PM.
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              onClick={() => toggleQuestion(1)} 
              className="cursor-pointer px-6 py-4 bg-teal-600 text-white flex justify-between items-center hover:bg-gray-700 transition-all"
            >
              <span className="text-xl font-semibold">Do I need a membership to work out?</span>
              <span className="text-2xl">{activeIndex === 1 ? '-' : '+'}</span>
            </div>
            {activeIndex === 1 && (
              <div className="px-6 py-4 text-gray-700">
                Yes, our gym requires a membership to access the facilities. You can choose from various membership plans that suit your needs.
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              onClick={() => toggleQuestion(2)} 
              className="cursor-pointer px-6 py-4 bg-teal-600 text-white flex justify-between items-center hover:bg-gray-700 transition-all"
            >
              <span className="text-xl font-semibold">What equipment do you have?</span>
              <span className="text-2xl">{activeIndex === 2 ? '-' : '+'}</span>
            </div>
            {activeIndex === 2 && (
              <div className="px-6 py-4 text-gray-700">
                We have a wide range of cardio machines, free weights, weight machines, and specialized equipment like kettlebells and resistance bands.
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              onClick={() => toggleQuestion(3)} 
              className="cursor-pointer px-6 py-4 bg-teal-600 text-white flex justify-between items-center hover:bg-gray-700 transition-all"
            >
              <span className="text-xl font-semibold">Do you offer personal training?</span>
              <span className="text-2xl">{activeIndex === 3 ? '-' : '+'}</span>
            </div>
            {activeIndex === 3 && (
              <div className="px-6 py-4 text-gray-700">
                Yes, we offer personal training sessions with certified trainers. You can book a session through our website or at the front desk.
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              onClick={() => toggleQuestion(4)} 
              className="cursor-pointer px-6 py-4 bg-teal-600 text-white flex justify-between items-center hover:bg-gray-700 transition-all"
            >
              <span className="text-xl font-semibold">Can I freeze my membership?</span>
              <span className="text-2xl">{activeIndex === 4 ? '-' : '+'}</span>
            </div>
            {activeIndex === 4 && (
              <div className="px-6 py-4 text-gray-700">
                Yes, we offer the option to freeze your membership for a period of time if you're unable to attend the gym. Please contact us for more details.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;