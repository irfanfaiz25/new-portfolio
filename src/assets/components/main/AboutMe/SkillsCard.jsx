import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";

const SkillCard = ({ name, logo, borderColor, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={`flex items-center text-center h-32 lg:w-36 bg-secondary-bg dark:bg-dark-secondary-bg p-3 rounded-lg border-t-4 
        ${borderColor ? borderColor : `border-gray-400`}
        shadow-md shadow-black transition-opacity duration-1000 ease-in-out
      ${inView ? "opacity-100" : "opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="space-y-2 mx-auto">
        <img src={logo} alt={`${name} Logo`} className="w-14 h-14 mx-auto" />
        <h2 className="text-sm text-main-text dark:text-dark-main-text font-semibold">
          {name}
        </h2>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.any.isRequired,
  borderColor: PropTypes.string,
  delay: PropTypes.any,
};

export default SkillCard;
