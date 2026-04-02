"use client";

import React from "react";
import { X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const SubscriptionWidget = ({ shadow = false }: { shadow?: boolean }) => (
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

const ChatWidget = ({ shadow = false }: { shadow?: boolean }) => (
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

export const WidgetsSection = () => (
  <div className="flex flex-col gap-6 w-full shrink-0 pr-6 h-full overflow-y-auto custom-scrollbar pb-6">
    <SubscriptionWidget shadow={false} />
    <ChatWidget shadow={false} />
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-shark">Widgets</h3>
        <button className="p-1 text-accent-vibrant hover:bg-accent-vibrant/10 rounded transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="bg-card rounded-2xl p-8 flex flex-col items-center text-center w-full shadow-none">
        <div className="w-12 h-12 mb-4 grid grid-cols-2 gap-1 rotate-45">
          <div className="w-full h-full bg-selection rounded-sm" />
          <div className="w-full h-full bg-shark rounded-sm" />
          <div className="w-full h-full bg-selection rounded-sm" />
          <div className="w-full h-full bg-selection rounded-sm" />
        </div>
        <h4 className="font-semibold text-sm mb-1 text-shark">Your widgets will appear here</h4>
        <p className="text-sm text-muted mb-6 max-w-[200px]">
          Quickly access your favourite shortcuts
        </p>
        <button className="flex items-center gap-1.5 text-accent-vibrant text-xs font-semibold hover:underline">
          <Plus className="w-3.5 h-3.5" />
          Add widgets
        </button>
      </div>
    </div>
  </div>
);
