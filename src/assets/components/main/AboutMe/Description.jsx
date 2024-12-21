import { FaRegFileAlt } from "react-icons/fa";

const Description = () => {
  return (
    <>
      <a
        href="#_"
        className="rounded-md px-3.5 py-1.5 mb-2 overflow-hidden block md:hidden relative group cursor-pointer border-2 text-sm font-medium border-secondary-border dark:border-dark-secondary-border text-secondary-text dark:text-dark-secondary-text"
      >
        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-tertiary-bg dark:bg-dark-tertiary-bg/60 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="relative flex items-center text-secondary-text dark:text-dark-secondary-text transition duration-300 group-hover:text-white ease">
          <span className="pe-1">
            <FaRegFileAlt />
          </span>
          <span>Download Resume</span>
        </span>
      </a>
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl relative">
          <span className="relative z-10">{`"Hi, I'm Ahmad Irfan Faiz"`}</span>
          <span className="absolute bottom-1 left-[69px] w-44 h-5 bg-rose-500/70 transform -rotate-1 -z-0 animate-[highlight_1s_ease-in-out]"></span>
        </p>
        <a
          href="#_"
          className="rounded-md px-3.5 py-1.5 overflow-hidden hidden md:block relative group cursor-pointer border-2 text-sm font-medium border-secondary-border dark:border-dark-secondary-border text-secondary-text dark:text-dark-secondary-text"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-tertiary-bg dark:bg-dark-tertiary-bg/60 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative flex items-center text-secondary-text dark:text-dark-secondary-text transition duration-300 group-hover:text-white ease">
            <span className="pe-1">
              <FaRegFileAlt />
            </span>
            <span>Download Resume</span>
          </span>
        </a>
      </div>
      <p className="mt-3">
        {`I'm a `}
        <span className="text-secondary-text dark:text-dark-secondary-text font-semibold">
          full-stack web developer
        </span>
        {` with a strong specialization in backend
          development. I have a passion for building robust, scalable, and
          efficient web applications that solve real-world problems. My
          expertise lies in `}
        <span className="text-secondary-text dark:text-dark-secondary-text font-semibold">
          designing and implementing complex backend systems
        </span>
        {`, crafting seamless user experiences, and collaborating with
          cross-functional teams to deliver impactful solutions.`}
      </p>
      <p className="mt-2">
        {`With hands-on experience in technologies like `}
        <span className="text-secondary-text dark:text-dark-secondary-text font-semibold">
          Laravel and MySQL
        </span>
        {`, and a growing proficiency in `}
        <span className="text-secondary-text dark:text-dark-secondary-text font-semibold">
          React
        </span>
        {`, I excel in creating end-to-end solutions—from database design and API
          development to frontend integration. Whether working on team projects
          or independently, I bring a meticulous and results-oriented approach
          to every challenge.`}
      </p>
      <p className="mt-2">
        {`Beyond coding, I'm passionate about `}
        <span className="text-secondary-text dark:text-dark-secondary-text font-semibold">
          exploring emerging tech trends, contributing to open-source projects
        </span>
        {`, and sharing my knowledge
          with the developer community. I'm always eager to embrace new
          opportunities to grow, innovate, and contribute to meaningful
          projects.`}
      </p>
      <p className="mt-3 text-xl font-bold">
        {`Let's create something`}{" "}
        <span className="text-secondary-text dark:text-dark-secondary-text">
          incredible
        </span>{" "}
        together!
      </p>
    </>
  );
};

export default Description;
