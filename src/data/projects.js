const projectsData = [
  {
    id: 1,
    title: "Courselist",
    description:
      "A web app to keep track of your courses. Option to download as PDF available",
    image:
      "https://res.cloudinary.com/qaz2dc/image/upload/v1678302578/Portfolio%20Images/thumbs/courselist_p3ito3.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://courselist-beta.vercel.app/",
    sourceUrl:
      "https://github.com/ronniiii-i/ronniiii-i.github.io/tree/main/projects/courselist",
    timestamp: "2023-12-02T10:00:00Z",
  },
  {
    id: 2,
    title: "HomeSmart Furniture Rentals",
    description: "A landing page of a furiture rental store",
    image:
      "https://res.cloudinary.com/qaz2dc/image/upload/v1678302579/Portfolio%20Images/thumbs/homesmart_l5cu8w.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://360codingchallenge.vercel.app/",
    sourceUrl: "https://github.com/ronniiii-i/360codingchallenge",
    timestamp: "2023-12-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Todo app",
    description: "A drag and drop todo app",
    image:
      "https://res.cloudinary.com/qaz2dc/image/upload/v1678302579/Portfolio%20Images/thumbs/todo_dhtcsw.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://todo-app-dg.vercel.app/",
    sourceUrl:
      "https://github.com/ronniiii-i/ronniiii-i.github.io/tree/main/projects/todo-app-main",
    timestamp: "2023-12-08T09:15:00Z",
  },
  {
    id: 4,
    title: "Crappo Crypto Currency",
    description: "Static crypto site with animations",
    image:
      "https://res.cloudinary.com/qaz2dc/image/upload/v1678302579/Portfolio%20Images/thumbs/crappo_zlcrfh.png",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    demoUrl: "https://crappo-crypto-currency.vercel.app/",
    sourceUrl: "https://github.com/ronniiii-i/crypto_currency",
    timestamp: "2023-12-11T16:45:00Z",
  },
  {
    id: 5,
    title: "Advice Generator App",
    description: "Generate new advice everytime the dice is clicked",
    image:
      "https://res.cloudinary.com/qaz2dc/image/upload/v1678302578/Portfolio%20Images/thumbs/advice_vebezj.png",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    demoUrl: "https://advice-generator-app-fmc.vercel.app//",
    sourceUrl:
      "https://github.com/ronniiii-i/ronniiii-i.github.io/tree/main/projects/advice-generator-app",
    timestamp: "2023-12-14T12:00:00Z",
  },
  {
    id: 6,
    title: "Interno",
    description: "Showcasing Creative Home Design and Interior Solutions",
    image:
      "https://res.cloudinary.com/qaz2dc/image/upload/v1694017837/Portfolio%20Images/thumbs/interno_thumb_ne57dz.png",
    technologies: ["React", "SCSS", "API"],
    demoUrl: "https://interno-self.vercel.app/",
    sourceUrl: "https://github.com/ronniiii-i/Interno",
    timestamp: "2023-12-18T18:30:00Z",
  },
  {
    id: 7,
    title: "UC Braids",
    description: "Your Destination for Professional Hair Braiding Services",
    image:
      "https://res.cloudinary.com/qaz2dc/image/upload/v1694017717/Portfolio%20Images/thumbs/ucbraids_thumb_joefjk.png",
    technologies: ["React", "SCSS", "Firebase"],
    demoUrl: "https://ucbraids.vercel.app/",
    sourceUrl: "",
    timestamp: "2023-12-22T08:45:00Z",
  },

  {
    id: 1760909397656,
    title: "rhf-ts — React Hook Form + TypeScript Practice Project",
    description: "A personal learning project where I built a multi-step form using React Hook Form, Zod, and TypeScript.",
    image: "https://i.imgur.com/9MUzC9A.png",
    technologies: ["React","TypeScript", "Zod","Tailwind CSS"],
    demoUrl: "https://rhf-ts.vercel.app/",
    sourceUrl: "https://github.com/ronniiii-i/rhf-ts",
    timestamp: "2025-10-19T21:29:57.656Z"
  },
  
  {
    id: 1760910126704,
    title: "ClaspCRM — Complete Business Management Solution",
    description: "An all-in-one business management platform that helps enterprises manage contacts, projects, HR, inventory, analytics, and more in one unified system.",
    image: "https://i.imgur.com/GyvZPk4.jpeg",
    technologies: ["Next.js","TypeScript","Tailwind CSS","Shadcn"],
    demoUrl: "https://claspcrm.vercel.app/",
    sourceUrl: "https://github.com/ronniiii-i/ClaspCRM",
    timestamp: "2025-10-19T21:42:06.704Z"
  },
  
  {
    id: 1760914311738,
    title: "ClaspCRM Backend — Scalable Enterprise API",
    description: "The backend for ClaspCRM, built with NestJS and Prisma for enterprise-grade performance and modular scalability.",
    image: "",
    technologies: ["NestJS","TypeScript","Prisma","PostgreSQL"],
    demoUrl: "",
    sourceUrl: "https://github.com/ronniiii-i/crm-backend",
    timestamp: "2025-10-19T22:51:51.738Z"
  },
  
  {
    id: 1760957111521,
    title: "SnapLog — Automated Screenshot Logging System",
    description: "A Python-based background service that periodically captures screenshots, saves them locally, and syncs them securely to a shared network drive.",
    image: "",
    technologies: ["Python"],
    demoUrl: "",
    sourceUrl: "https://github.com/ronniiii-i/snaplog",
    timestamp: "2025-10-20T10:45:11.521Z",
    type: "Python App"
  },
  
  {
    id: 1760958547913,
    title: "Snaplog Server — Centralized Client Management Dashboard",
    description: "A Tkinter-based desktop dashboard for managing multiple Snaplog clients.",
    image: "https://i.imgur.com/C8OapCj.png",
    technologies: ["Python","Tkinter"],
    demoUrl: "",
    sourceUrl: "https://github.com/ronniiii-i/snaplog_server",
    timestamp: "2025-10-20T11:09:07.913Z"
  },
  
  {
    id: 1767320203015,
    title: "MediaShare",
    description: "An open-source project for private media sharing among friends",
    image: "https://res.cloudinary.com/qaz2dc/image/upload/v1767320687/Portfolio%20Images/thumbs/a1c2a749-40e6-4fcf-9f94-b5fd17ec3b6b.png",
    technologies: ["Next.js","TypeScript","Tailwind CSS","Prisma","PostgreSQL","NextAuth.js","UploadThing","Zod"],
    demoUrl: "https://mediashareapp.vercel.app/",
    sourceUrl: "https://github.com/ronniiii-i/media-share-app",
    timestamp: "2026-01-02T02:16:43.015Z"
  },
  ];

export default projectsData;
