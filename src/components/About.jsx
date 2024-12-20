import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full overflow-hidden bg-white  p-5"
      id="About"
    >
      <h1 className="text-2xl font-bold ">
        About{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Our Brand
        </span>
      </h1>
      <p>Passionate About Properties, Dedicated to Your Vision</p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-16 mt-16 ">
        <img src={assets.brand_img} className=" sm:w-1/2 max-w-sm" alt="" />
        <div className="flex  flex-col gap-8 mt-10 ">
          <div className="grid grid-cols-2 w-full gap-5 ">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p className="text-sm">Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p className="text-sm">Ongoing Projects</p>
            </div>
          </div>
          <p className="text-sm text-justify">
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-bold text-base">
              Aashiyan
            </span>{" "}
            is your trusted partner in finding the ideal property that matches
            your dreams and aspirations. Whether you're looking to buy, sell, or
            rent, we provide a seamless experience to connect you with the best
            options in the real estate market. With a focus on reliability,
            convenience, and transparency, Aashiyan aims to simplify the journey
            of finding your dream home. From cozy apartments to luxurious
            villas, we bring a diverse range of properties right to your
            fingertips. Step into a world where your perfect home is just a few
            clicks away !
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-2 w-1/4 rounded text-white hover:px-5 hover:py-3 hover:transition-all">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
