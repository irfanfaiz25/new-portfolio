import { MailIcon } from "../../svg/MailIcon";
import { GithubIcon } from "../../svg/GithubIcon";
import { LinkedinIcon } from "../../svg/LinkedinIcon";
import { UpworkIcon } from "../../svg/UpworkIcon";
import { InstagramIcon } from "../../svg/InstagramIcon";

import { Link } from "react-router";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [color, setColor] = useState(isDark ? "#f5cc00" : "#4361ee");

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDarkTheme =
            document.documentElement.classList.contains("dark");
          setIsDark(isDarkTheme);
          setColor(isDarkTheme ? "#ffd500" : "#4361ee");
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  const contacts = [
    {
      icon: <MailIcon width={25} height={25} color={color} />,
      name: "Email",
      content: "ahmadirfanfaiz13@gmail.com",
      link: "",
    },
    {
      icon: <GithubIcon width={25} height={25} color={color} />,
      name: "Github",
      content: "irfanfaiz25",
      link: "https://github.com/irfanfaiz25",
    },
    {
      icon: <LinkedinIcon width={25} height={25} color={color} />,
      name: "Linkedin",
      content: "ahmad irfan faiz",
      link: "https://www.linkedin.com/in/ahmad-irfan-faiz-0a4889137/",
    },
    {
      icon: <UpworkIcon width={25} height={25} color={color} />,
      name: "Upwork",
      content: "Ahmad Irfan Faiz",
      link: "https://www.upwork.com/freelancers/~0160f11004b06a39d7",
    },
    {
      icon: <InstagramIcon width={25} height={25} color={color} />,
      name: "Instagram",
      content: "irv.faizz",
      link: "https://www.upwork.com/freelancers/~0160f11004b06a39d7",
    },
  ];

  return (
    <div className="space-y-4">
      {contacts.map((contact, index) => (
        <div key={index} className="flex space-x-2 items-center">
          <Link
            to={contact.link}
            className="flex justify-center bg-secondary-bg dark:bg-dark-secondary-bg p-1.5 rounded-md shadow-md hover:shadow-lg shadow-[#2e2e30] hover:shadow-[#48484b]"
          >
            {contact.icon}
          </Link>
          <div className="space-y-0.5">
            <p className="text-xs text-main-text dark:text-dark-main-text">
              {contact.name}
            </p>
            <Link
              to={contact.link}
              className="flex space-x-1 items-center text-xs font-semibold text-main-text dark:text-dark-main-text hover:text-secondary-text dark:hover:text-dark-secondary-text hover:underline transition-all duration-300 break-all"
            >
              {contact.content}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
