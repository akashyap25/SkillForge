import { motion } from 'framer-motion';
import Services from './Services';
import Demos from './Demo';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Home = () => (
  <div>
     {/* Hero Section */}
     <section
      id="home"
      className="flex flex-col items-center justify-center h-screen text-center py-20 px-4 bg-gradient-to-r from-blue-800 to-teal-600 text-white"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide"
        animate={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{ duration: 0.8 }}
      >
        Welcome to SkillForge
      </motion.h1>
      <motion.p
        className="mb-8 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
        animate={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Shape your future with real-world projects, industry-ready skills, and
        expertly crafted resumes designed to make an impact.
      </motion.p>
      <motion.a
        href="https://wa.me/7274033260"
        className="inline-block px-10 py-4 bg-teal-500 text-white font-semibold text-lg rounded-lg hover:bg-teal-400 transition duration-200 shadow-lg transform hover:scale-105"
        animate={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Start Now – Chat on WhatsApp
      </motion.a>
    </section>

    {/* Services Section */}
    <section id="services" className="min-h-screen flex items-center justify-center bg-gray-100">
      <Services />
    </section>

    {/* Demos Section */}
    <section id="demos" className="min-h-screen flex items-center justify-center bg-white">
      <Demos />
    </section>

    {/* Testimonials Section */}
    <section id="testimonials" className="min-h-screen flex items-center justify-center bg-gray-100">
      <Testimonials />
    </section>

    {/* Contact Section */}
    <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
      <Contact />
    </section>
  </div>
);

export default Home;
