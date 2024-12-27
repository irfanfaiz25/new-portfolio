import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useEffect } from "react";
import { ProjectsData } from "../../../data/projects";
import { Link } from "react-router";
import { RiShareCircleLine } from "react-icons/ri";

export default function ModernImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Add auto-slide effect
  useEffect(() => {
    const slideTimer = setInterval(() => {
      paginate(1);
    }, 5000); // Changes slide every 5 seconds

    return () => clearInterval(slideTimer); // Cleanup on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredProjects = ProjectsData.filter((project) =>
    [
      "Security Checking System for EDC",
      "PlayStation Rental Management System",
      "Es Teh POS and Management System",
    ].includes(project.name)
  );

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + filteredProjects.length) %
        filteredProjects.length
    );
  };

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full max-w-4xl"
          >
            <div className="relative h-[350px] rounded-2xl overflow-hidden group/image">
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10">
                <div className="absolute bottom-0 left-0 p-8 pb-10 w-full">
                  <h2 className="text-3xl font-bold text-white mb-1">
                    {filteredProjects[currentIndex].name}
                  </h2>
                  <p className="text-gray-200 max-w-2xl">
                    {filteredProjects[currentIndex].short_description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 pl-8 p-3">
                  <Link
                    to="/projects"
                    className="flex items-center gap-1 font-semibold text-white hover:text-gray-300 group/link"
                  >
                    View more{" "}
                    <RiShareCircleLine className="transition-transform duration-300 group-hover/link:rotate-45" />
                  </Link>{" "}
                </div>
              </div>

              {/* Image */}
              <img
                src={filteredProjects[currentIndex].images[0]}
                alt={filteredProjects[currentIndex].name}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover/image:scale-105"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                 bg-black/20 dark:bg-white/20 backdrop-blur-sm hover:bg-black/40 dark:hover:bg-white/40 
                 transition-all duration-300 z-20"
      >
        <HiChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                 bg-black/20 dark:bg-white/20 backdrop-blur-sm hover:bg-black/40 dark:hover:bg-white/40 
                 transition-all duration-300 z-20"
      >
        <HiChevronRight className="w-6 h-6 text-white" />
      </button>{" "}
    </div>
  );
}
