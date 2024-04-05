import { getYearsOfExperience, getFormattedDuration } from "@/utils";

export const INFO = {
  firstName: "Quang",
  lastName: "Trinh Khac",
  title: "Front-End Engineer",
  summary: `Versatile Front-End Engineer with ${getYearsOfExperience(
    "2019-01-01"
  )}+ years of experience designing, developing, and maintaining complex web applications. Specialized in modern JavaScript's libraries and frameworks such as React, Vue,... with a commitment to delivering innovative solutions and fostering a collaborative work environment. Aiming to leverage my expertise in developing innovative ideas that drive engagement and conversion.`,
};

export const SKILLS = [
  {
    name: "HTML",
    subskills: [],
  },
  {
    name: "CSS",
    subskills: ["SCSS", "Tailwind", "CSS-in-JS"],
  },
  {
    name: "JavaScript",
    subskills: [
      "TypeScript",
      "React",
      "Vue",
      "Recoil/Zustand/Redux/Vuex",
      "Gridsome",
      "Next.js",
    ],
  },
  {
    name: "Elixir",
    subskills: [],
  },
  {
    name: "Git",
    subskills: [],
  },
];

export const LINKS = [
  {
    title: "Porfolio",
    content: "tkhquang.dev",
    url: "https://tkhquang.dev/",
  },
  {
    title: "LinkedIn",
    content: "www.linkedin.com/in/quang-\ntrinh-khac-66476517b",
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
    title: "Skype",
    content: "live:khacquang.trinh",
    url: "skype:live:khacquang.trinh?chat",
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
      },
    ],
  },
  {
    organization: "Dwarves Foundation",
    certificates: [
      {
        name: "Internship - Certificate Of Completion",
        url: "https://github.com/dwarvesf/training/blob/master/2019/TrinhKhacQuang.pdf",
      },
    ],
  },
  {
    organization: "freeCodeCamp",
    certificates: [
      {
        name: "Responsive Web Design Certification",
        url: "https://www.freecodecamp.org/certification/fcc6b7548be-1204-45a1-9ef0-f5cf14fbafe9/responsive-web-design",
      },
      {
        name: "JavaScript Algorithms and Data Structures Certification",
        url: "https://www.freecodecamp.org/certification/fcc6b7548be-1204-45a1-9ef0-f5cf14fbafe9/javascript-algorithms-and-data-structures",
      },
      {
        name: "Front End Libraries Certification",
        url: "https://www.freecodecamp.org/certification/fcc6b7548be-1204-45a1-9ef0-f5cf14fbafe9/front-end-libraries",
      },
      {
        name: "APIs and Microservices Certification",
        url: "https://www.freecodecamp.org/certification/fcc6b7548be-1204-45a1-9ef0-f5cf14fbafe9/apis-and-microservices",
      },
    ],
  },
  {
    organization: "IIG Vietnam",
    certificates: [
      {
        name: "TOEIC - 870",
        url: null,
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
        name: "Membership",
        url: null,
        summary:
          "As a Front-End Engineer at Care, I focused on improving the membership module and the partner backoffice interface. My role involved creating and integrating user-friendly solutions into the wellness features, which enhanced user engagement and satisfaction.",
        teamSize: 12,
        tasks: [
          "Collaborating with two other Front-End Engineers, I contributed to the creation and implementation of user-friendly interfaces that aligned with user needs and business goals.",
          "Led the research on integrating form builder frameworks like form.io and BEEKAI with our company's design system. This effort resulted in quicker form creation, directly addressing customer needs more efficiently.",
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
        name: "Wellness",
        url: null,
        summary:
          "As the sole Front-End Engineer for this project, I implemented the wellness features into the partner backoffice interface. My contributions enhanced the interactive and customizable aspects of the platform, leading to increased partner involvement and positive feedback.",
        teamSize: 10,
        tasks: [
          "Played a key role in the team that developed and delivered complex, intuitive interfaces on time, effectively meeting customer expectations and strategic objectives.",
          "Collaborated with the mobile development team to ensure cross-platform accuracy of webview behavior in Android and iOS, boosting the functionality of the Flutter mobile application.",
          "Incorporated event tracking features and closely collaborated with the data team to extract actionable insights.",
          "Pioneered the research and application of a monorepo approach to consolidate four distinct Front-End repositories, reducing code duplication and enable code reuse.",
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
        name: "Deliany",
        url: null,
        summary:
          "At Deliany, I was involved in the development of multiple SaaS applications, which are parts of an online food ordering system (cloud kitchen). Started off as a Front-End Engineer, I utilized my knowledge and skills in React and its ecosystem before transitioning to a Full-Stack position using Elixir/Phoenix. I played a key role in deciding and shaping the company's internal UI libraries, ensuring consistency and high efficiency.",
        teamSize: 8,
        tasks: [
          "Led the architectural design and development efforts for a POS system, ensuring that the code was of high quality and delivered on time.",
          "Maintained and improved company-wide shared JavaScript libraries, with a specific focus on creating a robust and user-friendly React UI library.",
          "Collaborated closely with designers, product owners, and stakeholders to create intuitive and responsive UIs that met user needs and business requirements.",
          "Proactively addressed technical debt in a sustainable manner, resulting in a significant increase in company productivity.",
          "Ensured that the applications were reliable and that bugs were easily discoverable, making sure that the system ran smoothly for our clients.",
          "Kept the codebase clean and up-to-date with the latest libraries, ensuring that the applications were performant and secure.",
          "Implemented user tracking to optimize website layouts and user flows, resulting in a 20% increase in conversion rates.",
          "Mentored and guided junior developers to improve their technical skills and foster a culture of continuous learning and growth.",
        ],
        stacks: [
          "TypeScript",
          "ReactJS",
          "Recoil",
          "NextJS",
          "GraphQL",
          "Elixir",
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
          "A shipping service that can track packages and provide updates on package location.",
        teamSize: 3,
        tasks: [
          "Designed and developed a reusable component library for future use, resulting in a 40% reduction in development time for new projects.",
          "Developed an interactive layout, using Vue and Bootstrap to generate an improved user experience and ensure high-quality design and cross-browser compatibility.",
          "Reduced page load times by 200% by optimizing package management and removing unnecessary dependencies.",
        ],
        stacks: ["VueJS", "Vuex", "Bootstrap"],
      },
      {
        name: "practice.dev",
        url: null,
        summary:
          "A platform where programmers solve programming challenges from domains such as front-end and/or back-end.",
        teamSize: 2,
        tasks: [
          "Solved multiple challenges and projects to ensure they were working as intended.",
        ],
        stacks: ["ReactJS", "VueJS", "NodeJS", "Firebase", "TailwindCSS"],
      },
      {
        name: "<Confidential>",
        url: null,
        summary: "A video chat website for desktop and mobile.",
        teamSize: 5,
        tasks: [
          "Successfully migrated a large Vue/Parcel codebase to React/Webpack, improving performance and maintainability.",
          "Fixed misbehaving functions in existing codebase",
          "Implemented new features to client-side.",
          "Successfully debugged the web-related (cross-browser) issues, leading to improved efficiency and performance.",
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
          "A powerful digital signage platform which allows users to broadcast dynamic content easily by streaming video, images, social feeds, turnkey apps, and data-driven dashboards to all of their displays. I was involved in the development of two applications: the company website and the web-based appplication of the digital signage platform.",
        teamSize: 5,
        tasks: [
          "Successfully migrated a large number of components and modules from an old repository to a new one with a completely different architectural design.",
          "Translated complex design requirements into interactive user experiences to promote customer engagement and drive web traffic.",
          "Implemented interactive user-facing features using Vue, ensuring a smooth and efficient user experience with maximum scalability.",
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
          "As an intern, I worked in a team of 5 people, with the task of building an internal application to to help people in the company order lunch easier. All members were involved in the Back-End development. After that, I was responsible for building the application's UI.",
        teamSize: 5,
        tasks: [
          "Leveraged agile methodology to manage tasks and maintain code quality while developing the application using React, TailwindCSS and Go.",
          "Initilzed the application and designed the database structure using GORM, PostgreSQL.",
          "Built RESTful APIs for application using Gin.",
          "Built admin page for menu creation and management leveraging React and TailwindCSS.",
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
