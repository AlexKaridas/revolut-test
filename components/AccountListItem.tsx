"use client";

import React from "react";
import { Account } from "@/lib/types";

interface AccountListItemProps {
  account: Account;
}

export const AccountListItem = ({ account }: AccountListItemProps) => (
  <div className="flex items-start gap-4 group cursor-pointer">
    <div className="shrink-0 w-11 h-11 bg-[#002D88] rounded-full flex items-center justify-center relative overflow-hidden shadow-sm">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 border-[1.5px] border-dotted border-yellow-400/80 rounded-full animate-[spin_20s_linear_infinite]" />
      </div>
      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full blur-[0.5px] opacity-90 shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-start gap-2">
        <h3 className="font-medium text-[16px] leading-tight text-shark group-hover:text-accent-vibrant transition-colors">
          {account.name}
        </h3>
        <span className="font-medium text-shark whitespace-nowrap text-[16px]">
          {account.balance}
        </span>
      </div>
      <p className="text-[16px] text-muted/80 mt-0 truncate uppercase font-normal">
        {account.currency} · {account.iban}
      </p>
    </div>
  </div>
);
