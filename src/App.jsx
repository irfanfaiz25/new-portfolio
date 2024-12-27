import { useState } from "react";
import { Routes, Route } from "react-router";
import ProfileSection from "./assets/components/profile/ProfileSection";
import AboutMe from "./assets/components/main/AboutMe/AboutMe";
import Home from "./assets/components/main/Home/Home";
import Projects from "./assets/components/main/Projects/Projects";
import Contact from "./assets/components/main/Contact/Contact";
import Experience from "./assets/components/main/Experience/Experience";
import { IoIosArrowForward } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

function App() {
  const [showProfile, setShowProfile] = useState(true);

  const toggleProfileSection = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <>
      <section className="block md:flex justify-between px-5 py-5 lg:px-12 lg:py-10 space-x-0 md:space-x-2 lg:space-x-4 space-y-2 md:space-y-0">
        {/* Profile Section */}
        {showProfile || window.innerWidth >= 1024 ? (
          <div
            className={`transition-all duration-1000 transform ${
              showProfile ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 lg:block`}
          >
            <ProfileSection toggleProfileSection={toggleProfileSection} />
          </div>
        ) : (
          <>
            {/* Toggle Button for Mobile and Tablet */}
            <button
              className="mt-4 px-1.5 py-1.5 h-8 w-auto md:w-8 flex justify-center items-center border-2 border-secondary-border dark:border-dark-secondary-border hover:bg-tertiary-bg dark:hover:bg-dark-tertiary-bg rounded-lg text-secondary-text dark:text-dark-secondary-text hover:text-dark-main-text dark:hover:text-main-text transition-colors duration-300"
              onClick={toggleProfileSection}
            >
              <p className="block md:hidden">Show Profile</p>
              <IoIosArrowForward size={20} />
            </button>
          </>
        )}

        {/* Main Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/experiences" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;
