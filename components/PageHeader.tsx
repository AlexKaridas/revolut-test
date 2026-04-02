"use client";

import React from "react";
import Image from "next/image";
import { Search, Settings, LayoutGrid, ChevronDown } from "lucide-react";

export const PageHeader = () => (
  <div className="flex items-center justify-between mb-6 px-1">
    <h1 className="text-3xl font-bold text-shark">Home</h1>
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-4 text-muted">
        <button className="hover:text-shark transition-colors">
          <Search className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <button className="hover:text-shark transition-colors">
          <Settings className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <button className="hover:text-shark transition-colors">
          <LayoutGrid className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>
      <div className="h-6 w-px bg-divider mx-1" />
      <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card text-shark hover:bg-selection transition-colors text-sm font-medium border border-divider">
        <span className="w-5 h-5 bg-selection rounded-full flex items-center justify-center text-[10px] font-bold text-muted">
          CY
        </span>
        <span className="truncate max-w-[120px]">C.YIORKAS MANAGEME...</span>
        <ChevronDown className="w-4 h-4 text-disabled" />
      </button>
      <div className="relative w-8 h-8 rounded-full bg-selection flex items-center justify-center border border-divider">
        <span className="text-[10px] font-bold text-muted">FG</span>
      </div>
    </div>
  </div>
);
