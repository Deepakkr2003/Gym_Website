import { motion } from 'framer-motion';
import p2 from "../images/p2.avif"
import p3 from "../images/p3.avif"
import p4 from "../images/p4.avif"
import p5 from "../images/p5.avif"
import p6 from "../images/p6.avif"
import p7 from "../images/p7.avif"
import g1 from "../images/g1.jpg"
import g2 from "../images/g2.jpg"
import g3 from "../images/g3.jpg"
import g4 from "../images/g4.jpg"
import g5 from "../images/g5.jpg"
import g6 from "../images/g6.jpg"

const Gallery = () => {
  const images = [
    g1,g2,g3,g4,g5,p2,p3,p4,p5,p6,p7,g6
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img src={image} alt={`Gallery Image ${index}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;