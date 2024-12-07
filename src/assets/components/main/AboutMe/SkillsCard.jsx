import PropTypes from "prop-types";

const SkillCard = ({ name, logo, borderColor }) => {
  return (
    <div
      className={`flex items-center text-center h-32 lg:w-32 bg-secondary-bg p-3 rounded-lg border-t-4 
        ${borderColor ? borderColor : `border-gray-400`}
        shadow-md shadow-black`}
    >
      <div className="space-y-2 mx-auto">
        <img src={logo} alt="PHP Logo" className="w-14 h-14 mx-auto" />
        <h2 className="text-sm font-semibold">{name}</h2>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.any.isRequired,
  borderColor: PropTypes.string,
};

export default SkillCard;
