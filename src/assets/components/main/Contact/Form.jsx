import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FiMail, FiUser } from "react-icons/fi";
import axios from "axios";

const Form = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [responseMessage, setResponseMessage] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://portfolio-api.irfanfaiz.my.id/api/contact",
        formData
      );
      setResponseMessage(response.data.message);
    } catch (err) {
      console.error("Error: ", err);
      setErrorResponse(err.response.data.errors);
    } finally {
      setIsLoading(false);
      setFormData(initialFormData);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-background/50 dark:bg-dark-background/50 border-2 border-main-border dark:border-dark-main-border text-main-text dark:text-dark-main-text focus:outline-none focus:border-secondary-border dark:focus:border-dark-secondary-border focus:ring-2 focus:ring-secondary-border/20 transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
          {errorResponse.name && (
            <p className="mt-1 text-sm text-red-400 font-medium">
              {errorResponse.name[0]}
            </p>
          )}
        </div>

        <div>
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-background/50 dark:bg-dark-background/50 border-2 border-main-border dark:border-dark-main-border text-main-text dark:text-dark-main-text focus:outline-none focus:border-secondary-border dark:focus:border-dark-secondary-border focus:ring-2 focus:ring-secondary-border/20 transition-all duration-300"
              placeholder="Your Email"
            />
          </div>
          {errorResponse.email && (
            <p className="mt-1 text-sm text-red-400 font-medium">
              {errorResponse.email[0]}
            </p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-background/50 dark:bg-dark-background/50 border-2 border-main-border dark:border-dark-main-border text-main-text dark:text-dark-main-text focus:outline-none focus:border-secondary-border dark:focus:border-dark-secondary-border focus:ring-2 focus:ring-secondary-border/20 transition-all duration-300"
            placeholder="Your Message..."
          />
          {errorResponse.message && (
            <p className="text-sm text-red-400 font-medium">
              {errorResponse.message[0]}
            </p>
          )}
        </div>

        {responseMessage && (
          <div
            className="flex items-center p-4 my-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Sent!</span> {responseMessage}
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="group w-full md:w-auto px-6 py-3 bg-secondary-border dark:bg-dark-secondary-border text-dark-main-text dark:text-main-text rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <IoIosSend
            className="group-hover:translate-x-1 transition-transform duration-300"
            size={20}
          />
          <span>{isLoading ? "Sending..." : "Send Message"}</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
