import type { TestimonialCardProps } from "@/type";

import justProject from "@/assets/certificates/just-project.jpeg";
import altSchool from "@/assets/certificates/altschool.png";
import tech4dev from "@/assets/certificates/tech4dev.png";
import cysec from "@/assets/certificates/cysec.png";
import wtf from "@/assets/certificates/wtf.png";

import tomisin from "@/assets/testimonials/tomisin.jpg";
import ebun from "@/assets/testimonials/ebun.jpg";

import olaStore from "@/assets/ola-store.png";
import myTask from "@/assets/my-task.png";
import space from "@/assets/space.png";

import img1 from "@/assets/ola1.jpeg";
import img2 from "@/assets/ola2.png";
import img3 from "@/assets/ola3.jpg";

// About
export const cardsData = [
  {
    id: 1,
    title: "Mountain Peak",
    image: img2,
  },
  {
    id: 2,
    title: "Ocean Waves",
    image: img3,
  },
  {
    id: 3,
    title: "Forest Path",
    image: img1,
  },
];

// Projects
export const projectsData = [
  {
    id: 111111111,
    title: "My Task: Modern Todo Manager",
    description:
      "My Task is a modern, responsive todo management application designed to help users organize, track, and manage tasks efficiently. The app focuses on clarity, speed, and usability, delivering a smooth experience across desktop and mobile devices.",
    image: myTask,
    tags: ["React19", "TailwindCSS", "ShadCN UI", "+3 more"],
    liveUrl: "https://my-tasktastic.netlify.app/",
    githubUrl: "https://github.com/holayide/todo-project-altsch",
    features: [
      "Create, edit, and delete tasks with form validation",
      "Toggle task status between in-progress and completed",
      "Filter tasks by status (All / In-Progress / Completed)",
      "Search tasks using keywords for quick access",
      "Responsive UI optimized for all screen sizes",
      "Clean, minimal interface for distraction-free task management",
    ],
  },
  {
    id: 222222222,
    title: "Olastore: An Ecommerce website",
    description:
      "Olastore is an e-commerce website, featuring product browsing, an add-to-cart function, and a streamlined checkout process for seamless purchases.",
    image: olaStore,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "+2 more"],
    liveUrl: "https://cerulean-druid-6b3fc3.netlify.app/",
    githubUrl: "https://github.com/holayide/olastore",
    features: [
      " Product listing with detailed product pages",
      "Add-to-cart and remove-from-cart functionality",
      "Cart item quantity management",
      "Real-time cart total calculation",
      "Smooth checkout flow with order summary",
      "Responsive layout for mobile and desktop shopping",
    ],
  },
  {
    id: 333333333,
    title: "Space tourism website",
    description:
      "A responsive multi-page website built for a Frontend Mentor challenge, featuring a visually rich interface for exploring space destinations, crew, and technology.",
    image: space,
    tags: ["React19", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://space-tourism-ola.netlify.app/",
    githubUrl: "https://github.com/holayide/space-tourism",
    features: [
      " Multi-page layout with dynamic content switching",
      "Explore space destinations with detailed descriptions",
      "View crew profiles with role-based navigation",
      "Discover space technology with interactive tabs",
      "Fully responsive design for mobile, tablet, and desktop",
      "Pixel-perfect implementation based on design specs",
    ],
  },
];

// Testimonial
export const testimonials: TestimonialCardProps[] = [
  {
    quote:
      "I had the pleasure of working with her as a frontend developer who consistently delivered assigned tasks on time, paid close attention to detail, and showed a strong sense of ownership over her work. Her willingness to learn, take feedback positively, and collaborate effectively made her a valuable member of the team, and she would be an asset to any organization.",
    name: "Oluwatomisin Owolabi",
    title: "Product Implementation & Support",
    company: "Bluechip Technologies Limited",
    avatar: tomisin,
    linkedinUrl: "https://www.linkedin.com/in/oluwatomisin-owolabi-11963b175/",
  },
  {
    quote:
      "Working with Yuelin was a pleasure. His ability to quickly understand complex requirements and deliver high-quality solutions consistently impressed me. His collaborative approach and technical expertise make him an invaluable team member.",
    name: "Sarah Chen",
    title: "Senior Product Manager",
    company: "Tech Innovations Inc",
    avatar: "SC",
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    quote:
      "Olaide is an amazing colleague I would love to work with again. She is proactive, thoughtful, experienced, and resourceful, and she never backs down from a challenge. She is truly an invaluable asset to any company.",
    name: "Ebunoluwa Oni",
    title: "Frontend Developer",
    company: "Prunedge",
    avatar: ebun,
    linkedinUrl: "https://www.linkedin.com/in/ebunoluwa-oni-6929731a9/",
  },
];

// Certifications
export const certifications = [
  {
    id: 1,
    title: "Women techsters fellowship",
    image: wtf,
  },
  {
    id: 2,
    title: "She roots",
    image: cysec,
  },
  { id: 3, title: "Altschool", image: altSchool },
  {
    id: 4,
    title: "Women techsters bootcamp",
    image: tech4dev,
  },
  {
    id: 5,
    title: "Just project",
    image: justProject,
  },
];
