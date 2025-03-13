"use client";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "@/../public/github-fill.svg";
import { useState } from "react";
import Image from "next/image";
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    githubLink?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence
          >
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-950/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card githubLink={item.githubLink || ""}>
            
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  githubLink,
}: {
  className?: string;
  children: React.ReactNode;
  githubLink: string;
}) => {
    
  return (
    <div
      className={cn(
          "rounded-2xl h-60  w-full p-4 overflow-hidden bg-[#1b1c2e] border border-gray-600 group-hover:border-black relative z-20",
          className
        )}
        >
        {githubLink && (        
            <Image src={GithubIcon} alt="Github" width={44} height={44} className="absolute top-2 right-2" />
        )}
      <div className="relative z-50">
        <div className="md:p-4 p-2 flex flex-col gap-2">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-white text-2xl font-fredoka font-semibold tracking-wide", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        " text-gray-300 font-euclid tracking-wide leading-relaxed text-lg",
        className
      )}
    >
      {children}
    </p>
  );
};
