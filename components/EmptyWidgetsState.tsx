"use client";

import React from "react";
import { Plus } from "lucide-react";

export const EmptyWidgetsState = () => (
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
);
