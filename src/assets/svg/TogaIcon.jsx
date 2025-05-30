import PropTypes from "prop-types";

export const TogaIcon = ({
  width = 50,
  height = 50,
  lightColor = "text-white",
  darkColor = "text-white",
}) => {
  return (
    <svg
      className={`h-${height} w-${width} ${lightColor} dark:${darkColor}`}
      fill="currentColor"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 378.301 378.301"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M371.561,137.257L194.91,45.557c-3.611-1.874-7.907-1.874-11.519,0L6.741,137.257c-4.141,2.15-6.74,6.427-6.741,11.093 c0,0,0,0,0,0.001v47.864c0,6.902,5.596,12.5,12.5,12.5c6.904,0,12.5-5.598,12.5-12.5v-27.292l26.793,13.909v99.542 c0,2.607,0.815,5.149,2.333,7.271c1.3,1.817,33,44.504,135.025,44.504s133.722-42.687,135.023-44.504 c1.516-2.121,2.33-4.664,2.33-7.271v-99.542l45.057-23.388c4.141-2.15,6.74-6.428,6.74-11.094S375.701,139.407,371.561,137.257z M301.504,277.548c-8.301,7.979-39.078,31.603-112.353,31.603S85.097,285.527,76.795,277.548v-81.737l106.597,55.335 c1.806,0.938,3.782,1.406,5.759,1.406s3.955-0.469,5.759-1.406l106.594-55.334V277.548z M189.151,225.968L39.632,148.352 l149.519-77.617l149.519,77.617L189.151,225.968z"></path>{" "}
            <path d="M12.501,219.736c-6.904,0-12.5,5.597-12.5,12.5v15.117c0,6.903,5.596,12.5,12.5,12.5c6.904,0,12.5-5.597,12.5-12.5 v-15.117C25.001,225.333,19.405,219.736,12.501,219.736z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

TogaIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  lightColor: PropTypes.string,
  darkColor: PropTypes.string,
};
