import { testimonialsData } from "../assets/assets";
const Testimonials = () => {
  return (
    <div className=" bg-white w-full overflow-hidden pb-10">
      <h1 className="text-center text-2xl font-bold">
        Customer{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-sm text-gray-700">
        Real Stories from those Who Found Their Dream Home with Us
      </p>
      <div className="flex justify-center gap-8 flex-wrap">
        {testimonialsData.map((eachTestimonial, index) => (
          <div key={index}>
            <img src={eachTestimonial.image} alt={eachTestimonial.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
