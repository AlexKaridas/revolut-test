"use client";
import { cn } from "@/lib/utils";

interface TableHeaderItemProps {
  label: string;
  className?: string;
  align?: "left" | "right";
}

export const TableHeaderItem = ({ label, className, align = "left" }: TableHeaderItemProps) => (
  <th className={cn("py-2 px-3 font-normal whitespace-nowrap group/header cursor-default", className)}>
    <div className={cn(
      "flex items-center",
      align === "right" ? "justify-end" : "justify-start"
    )}>
      <div className="relative inline-block">
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-[2px] h-3 bg-divider opacity-0 group-hover/header:opacity-100 transition-opacity duration-200" />
        {label}
      </div>
    </div>
  </th>
);
