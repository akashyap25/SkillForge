import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="flex justify-center py-4 px-6 bg-blue-900/90 shadow-lg fixed w-full z-10 transition duration-300 ease-in-out">
      <ul className="flex space-x-10 text-white font-semibold">
        {['Home', 'Services', 'Demos', 'Testimonials', 'Contact'].map((section) => (
          <li key={section}>
            <Link
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              className="hover:text-teal-400 transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
