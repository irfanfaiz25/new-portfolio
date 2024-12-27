// import { useState } from "react";
import PropTypes from "prop-types";
import { RiShareBoxLine } from "react-icons/ri";
import { Link } from "react-router";

const ProjectsCard = ({
  images,
  openModal,
  name,
  description,
  techStack,
  url,
  isExpanded,
  onToggleExpand,
}) => {
  const truncatedDescription = description.slice(0, 210);
  const needsTruncation = description.length > 210;

  return (
    <div
      className={`w-full p-3 bg-secondary-bg dark:bg-dark-secondary-bg rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 group relative ${
        isExpanded
          ? "h-auto"
          : "h-[470px] md:h-[400px] lg:h-[440px] xl:h-[420px]"
      }`}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[0]}
          alt={`${name} image`}
          className="w-full h-52 object-cover hover:scale-110 transition-transform duration-700 cursor-pointer"
          onClick={() => openModal(images, description)}
        />
      </div>

      <div className="flex justify-between mt-3 mb-1 items-center">
        <h3 className="text-base xl:text-xl font-bold text-secondary-text dark:text-dark-secondary-text/95 hover:text-secondary-text dark:hover:text-dark-secondary-text">
          {name}
        </h3>
        {url && (
          <Link to={url} target="_blank">
            <RiShareBoxLine
              size={25}
              className="transform transition-transform duration-300 hover:rotate-45 hover:text-secondary-text dark:hover:text-dark-secondary-text cursor-pointer"
            />
          </Link>
        )}
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? "h-auto mb-11" : "h-28 sm:h-24"
        }`}
      >
        <p className="text-sm text-main-text dark:text-dark-main-text leading-relaxed">
          {isExpanded ? description : truncatedDescription}
          {needsTruncation && !isExpanded && "..."}
          {needsTruncation && (
            <button
              onClick={onToggleExpand}
              className="ml-1 text-blue-500 hover:text-blue-700 dark:text-yellow-500 dark:hover:text-yellow-600 font-medium"
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </p>
      </div>

      <div className="mt-2 flex space-x-1 fixed bottom-4">
        {techStack.map((item, index) => (
          <div
            key={index}
            className="px-1.5 py-0.5 md:px-2 md:py-1 bg-tertiary-bg dark:bg-dark-tertiary-bg text-dark-main-text dark:text-main-text text-xs rounded-xl"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

ProjectsCard.propTypes = {
  images: PropTypes.any.isRequired,
  openModal: PropTypes.any,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggleExpand: PropTypes.func.isRequired,
};

export default ProjectsCard;
