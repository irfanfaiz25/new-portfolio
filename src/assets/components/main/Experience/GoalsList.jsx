import PropTypes from "prop-types";
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
      <span className="text-yellow-500 mr-3 animate-bounce">🌟</span>
      <p>
        {text}
        <span className="text-white font-semibold">{highlight}</span>
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
