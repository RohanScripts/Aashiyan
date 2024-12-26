import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <img src={logo} className="w-24" alt="" />
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        {/* Right Section */}
        <div className="flex gap-4">
          <a href="#Header" className="hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#Testimonials" className="hover:text-gray-400">
            Testimonials
          </a>
          <a href="#Contact" className="hover:text-gray-400">
            Get In Touch
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
