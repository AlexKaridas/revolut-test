"use client";
import React from "react";
import Image from "next/image";
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
      "relative bg-[#eaf2fb] rounded-xl overflow-hidden w-full shadow-[0_8px_30px_rgba(0,0,0,0.08),0_20px_50px_rgba(0,80,255,0.12)] border border-divider h-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
      mounted ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
    )}>
      {/* Decorative Gradient Background behind the logo */}
      <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none [mask-image:linear-gradient(to_bottom_left,black_0%,transparent_50%)]">
        <div
          className={cn(
            "absolute -top-8 -right-8 w-56 h-56 rounded-full blur-[40px] opacity-20 mix-blend-multiply",
            transaction.img ? "bg-accent-vibrant" : (transaction.color || "bg-warning")
          )}
        />

        {/* 2. The Overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-white/40 via-white/10 to-transparent backdrop-blur-[2px]" />
      </div>
      <div className="py-2 px-4 relative z-10 h-full overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-center mb-2">
          <button
            onClick={onClose}
            className="p-2 -ml-2 text-shark hover:cursor-pointer rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Transaction Header */}
        <div className="flex flex-row-reverse items-center justify-between text-center mb-8">
          <div className="relative mb-4">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center text-white font-normal text-xl shadow-lg relative overflow-hidden z-10",
              !transaction.img && (transaction.color || "bg-warning")
            )}>
              {transaction.img ? (
                <Image
                  src={transaction.img}
                  alt={transaction.initials}
                  fill
                  unoptimized
                  className="object-cover"
                />
              ) : (
                transaction.initials
              )}
            </div>
            <div className="absolute -bottom-2.5 -right-1 bg-shark rounded-full p-1.5 border-[3px] border-[#eaf2fb] z-20 shadow-sm">
              <ArrowLeft
                className={cn(
                  "w-2.5 h-2.5 text-white",
                  transaction.type === "inflow" ? "" : "rotate-180"
                )}
                strokeWidth={3}
              />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-extrabold text-shark mb-1 tracking-tight">
              {transaction.amount}
            </h2>
            <p className="text-md font-normal text-shark leading-tight">
              {transaction.name}
            </p>
            <p className="text-sm text-muted font-medium mt-1">
              {transaction.date || "Today"}, {transaction.time || "17:07"}
            </p>
          </div>
        </div>

        {/* Details Sections */}
        <div className="space-y-4">
          {/* Status & Statement Section */}
          <div className="bg-white rounded-xl px-4 py-2">
            <TransactionDetailRow
              label="Status"
              value={
                <span className="flex items-center gap-1.5 font-normal text-sm">
                  <div className="w-1.5 h-1.5 rounded-full" />
                  {transaction.status}
                </span>
              }
            />
            <div className="my-3" />
            <TransactionDetailRow
              label="Statement"
              value={
                <button className="flex items-center gap-1.5 text-accent-vibrant font-semibold hover:opacity-80 transition-opacity">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              }
            />
          </div>

          {/* Transfer Details Section */}
          <div className="bg-white rounded-xl px-4 py-2">
            <div className="space-y-4">
              <div>
                <span className="text-muted font-bold text-[11px] uppercase tracking-wider block mb-1">Reference</span>
                <span className="text-shark font-normal text-[15px]">{transaction.reference || "—"}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl px-4 py-2">
            <div className="pt-0 ">
              <TransactionDetailRow
                label="Amount"
                value={transaction.amount.replace("+", "").replace("-", "")}
                valueClassName="text-normal"
              />
            </div>

            <div className="pt-4">
              <TransactionDetailRow
                label="Fees"
                value={
                  <div className="flex items-center gap-1.5 text-accent-vibrant font-normal">
                    <Info className="w-4 h-4" />
                    {transaction.fees || "No fee"}
                  </div>
                }
              />
            </div>
          </div>


          <div className="bg-white rounded-xl px-4 py-2">
            <div className="pb-0">
              <TransactionDetailRow
                label="Type"
                value={transaction.type === "inflow" ? "Inbound transfer" : "Outbound transfer"}
              />
            </div>
            <div className="pt-4">
              <TransactionDetailRow
                label="From"
                value={
                  <button className="flex items-center gap-1 text-shark font-normal group">
                    {transaction.fromAccount || transaction.name.replace("From ", "")}
                    <ChevronDown className="w-4 h-4 text-muted group-hover:text-shark transition-colors" />
                  </button>
                }
              />
            </div>
          </div>


          {/* Account Details Section */}
          <div className="bg-white rounded-xl px-4 py-2">
            <div className="space-y-4">
              <TransactionDetailRow
                label="To"
                value={
                  <div className="flex items-center gap-2 text-accent-vibrant font-semibold max-w-[200px] text-right">
                    <div className="w-5 h-5 bg-[#002D88] rounded-full flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    </div>
                    <span className="truncate uppercase text-[13px] tracking-tight">
                      {transaction.toAccount || "IPM - JOHN XENOFONTOS"}
                    </span>
                  </div>
                }
              />
            </div>
          </div>

          {/* Analytics Section */}
          <div className="bg-white rounded-xl px-4 py-2">
            <div className="flex justify-between items-center">
              <span className="text-muted font-bold text-sm">Exclude from Analytics</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-selection peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-success"></div>
              </label>
            </div>
          </div>

          {/* Help Section */}
          <button className="w-full bg-white rounded-xl px-4 py-2 flex justify-between items-center text-sm font-bold text-shark hover:bg-selection/50 transition-colors group">
            Get help
            <ChevronRight className="w-5 h-5 text-muted group-hover:text-shark transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
};
