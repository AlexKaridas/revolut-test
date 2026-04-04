"use client";
import { HeaderActions } from "./HeaderActions";
import { UserAccountSelector } from "./UserAccountSelector";

export const PageHeader = () => (
  <div className="flex items-center justify-between mb-4 mt-4">
    <h1 className="text-2xl font-bold text-shark">Home</h1>
    <div className="flex items-center gap-5">
      <HeaderActions />
      <UserAccountSelector />
    </div>
  </div>
);
