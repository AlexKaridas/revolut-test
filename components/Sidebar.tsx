"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { sidebarItems } from "@/lib/constants";

export const Sidebar = () => (
  <aside className="w-64 flex flex-col h-full sticky top-0 overflow-y-auto pt-6">
    <div className="px-6 mb-8 flex items-center gap-2">
      <div className="w-8 h-8 bg-shark rounded-lg flex items-center justify-center text-card font-bold text-xl">
        R
      </div>
      <span className="font-semibold text-2xl tracking-tight text-shark">Business</span>
    </div>
    <nav className="flex-1 px-3 py-2">
      <ul className="space-y-1">
        {sidebarItems.map((item) => (
          <li key={item.label}>
            <button
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 rounded-xl text-md transition-all duration-200",
                item.active
                  ? "bg-card text-shark font-bold shadow-sm"
                  : "text-muted/70 hover:bg-selection hover:text-shark font-semibold"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon 
                  className={cn(
                    "w-5 h-5",
                    item.active ? "text-shark" : "text-muted/40"
                  )} 
                  fill="currentColor"
                />
                <span>{item.label}</span>
              </div>
              {item.hasDropdown && (
                <ChevronDown className="w-5 h-5 text-disabled" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
);
