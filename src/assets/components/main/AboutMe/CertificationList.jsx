import PropTypes from "prop-types";
import { CertificateIcon } from "../../../svg/CertificateIcon";
import { useInView } from "react-intersection-observer";

const CertificationList = ({ name, year, image, delay = 0, selectedImage }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  return (
    <li
      ref={ref}
      className={`mb-7 ms-6 transition-opacity duration-1000 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-secondary-bg dark:bg-dark-secondary-bg">
        <CertificateIcon
          height={3}
          width={3}
          lightColor="text-secondary-text"
          darkColor="text-dark-secondary-text"
        />
      </span>
      <h4 className="mb-0.5 text-base font-semibold text-gray-900 dark:text-white">
        {name}
      </h4>
      <p className="text-sm font-normal text-secondary-text dark:text-dark-secondary-text">
        {year}
      </p>
      <img
        src={image}
        alt="sql certificate"
        onClick={() => selectedImage(image)}
        className="mt-2 w-32 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 shadow shadow-black hover:shadow-xl"
      />
    </li>
  );
};

CertificationList.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  delay: PropTypes.any,
  selectedImage: PropTypes.any,
};

export default CertificationList;
