import PropTypes from "prop-types";

export const ImageModal = ({ isOpen, onClose, imageSrc, alt }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 
                 animate-[fadeIn_0.3s_ease-in-out]"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/50 animate-[fadeIn_0.3s_ease-in-out]" />
      <div className="relative z-10 animate-[scaleIn_0.4s_cubic-bezier(0.16,1,0.3,1)]">
        <button
          className="absolute -top-10 right-0 text-white text-xl
                     transition-all duration-200 hover:rotate-90"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={imageSrc}
          alt={alt}
          className="max-w-[90%] max-h-[90vh] rounded-2xl shadow-2xl
                     hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                     transition-shadow duration-300"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
