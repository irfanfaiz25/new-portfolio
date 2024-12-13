import PropTypes from "prop-types";
import { CheckIcon } from "../../../svg/CheckIcon";
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
    >
      <div
        className={`flex-shrink-0 w-5 h-5 text-yellow-500 animate-pulse`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <CheckIcon />
      </div>
      <p>
        {text}
        <span className="text-white font-semibold">{highlight}</span>
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
