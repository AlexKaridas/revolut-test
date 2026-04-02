import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
}

export const Card = ({ children, className, shadow = false }: CardProps) => (
  <div className={cn(
    "bg-card rounded-3xl overflow-hidden w-full h-full flex flex-col",
    shadow ? "shadow-sm" : "shadow-none",
    className
  )}>
    <div className="flex-1 overflow-y-auto custom-scrollbar">
      {children}
    </div>
  </div>
);
