import { FaRegFileAlt } from "react-icons/fa";
import CV from "../../../pdf/CV-ATS-IMAGE.pdf";

const Description = () => {
  return (
    <>
      <a
        href={CV}
        target="_blank"
        download="Ahmad-Irfan-Faiz-CV.pdf"
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
          href={CV}
          target="_blank"
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
        {`As a `}
        <span className="text-secondary-text dark:text-dark-secondary-text font-semibold">
          full-stack web developer
        </span>
        {`, I specialize in developing comprehensive web solutions with particular expertise in backend
          development. I thrive in collaborative environments and believe in the power of effective teamwork. My experience includes successfully collaborating with cross-functional teams to deliver `}
        <span className="text-secondary-text dark:text-dark-secondary-text font-semibold">
          high-quality solutions while maintaining clear communication
        </span>
        {` throughout the development lifecycle.`}
      </p>
      <p className="mt-2">
        {`I combine my technical expertise in `}
        <span className="text-secondary-text dark:text-dark-secondary-text font-semibold">
          Laravel and MySQL
        </span>
        {` for backend development with strong interpersonal skills. While expanding my knowledge in `}
        <span className="text-secondary-text dark:text-dark-secondary-text font-semibold">
          React
        </span>
        {` for frontend development, I actively participate in knowledge sharing and mentoring within my team. I value constructive feedback and believe in fostering a positive, collaborative work environment that encourages innovation and growth.`}
      </p>
      <p className="mt-2">
        {`My commitment extends beyond technical skills to include `}
        <span className="text-secondary-text dark:text-dark-secondary-text font-semibold">
          effective leadership, adaptability, and strong problem-solving
          abilities
        </span>
        {`. I excel at bridging communication gaps between technical and non-technical stakeholders, ensuring project requirements are clearly understood and successfully implemented. I believe in maintaining a growth mindset and continuously learning from team members while contributing to collective success.`}
      </p>
      <p className="mt-3 text-xl font-bold">
        {`Let's collaborate to create `}{" "}
        <span className="text-secondary-text dark:text-dark-secondary-text">
          innovative solutions
        </span>{" "}
        together and achieve excellence.
      </p>
    </>
  );
};

export default Description;
