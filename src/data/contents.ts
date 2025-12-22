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
    id: 1,
    title: "My Task: Modern Todo Manager",
    description:
      "My Task is a modern, responsive todo management application designed to help users organize, track, and manage tasks efficiently. The app focuses on clarity, speed, and usability, delivering a smooth experience across desktop and mobile devices.",
    image: myTask,
    tags: ["React19", "TailwindCSS", "ShadCN UI", "+3 more"],
    liveUrl: "https://my-tasktastic.netlify.app/",
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
    id: 2,
    title: "Olastore: An Ecommerce website",
    description:
      "Olastore is an e-commerce website, featuring product browsing, an add-to-cart function, and a streamlined checkout process for seamless purchases.",
    image: olaStore,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "+2 more"],
    liveUrl: "https://cerulean-druid-6b3fc3.netlify.app/",
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
    id: 3,
    title: "Space tourism website",
    description:
      "The Space Tourism Website is a multi-page, responsive website built as part of a Frontend Mentor challenge. The project showcases a visually rich interface that allows users to explore destinations, crew members, and space technology while maintaining pixel-perfect design and smooth navigation across devices.",
    image: space,
    tags: ["React19", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://space-tourism-ola.netlify.app/",
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
