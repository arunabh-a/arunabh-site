import { ProjectCardProps } from "@/components/custom/ProjectCard";

export const SITE_TITLE = "Arunabh's Site";
export const SITE_DESCRIPTION = "Welcome to Arunabh's personal website.";
export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "es", "fr", "de"];

export const NAVIGATION_LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about", header: "About Me" },
    { name: "Journey", href: "/journey", header: "Journey so far" },
    { name: "Projects", href: "/projects", header: "My Projects" },
    { name: "Contact", href: "/contact", header: "Contact Me" },
    { name: "Links", href: "/links", header: "Useful Links" },
];

export const ABOUT_US_CONTENT = {
    skills: [
        "React",
        "Next.js",
        "Node",
        "Flask",
        "Prisma",
        "Git",
        "Docker",
        "Kubernetes",
        "Linux",
        "AWS",
        "GCP",
        "MongoDB",
        "PostgreSQL",
        "Python",
        "TypeScript",
    ],
};

export const EXPERIENCE_CONTENT = {
    title: "Experience",
    content: [
        {
            title: "UnbiaslyAI",
            content:
                "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
            images: ["", "", "", ""],
        },
        {
            title: "Early 2023",
            content:
                "I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum. Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.",
            images: ["", "", "", ""],
        },
    ],
};

export const PROJECTS_CONTENT: ProjectCardProps[] = [
    {
        name: "Reptiq",
        description: "A Money Ledger App that helps you keep track of your expenses and income.",
        techStack: ["React", "TypeScript", "Next.js"],
        imageUrl: "/experience/Before-Indore.jpg",
        websiteUrl: "https://example.com",
    },
    {
        name: "Shirclex",
        description: "A ThreeJS Application for rendering 3D Shirt Models with Logos and Textures.",
        techStack: ["Three.js", "React", "TypeScript"],
        imageUrl: "/experience/Shirclex.jpg",
        websiteUrl: "https://github.com/arunabh-a/Shirclex",
    },
    {
        name: "TabenSpace",
        description: "A Web Application for creating and managing your own Custom Tabs.",
        techStack: ["React", "TypeScript"],
        imageUrl: "/experience/TabenSpace.jpg",
        websiteUrl: "https://github.com/arunabh-a/Tabenspace",
    },
    {
        name: "ParTable",
        description: "A React Application for creating Dynamic Tables with Custom Data.",
        techStack: ["React", "TypeScript"],
        imageUrl: "/experience/ParTable.jpg",
        websiteUrl: "https://github.com/arunabh-a/ParTable",
    },
    {
        name: "Social-Linktree",
        description: "Custom-Made Social Tree for my Social Handles along with some other links.",
        techStack: ["HTML", "CSS", "JavaScript"],
        imageUrl: "/experience/Social-Linktree.jpg",
        websiteUrl: "https://github.com/arunabh-a/My-Socials",
    },
    {
        name: "SDM",
        description: "A Suspect Detection Model used to analyse and flag potential suspects.",
        techStack: ["Python", "Machine Learning", "OpenCV"],
        imageUrl: "/experience/SDM.jpg",
        websiteUrl: "https://github.com/hack-black-pearl/Suspect_Detection_Model",
    },
];


export const SOCIAL_LINKS = [
  {
    name: 'Portfolio',
    url: 'https://www.site.arunabh.online/',
    icon: 'portfolio',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/arunabh_2',
    icon: 'twitter',
  },
  {
    name: 'Discord',
    url: 'https://discordapp.com/users/809714813562257418',
    icon: 'discord',
  },
  {
    name: 'Google Developer',
    url: 'https://g.dev/arunabha',
    icon: 'google',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/_arunabh.02',
    icon: 'instagram',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/user/o9pmdmo3l3lvhihv87srf8bfg?si=668b885d71c546ab',
    icon: 'spotify',
  },
  {
    name: 'Steam',
    url: 'https://steamcommunity.com/profiles/76561198866581261/',
    icon: 'steam',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arunabhaa/',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/arunabh-a',
    icon: 'github',
  },
  {
    name: 'Hashnode',
    url: 'https://blog.arunabh.online/',
    icon: 'hashnode',
  },
];

