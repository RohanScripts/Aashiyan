import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="top-0 left-0 z-10 w-full absolute ">
      <div className="flex justify-between items-center container mx-auto bg-transparent ">
        <img src={logo} className="cursor-pointer w-32" alt="" srcSet="" />
        <ul className="hidden md:flex gap-5 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
