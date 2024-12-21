import Index from "../Index";
import Modal from "react-modal";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropup,
  IoMdArrowDropdown,
} from "react-icons/io";
import { ProjectsData } from "../../../data/projects";
import ProjectsCard from "./ProjectsCard";

Modal.setAppElement("#root");

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isShowDescription, setIsShowDescription] = useState(true);
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const openModal = (images, description) => {
    setSelectedImages(images);
    setSelectedDescription(description);
    setCurrentImageIndex(0);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImages([]);
    setSelectedDescription(null);
    setIsShowDescription(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
    );
  };

  const categories = [
    {
      name: "All",
    },
    {
      name: "PHP",
    },
    {
      name: "Java Script",
    },
    {
      name: "Others",
    },
  ];

  const filteredProjects = ProjectsData.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Others") {
      return (
        !project.techStack.includes("Java Script") &&
        !project.techStack.includes("PHP")
      );
    }
    return project.techStack.includes(selectedCategory);
  });

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex: 1000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
      padding: 0,
    },
  };
  return (
    <Index>
      <nav>
        <ul className="flex space-x-5">
          {categories.map((item, index) => (
            <li
              key={index}
              className={`${
                selectedCategory === item.name
                  ? "text-secondary-text dark:text-dark-secondary-text font-semibold"
                  : "text-main-text dark:text-dark-main-text"
              } hover:text-secondary-text dark:hover:text-dark-secondary-text cursor-pointer`}
              onClick={() => setSelectedCategory(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => (
          <ProjectsCard
            key={index}
            {...project}
            openModal={(image, description) => openModal(image, description)}
            isExpanded={expandedCard === index}
            onToggleExpand={() =>
              setExpandedCard(expandedCard === index ? null : index)
            }
          />
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
        appElement={document.getElementById("root")}
      >
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute top-1 md:top-4 right-1 md:right-4 text-white bg-black/50 p-0.5 md:p-2 rounded-full hover:bg-black/70 transition-all z-10"
          >
            <IoClose size={24} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-1 md:left-4 top-1/3 md:top-1/2 -translate-y-1/2 text-white bg-black/50 p-0.5 md:p-2 rounded-full hover:bg-black/70 transition-all z-10"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-1 md:right-4 top-1/3 md:top-1/2 -translate-y-1/2 text-white bg-black/50 p-0.5 md:p-2 rounded-full hover:bg-black/70 transition-all z-10"
          >
            <IoIosArrowForward size={24} />
          </button>
          <img
            src={selectedImages[currentImageIndex]}
            alt="Project Preview"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />

          <div className="w-full flex flex-col items-center">
            <p
              className={`text-white ${
                isShowDescription ? "w-full" : ""
              } bg-black/50 p-2 rounded-md text-xs md:text-sm mt-2 md:mt-0 md:absolute md:bottom-12 md:left-1/2 md:-translate-x-1/2 max-w-[90%] md:max-w-[80%] transition-all duration-300`}
            >
              {isShowDescription ? (
                <>
                  <IoMdArrowDropdown
                    size={25}
                    className="mx-auto hover:text-gray-300 cursor-pointer transition-all duration-300"
                    onClick={() => setIsShowDescription(false)}
                  />
                  {selectedDescription}
                </>
              ) : (
                <IoMdArrowDropup
                  size={25}
                  className="mx-auto hover:text-gray-300 cursor-pointer transition-all duration-300"
                  onClick={() => setIsShowDescription(true)}
                />
              )}
            </p>
            <div className="mt-2 md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2 flex space-x-2">
              {selectedImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentImageIndex === index
                      ? "bg-gray-400"
                      : "bg-gray-400/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </Index>
  );
};

export default Projects;
