import { getYearsOfExperience, getFormattedDuration } from "@/utils";

export const INFO = {
  firstName: "Quang",
  lastName: "Trinh Khac",
  title: "Front-End Engineer",
  summary: `Versatile Front-End Engineer with ${getYearsOfExperience(
    "2019-01-01"
  )}+ years of experience designing, developing, and maintaining complex web applications. Skilled in modern JavaScript libraries and frameworks like React and Vue. Committed to delivering quality solutions and working collaboratively. Aiming to use my expertise to improve user engagement and conversions.`,
};

export const SKILLS = [
  {
    name: "HTML",
    subskills: [],
  },
  {
    name: "CSS",
    subskills: ["SCSS", "TailwindCSS", "CSS-in-JS"],
  },
  {
    name: "JavaScript",
    subskills: [
      "TypeScript",
      "ReactJS",
      "VueJS",
      "Next.js",
      "Gridsome",
      "State Management (Recoil, Zustand, Redux, Vuex)",
      "GraphQL",
    ],
  },
  {
    name: "Elixir/Phoenix",
    subskills: [],
  },
  {
    name: "Git",
    subskills: [],
  },
];

export const LINKS = [
  {
    title: "Portfolio",
    content: "tkhquang.dev",
    url: "https://tkhquang.dev/",
  },
  {
    title: "LinkedIn",
    content: "www.linkedin.com/in/\ntkhquang",
    url: "https://www.linkedin.com/in/quang-trinh-khac-66476517b/",
  },
  {
    title: "Github",
    content: "github.com/tkhquang",
    url: "https://github.com/tkhquang",
  },
];

export const CONTACTS = [
  {
    title: "Phone",
    content: "+84 8585 33839",
    url: "tel:+84858533839",
  },
  {
    title: "Email",
    content: "khacquang.trinh@gmail.com",
    url: "mailto:khacquang.trinh@gmail.com",
  },
  {
    title: "Address",
    content: "Nguyen Cu Trinh Ward, District 1, Ho Chi Minh City, Vietnam",
    url: null,
  },
];

export const CERTIFICATIONS = [
  {
    organization: "Wizeline Academy",
    certificates: [
      {
        name: "APAC React Bootcamp Certificate",
        url: "https://github.com/tkhquang/tkhquang-resume/blob/main/public/assets/documents/Wizeline_Academy-APAC_React_Bootcamp_Certificate.pdf",
        issueDate: null,
        expirationDate: null,
      },
    ],
  },
  {
    organization: "Dwarves Foundation",
    certificates: [
      {
        name: "Internship - Certificate of Completion",
        url: "https://github.com/dwarvesf/training/blob/master/2019/TrinhKhacQuang.pdf",
        issueDate: null,
        expirationDate: null,
      },
    ],
  },
  {
    organization: "freeCodeCamp",
    certificates: [
      {
        name: "Responsive Web Design Certification",
        url: "https://www.freecodecamp.org/certification/fcc6b7548be-1204-45a1-9ef0-f5cf14fbafe9/responsive-web-design",
        issueDate: null,
        expirationDate: null,
      },
      {
        name: "JavaScript Algorithms and Data Structures Certification",
        url: "https://www.freecodecamp.org/certification/fcc6b7548be-1204-45a1-9ef0-f5cf14fbafe9/javascript-algorithms-and-data-structures",
        issueDate: null,
        expirationDate: null,
      },
      {
        name: "Front End Development Libraries Certification",
        url: "https://www.freecodecamp.org/certification/fcc6b7548be-1204-45a1-9ef0-f5cf14fbafe9/front-end-development-libraries",
        issueDate: null,
        expirationDate: null,
      },
      {
        name: "Back End Development and APIs Certification",
        url: "https://www.freecodecamp.org/certification/fcc6b7548be-1204-45a1-9ef0-f5cf14fbafe9/back-end-development-and-apis",
        issueDate: null,
        expirationDate: null,
      },
    ],
  },
  {
    organization: "IIG Vietnam",
    certificates: [
      {
        name: "TOEIC - 870",
        url: null,
        issueDate: "12/2014",
        expirationDate: "12/2016",
      },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Front-End Engineer",
    company: "CareHealth",
    url: "https://www.getcare.io/",
    duration: getFormattedDuration({
      startDate: "2023-08-07",
    }),
    projects: [
      {
        name: "Health Screening Report",
        url: null,
        summary:
          "As the sole engineer for this project, I designed and deployed a service to dynamically generate PDF health screening reports using lab data. This system, for RMG, streamlines the report creation process for medical professionals. I also set up the project architecture and coding standards.",
        teamSize: 4,
        tasks: [
          "Led the design and implementation of the project structure and coding standards for the PDF generation service, focusing on scalability and maintainability.",
          "Built a robust API using Next.js API routes for on-demand, dynamic PDF report creation using lab data.",
          "Integrated Puppeteer for server-side rendering of complex reports and Recharts for data visualization in PDFs.",
          "Worked closely with two other Front-End Engineers to integrate the report generation API, allowing for faster feature delivery.",
        ],
        stacks: [
          "Next.js",
          "Puppeteer",
          "Recharts",
          "TypeScript",
          "TailwindCSS",
        ],
      },
      {
        name: "Wellness Platform",
        url: null,
        summary:
          "Led front-end development for the Wellness project, adding advanced features to the partner back-office. This improved platform interactivity, customization, and led to increased partner engagement and positive feedback.",
        teamSize: 10,
        tasks: [
          "Developed and delivered intuitive interfaces on schedule, meeting customer and business needs.",
          "Worked with the mobile team to ensure consistent webview behavior on Android and iOS, improving the Flutter app's functionality.",
          "Integrated event tracking and worked with the data team for insights to improve user experience.",
          "Implemented a monorepo strategy for four front-end repositories to reduce code duplication and encourage code reuse.",
        ],
        stacks: [
          "TypeScript",
          "ReactJS",
          "Zustand",
          "NextJS",
          "SCSS",
          "TailwindCSS",
          "Ant Design",
        ],
      },
      {
        name: "Membership",
        url: null,
        summary:
          "Enhanced the membership module and partner back-office interface by adding intuitive wellness solutions, which boosted user engagement and satisfaction.",
        teamSize: 12,
        tasks: [
          "Worked with two other Front-End Engineers to design and build intuitive interfaces aligned with the company's design system, user needs, and business goals.",
          "Researched integrating form builder frameworks (e.g., form.io, BEEKAI) with the company's design system to speed up form creation and better meet customer needs.",
        ],
        stacks: [
          "TypeScript",
          "ReactJS",
          "Zustand",
          "NextJS",
          "SCSS",
          "TailwindCSS",
          "Ant Design",
        ],
      },
    ],
  },
  {
    title: "Full-Stack Engineer",
    company: "Deliany",
    url: "https://eats.deliany.co/",
    duration: getFormattedDuration({
      startDate: "2020-10-21",
      endDate: "2023-07-28",
    }),
    projects: [
      {
        name: "Deliany SaaS Platform",
        url: null,
        summary:
          "Contributed to SaaS applications for an online food ordering system. Moved from Front-End (React) to Full-Stack (Elixir/Phoenix), helping design key systems and internal UI libraries for better consistency and efficiency.",
        teamSize: 8,
        tasks: [
          "Led the design and development of a POS system, focusing on quality and timely delivery.",
          "Improved company-wide JavaScript libraries, including a React UI library using Headless UI.",
          "Worked with designers and product owners to create intuitive, responsive UIs that met user and business needs.",
          "Reduced technical debt, which improved company productivity.",
          "Maintained application reliability and improved bug discovery for smooth client operations.",
          "Kept the codebase updated with the latest libraries for better performance and security.",
          "Optimized web layouts and user flows using user tracking, boosting conversion rates by 20%.",
          "Mentored junior developers, helping them improve their technical skills and fostering a culture of continuous improvement.",
        ],
        stacks: [
          "TypeScript",
          "ReactJS",
          "xstyled/styled-components",
          "Recoil",
          "NextJS",
          "GraphQL",
          "Elixir/Phoenix",
        ],
      },
    ],
  },
  {
    title: "Front-End Engineer",
    company: "Freelance",
    url: null,
    duration: getFormattedDuration({
      startDate: "2019-09-07",
      endDate: "2020-10-20",
    }),
    projects: [
      {
        name: "Big Storage",
        url: null,
        summary:
          "Developed front-end for a shipping service that tracked packages and updated package locations.",
        teamSize: 3,
        tasks: [
          "Designed and developed a reusable component library, reducing development time for new projects by 40%.",
          "Developed an interactive layout using Vue and Bootstrap for a better user experience and cross-browser compatibility.",
          "Reduced page load times by 200% by optimizing package management and removing unneeded dependencies.",
        ],
        stacks: ["VueJS", "Vuex", "Bootstrap"],
      },
      {
        name: "practice.dev",
        url: null,
        summary:
          "Contributed to a platform for programmers to solve front-end and back-end coding challenges.",
        teamSize: 2,
        tasks: [
          "Tested and fixed multiple challenges and projects to ensure they worked correctly.",
        ],
        stacks: ["ReactJS", "VueJS", "NodeJS", "Firebase", "TailwindCSS"],
      },
      {
        name: "<Confidential>",
        url: null,
        summary:
          "Developed and improved a video chat website for desktop and mobile.",
        teamSize: 5,
        tasks: [
          "Successfully migrated a large Vue/Parcel codebase to React/Webpack, improving performance and maintainability.",
          "Fixed bugs in the existing codebase.",
          "Added new client-side features.",
          "Fixed cross-browser web issues, improving efficiency and performance.",
        ],
        stacks: ["ReactJS", "Redux", "WebRTC"],
      },
    ],
  },
  {
    title: "Front-End Engineer",
    company: "Dwarves Foundation",
    url: "https://dwarves.foundation/",
    duration: getFormattedDuration({
      startDate: "2019-06-01",
      endDate: "2019-09-06",
    }),
    projects: [
      {
        name: "TelemetryTV",
        url: "https://www.telemetrytv.com/",
        summary:
          "Helped develop the company website and web app for a digital signage platform. Focused on migrating components to a new architecture and building interactive features.",
        teamSize: 5,
        tasks: [
          "Migrated many components and modules to a new repository with a different architecture.",
          "Turned complex designs into interactive user experiences to increase engagement and web traffic.",
          "Built interactive features using Vue for a smooth, efficient, and scalable user experience.",
        ],
        stacks: ["VueJS", "Vuex", "Gridsome", "GraphQL", "TailwindCSS"],
      },
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Dwarves Foundation",
    url: "https://dwarves.foundation/",
    duration: getFormattedDuration({
      startDate: "2019-04-01",
      endDate: "2019-06-01",
    }),
    projects: [
      {
        name: "DATCOM",
        url: null,
        summary:
          "As an intern in a team of 5, helped build an internal app for employee lunch ordering. Gained experience in back-end (Go) and front-end (React) development.",
        teamSize: 5,
        tasks: [
          "Worked in an Agile environment, managed tasks, and maintained code quality for an app built with React, TailwindCSS, and Go.",
          "Helped initialize the application and design the database structure using GORM and PostgreSQL.",
          "Built RESTful APIs using Gin (Golang).",
          "Built the admin page for menu management using React and TailwindCSS.",
        ],
        stacks: [
          "Golang",
          "PostgreSQL",
          "RESTful API",
          "ReactJS",
          "TailwindCSS",
        ],
      },
    ],
  },
];
