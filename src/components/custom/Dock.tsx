"use client";

import { Waypoints, HomeIcon, Send, Meh, ChartNetwork, LinkIcon, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/ui/dock";

const DATA = {
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/about", icon: Meh, label: "About" },
        { href: "/journey", icon: Waypoints, label: "Journey" },
        { href: "/contact", icon: Send, label: "Contact" },
        { href: "/projects", icon: ChartNetwork, label: "Projects" },
        { href: "/links", icon: LinkIcon, label: "Links" },
    ],
    social_links: [
        {
            href: 'https://x.com/arunabh_2',
            icon: Twitter,
            label: 'Twitter',
        },
        {
            href: 'https://discordapp.com/users/809714813562257418',
            icon: 'discord',
            label: 'Discord',
        },
        {
            href: 'https://g.dev/arunabha',
            icon: 'google',
            label: 'Google Developer',
        },
        {
            href: 'https://www.instagram.com/_arunabh.02',
            icon: 'instagram',
            label: 'Instagram',
        },
        {
            href: 'https://open.spotify.com/user/o9pmdmo3l3lvhihv87srf8bfg?si=668b885d71c546ab',
            icon: 'spotify',
            label: 'Spotify',
        },
        {
            href: 'https://steamcommunity.com/profiles/76561198866581261/',
            icon: 'steam',
            label: 'Steam',
        },
        {
            href: 'https://www.linkedin.com/in/arunabhaa/',
            icon: 'linkedin',
            label: 'LinkedIn',
        },
        {
            href: 'https://github.com/arunabh-a',
            icon: 'github',
            label: 'GitHub',
        },
        {
            href: 'https://blog.arunabh.online/',
            icon: 'hashnode',
            label: 'Hashnode',
        },
    ]
};

export function NavDock() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "lg" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <item.icon  />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
