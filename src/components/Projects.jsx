import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  return (
    <div className=" w-full bg-white overflow-hidden" id="Projects">
      <h1 className="text-2xl font-bold text-center mb-2">
        Projects{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-600 mb-6 text-sm">
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </p>
      {/* slider buttons */}
      <div className="flex justify-end items-center">
        <button
          className="p-3 bg-gray-200 rounded mb-6"
          aria-label="Previous Projects"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          className="p-3 bg-gray-200 rounded mb-6"
          aria-label="Next Projects"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* project slider */}
      <div className="overflow-hidden">
        <div className="flex gap-4 transition-transform duration-500 ease-in-out">
          {projectsData.map((eachProject, index) => (
            <div key={index}>
              <img src={eachProject.image} alt={eachProject.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
