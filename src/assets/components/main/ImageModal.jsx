import PropTypes from "prop-types";
import ReactDOM from "react-dom";

export const ImageModal = ({ isOpen, onClose, imageSrc, alt }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]
                 animate-[fadeIn_0.3s_ease-in-out]"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-[9998] animate-[fadeIn_0.3s_ease-in-out]" />

      {/* Modal Content */}
      <div
        className="relative z-[9999] mx-auto animate-[scaleIn_0.4s_cubic-bezier(0.16,1,0.3,1)]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 bg-black/40 px-2.5 py-0.5 rounded-full text-white text-lg
                     transition-all duration-200 hover:rotate-90"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={imageSrc}
          alt={alt}
          className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl
                     hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                     transition-shadow duration-300 object-contain"
        />
      </div>
    </div>,
    document.body // Render modal outside ProfileSection
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
