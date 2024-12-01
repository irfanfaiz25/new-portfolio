import { Link } from "react-router";

const NavbarHeader = () => {
  const menus = [
    {
      label: "Home",
      path: "/home",
    },
    {
      label: "About Me",
      path: "/about-me",
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
  return (
    <div className="flex w-full justify-between ps-5">
      <div>
        <h1
          className="text-main-text text-3xl font-bold items-end pt-4 animate-[lineFadeSlide_0.3s_ease-in-out]
  transition-all duration-300"
        >
          {menus.find((menu) => menu.path === window.location.pathname)
            ?.label || "Home"}
        </h1>
        <div
          className="mt-2 w-10 h-1 bg-tertiary-bg animate-[lineGrow_0.3s_ease-in-out]
  transition-all duration-300"
        ></div>
      </div>
      <nav className="w-full block md:w-auto">
        <ul className="font-medium flex flex-col md:flex-row p-3 bg-[#323233] border-b-2 border-s-2 border-main-border rounded-bl-2xl rounded-tr-lg">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link
                to={menu.path}
                className={`${
                  window.location.pathname === menu.path
                    ? "text-secondary-text font-semibold"
                    : "text-main-text hover:text-secondary-text"
                } py-2 px-5 transition-colors duration-300`}
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
