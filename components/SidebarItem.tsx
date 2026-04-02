"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  hasDropdown?: boolean;
}

export const SidebarItem = ({ 
  label, 
  icon: Icon, 
  active, 
  hasDropdown 
}: SidebarItemProps) => (
  <li>
    <button
      className={cn(
        "w-full flex items-center justify-between px-3 py-2 rounded-xl text-md transition-all duration-200",
        active
          ? "bg-card text-shark font-bold shadow-sm"
          : "text-muted/70 hover:bg-selection hover:text-shark font-semibold"
      )}
    >
      <div className="flex items-center gap-3">
        <Icon 
          className={cn(
            "w-5 h-5",
            active ? "text-shark" : "text-muted/40"
          )} 
          fill="currentColor"
        />
        <span>{label}</span>
      </div>
      {hasDropdown && (
        <ChevronDown className="w-5 h-5 text-disabled" />
      )}
    </button>
  </li>
);
