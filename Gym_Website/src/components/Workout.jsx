import React from 'react';
import { FaDumbbell, FaRunning } from 'react-icons/fa'; 

const Workout = () => {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Achieve Your Fitness Goals with Our Workouts
        </h2>
        <p className="text-gray-200 mb-12 text-lg max-w-2xl mx-auto">
          Our workout plans are designed to cater to all fitness levels. Whether you're looking to build strength, improve cardiovascular health, or increase flexibility, we have something for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <div className="bg-white text-gray-900 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-purple-600 text-white py-6 text-center">
              <FaDumbbell className="text-5xl mb-3 mx-auto" />
              <h3 className="text-2xl font-semibold">Strength Training</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Our strength training program is designed to help you build muscle, increase strength, and improve overall physical performance.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Full-body workouts</li>
                <li>Focus on compound lifts (squats, deadlifts, bench press)</li>
                <li>Progressive overload principles</li>
              </ul>
              <a href="/workoutplan" className="inline-block bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300">
                Get Started
              </a>
            </div>
          </div>

          <div className="bg-white text-gray-900 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-pink-600 text-white py-6 text-center">
              <FaRunning className="text-5xl mb-3 mx-auto" />
              <h3 className="text-2xl font-semibold">Cardio Workouts</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Our cardio workouts are designed to improve cardiovascular endurance, burn fat, and boost overall fitness.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>HIIT sessions</li>
                <li>Endurance building activities (running, cycling)</li>
                <li>Fat-burning circuits</li>
              </ul>
              <a href="/workoutplan" className="inline-block bg-pink-600 text-white py-2 px-6 rounded-full hover:bg-pink-700 transition duration-300">
                Get Started
              </a>
            </div>
          </div>

          <div className="bg-white text-gray-900 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-indigo-600 text-white py-6 text-center">
              <h3 className="text-2xl font-semibold">Yoga & Flexibility</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Our yoga and flexibility program is designed to enhance your mobility, reduce stress, and improve posture.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Vinyasa and Hatha yoga flows</li>
                <li>Flexibility and mobility drills</li>
                <li>Breathing techniques for relaxation</li>
              </ul>
              <a href="/workoutplan" className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300">
                Get Started
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Workout;