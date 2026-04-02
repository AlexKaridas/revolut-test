"use client";

import React from "react";
import { HeaderActions } from "./HeaderActions";
import { UserAccountSelector } from "./UserAccountSelector";

export const PageHeader = () => (
  <div className="flex items-center justify-between mb-8 px-1">
    <h1 className="text-3xl font-bold text-shark">Home</h1>
    <div className="flex items-center gap-5">
      <HeaderActions />
      <div className="h-6 w-px bg-divider mx-1" />
      <UserAccountSelector />
    </div>
  </div>
);
