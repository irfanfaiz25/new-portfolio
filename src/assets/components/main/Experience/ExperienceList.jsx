import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { BriefcaseIcon } from "../../../svg/BriefcaseIcon";

const ExperienceList = ({
  companyName,
  as,
  position,
  note,
  timeSpan,
  details,
  delay = 0,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
        <BriefcaseIcon
          height={3}
          width={3}
          lightColor="text-white"
          darkColor="text-secondary-text"
        />
      </span>
      <h4 className="mb-0.5 text-lg font-semibold text-gray-900 dark:text-white">
        <span className="font-light">{position ? position + ", " : ""}</span>{" "}
        {companyName} <span className="text-gray-400">{note}</span>
      </h4>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        {as}
      </p>
      <p className="text-sm font-normal text-gray-500 dark:text-secondary-text">
        {timeSpan}
      </p>
      <h4 className="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
        Description:
      </h4>
      <p className="mt-1 text-sm font-normal text-gray-500 dark:text-main-text">
        {details.description[0]}
      </p>
      <ul className="list-disc list-inside text-sm text-gray-500 dark:text-main-text">
        {details.description.slice(1).map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
      <h4 className="mt-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
        Key Achievements:
      </h4>
      <ul className="mt-1 list-disc list-inside text-sm text-gray-500 dark:text-main-text">
        {details.key_achievements.map((achievement, i) => (
          <li key={i}>{achievement}</li>
        ))}
      </ul>
    </li>
  );
};

ExperienceList.propTypes = {
  companyName: PropTypes.string.isRequired,
  as: PropTypes.string,
  position: PropTypes.string,
  note: PropTypes.string,
  timeSpan: PropTypes.string.isRequired,
  details: PropTypes.any,
  delay: PropTypes.any,
};

export default ExperienceList;
