import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show the button when the user scrolls down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add scroll event listener
  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        ↑
      </button>
    )
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Contact Us Section */}
          <div>
            <h2 className="font-semibold text-lg text-gray-900 mb-3">
              Contact us
            </h2>
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
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>

          {/* Shopping Section */}
          <div>
            <h2 className="font-semibold text-lg text-gray-900 mb-3">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/about">
                <li>About</li>
              </a>
              <a href="/contact">
                <li>Contact</li>
              </a>
             
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h2 className="font-semibold text-lg text-gray-900 mb-3">
              Services
            </h2>
            <ul className="space-y-2">
              <a href="/blogs">
                <li>Blogs</li>
              </a>
              <a href="/blog/1">
                <li>Blogs Details</li>
              </a>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="font-semibold text-lg text-gray-900 mb-3">
              Let’s keep in touch
            </h2>
            <p className="mb-4 text-sm">
              Enter your details below to get in touch with us. We’ll respond to
              your queries as soon as possible.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm text-gray-500">
          <p>&copy; 2025 Company Name. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
