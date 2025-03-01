"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HighlightTextProps {
  children: ReactNode;
  className?: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({ children, className }) => {
  return (
    <span className={cn(" text-white font-bold", className)}>
      {children}
    </span>
  );
};

export default HighlightText; 