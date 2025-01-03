import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  const nextProject = () => {
    setCurrentIndex(
      (previousIndex) => (previousIndex + 1) % projectsData.length
    );
  };

  const prevProject = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? projectsData.length - 1 : previousIndex - 1
    );
  };

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => removeEventListener("resize", updateCardsToShow);
  }, []);

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
      <div className="flex justify-between items-center">
        <button
          onClick={prevProject}
          className="p-5 bg-gray-200 rounded mb-6"
          aria-label="Previous Projects"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-5 bg-gray-200 rounded mb-6"
          aria-label="Next Projects"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* project slider */}
      <div className="overflow-hidden mb-10">
        <div
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
          className="flex gap-4 transition-transform duration-500 ease-in-out"
        >
          {projectsData.map((eachProject, index) => (
            <div key={index} className="relative shrink-0 sm:w-1/4">
              <img src={eachProject.image} alt={eachProject.title} />
              <div className="absolute bottom-5 flex justify-center left-0 right-0 bg-gradient-to-r from-pink-500 to-violet-500 text-white  w-4/5">
                <div className=" ">
                  <h2 className="text-2xl font-semibold ">
                    {eachProject.title}
                  </h2>
                  <p className="text-sm">
                    {eachProject.price}
                    <span> | </span>
                    {eachProject.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
