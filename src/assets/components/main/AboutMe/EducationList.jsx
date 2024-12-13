import PropTypes from "prop-types";
import { TogaIcon } from "../../../svg/TogaIcon";
import { useInView } from "react-intersection-observer";

const EducationList = ({
  institution,
  note = "",
  major,
  timeSpan,
  delay = 0,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });
  return (
    <li
      ref={ref}
      className={`mb-7 ms-6 transition-opacity duration-1000 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-secondary-bg">
        <TogaIcon
          height={4}
          width={4}
          lightColor="text-white"
          darkColor="text-secondary-text"
        />
      </span>
      <h4 className="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">
        {institution} <span className="text-gray-400">{note}</span>
      </h4>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        {major}
      </p>
      <p className="text-sm font-normal text-gray-500 dark:text-secondary-text">
        {timeSpan}
      </p>
    </li>
  );
};

EducationList.propTypes = {
  institution: PropTypes.string.isRequired,
  note: PropTypes.string,
  major: PropTypes.string.isRequired,
  timeSpan: PropTypes.string.isRequired,
  delay: PropTypes.any,
};

export default EducationList;
