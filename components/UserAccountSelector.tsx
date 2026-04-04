"use client";
import { ChevronDown } from "lucide-react";

export const UserAccountSelector = () => (
  <div className="flex items-center gap-3">
    <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card text-shark hover:bg-selection transition-colors text-sm font-medium">
      <span className="w-5 h-5 bg-selection rounded-full flex items-center justify-center text-[10px] font-bold text-muted">
        CY
      </span>
      <span className="truncate max-w-[170px]">A.KARIDAS MANAGEMENT GROUP</span>
      <ChevronDown className="w-4 h-4 text-disabled" />
    </button>
    <div className="relative w-8 h-8 rounded-full bg-selection flex items-center justify-center border border-divider">
      <span className="text-[10px] font-bold text-muted">FG</span>
    </div>
  </div>
);
