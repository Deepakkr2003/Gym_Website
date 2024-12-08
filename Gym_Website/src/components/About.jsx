import { motion } from 'framer-motion';
import p1 from "../images/p1.avif"
const About = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.img
            src={p1}
            alt="Gym Facilities"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg"
          />
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Welcome to Our Gym
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mb-6"
          >
            At our state-of-the-art gym, we're dedicated to helping you achieve your fitness goals. With top-notch equipment, expert trainers, and a welcoming community, we provide the perfect environment for transforming your body and elevating your life.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 mb-8"
          >
            Whether you're looking to build muscle, lose weight, or improve your overall well-being, our comprehensive range of fitness classes and personalized training programs are designed to cater to your unique needs. Join us and embark on a journey towards a healthier, stronger, and more confident you.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;