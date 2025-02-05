import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-xl font-semibold">YourBrand</h2>
            <p className="text-gray-400 mt-2">
              Crafting beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-blue-400 transition">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-blue-400 transition">About</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-blue-400 transition">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600 text-2xl transition"><FaFacebook /></a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 text-2xl transition"><FaTwitter /></a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500 text-2xl transition"><FaInstagram /></a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700 text-2xl transition"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
