import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Diet from './components/Diet'
import Faq from './components/Faq';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Workout from './components/Workout';
import Login from "./components/Login"
import Pricing from "./components/Pricing"
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/dietplan" element={<Diet />} />
          <Route path="/workoutplan" element={<Workout />} />
          <Route path="/membershipplan" element={<Pricing />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;