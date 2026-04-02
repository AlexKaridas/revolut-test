"use client";

import React from "react";
import { Plus } from "lucide-react";
import { SubscriptionWidget } from "./SubscriptionWidget";
import { ChatWidget } from "./ChatWidget";
import { EmptyWidgetsState } from "./EmptyWidgetsState";

export const WidgetsSection = () => (
  <div className="flex flex-col gap-6 w-full shrink-0 pr-6 h-full overflow-y-auto custom-scrollbar pb-6 pt-8">
    <SubscriptionWidget shadow={false} />
    <ChatWidget shadow={false} />
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-shark">Widgets</h3>
        <button className="p-1 text-accent-vibrant hover:bg-accent-vibrant/10 rounded transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <EmptyWidgetsState />
    </div>
  </div>
);
