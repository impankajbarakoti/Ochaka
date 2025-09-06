import React from "react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Contact Us Header */}
      <section className="py-16 px-4 mt-10 sm:px-6 md:px-12 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          We would love to hear from you! Whether you have a question, feedback,
          or just want to say hi, feel free to reach out to us.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4  sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column - Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <MdLocationOn className="text-xl text-gray-600" />
                  <span>8500 Lorem Street Chicago, IL 55030</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MdPhone className="text-xl text-gray-600" />
                  <span>+8(800) 123 4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MdEmail className="text-xl text-gray-600" />
                  <span>themesflat@support.com</span>
                </li>
              </ul>

              {/* Social Media Links */}
              <div className="flex space-x-4 mt-10">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Send us a message
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-block bg-black text-white text-base sm:text-lg md:text-xl font-medium px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 rounded-full hover:bg-gray-800 transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Google Map Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Our Location
          </h3>
          <div className="relative w-full h-96">
            <iframe
              title="Google Map"
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=..."
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
