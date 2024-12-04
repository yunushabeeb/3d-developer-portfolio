// Importing assets like images and icons
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

// Navigation links for the website sections
export const navLinks = [
  {
    id: 'about', // About section
    title: 'About',
  },
  {
    id: 'work', // Work section
    title: 'Work',
  },
  {
    id: 'contact', // Contact section
    title: 'Contact',
  },
];

// Services offered by the developer, each with a title and icon
const services = [
  {
    title: 'Web Developer', // Title of the service
    icon: web, // Icon for the service
  },
  {
    title: 'React Native Developer', // Title of the service
    icon: mobile, // Icon for the service
  },
  {
    title: 'Backend Developer', // Title of the service
    icon: backend, // Icon for the service
  },
  {
    title: 'Content Creator', // Title of the service
    icon: creator, // Icon for the service
  },
];

// Technologies known by the developer, with name and associated icon
const technologies = [
  {
    name: 'HTML 5', // Technology name
    icon: html, // Icon for the technology
  },
  {
    name: 'CSS 3', // Technology name
    icon: css, // Icon for the technology
  },
  {
    name: 'JavaScript', // Technology name
    icon: javascript, // Icon for the technology
  },
  {
    name: 'TypeScript', // Technology name
    icon: typescript, // Icon for the technology
  },
  {
    name: 'React JS', // Technology name
    icon: reactjs, // Icon for the technology
  },
  {
    name: 'Redux Toolkit', // Technology name
    icon: redux, // Icon for the technology
  },
  {
    name: 'Tailwind CSS', // Technology name
    icon: tailwind, // Icon for the technology
  },
  {
    name: 'Node JS', // Technology name
    icon: nodejs, // Icon for the technology
  },
  {
    name: 'MongoDB', // Technology name
    icon: mongodb, // Icon for the technology
  },
  {
    name: 'Three JS', // Technology name
    icon: threejs, // Icon for the technology
  },
  {
    name: 'git', // Technology name
    icon: git, // Icon for the technology
  },
  {
    name: 'figma', // Technology name
    icon: figma, // Icon for the technology
  },
  {
    name: 'docker', // Technology name
    icon: docker, // Icon for the technology
  },
];

// Experience of the developer with titles, company names, dates, and responsibilities
const experiences = [
  {
    title: 'React.js Developer', // Job title
    company_name: 'Starbucks', // Company name
    icon: starbucks, // Icon representing the company
    iconBg: '#383E56', // Background color for the icon
    date: 'March 2020 - April 2021', // Duration of the job
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.', // Responsibility 1
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.', // Responsibility 2
      'Implementing responsive design and ensuring cross-browser compatibility.', // Responsibility 3
      'Participating in code reviews and providing constructive feedback to other developers.', // Responsibility 4
    ],
  },
  {
    title: 'React Native Developer', // Job title
    company_name: 'Tesla', // Company name
    icon: tesla, // Icon representing the company
    iconBg: '#E6DEDD', // Background color for the icon
    date: 'Jan 2021 - Feb 2022', // Duration of the job
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer', // Job title
    company_name: 'Shopify', // Company name
    icon: shopify, // Icon representing the company
    iconBg: '#383E56', // Background color for the icon
    date: 'Jan 2022 - Jan 2023', // Duration of the job
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer', // Job title
    company_name: 'Meta', // Company name
    icon: meta, // Icon representing the company
    iconBg: '#E6DEDD', // Background color for the icon
    date: 'Jan 2023 - Present', // Duration of the job
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

// Testimonials from clients or colleagues, with the testimonial text, name, designation, company, and image
const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee', // Name of the person
    designation: 'CFO', // Designation of the person
    company: 'Acme Co', // Company name
    image: 'https://randomuser.me/api/portraits/women/4.jpg', // Image URL
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown', // Name of the person
    designation: 'COO', // Designation of the person
    company: 'DEF Corp', // Company name
    image: 'https://randomuser.me/api/portraits/men/5.jpg', // Image URL
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang', // Name of the person
    designation: 'CTO', // Designation of the person
    company: '456 Enterprises', // Company name
    image: 'https://randomuser.me/api/portraits/women/6.jpg', // Image URL
  },
];

// Projects the developer has worked on, with name, description, tags (technologies used), image, and source code link
const projects = [
  {
    name: 'Car Rent', // Name of the project
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react', // Technology used
        color: 'blue-text-gradient', // Text color for the technology
      },
      {
        name: 'mongodb', // Technology used
        color: 'green-text-gradient', // Text color for the technology
      },
      {
        name: 'tailwind', // Technology used
        color: 'pink-text-gradient', // Text color for the technology
      },
    ],
    image: carrent, // Image associated with the project
    source_code_link: 'https://github.com/', // Link to the source code
  },
  {
    name: 'Job IT', // Name of the project
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react', // Technology used
        color: 'blue-text-gradient', // Text color for the technology
      },
      {
        name: 'restapi', // Technology used
        color: 'green-text-gradient', // Text color for the technology
      },
      {
        name: 'scss', // Technology used
        color: 'pink-text-gradient', // Text color for the technology
      },
    ],
    image: jobit, // Image associated with the project
    source_code_link: 'https://github.com/', // Link to the source code
  },
  {
    name: 'Trip Guide', // Name of the project
    description:
      'An app that helps users find travel destinations, hotels, and attractions with information about each, making it easier for tourists to plan their trips.',
    tags: [
      {
        name: 'react', // Technology used
        color: 'blue-text-gradient', // Text color for the technology
      },
      {
        name: 'nextjs', // Technology used
        color: 'green-text-gradient', // Text color for the technology
      },
      {
        name: 'tailwind', // Technology used
        color: 'pink-text-gradient', // Text color for the technology
      },
    ],
    image: tripguide, // Image associated with the project
    source_code_link: 'https://github.com/', // Link to the source code
  },
];

export { services, technologies, experiences, testimonials, projects };
