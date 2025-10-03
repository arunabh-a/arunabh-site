// src/components/ProjectCard.tsx

import Image from 'next/image';
import GithubIcon from "@/../public/github-fill.svg";
// Define the component's props for reusability and type safety
export interface ProjectCardProps {
  name: string;
  description: string;
  imageUrl: string;
  techStack: string[]; // We'll pass an array for better mapping
  websiteUrl: string;
}

// An icon for the external link for better UX
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const ProjectCard = ({
  name,
  description,
  imageUrl,
  techStack,
  websiteUrl,
}: ProjectCardProps) => {
  return (
    // 'group' allows us to style children on parent hover
    <div className="flex-1 group relative flex flex-col w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-blue-500/20">
      
      {/* ===== Image Section ===== */}
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={`Screenshot of the ${name} project`}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {/* Subtle gradient overlay for text legibility on busy images */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* ===== Content Section ===== */}
      <div className="flex flex-col p-6">
        {/* --- Header --- */}
        <h1 className="text-2xl font-bold text-slate-50">{name}</h1>
        <p className="mt-2 text-base text-slate-300">{description}</p>

        {/* --- Tech Stack Pills --- */}
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-200 px-3 py-1 text-xs font-medium text-black"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* --- Spacer --- */}
        <div className="flex-grow" />

        {/* --- CTA Link --- */}
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          View Project
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;