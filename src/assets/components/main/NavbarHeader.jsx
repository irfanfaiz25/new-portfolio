import { Link } from "react-router";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const NavbarHeader = () => {
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

  return (
    <div className="flex w-full justify-between ps-5">
      <div className="w-full md:w-auto">
        <h1 className="text-main-text dark:text-dark-main-text text-lg md:text-xl xl:text-2xl font-bold items-end pt-4 animate-[lineFadeSlide_0.3s_ease-in-out] transition-all duration-300">
          {menus.find((menu) => menu.path === window.location.pathname)
            ?.label || "Home"}
        </h1>
        <div className="mt-1 md:mt-2 w-10 h-1 bg-tertiary-bg dark:bg-dark-tertiary-bg animate-[lineGrow_0.3s_ease-in-out] transition-all duration-300"></div>
      </div>
      <nav className="w-full block md:w-auto relative">
        {/* Hamburger Button */}
        {/* <button
          className="lg:hidden p-2 dark:text-dark-main-text hover:text-secondary-text dark:hover:text-dark-secondary-text float-right"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button> */}

        {/* Menu Items */}
        <ul
          className={`font-medium flex flex-col lg:flex-row p-1.5 lg:p-2 bg-secondary-bg dark:bg-[#323233] border-b-2 border-s-2 border-main-border dark:border-dark-main-border rounded-bl-2xl rounded-tr-lg ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex
      transition-all duration-300 ease-in-out lg:static lg:shadow-none lg:w-auto absolute top-10 lg:top-full right-0 z-50 w-48 shadow-lg mt-2 lg:mt-0 `}
        >
          {menus.map((menu, index) => (
            <li key={index} className="py-2 px-3 xl:px-5">
              <Link
                to={menu.path}
                className={`${
                  window.location.pathname === menu.path
                    ? "text-secondary-text dark:text-dark-secondary-text font-semibold"
                    : "text-main-text dark:text-dark-main-text hover:text-secondary-text dark:hover:text-dark-secondary-text"
                } transition-colors duration-300 block`}
                onClick={() => setIsMenuOpen(false)}
              >
                {menu.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center py-2 px-3 lg:px-5">
            {!dark && (
              <FaMoon
                className="text-main-text dark:text-dark-main-text hover:text-secondary-text dark:hover:text-dark-secondary-text cursor-pointer transform transition-transform active:rotate-180"
                onClick={() => darkModeHandler()}
              />
            )}
            {dark && (
              <IoSunny
                className="text-main-text dark:text-dark-main-text hover:text-secondary-text dark:hover:text-dark-secondary-text cursor-pointer transform transition-transform active:rotate-180"
                onClick={() => darkModeHandler()}
              />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarHeader;
