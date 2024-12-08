import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-700 p-8 rounded-lg"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-600 border-none rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-600 border-none rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full bg-gray-600 border-none rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full transition-colors">
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;