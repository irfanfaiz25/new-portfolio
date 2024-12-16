import PropTypes from "prop-types";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

const HighlightsList = ({ text, highlight, suffix, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <li
      ref={ref}
      className={`flex items-start space-x-2 transition-opacity duration-1000 ease-in-out
${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`flex-shrink-0 pt-1 w-5 h-5 text-secondary-text dark:text-dark-secondary-text animate-pulse`}
      >
        <IoCheckmarkDoneSharp />
      </div>
      <p className="text-main-text dark:text-dark-main-text">
        {text}
        <span className="text-secondary-text dark:text-dark-secondary-text/80 font-semibold">
          {highlight}
        </span>
        {suffix}
      </p>
    </li>
  );
};

HighlightsList.propTypes = {
  text: PropTypes.string,
  highlight: PropTypes.string,
  suffix: PropTypes.string,
  delay: PropTypes.any,
};

export default HighlightsList;
