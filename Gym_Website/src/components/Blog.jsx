import { motion } from 'framer-motion';
import p8 from "../images/p8.avif"
import p9 from "../images/p9.avif"
import p10 from "../images/p10.avif"

const Blog = () => {
  const posts = [
    {
      title: 'The Benefits of High-Intensity Interval Training',
      excerpt: 'Discover how HIIT can transform your fitness and boost your metabolism.',
      image: p10
    },
    {
      title: 'Yoga for Strength: Building Muscle Through Mindful Movement',
      excerpt: 'Explore how yoga can help you build strength and improve flexibility.',
      image: p8
    },
    {
      title: 'The Importance of Proper Form in Strength Training',
      excerpt: 'Learn why correct form is crucial for maximizing results and avoiding injury.',
      image: p9
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">From the Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400">{post.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;