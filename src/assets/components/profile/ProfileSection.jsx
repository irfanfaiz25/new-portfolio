import { useState } from "react";
import { ImageModal } from "./ImageModal";

import Profile from "../../img/profil.jpg";
import Contact from "./Contact";

const ProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-1/3 bg-main-bg border-4 border-main-border h-[680px] rounded-xl p-5">
        <div className="flex justify-center items-center p-2 bg-secondary-bg w-36 h-36 rounded-3xl mx-auto mt-4">
          <img
            src={Profile}
            alt="profile-image"
            className="size-31 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageSrc={Profile}
          alt="profile-image"
        />

        <p className="font-bold text-main-text text-lg py-4 flex justify-center">
          Ahmad Irfan Faiz
        </p>

        <div className="space-y-2 font-semibold">
          <div className="bg-secondary-bg py-1.5 px-1.5 flex justify-center mx-auto rounded-md">
            <p className="text-main-text text-sm">Fullstack Web Developer</p>
          </div>
          <div className="bg-secondary-bg py-1.5 px-1.5 w-2/3 flex justify-center mx-auto rounded-md">
            <p className="text-main-text text-sm">Backend Specialist</p>
          </div>
        </div>

        <div className="border-t-2 border-main-border my-7"></div>

        <Contact />

        <div className="flex justify-center items-center mt-9 space-x-1"></div>
      </div>
    </>
  );
};

export default ProfileSection;
