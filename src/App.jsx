import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router";
import ProfileSection from "./assets/components/profile/ProfileSection";
import AboutMe from "./assets/components/main/AboutMe/AboutMe";
import Home from "./assets/components/main/Home/Home";
import Projects from "./assets/components/main/Projects/Projects";
import Contact from "./assets/components/main/Contact/Contact";
import Experience from "./assets/components/main/Experience/Experience";
import { IoIosArrowForward } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import NotFound from "./assets/components/NotFound";

function App() {
  const location = useLocation();
  const is404Page = ![
    "/",
    "/about-me",
    "/experiences",
    "/projects",
    "/contact",
  ].includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [showProfile, setShowProfile] = useState(false);
  const toggleProfileSection = () => {
    setShowProfile((prev) => !prev);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const darkModeHandler = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    if (dark) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [dark]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Me",
      path: "/about-me",
    },
    {
      label: "Experiences",
      path: "/experiences",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {!is404Page && (
        <nav
          className={`
            transition-transform duration-300 ease-in-out
            ${
              window.innerWidth >= 1024
                ? isScrolled
                  ? "translate-y-0"
                  : "-translate-y-full"
                : "translate-y-0"
            }
            w-full flex justify-between items-center h-14 px-5 lg:px-16 py-3 
            bg-secondary-bg dark:bg-dark-secondary-bg fixed top-0 z-50
          `}
        >
          {!dark && (
            <FaMoon
              size={20}
              className="text-main-text dark:text-dark-main-text hover:text-secondary-text dark:hover:text-dark-secondary-text cursor-pointer transform transition-transform active:rotate-180"
              onClick={() => darkModeHandler()}
            />
          )}
          {dark && (
            <IoSunny
              size={20}
              className="text-main-text dark:text-dark-main-text hover:text-secondary-text dark:hover:text-dark-secondary-text cursor-pointer transform transition-transform active:rotate-180"
              onClick={() => darkModeHandler()}
            />
          )}
          <RiMenu3Fill
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            size={25}
            className={`${
              isMenuOpen
                ? "text-secondary-text dark:text-dark-secondary-text"
                : "text-main-text dark:text-dark-main-text hover:text-secondary-text dark:hover:text-dark-secondary-text"
            } cursor-pointer`}
          />
          {isMenuOpen && (
            <ul
              className="fixed text-center left-4 right-4 p-2 top-16 h-fit backdrop-blur-sm bg-secondary-bg/80 dark:bg-dark-secondary-bg/80 z-50 font-semibold rounded-md transition-all ease-in-out duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              {menus.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2.5 border-b border-main-border dark:border-dark-main-border"
                >
                  <Link
                    to={item.path}
                    className={`${
                      window.location.pathname === item.path
                        ? "text-secondary-text dark:text-dark-secondary-text"
                        : "text-main-text dark:text-dark-main-text hover:text-secondary-text dark:hover:text-dark-secondary-text"
                    } cursor-pointer`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      )}

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {is404Page ? (
        <NotFound />
      ) : (
        <section
          className={`block md:flex justify-between px-5 pt-20 lg:px-10 lg:py-10 space-x-0 md:space-x-2 lg:space-x-4 space-y-2 md:space-y-0`}
        >
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
              <button
                className="px-1.5 py-1.5 h-8 w-auto md:w-8 flex justify-center items-center space-x-1 border-2 border-secondary-border dark:border-dark-secondary-border hover:bg-tertiary-bg dark:hover:bg-dark-tertiary-bg rounded-lg text-secondary-text dark:text-dark-secondary-text hover:text-dark-main-text dark:hover:text-main-text transition-colors duration-300"
                onClick={toggleProfileSection}
              >
                <p className="block md:hidden">Show Profile</p>
                <IoIosArrowForward size={16} />
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </section>
      )}
    </>
  );
}

export default App;
