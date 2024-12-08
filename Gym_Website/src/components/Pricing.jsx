import { Users, Clock, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = ['Basic', 'Pro', 'Elite'];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Membership Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-8 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan} Membership</h3>
              <p className="text-4xl font-bold text-blue-500 mb-6">
                ${(index + 1) * 29}<span className="text-sm">/month</span>
              </p>
              <ul className="mb-8 space-y-4">
                <li className="flex items-center justify-center">
                  <Users className="mr-2 w-5 h-5" /> Group Classes
                </li>
                <li className="flex items-center justify-center">
                  <Clock className="mr-2 w-5 h-5" /> 24/7 Access
                </li>
                <li className="flex items-center justify-center">
                  <Trophy className="mr-2 w-5 h-5" /> Free Fitness Assessment
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full transition-colors">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;