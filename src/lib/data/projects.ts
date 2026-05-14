export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image: string;
    altText: string;
}

export const projects: Project[] = [
    {
        title: "Todo Card System",
        description: "A sleek, minimalist task management interface with reactive state handling and persistent storage.",
        tags: [ "LocalStorage", "UI/UX"],
        link: "https://amarkin-stage-1a.vercel.app/",
        image: "/todo.png",
        altText: "Screenshot of Todo Card System showing the dashboard interface",
    },
    {
        title: "Dynamic Profile Card",
        description: "An interactive glassmorphism profile showcase featuring hover-triggered depth effects and social integration.",
        tags: ["CSS Grid", "Interactions", "Glassmorphism"],
        link: "https://amarkin-stage-1b.vercel.app/",
        image: "/profilecard.png",
        altText: "Screenshot of Dynamic Profile Card showing the dashboard interface",
    },
    {
        title: "Invoice Management",
        description: "A production-grade dashboard for tracking finances, featuring automated status updates and PDF generation logic.",
        tags: ["TypeScript", "Tailwind", "FinTech"],
        link: "https://amarkin-stage2.vercel.app/",
        image: "/Invoice.png",
        altText: "Screenshot of Invoice Management showing the dashboard interface",    
    },
    {
        title: "Habit Tracker Pro",
        description: "A data-driven wellness application to monitor daily streaks and visualize progress through dynamic charts.",
        tags: ["TypeScript", "State Management", "HealthTech"],
        link: "https://amarkinstage-3.vercel.app/",
        image: "/habittracker.png",
        altText: "Screenshot of Habit Tracker Pro showing the dashboard interface", 
    },
    {
        title: "E2EE Messaging App",
        description: "A high-security communication platform utilizing End-to-End Encryption for private, real-time data exchange.",
        tags: ["Next.js", "Web Crypto API", "Security"],
        link: "https://amarkin-stage-4b.vercel.app/",
        image: "/e2ee.png",
        altText: "Screenshot of E2EE Messaging App showing the dashboard interface", 
    },
];