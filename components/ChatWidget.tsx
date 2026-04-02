"use client";

import React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatWidgetProps {
  shadow?: boolean;
}

export const ChatWidget = ({ shadow = false }: ChatWidgetProps) => (
  <div className={cn(
    "bg-card rounded-2xl p-4 relative w-full",
    shadow ? "shadow-sm" : "shadow-none"
  )}>
    <button className="absolute top-3 right-3 text-disabled hover:text-shark transition-colors">
      <X className="w-4 h-4" />
    </button>
    <div className="flex gap-3 mb-4">
      <div className="relative">
        <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center text-card font-bold">
          L
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-danger rounded-full border-2 border-card flex items-center justify-center text-[8px] text-card">
          1
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-shark">Chat with Lilly</h4>
        <div className="flex items-center gap-1.5 text-sm text-muted">
          <span>Today, 11:42</span>
          <span className="w-1 h-1 bg-divider rounded-full" />
          <span className="text-warning font-medium">Pending rating</span>
        </div>
      </div>
    </div>
    <button className="w-full py-2.5 text-shark text-sm font-semibold rounded-lg hover:bg-divider transition-colors">
      Rate your experience
    </button>
  </div>
);
