const Contact = () => (
  <section className="py-20 bg-white text-gray-800" id="contact">
    <h2 className="text-center text-4xl font-extrabold text-blue-700 mb-8">Contact Us</h2>
    <div className="text-center max-w-md mx-auto space-y-4">
      <p className="text-lg">Have questions or want to start working with us? Get in touch!</p>
      <p>Email: <a href="mailto:justmymail32123@gmail.com" className="text-teal-500 hover:text-teal-600">justmymail32123@gmail.com</a></p>
      <p>Phone: <a href="tel:+7274033260" className="text-teal-500 hover:text-teal-600">7274033260</a></p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://wa.me/7274033260"
          className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-400 transition duration-200"
        >
          Chat on WhatsApp
        </a>
        <a
          href="https://t.me/YourTelegramUsername"
          className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-400 transition duration-200"
        >
          Connect on Telegram
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
