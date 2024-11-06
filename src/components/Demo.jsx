const Demos = () => (
  <section id="demos" className="py-20 bg-white">
    <h2 className="text-center text-4xl font-extrabold text-blue-700 mb-10">Project Demos</h2>
    <div className="flex justify-center space-x-8">
      {['sampleVideo1', 'sampleVideo2'].map((videoId) => (
        <iframe
          key={videoId}
          width="400"
          height="250"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Project Demo"
          className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        />
      ))}
    </div>
  </section>
);

export default Demos;
