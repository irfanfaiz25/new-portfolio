import { useState } from "react";
import { ImageModal } from "../main/ImageModal";
import PropTypes from "prop-types";

import Profile from "../../img/profil.jpg";
import Contact from "./Contact";
import { IoIosArrowBack } from "react-icons/io";

const ProfileSection = ({ toggleProfileSection }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`w-full md:sticky md:top-5 lg:top-10 md:w-[245px] lg:w-[290px] bg-main-bg dark:bg-dark-main-bg border-4 border-main-border dark:border-dark-main-border h-fit rounded-xl p-5 md:p-3 lg:p-7 transition-all duration-300 ease-in-out transform`}
      >
        <div className="flex lg:hidden w-full justify-end">
          <button
            className="px-1.5 py-1.5 h-8 w-8 hover:w-fit flex justify-center items-center space-x-1 border-2 border-secondary-border dark:border-dark-secondary-border hover:bg-tertiary-bg dark:hover:bg-dark-tertiary-bg rounded-lg text-secondary-text dark:text-dark-secondary-text hover:text-dark-main-text dark:hover:text-main-text group"
            onClick={toggleProfileSection}
          >
            <IoIosArrowBack size={18} />
            <p className="font-medium text-sm w-0 overflow-hidden group-hover:w-auto group-hover:ml-1 transition-all duration-300">
              Hide Profile
            </p>
          </button>
        </div>
        <div className="flex justify-center items-center p-2 bg-secondary-bg dark:bg-dark-secondary-bg w-36 h-36 rounded-full mx-auto mt-2">
          <img
            src={Profile}
            alt="profile-image"
            className="size-31 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageSrc={Profile}
          alt="profile-image"
        />

        <p className="font-bold text-main-text dark:text-dark-main-text text-base lg:text-xl py-4 flex justify-center ">
          Ahmad Irfan Faiz
        </p>

        <div className="space-y-2 font-semibold">
          <div className="border-2 border-secondary-border dark:border-dark-secondary-border py-1.5 px-1.5 flex justify-center mx-auto rounded-md hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-md">
            <p className="text-secondary-text dark:text-dark-secondary-text text-xs lg:text-sm">
              Fullstack Web Developer
            </p>
          </div>
          <div className="border-2 border-secondary-border dark:border-dark-secondary-border py-1.5 px-1.5 w-2/3 flex justify-center mx-auto rounded-md hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-md">
            <p className="text-secondary-text dark:text-dark-secondary-text text-xs lg:text-sm">
              Backend Specialist
            </p>
          </div>
        </div>
        <div className="border-t-2 border-main-border dark:border-dark-main-border my-5"></div>

        <Contact />
      </div>
    </>
  );
};

ProfileSection.propTypes = {
  toggleProfileSection: PropTypes.any,
};

export default ProfileSection;
