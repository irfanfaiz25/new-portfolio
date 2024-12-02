import { MailIcon } from "../../svg/MailIcon";
import { GithubIcon } from "../../svg/GithubIcon";
import { LinkedinIcon } from "../../svg/LinkedinIcon";
import { UpworkIcon } from "../../svg/UpworkIcon";
import { InstagramIcon } from "../../svg/InstagramIcon";
// import { ChainLink } from "../../svg/ChainLink";

import { Link } from "react-router";

const Contact = () => {
  const contacts = [
    {
      icon: <MailIcon width={25} height={25} color="#F3C623" />,
      name: "Email",
      content: "ahmadirfanfaiz13@gmail.com",
      link: "",
    },
    {
      icon: <GithubIcon width={25} height={25} color="#F3C623" />,
      name: "Github",
      content: "irfanfaiz25",
      link: "https://github.com/irfanfaiz25",
    },
    {
      icon: <LinkedinIcon width={25} height={25} color="#F3C623" />,
      name: "Linkedin",
      content: "ahmad irfan faiz",
      link: "https://www.linkedin.com/in/ahmad-irfan-faiz-0a4889137/",
    },
    {
      icon: <UpworkIcon width={25} height={25} color="#F3C623" />,
      name: "Upwork",
      content: "Ahmad Irfan Faiz",
      link: "https://www.upwork.com/freelancers/~0160f11004b06a39d7",
    },
    {
      icon: <InstagramIcon width={25} height={25} color="#F3C623" />,
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
            className="flex justify-center bg-secondary-bg p-1.5 rounded-md shadow-lg shadow-[#2e2e30] hover:shadow-[#48484b]"
          >
            {contact.icon}
          </Link>
          <div className="space-y-0.5">
            <p className="text-xs text-main-text">{contact.name}</p>
            <Link
              to={contact.link}
              className="flex space-x-1 items-center text-xs font-semibold text-main-text hover:text-secondary-text hover:underline transition-all duration-300"
            >
              <p>{contact.content}</p>
              {/* <ChainLink width={9} height={9} color="#F3C623" /> */}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
