"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINKS } from "@/lib/constants";

const Footer = () => {
    const pathname = usePathname();

    // Find current route index
    const currentIndex = NAVIGATION_LINKS.findIndex(
        (link) => link.href === pathname
    );

    // Calculate previous and next routes
    const prevRoute =
        currentIndex > 0 ? NAVIGATION_LINKS[currentIndex - 1] : null;
    const nextRoute =
        currentIndex < NAVIGATION_LINKS.length - 1
            ? NAVIGATION_LINKS[currentIndex + 1]
            : null;

    return (
        <footer className="w-full my-5 flex-shrink-0">
            <div className="flex justify-left gap-3 items-center">
                {/* Left Arrow - Previous Route */}
                <div className="border-2 w-fit p-1 rounded-full">
                    {prevRoute ? (
                        <Link
                            href={prevRoute.href}
                            title={`Go to ${prevRoute.name}`}
                        >
                            <ArrowLeft className="stroke-10" />
                        </Link>
                    ) : (
                        <ArrowLeft className="stroke-10 opacity-30 cursor-not-allowed" />
                    )}
                </div>

                {/* Right Arrow - Next Route */}
                <div className="border-2 w-fit p-1 rounded-full">
                    {nextRoute ? (
                        <Link
                            href={nextRoute.href}
                            title={`Go to ${nextRoute.name}`}
                        >
                            <ArrowRight className="stroke-10" />
                        </Link>
                    ) : (
                        <ArrowRight className="stroke-10 opacity-30 cursor-not-allowed" />
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
