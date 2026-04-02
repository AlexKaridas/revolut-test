"use client";

import React from "react";
import { Search, Settings, LayoutGrid } from "lucide-react";

export const HeaderActions = () => (
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
);
