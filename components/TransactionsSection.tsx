"use client";

import React from "react";
import Image from "next/image";
import { PlusCircle, ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Transaction } from "@/lib/types";
import { transactions } from "@/lib/constants";

interface TransactionItemProps {
  tx: Transaction;
  onClick: () => void;
}

const TransactionItem = ({ tx, onClick }: TransactionItemProps) => (
  <tr
    onClick={onClick}
    className="hover:bg-selection transition-colors group cursor-pointer"
  >
    <td className="py-3 pr-3">
      <div className="flex items-center gap-3">
        <div className="relative shrink-0">
          {tx.img ? (
            <div className="relative w-10 h-10 rounded-full">
              <Image src={tx.img} alt={tx.initials} fill className="object-cover" />
            </div>
          ) : (
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-card font-medium text-xs",
                tx.color
              )}
            >
              {tx.initials}
            </div>
          )}
          <div className="absolute -bottom-0.5 -right-0.5 bg-card rounded-full p-0.5 shadow-sm">
            {tx.type === "inflow" ? (
              <PlusCircle className="w-3 h-3 text-shark fill-card" />
            ) : (
              <ArrowLeftRight className="w-3 h-3 text-shark" />
            )}
          </div>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-medium text-sm text-shark">
            {tx.name}
          </span>
          <span className="text-sm text-muted">{tx.description}</span>
        </div>
      </div>
    </td>
    <td className="py-3 px-3 whitespace-nowrap overflow-hidden">
      <span className="text-sm text-muted block ">{tx.creator || "—"}</span>
    </td>
    <td className="py-3 px-3 whitespace-nowrap overflow-hidden">
      <span className="text-sm text-muted block ">{tx.category || "—"}</span>
    </td>
    <td className="py-3 px-3 whitespace-nowrap overflow-hidden">
      <span className="text-sm font-medium text-shark block">{tx.status}</span>
    </td>
    <td className="py-3 px-3 text-right whitespace-nowrap">
      <span
        className={cn(
          "text-sm font-semibold",
          tx.type === "inflow" ? "text-success" : "text-shark"
        )}
      >
        {tx.amount}
      </span>
    </td>
  </tr>
);

interface HeaderItemProps {
  label: string;
  className?: string;
  align?: "left" | "right";
}

const HeaderItem = ({ label, className, align = "left" }: HeaderItemProps) => (
  <th className={cn("py-2 px-3 font-normal whitespace-nowrap group/header cursor-default", className)}>
    <div className={cn(
      "flex items-center",
      align === "right" ? "justify-end" : "justify-start"
    )}>
      <div className="relative inline-block">
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-[2px] h-3 bg-divider opacity-0 group-hover/header:opacity-100 transition-opacity duration-200" />
        {label}
      </div>
    </div>
  </th>
);

interface TransactionsSectionProps {
  onSelectTransaction: (tx: Transaction) => void;
}

export const TransactionsSection = ({ onSelectTransaction }: TransactionsSectionProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const displayedTransactions = isExpanded ? transactions : transactions.slice(0, 8);

  return (
    <div className="px-4 pb-8 overflow-x-auto custom-scrollbar">
      <table className="w-full text-left table-fixed min-w-[700px]">
        <thead>
          <tr className="text-sm font-medium text-muted tracking-wider">
            <th className="py-2 pr-0 font-normal w-[35%]">Transaction</th>
            <HeaderItem label="Created by" className="w-[15%]" />
            <HeaderItem label="Categories" className="w-[15%]" />
            <HeaderItem label="Status" className="w-[15%]" />
            <HeaderItem label="Amount" align="right" className="w-[15%]" />
          </tr>
        </thead>
        <tbody>
          {displayedTransactions.map((tx, idx) => (
            <TransactionItem
              key={idx}
              tx={tx}
              onClick={() => onSelectTransaction(tx)}
            />
          ))}
        </tbody>
      </table>
      {!isExpanded && transactions.length > 8 && (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full py-4 text-center text-sm font-medium text-muted hover:text-shark transition-colors mt-2"
        >
          See all
        </button>
      )}
      {isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="w-full py-4 text-center text-sm font-medium text-muted hover:text-shark transition-colors mt-2"
        >
          Show less
        </button>
      )}
    </div>
  );
};
