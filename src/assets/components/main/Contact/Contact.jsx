import Index from "../Index";
import RecommendationLight from "../../../svg/RecommendationLight.svg";
import RecommendationDark from "../../../svg/RecommendationDark.svg";
import Form from "./Form";

const Contact = () => {
  return (
    <Index>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-text dark:text-dark-secondary-text mb-3">
            {`Let's Connect!`}
          </h2>
          <p className="text-main-text dark:text-dark-main-text">
            {`Have a project in mind? I'd love to hear about it.`}
          </p>
        </div>

        <div className="block md:grid md:grid-cols-2 items-center">
          <div className="hidden md:block">
            <img
              src={RecommendationLight}
              className="h-[320px] 2xl:h-[350px] w-auto hover:scale-105 transition-transform duration-300 dark:hidden"
              alt="Contact illustration"
            />
            <img
              src={RecommendationDark}
              className="h-[320px] 2xl:h-[350px] w-auto hover:scale-105 transition-transform duration-300 hidden dark:block"
              alt="Contact illustration"
            />
          </div>

          <Form />
        </div>

        <div className="mt-12 text-center">
          <p className="text-main-text dark:text-dark-main-text">
            Or reach me directly at{" "}
            <a
              href="mailto:ahmadirfanfaiz13@gmail.com"
              className="text-secondary-text dark:text-dark-secondary-text hover:underline"
            >
              ahmadirfanfaiz13@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Index>
  );
};
export default Contact;
