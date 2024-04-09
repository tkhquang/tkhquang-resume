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
        issueDate: null,
        expirationDate: null,
      },
    ],
  },
  {
    organization: "Dwarves Foundation",
    certificates: [
      {
        name: "Internship - Certificate Of Completion",
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
        name: "Membership",
        url: null,
        summary:
          "As a Front-End Engineer at Care, I enhanced the membership module and the partner back-office interface, focusing on integrating intuitive solutions into the wellness features to boost user engagement and satisfaction.",
        teamSize: 12,
        tasks: [
          "Collaborated with two other Front-End Engineers to design and implement interfaces that were intuitive and consistent with the company-wide design system, catering to user preferences and supporting business goals.",
          "Led research into integrating form builder frameworks such as form.io and BEEKAI with our company's design system, achieving faster form creation and more efficient addressing of customer needs.",
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
          "Solely responsible for the front-end development of the Wellness project, I integrated wellness features into the partner back-office interface, enhancing platform interactivity and customization which led to increased partner engagement and positive feedback.",
        teamSize: 10,
        tasks: [
          "Developed and delivered complex, intuitive interfaces on schedule, fulfilling customer expectations and business strategies.",
          "Worked with the mobile engineering team to ensure webview behavior consistency across Android and iOS, improving the Flutter mobile application's functionality.",
          "Integrated event tracking features and worked closely with the data team for actionable insights, enhancing user experience.",
          "Initiated and applied a monorepo strategy to unify four front-end repositories, minimizing code duplication and fostering code reuse.",
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
          "At Deliany, I contributed to the development of multiple SaaS applications as part of an online food ordering system (cloud kitchen). Starting off as a Front-End Engineer, I utilized my knowledge and skills in React and its ecosystem before transitioning to a Full-Stack role using Elixir/Phoenix. I played a key role in deciding on and shaping the company's internal UI libraries, ensuring consistency and efficiency.",
        teamSize: 8,
        tasks: [
          "Led the architectural design and development of a POS system, focusing on high-quality, timely delivered code.",
          "Enhanced company-wide JavaScript libraries, emphasizing a robust and intuitive React UI library leveraging Headless UI.",
          "Worked closely with designers and product owners to develop intuitive, responsive UIs, aligning with user needs and business goals.",
          "Addressed technical debt effectively, significantly boosting company productivity.",
          "Maintained application reliability and streamlined bug discovery to ensure smooth client operations.",
          "Updated and maintained the codebase with the latest libraries for optimal performance and security.",
          "Optimized web layouts and user flows through user tracking, boosting conversion rates by 20%.",
          "Mentored junior developers, promoting technical skill enhancement and a culture of continuous improvement.",
        ],
        stacks: [
          "TypeScript",
          "ReactJS",
          "xstyled/styled-components",
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
