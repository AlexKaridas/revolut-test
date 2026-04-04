"use client";
import { sidebarItems } from "@/lib/constants";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => (
  <aside className="w-[280px] flex flex-col h-full sticky top-0 overflow-y-auto pt-4">
    <div className="px-6 mb-2 flex items-center gap-2">
      <div className="w-8 h-8 bg-shark rounded-lg flex items-center justify-center text-card font-bold text-xl">
        R
      </div>
      <span className="font-semibold text-2xl tracking-tight text-shark">Business</span>
    </div>
    <nav className="flex-1 px-3 py-2">
      <ul className="space-y-1">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            active={item.active}
            hasDropdown={item.hasDropdown}
          />
        ))}
      </ul>
    </nav>
  </aside>
);
