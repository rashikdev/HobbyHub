import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-[calc(100vh-377px] pt-12 pb-14 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="shadow-lg border border-indigo-500 rounded-2xl p-8 space-y-6">
          <div>
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold text-white"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-4xl font-bold mb-10">Contact Us</h2>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-indigo-600" />
            <span>support@hobbyhub.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-2xl text-indigo-600" />
            <span>+880 1234 567 890</span>
          </div>
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-2xl text-indigo-600 mt-1" />
            <span>Dhaka, Bangladesh</span>
          </div>

          <p className="pt-4">
            We typically respond within 24 hours. For urgent issues, please call
            our support team directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
