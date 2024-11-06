const Testimonials = () => (
  <section className="py-20 bg-gray-100">
    <h2 className="text-center text-4xl font-extrabold text-blue-700 mb-10">What Our Clients Say</h2>
    <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">
      {[
        { text: "Great service! My resume was ATS-friendly and helped me land interviews!", author: "John Doe, University of XYZ" },
        { text: "The project guidance was exceptional. I now understand how to build industry-level projects.", author: "Jane Smith, ABC Institute" },
      ].map(({ text, author }, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
          <p className="text-gray-700 italic mb-4">"{text}"</p>
          <h4 className="text-blue-900 font-semibold">{author}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
