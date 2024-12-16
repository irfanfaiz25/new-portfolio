import PropTypes from "prop-types";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const GoalsList = ({ text, highlight, suffix, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <li
      ref={ref}
      className={`flex items-start  transition-opacity duration-1000 ease-in-out
${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-secondary-text pt-1 dark:text-dark-secondary-text mr-3 animate-pulse">
        <FaRegStarHalfStroke />
      </span>
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

GoalsList.propTypes = {
  text: PropTypes.string,
  highlight: PropTypes.string,
  suffix: PropTypes.string,
  delay: PropTypes.any,
};

export default GoalsList;
