import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen  bg-cover bg-center overflow-hidden w-full flex items-center"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <div className="container mx-auto text-center text-white">
        <h2>Explore homes that fits your dreams</h2>
        <div>
          <a href="">Projects</a>
          <a href="">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
