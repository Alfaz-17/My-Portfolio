export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: {
    title: string;
    description: string;
    icon: string; // Will map to SVG paths
  }[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: "bookmybox",
    title: "BookMyBox.online",
    tagline: "Real-Time Turf Booking Web App",
    description: "A full-stack booking platform featuring real-time slot updates, Redis queues, and secure WhatsApp authentication.",
    longDescription: "BookMyBox is a robust backend-heavy application I built to handle turf reservations. To prevent double-bookings, I used Socket.IO for real-time slot updates. I also implemented advanced backend concepts like Redis and BullMQ for background job processing, Express Rate Limiting to prevent API abuse, and integrated a custom WhatsApp OTP login flow using the Baileys library.",
    techStack: ["Node.js", "Express", "MongoDB", "Socket.IO", "Redis", "React.js"],
    features: [
      {
        title: "Real-Time WebSockets",
        description: "Integrated Socket.IO to broadcast live slot availability, ensuring users instantly see when a turf is booked.",
        icon: "clock"
      },
      {
        title: "WhatsApp Login",
        description: "No need for emails or passwords—users can log in securely using WhatsApp OTPs and receive instant booking receipts.",
        icon: "message"
      },
      {
        title: "API Rate Limiting",
        description: "Secured the Express backend using rate limiters to protect endpoints against brute-force and spam attacks.",
        icon: "shield"
      },
      {
        title: "WhatsApp OTP Login",
        description: "Built a seamless login experience by integrating WhatsApp messaging for secure OTP delivery.",
        icon: "message"
      }
    ],
    liveUrl: "https://bookmybox.online",
    imageUrl: "/bookmybox-ss.png",
    year: "2025",
    role: "Backend / Full Stack Developer"
  },
  {
    slug: "coronamarine",
    title: "Corona Marine",
    tagline: "Next.js B2B Catalog & AI",
    description: "A high-performance product catalog built with Next.js, featuring AI content generation and strict form validation.",
    longDescription: "I developed the frontend and backend for Corona Marine, focusing heavily on performance and SEO using Next.js. I successfully integrated the Google GenAI API to automatically generate SEO-friendly product descriptions. I also ensured a highly secure and robust frontend by managing complex forms with React Hook Form and validating all inputs with Zod.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Google GenAI", "Zod"],
    features: [
      {
        title: "Next.js SSR",
        description: "Leveraged Next.js Server-Side Rendering to deliver fast, SEO-optimized pages for the maritime catalog.",
        icon: "zap"
      },
      {
        title: "AI Integration",
        description: "Implemented the Google Gemini API to dynamically generate intelligent and descriptive product content.",
        icon: "search"
      },
      {
        title: "Schema Validation",
        description: "Used Zod paired with React Hook Form to enforce strict, type-safe validation on all user inputs and quotes.",
        icon: "shield"
      },
      {
        title: "Responsive UI",
        description: "Built a modern, mobile-first interface using Tailwind CSS and Radix UI components.",
        icon: "image"
      }
    ],
    liveUrl: "https://coronamarineparts.com",
    imageUrl: "/coronamarine-ss.png",
    year: "2025",
    role: "Full Stack Developer"
  },
  {
    slug: "mediamasala",
    title: "Media Masala CRM",
    tagline: "Internal CRM & Task Dashboard",
    description: "A secure internal dashboard featuring role-based access and optimized data management.",
    longDescription: "Media Masala CRM is a management dashboard I helped build for tracking leads and team tasks. I focused on building secure endpoints and optimized the UI to handle large datasets effectively. I implemented a strict Role-Based Access Control (RBAC) system to ensure that managers and employees only see data relevant to their specific permissions.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      {
        title: "Role-Based Access (RBAC)",
        description: "Designed secure middleware to verify user roles before granting access to sensitive management routes.",
        icon: "shield"
      },
      {
        title: "Data Optimization",
        description: "Optimized large data tables by fetching data in chunks via pagination and structured database queries.",
        icon: "database"
      },
      {
        title: "Task Tracking",
        description: "Built relational database models to track employee tasks, sales leads, and daily operations.",
        icon: "workflow"
      },
      {
        title: "Secure Authentication",
        description: "Implemented a robust login and session management system to protect company data.",
        icon: "users"
      }
    ],
    liveUrl: "https://crm.mediaamasala.com/auth/login",
    imageUrl: "/crm-ss.png",
    year: "2026",
    role: "Full Stack Developer"
  },
  {
    slug: "inbill",
    title: "InBill ERP",
    tagline: "Desktop Billing Application",
    description: "A local-first desktop application integrating Electron, Next.js, and advanced state management.",
    longDescription: "InBill is an advanced desktop billing application I developed to learn cross-platform development using Electron. I built a true 'local-first' architecture using better-sqlite3 for instantaneous offline database queries. To manage complex async data and server state, I utilized TanStack React Query, and handled large inventory tables using TanStack Table.",
    techStack: ["Electron", "Next.js", "SQLite", "React Query", "Google GenAI"],
    features: [
      {
        title: "Local-First Architecture",
        description: "Integrated 'better-sqlite3' within Electron for blazingly fast, offline-capable database operations.",
        icon: "database"
      },
      {
        title: "Advanced Data Fetching",
        description: "Utilized TanStack React Query for intelligent caching, background syncing, and state management.",
        icon: "zap"
      },
      {
        title: "Complex Data Tables",
        description: "Implemented highly customizable and performant data grids using TanStack Table for inventory management.",
        icon: "workflow"
      },
      {
        title: "AI Invoice Parsing",
        description: "Experimented with integrating Google GenAI to read and extract product details from supplier invoices.",
        icon: "search"
      }
    ],
    imageUrl: "/inbill-ss.png",
    year: "2026",
    role: "Desktop & Web Developer"
  }
];
