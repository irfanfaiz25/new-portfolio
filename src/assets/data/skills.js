import LaravelLogo from "../svg/laravel.svg";
import PHPLogo from "../svg/php-logo.svg";
import JSLogo from "../svg/js-logo.svg";
import TailwindLogo from "../svg/tailwind-logo.svg";
import ReactLogo from "../svg/react-logo.svg";
import GitLogo from "../svg/git-logo.svg";
import PostmanLogo from "../svg/postman-logo.svg";
import MysqlLogo from "../svg/mysql-logo.svg";
import PostgresLogo from "../svg/postgres-logo.svg";
import LivewireLogo from "../svg/livewire-logo.svg";

export const SkillsData = {
  "Backend Development": {
    skills: [
      {
        name: "PHP",
        logo: PHPLogo,
      },
      {
        name: "Laravel",
        logo: LaravelLogo,
      },
    ],
  },
  "Database Management": {
    skills: [
      {
        name: "MySQL",
        logo: MysqlLogo,
      },
      {
        name: "Postgresql",
        logo: PostgresLogo,
      },
    ],
  },
  "Frontend Development": {
    notes: "Currently Exploring",
    skills: [
      {
        name: "Javascript",
        logo: JSLogo,
        borderColor: "border-t-tertiary-border",
      },
      {
        name: "ReactJS",
        logo: ReactLogo,
        borderColor: "border-t-tertiary-border",
      },
      {
        name: "Laravel Livewire",
        logo: LivewireLogo,
      },
      {
        name: "Tailwind",
        logo: TailwindLogo,
      },
    ],
  },
  "Tools and Technologies": {
    skills: [
      {
        name: "Git",
        logo: GitLogo,
      },
      {
        name: "Postman",
        logo: PostmanLogo,
      },
    ],
  },
};
