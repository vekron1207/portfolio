import {
  backend,
  fullstack,
  web,
  javascript,
  typescript,
  reactjs,
  php,
  python,
  java,
  nodejs,
  git,
  docker,
  globalLogic,
  SASPV,
  optym,
  NCERT,
  yojana,
  autoEmail,
  githubImg,
  linkedInImg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: fullstack,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "NCERT",
    icon: NCERT,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Led the development of a tailored Management Information System using PHP, HTML, CSS, XAMPP, and Apache, focused on precise budget oversight for diverse NCERT departments.",
      "Collaborated extensively across departments to craft a seamless web application, streamlining budget tracking and enhancing financial decision-making.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Optym",
    icon: optym,
    iconBg: "#E6DEDD",
    date: "August 2022 - December 2022",
    points: [
      "Contributed to the development of a software solution to optimize the LTL and FTL industry as a backend engineer.",
      "Worked as a part of a team to design, build, and implement various components of the software.",
      "Successfully delivered new features within tight deadlines.",
      "Streamlined API testing processes by automating them with a script, leading to reduced manual effort and improved efficiency.",
    ],
  },
  {
    title: "Analyst",
    company_name: "GlobalLogic Technologies",
    icon: globalLogic,
    iconBg: "#383E56",
    date: "January 2020 - September 2021",
    points: [
      "Collaborated with Google as an on-site client, contributing to the maintenance of the company's Knowledge Graph data",
      "Ensured the accuracy and quality of both internal and external databases by updating and maintaining them, providing users with up-to-date information.",
      "Maintained a high level of quality, consistently achieving a benchmark of 95% or higher.",
    ],
  },
];

const projects = [
  {
    name: "Secured Authentication System for Product Verification",
    description:
      "A Blockchain based three inter-related applications namely Authenti-Kator-2.0, fabric-firebase-logger, and productAuth, aimed at providing authentication and logging services for products.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "CouchDB",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: SASPV,
    source_code_link: "https://github.com/vekron1207/Major_Final",
  },
  {
    name: "Yojana",
    description:
      "This MIS(Management Information System) portal, 'YOJANA', is created with the objectives to ensure the effective monitoring of programmes, updating of the progress of programmes and quick retrieval of essential information. It shall provide information on the PAC/PAB approved projects carried out by the Constituent Units of NCERT.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: yojana,
    source_code_link: "https://yojana.ncert.gov.in/#",
  },
  {
    name: "Auto Email",
    description:
      "This Python script allows you to send emails to recipients listed in a CSV file. It reads the email addresses, usernames, and other details from the CSV file and sends customized emails to each recipient..",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
    ],
    image: autoEmail,
    source_code_link: "https://github.com/vekron1207/autoEmail",
  },
];

const socialLinks = [
  { name: github, image: githubImg, link: "https://github.com/vekron1207" },
  {
    name: linkedIn,
    image: linkedInImg,
    link: "https://www.linkedin.com/in/varun-kashyap1207/",
  },
];

export { services, technologies, experiences, projects, socialLinks };
