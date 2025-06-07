import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FiMail, FiUser } from "react-icons/fi";
import axios from "axios";

const Form = () => {
  const initialFormData = {
    name: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:ahmadirfanfaiz13@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    setIsLoading(false);
    setFormData(initialFormData);
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
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-background/50 dark:bg-dark-background/50 border-2 border-main-border dark:border-dark-main-border text-main-text dark:text-dark-main-text focus:outline-none focus:border-secondary-border dark:focus:border-dark-secondary-border focus:ring-2 focus:ring-secondary-border/20 transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <FiMail className="absolute left-4 top-4 text-gray-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-background/50 dark:bg-dark-background/50 border-2 border-main-border dark:border-dark-main-border text-main-text dark:text-dark-main-text focus:outline-none focus:border-secondary-border dark:focus:border-dark-secondary-border focus:ring-2 focus:ring-secondary-border/20 transition-all duration-300"
              placeholder="Your Message..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="group w-full md:w-auto px-6 py-3 bg-secondary-border dark:bg-dark-secondary-border text-dark-main-text dark:text-main-text rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <IoIosSend
            className="group-hover:translate-x-1 transition-transform duration-300"
            size={20}
          />
          <span>{isLoading ? "Opening Email..." : "Send Message"}</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
