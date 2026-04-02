"use client";

import React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubscriptionWidgetProps {
  shadow?: boolean;
}

export const SubscriptionWidget = ({ shadow = false }: SubscriptionWidgetProps) => (
  <div className={cn(
    "bg-card rounded-2xl p-5 relative overflow-hidden group w-full",
    shadow ? "shadow-sm" : "shadow-none"
  )}>
    <button className="absolute top-3 right-3 text-disabled hover:text-shark transition-colors z-10">
      <X className="w-4 h-4" />
    </button>
    <div className="pr-16 relative z-10">
      <h3 className="font-semibold text-sm mb-1 leading-tight text-shark">
        Create your first subscription
      </h3>
      <p className="text-sm text-shark leading-relaxed">
        Accept recurring payments at no extra cost. T&Cs apply
      </p>
    </div>
    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-selection rounded-full border border-divider flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
      <div className="w-16 h-16 border-[6px] border-shark/5 rounded-full border-t-shark/20" />
    </div>
  </div>
);
