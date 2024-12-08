import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-center md:text-left mb-8 md:mb-0">
          <div className="font-bold text-3xl mb-2">Gym Fluencer</div>
          <p className="text-gray-400 text-lg">Transform your body and elevate your life with world-class training and equipment.</p>
          <p className="text-gray-400 mt-2">© 2024 Gym Website. All rights reserved.</p>
        </div>

        <div className="flex space-x-6 mb-8 md:mb-0">
          <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600 transition duration-300">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500 transition duration-300">
            <FaInstagram size={30} />
          </a>
          <a href="https://youtube.com" className="text-gray-400 hover:text-red-600 transition duration-300">
            <FaYoutube size={30} />
          </a>
        </div>

        <div className="text-center md:text-right text-gray-400">
          <p className="mb-2">123 Fitness St., Gym City</p>
          <p className="mb-2">Mon - Fri: 6:00 AM - 9:00 PM</p>
          <p className="mb-2">Sat - Sun: 8:00 AM - 6:00 PM</p>
          <p>Email: <a href="mailto:info@gymwebsite.com" className="text-blue-400">info@gymwebsite.com</a></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;