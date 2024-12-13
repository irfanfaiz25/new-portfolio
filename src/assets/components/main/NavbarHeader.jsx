import { Link } from "react-router";
import { useState } from "react";

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
      label: "Blog",
      path: "/blog",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex w-full justify-between ps-5">
      <div className="w-full md:w-auto">
        <h1 className="text-main-text text-lg md:text-xl lg:text-2xl font-bold items-end pt-4 animate-[lineFadeSlide_0.3s_ease-in-out] transition-all duration-300">
          {menus.find((menu) => menu.path === window.location.pathname)
            ?.label || "Home"}
        </h1>
        <div className="mt-1 md:mt-2 w-10 h-1 bg-tertiary-bg animate-[lineGrow_0.3s_ease-in-out] transition-all duration-300"></div>
      </div>
      <nav className="w-full block md:w-auto relative">
        {/* Hamburger Button */}
        <button
          className="md:hidden p-2 text-main-text hover:text-secondary-text float-right"
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
        </button>

        {/* Menu Items */}
        <ul
          className={`font-medium flex flex-col md:flex-row p-1.5 lg:p-2 bg-[#323233] border-b-2 border-s-2 border-main-border rounded-bl-2xl rounded-tr-lg ${
            isMenuOpen ? "block" : "hidden"
          } md:flex
      transition-all duration-300 ease-in-out md:static md:shadow-none md:w-auto absolute top-10 md:top-full right-0 z-50 w-48 shadow-lg mt-2 md:mt-0 `}
        >
          {menus.map((menu, index) => (
            <li key={index}>
              <Link
                to={menu.path}
                className={`${
                  window.location.pathname === menu.path
                    ? "text-secondary-text font-semibold"
                    : "text-main-text hover:text-secondary-text"
                } py-2 px-3 lg:px-5 transition-colors duration-300 block`}
                onClick={() => setIsMenuOpen(false)}
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarHeader;
