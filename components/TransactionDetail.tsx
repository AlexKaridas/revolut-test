"use client";

import React from "react";
import { X, Download, Info, ChevronDown, ChevronRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Transaction } from "@/lib/types";
import { TransactionDetailRow } from "./TransactionDetailRow";

interface TransactionDetailProps {
  transaction: Transaction;
  onClose: () => void;
}

export const TransactionDetail = ({ transaction, onClose }: TransactionDetailProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(false);
    const timer = setTimeout(() => setMounted(true), 20);
    return () => clearTimeout(timer);
  }, [transaction]);

  return (
    <div className={cn(
      "relative bg-card rounded-3xl overflow-hidden w-full shadow-[0_20px_50px_rgba(0,80,255,0.15)] border border-divider h-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
      mounted ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
    )}>
      <div className="py-8 relative z-10 h-full overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-start mb-4 px-2">
          <button
            onClick={onClose}
            className="p-1 -ml-1 text-shark hover:bg-selection rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative">
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center text-card font-semibold text-xl shadow-sm",
              transaction.color || "bg-warning"
            )}>
              {transaction.initials}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-shark rounded-full p-1 border-2 border-card">
              <ArrowLeft className="w-3 h-3 text-card" strokeWidth={3} />
            </div>
          </div>
        </div>

        <div className="mb-8 px-2">
          <h2 className="text-3xl font-bold text-shark mb-1">{transaction.amount}</h2>
          <p className="text-lg font-semibold text-shark leading-tight">
            {transaction.name}
          </p>
          <p className="text-muted font-medium">
            {transaction.date || "Today"}, {transaction.time || "17:07"}
          </p>
        </div>

        <div className="space-y-6 px-2">
          <TransactionDetailRow label="Status" value={transaction.status} />

          <TransactionDetailRow
            label="Statement"
            value={
              <button className="flex items-center gap-1.5 text-accent-vibrant font-semibold hover:underline">
                <Download className="w-4 h-4" />
                Download
              </button>
            }
          />

          <div className="pt-2">
            <span className="text-muted font-medium text-sm block mb-1">Reference</span>
            <span className="text-shark font-semibold text-sm">{transaction.reference || "—"}</span>
          </div>

          <TransactionDetailRow
            label="Amount"
            value={transaction.amount.replace("+", "").replace("-", "")}
            className="pt-2"
          />

          <TransactionDetailRow
            label="Fees"
            value={
              <div className="flex items-center gap-1.5 text-accent-vibrant font-semibold">
                <Info className="w-4 h-4" />
                {transaction.fees || "No fee"}
              </div>
            }
          />

          <TransactionDetailRow
            label="Type"
            value={transaction.type === "inflow" ? "Inbound transfer" : "Outbound transfer"}
          />

          <TransactionDetailRow
            label="From"
            value={
              <button className="flex items-center gap-1 text-shark font-semibold">
                {transaction.fromAccount || transaction.name.replace("From ", "")}
                <ChevronDown className="w-4 h-4 text-muted" />
              </button>
            }
          />

          <TransactionDetailRow
            label="To"
            value={
              <div className="flex items-center gap-2 text-accent-vibrant font-semibold max-w-[200px] truncate text-right">
                <div className="w-5 h-5 bg-[#002D88] rounded-full flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                </div>
                <span className="truncate uppercase text-[12px] tracking-tight">
                  {transaction.toAccount || "IPM - JOHN XENOFONTOS ..."}
                </span>
              </div>
            }
          />

          <div className="flex justify-between items-center text-sm pt-2">
            <span className="text-muted font-medium">Exclude from Analytics</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-selection peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
            </label>
          </div>

          <button className="w-full flex justify-between items-center text-sm font-semibold text-shark py-2 mt-4 hover:bg-selection rounded-lg transition-colors group">
            Get help
            <ChevronRight className="w-5 h-5 text-muted group-hover:text-shark transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
};
