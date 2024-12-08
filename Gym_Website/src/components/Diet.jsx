import React from 'react';
import { FaAppleAlt, FaRunning, FaWeight } from 'react-icons/fa'; 

const Diet = () => {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Fuel Your Body with Our Customized Diet Plans
        </h2>
        <p className="text-gray-200 mb-12 text-lg max-w-3xl mx-auto">
          Whether you're trying to lose weight, build muscle, or maintain a healthy lifestyle, our diet plans are designed to help you achieve your goals effectively.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-blue-600 text-white py-6 text-center">
              <FaAppleAlt className="text-4xl mb-3 mx-auto" />
              <h3 className="text-2xl font-semibold">Beginner Diet Plan</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                A simple, balanced diet plan that includes wholesome foods, perfect for those just starting their fitness journey.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>3 balanced meals per day</li>
                <li>Focus on lean proteins and vegetables</li>
                <li>Moderate healthy fats and carbs</li>
              </ul>
              <a href="/dietplan" className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-yellow-500 text-white py-6 text-center">
              <FaRunning className="text-4xl mb-3 mx-auto" />
              <h3 className="text-2xl font-semibold">Intermediate Diet Plan</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Ideal for individuals who have some fitness experience. This plan includes higher protein intake to help build muscle and improve energy.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>4 meals a day, including snacks</li>
                <li>Higher protein and moderate carbs</li>
                <li>Focus on muscle recovery and endurance</li>
              </ul>
              <a href="/dietplan" className="inline-block bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition duration-300">
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-red-600 text-white py-6 text-center">
              <FaWeight className="text-4xl mb-3 mx-auto" />
              <h3 className="text-2xl font-semibold">Advanced Diet Plan</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                For fitness enthusiasts or athletes who need precise, performance-oriented nutrition. This plan includes strict macronutrient ratios and meal timing.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>5+ meals per day with nutrient timing</li>
                <li>Custom macronutrient ratios for strength and recovery</li>
                <li>High protein, low carb or keto options</li>
              </ul>
              <a href="/dietplan" className="inline-block bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300">
                Learn More
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Diet;