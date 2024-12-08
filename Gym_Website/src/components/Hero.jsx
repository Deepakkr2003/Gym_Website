import { motion } from 'framer-motion';
import p11 from "../images/gym1.jpg"
const Hero = () => {
  return (
    <div
    className="relative h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${p11})` }} 
  >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <div className="relative z-20 text-white text-center px-4 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Your  <span className="text-blue-400">Fitness </span>  
           Journey Starts <span className="text-green-400">Here</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Cutting-edge fitness experience with world-class trainers and state-of-the-art equipment.
        </motion.p>

       

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105"
        >
          Start Your Journey
        </motion.button>

        

       
      </div>
    </div>
  );
};

export default Hero;