import PropTypes from "prop-types";

export const BriefcaseIcon = ({ width, height, lightColor, darkColor }) => {
  return (
    <svg
      className={`h-${height} w-${width} ${lightColor} dark:${darkColor}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      id="briefcase"
      fill="currentColor"
    >
      <path d="M45 12h-9V7a5 5 0 0 0-5-5H17a5 5 0 0 0-5 5v5H3a3 3 0 0 0-3 3c0 8.73-.33 9.35 1 10.55V43a3 3 0 0 0 3 3h40a3 3 0 0 0 3-3V25.55c1.3-1.17 1-1.67 1-10.55a3 3 0 0 0-3-3ZM14 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v5h-2V8a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2v4h-2Zm16 5H18V8h12ZM2 15a1 1 0 0 1 1-1h42a1 1 0 0 1 1 1v8.32a1 1 0 0 1-.83 1l-3.17.53A2 2 0 0 0 40 23h-6a2 2 0 0 0-2 2v1.59L24 28l-8-1.4V25a2 2 0 0 0-2-2H8a2 2 0 0 0-2 1.85l-3.17-.55a1 1 0 0 1-.83-1Zm32 14v-4h6v4ZM8 29v-4h6v4Zm36 15H4a1 1 0 0 1-1-1V26.36l3 .52V29a2 2 0 0 0 2 2h2v1a1 1 0 0 0 2 0v-1h2a2 2 0 0 0 2-2v-.38C22.77 29.8 23.86 30 24 30s1.23-.2 8-1.38V29a2 2 0 0 0 2 2h2v1a1 1 0 0 0 2 0v-1h2a2 2 0 0 0 2-2v-2.12l3-.52V43a1 1 0 0 1-1 1Z"></path>
    </svg>
  );
};

BriefcaseIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  lightColor: PropTypes.string,
  darkColor: PropTypes.string,
};
