import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center  w-full overflow-hidden bg-white"
      id="About"
    >
      <h1 className="text-2xl font-bold ">
        About{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Our Brand
        </span>
      </h1>
      <p>Passionate About Properties, Dedicated to Your Vision</p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-10">
        <img src={assets.brand_img} className=" sm:w-1/2 max-w-lg" alt="" />
      </div>
    </div>
  );
};

export default About;
