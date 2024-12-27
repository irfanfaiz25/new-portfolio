const getImageUrl = (name) =>
  new URL(`../img/projects/${name}.png`, import.meta.url).href;

const edcSampleImages = [...Array(4)].map((_, i) =>
  getImageUrl(`edc-sample${i + 1}`)
);
const edcSecurityImages = [...Array(3)].map((_, i) =>
  getImageUrl(`edc-security${i + 1}`)
);
const edcAssetImages = [...Array(3)].map((_, i) =>
  getImageUrl(`edc-asset${i + 1}`)
);
const rentalImages = [...Array(8)].map((_, i) => getImageUrl(`rental${i + 1}`));
const mebelImages = [...Array(4)].map((_, i) => getImageUrl(`mebel${i + 1}`));
const libraryImages = [...Array(1)].map((_, i) =>
  getImageUrl(`library${i + 1}`)
);
const questionnaireImages = [...Array(3)].map((_, i) =>
  getImageUrl(`questionnaire${i + 1}`)
);
const esTehImages = [...Array(9)].map((_, i) => getImageUrl(`esteh${i + 1}`));
const relasiImages = [...Array(8)].map((_, i) => getImageUrl(`relasi${i + 1}`));

export const ProjectsData = [
  {
    name: "Sample Monitoring System for EDC",
    description: `A project developed for PT Astra Otoparts' digitalization initiative that streamlines sample recording and monitoring by implementing an interactive system for easy navigation, generating detailed product labels with barcodes, and enabling efficient tracking through barcode scanning at each stage of the sample's journey, ensuring accurate and seamless data management.`,
    short_description:
      "Interactive system for streamlined sample recording and monitoring with barcode tracking.",
    techStack: ["PHP", "Bootstrap", "MySQL"],
    images: edcSampleImages,
    url: "",
  },
  {
    name: "Security Checking System for EDC",
    description: `This system, developed for PT Astra Otoparts' digitalization initiative, enhances security patrol efficiency by enabling personnel to scan barcodes at designated checkpoints using a device and scanner, automatically updating location status in real-time and streamlining both data recording and reporting processes for improved monitoring and management.`,
    short_description:
      "Real-time security patrol monitoring system with barcode scanning at checkpoints.",
    techStack: ["PHP", "Laravel", "Livewire", "Bootstrap", "MySQL"],
    images: edcSecurityImages,
    url: "",
  },
  {
    name: "PlayStation Rental Management System",
    description: `A comprehensive system designed to streamline the management of PlayStation rentals. It includes features for tracking console availability, managing rental durations, calculating total income, and handling customer orders for food and drinks. The system enhances operational efficiency and provides an intuitive interface for seamless management of rental activities.`,
    short_description:
      "Comprehensive system for managing PlayStation rentals and tracking console availability.",
    techStack: ["PHP", "Laravel", "Livewire", "Tailwind", "MySQL"],
    images: rentalImages,
    url: "https://github.com/irfanfaiz25/rental-management-v3",
  },
  {
    name: "Asset Management System for EDC",
    description: `Part of PT Astra Otoparts' digitalization program, this system streamlines asset data management by enabling easy asset recording and barcode label printing for identification. Users can scan barcodes during stock-taking for quick database updates, enhancing efficiency and accuracy in asset management.`,
    short_description:
      "Streamlined asset management system with barcode scanning for efficient tracking.",
    techStack: ["PHP", "Bootstrap", "MySQL"],
    images: edcAssetImages,
    url: "",
  },
  {
    name: "Link Meuble: Online Furniture Store",
    description: `An e-commerce platform tailored for online furniture sales, offering a user-friendly interface for browsing detailed product listings such as chairs, tables, and cupboards. The user section includes features like product detail views, a shopping cart, and a seamless checkout process. Additionally, the admin panel provides robust tools for managing products, monitoring and accepting orders, and updating delivery receipt numbers, ensuring smooth operations for both customers and administrators.`,
    short_description:
      "User-friendly e-commerce platform for furniture sales with comprehensive admin tools.",
    techStack: ["PHP", "Bootstrap", "MySQL"],
    images: mebelImages,
    url: "https://github.com/irfanfaiz25/link-mebel",
  },
  {
    name: "Library Management for SDN Catur",
    description: `A dedicated library management system developed for SDN Catur as part of the Kampus Mengajar program under the Kampus Merdeka government initiative. This website streamlines library operations by enabling efficient book cataloging, borrowing, and returning processes. Designed with simplicity and accessibility in mind, it allows teachers to easily manage book inventories and track borrowing activities, enhancing the overall library experience for both staff and students.`,
    short_description:
      "Efficient library management system for cataloging and tracking book borrowings.",
    techStack: ["PHP", "Bootstrap", "MySQL"],
    images: libraryImages,
    url: "https://github.com/irfanfaiz25/sdncatur-library",
  },
  {
    name: "Questionnaire Management Platforms",
    description: `A series of questionnaire management websites designed to facilitate data collection and analysis through customizable surveys. These platforms include user-facing pages for respondents to fill out questionnaires and an admin panel for managing question data. The admin panel also features tools for visualizing responses through dynamic charts and generating detailed reports, providing valuable insights from the collected data. These websites are tailored for seamless usability and efficient survey management.`,
    short_description:
      "Customizable survey platforms with data visualization and reporting capabilities.",
    techStack: ["PHP", "Laravel", "Livewire", "Tailwind", "MySQL"],
    images: questionnaireImages,
    url: "https://github.com/irfanfaiz25/si-mobile",
  },
  {
    name: "Es Teh POS and Management System",
    description: `A desktop application developed to streamline the operations of a beverage business, focusing on point-of-sale (POS) and business management functionalities. The system enables efficient cashiering processes, inventory tracking, and sales reporting, tailored to meet the unique needs of the Es Teh Kampul business. With its user-friendly interface and comprehensive features, the application enhances operational efficiency and provides valuable insights to support business growth.`,
    short_description:
      "Desktop POS system for beverage business with inventory management.",
    techStack: ["Java", "MySQL"],
    images: esTehImages,
    url: "https://github.com/irfanfaiz25/esteh-manager",
  },
  {
    name: "Employee Salary Management System",
    description: `A desktop application designed to simplify and automate employee salary management processes. This system enables efficient tracking of employee details, calculating salaries, and generating payroll reports. Additionally, it includes functionality to print detailed salary receipts, providing employees with clear and professional documentation. With its intuitive interface and robust features, the application helps organizations streamline their payroll operations, reduce errors, and save time.`,
    short_description:
      "Desktop application for automated employee salary calculation and payroll management.",
    techStack: ["Java", "MySQL"],
    images: relasiImages,
    url: "https://github.com/irfanfaiz25/relasi-jaya-employee-management",
  },
];
