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
    tagline: "AI-Powered Turf Booking Platform",
    description: "An intelligent platform for booking sports venues featuring a voice-activated assistant and real-time slot management.",
    longDescription: "BookMyBox makes booking cricket box venues incredibly easy. Instead of clicking through menus, users can simply talk to our AI voice assistant to find and book available slots. The platform uses WhatsApp for quick logins and notifications, and it syncs bookings in real-time so two people can't accidentally book the same slot.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "AI Voice API"],
    features: [
      {
        title: "AI Voice Assistant",
        description: "A smart 'Talk-to-Book' feature that understands natural language, letting users book slots simply by speaking.",
        icon: "mic"
      },
      {
        title: "WhatsApp Login",
        description: "No need for emails or passwords—users can log in securely using WhatsApp OTPs and receive instant booking receipts.",
        icon: "message"
      },
      {
        title: "Real-Time Booking",
        description: "Live updates ensure that when a slot is booked, it instantly shows as unavailable for everyone else.",
        icon: "clock"
      },
      {
        title: "Admin Dashboard",
        description: "A complete control panel for turf owners to track revenue, manage pricing, and block out maintenance times.",
        icon: "chart"
      }
    ],
    liveUrl: "https://bookmybox.online",
    imageUrl: "/bookmybox-ss.png",
    year: "2025",
    role: "Full Stack Developer"
  },
  {
    slug: "coronamarine",
    title: "Corona Marine",
    tagline: "AI-Powered Maritime Spares Ecosystem",
    description: "A modern B2B product catalog that uses Artificial Intelligence to optimize content and improve search engine rankings.",
    longDescription: "Corona Marine is a fast and modern platform designed for selling maritime spare parts. To save time and improve Google rankings, the platform uses AI to automatically write detailed, SEO-friendly descriptions for every product. It also features smart image processing that runs directly in the user's browser, making the website incredibly fast and cost-effective.",
    techStack: ["Next.js", "React", "Google Gemini AI", "Node.js", "Tailwind CSS"],
    features: [
      {
        title: "Smart Image Processing",
        description: "Advanced image processing that runs directly on the user's device, making the website faster and reducing server costs.",
        icon: "image"
      },
      {
        title: "AI Content Generation",
        description: "Automatically writes high-quality, search-engine-optimized product descriptions using Google's Gemini AI.",
        icon: "search"
      },
      {
        title: "Super Fast Speeds",
        description: "Built with modern Next.js technology to ensure pages load instantly, providing a great experience for buyers.",
        icon: "zap"
      },
      {
        title: "Quick Quotes",
        description: "A streamlined 'Request Quote' system that connects buyers directly to the sales team via WhatsApp.",
        icon: "link"
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
    tagline: "Intelligent Operational Command Center",
    description: "A complete Customer Relationship Management (CRM) system for managing sales pipelines, tasks, and employee attendance.",
    longDescription: "Media Masala CRM is an all-in-one dashboard built for media production teams. It helps the company track new sales leads, manage ongoing projects, and assign tasks to employees. It also includes powerful HR tools, like location-based attendance tracking and automated daily reports, all secured with strict role-based access so everyone only sees what they need to see.",
    techStack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    features: [
      {
        title: "Role-Based Access",
        description: "Strict security rules that ensure managers, employees, and admins only see the data and pages relevant to their specific roles.",
        icon: "shield"
      },
      {
        title: "Sales Pipelines",
        description: "Easy-to-use workflows that help the team track potential clients from the first contact all the way to a completed project.",
        icon: "workflow"
      },
      {
        title: "Fast Data Tables",
        description: "Quick and responsive data tables that make it easy to search, filter, and manage thousands of records without slowing down.",
        icon: "database"
      },
      {
        title: "HR & Attendance Tools",
        description: "Built-in tools for employees to check in with their GPS location, request time off, and automatically generate daily work reports.",
        icon: "users"
      }
    ],
    liveUrl: "https://crm.mediaamasala.com/auth/login",
    imageUrl: "/crm-ss.png",
    year: "2026",
    role: "Full Stack Developer"
  }
];
