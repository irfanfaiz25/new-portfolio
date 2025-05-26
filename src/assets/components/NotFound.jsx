import { Link } from "react-router";
import { useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-dark-background p-4">
      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-8xl font-bold text-secondary-text dark:text-dark-secondary-text animate-bounce">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-main-text dark:text-dark-main-text">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The page you're looking for seems to have wandered off into the
            digital void.
          </p>
        </div>
        <div className="relative">
          <div className="h-0.5 bg-main-border dark:bg-dark-main-border w-full absolute top-1/2 transform -translate-y-1/2" />
          <span className="relative bg-background dark:bg-dark-background px-4 text-gray-500 dark:text-gray-400 text-sm">
            Let's get you back on track
          </span>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-bg dark:bg-dark-secondary-bg text-secondary-text dark:text-dark-secondary-text hover:text-white dark:hover:text-white rounded-lg hover:bg-tertiary-bg dark:hover:bg-dark-tertiary-bg transition-all duration-300 group"
        >
          <IoMdArrowBack className="transform group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
