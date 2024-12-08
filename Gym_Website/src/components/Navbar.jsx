import { Link } from 'react-router-dom';
import p12 from "../images/p12.webp"; // Your gym logo

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo and Website Title */}
        <div className="flex items-center space-x-3">
          <img src={p12} alt="Gym Logo" className="h-15 w-10" /> 
          <Link to="/" className="text-2xl text-green-700 font-bold">GymGlow</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 mx-auto">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
          </li>
          <li>
            <Link to="/dietplan" className="hover:text-blue-400 transition-colors">Diet Plan</Link>
          </li>
          <li>
            <Link to="/workoutplan" className="hover:text-blue-400 transition-colors">Workout Plan</Link>
          </li>
          <li>
            <Link to="/membershipplan" className="hover:text-blue-400 transition-colors">Membership Plan</Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-blue-400 transition-colors">FAQs</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-blue-400 transition-colors">Gallery</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </li>
        </ul>

        <div className="ml-6">
          <Link 
            to="/login"
            className="px-6 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;