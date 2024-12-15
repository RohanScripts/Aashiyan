import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen  bg-cover bg-center overflow-hidden w-full flex items-center"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
    </div>
  );
};

export default Header;
