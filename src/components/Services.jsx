import { FaFileAlt, FaProjectDiagram, FaHandshake } from 'react-icons/fa';

const services = [
  { title: 'Resume Crafting', description: 'Get ATS-friendly resumes tailored for your industry.', icon: <FaFileAlt /> },
  { title: 'Project Assistance', description: 'Work on curated projects with expert guidance.', icon: <FaProjectDiagram /> },
  { title: 'Internship Certificates', description: 'Earn certificates to showcase your skills.', icon: <FaHandshake /> },
];

const Services = () => (
  <section className="py-20 bg-gray-100">
    <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-blue-700 mb-10">Our Services</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center transform hover:scale-105 transition duration-300 w-full sm:w-auto">
          <div className="text-teal-500 text-4xl mb-4">{service.icon}</div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-900">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
