export const INFO = {
  firstName: "Quang",
  lastName: "Trinh Khac",
  title: "Front-End Engineer",
  summary:
    "Versatile Front-End Engineer with 4+ years of experience designing, developing, and managing complex web applications and internal frameworks. Specializes in modern JavaScript's libraries and frameworks such as React, Vue.",
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
    subskills: ["React", "Vue", "Recoil/Redux/Vuex", "Gridsome", "Next.js"],
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
        url: "https://www.linkedin.com/in/quang-trinh-khac-66476517b/overlay/1635516197561/single-media-viewer/",
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
        url: "",
      },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Full-Stack Engineer",
    company: "Deliany",
    duration: "10/2020 - Present",
    projects: [
      {
        name: "Back-office",
        summary:
          "A back-office application for managing orders, shipping process, restaurant's settings and internal administration",
        tasks: [
          "Integrate with third party transportation providers' APIs (Grab, Ahamove, Borzo,...) for automated food delivery",
          "Implement new features, micro applications for both client-side and server-side",
          "Receive feedback from internal users and improve the application",
        ],
        stacks: ["ReactJS", "Recoil", "NextJS", "GraphQL", "Elixir"],
      },
      {
        name: "Order app",
        summary: "A website for online food ordering",
        tasks: [
          "Convert designs into web pages",
          "Implement new features and fix misbehave functions for both client-side and server-side",
          "Monitor and improve the application in terms of perfomance, SEO, UX/UI",
        ],
        stacks: ["ReactJS", "Recoil", "NextJS", "GraphQL", "Elixir"],
      },
    ],
  },
  {
    title: "Front-End Engineer",
    company: "Freelance",
    duration: "09/2019 - 10/2020",
    projects: [
      {
        name: "Big Storage",
        summary:
          "A shipping service that can track packages and provide updates on package location",
        tasks: [
          "Fix misbehave functions in existing codebase",
          "Convert designs into web pages",
          "Implement new features to client-side",
        ],
        stacks: ["VueJS", "Vuex", "Bootstrap"],
      },
      {
        name: "practice.dev",
        summary:
          "A platform where programmers solve programming challenges from domains such as front-end and/or back-end",
        tasks: [
          "Solve multiple challenges and projects to ensure they are working as intended",
        ],
        stacks: ["ReactJS", "VueJS", "NodeJS", "Firebase", "TailwindCSS"],
      },
      {
        name: "<Confidential>",
        summary: "A video chat website for desktop and mobile",
        tasks: [
          "Migrate from VueJS to ReactJS",
          "Fix misbehave functions in existing codebase",
          "Implement new features to client-side",
        ],
        stacks: ["ReactJS", "Redux", "WebRTC"],
      },
    ],
  },
  {
    title: "Front-End Engineer",
    company: "Dwarves Foundation",
    duration: "06/2019 - 09/2019",
    projects: [
      {
        name: "TelemetryTV",
        summary:
          "A powerful digital signage platform which allows users to broadcast dynamic content easily by streaming video, images, social feeds, turnkey apps, and data-driven dashboards to all of their displays",
        tasks: [
          "Maintain legacy system",
          "Legacy system migration",
          "Implement new features, micro applications to client-side",
          "Convert designs into web pages",
        ],
        stacks: ["VueJS", "Vuex", "Gridsome", "GraphQL", "TailwindCSS"],
      },
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Dwarves Foundation",
    duration: "04/2019 - 06/2019",
    projects: [
      {
        name: "DATCOM",
        summary:
          "An internal application to to help people in the company order lunch easier",
        tasks: [
          "Design application and database structure",
          "Build API for application",
          "Build admin page for menu creation and management",
        ],
        stacks: [
          "Golang",
          "PosgreSQL",
          "Restful API",
          "ReactJS",
          "TailwindCSS",
        ],
      },
    ],
  },
];
