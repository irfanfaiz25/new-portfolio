import PropTypes from "prop-types";

export const CertificateIcon = ({
  width = 50,
  height = 50,
  lightColor = "text-white",
  darkColor = "text-white",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 50 50"
      id="certificate"
      fill="currentColor"
      className={`h-${height} w-${width} ${lightColor} dark:${darkColor}`}
    >
      <path d="M1 39.117h29v9.766l6-3.6 6 3.6v-9.766h7v-38H1v38zm39.265-6.786c-.09.091-.186.175-.281.26-.054.048-.104.099-.16.145-.062.052-.128.096-.192.145a5.958 5.958 0 0 1-2.968 1.197l-.055.008a6.171 6.171 0 0 1-1.222 0l-.055-.008a5.962 5.962 0 0 1-2.968-1.197c-.064-.049-.13-.094-.192-.145-.055-.046-.106-.097-.16-.145-.095-.085-.19-.169-.281-.26a5.98 5.98 0 0 1-1.735-4.214c0-3.309 2.691-6 6-6s6 2.691 6 6a5.958 5.958 0 0 1-1.731 4.214zM40 45.351l-4-2.4-4 2.4V35.047c.034.02.072.033.107.052.265.148.538.284.82.402l.038.014a7.95 7.95 0 0 0 6.072 0l.038-.014c.282-.118.555-.253.82-.402.035-.019.073-.032.107-.052v10.304H40zM3 3.117h44v34h-5v-3.726a7.957 7.957 0 0 0 2-5.274c0-4.411-3.589-8-8-8s-8 3.589-8 8c0 2.021.759 3.864 2 5.274v3.726H3v-34z"></path>
      <path d="M12 7.117h26v2H12zM17 13.117h16v2H17zM7 31.117h11v2H7z"></path>
    </svg>
  );
};

CertificateIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  lightColor: PropTypes.string,
  darkColor: PropTypes.string,
};
