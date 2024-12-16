import { useState } from "react";
import { ImageModal } from "../main/ImageModal";

import Profile from "../../img/profil.jpg";
import Contact from "./Contact";

const ProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full md:w-[300px] lg:w-[380px] bg-main-bg dark:bg-dark-main-bg border-4 border-main-border dark:border-dark-main-border h-fit rounded-xl p-5 md:p-3 lg:p-7">
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

        <p className="font-bold text-main-text dark:text-dark-main-text text-base lg:text-lg py-4 flex justify-center">
          Ahmad Irfan Faiz
        </p>

        <div className="space-y-2 font-semibold">
          <div className="bg-secondary-bg dark:bg-dark-secondary-bg py-1.5 px-1.5 flex justify-center mx-auto rounded-md">
            <p className="text-secondary-text dark:text-dark-secondary-text text-xs lg:text-sm">
              Fullstack Web Developer
            </p>
          </div>
          <div className="bg-secondary-bg dark:bg-dark-secondary-bg py-1.5 px-1.5 w-2/3 flex justify-center mx-auto rounded-md">
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

export default ProfileSection;
