"use client";

import Image from "next/image";
import { PlusCircle, ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Transaction } from "@/lib/types";

interface TransactionItemProps {
  tx: Transaction;
  onClick: () => void;
}

export const TransactionItem = ({ tx, onClick }: TransactionItemProps) => (
  <tr
    onClick={onClick}
    className="transition-colors group cursor-pointer"
  >
    <td className="py-3 pr-3 pl-2 group-hover:bg-gray-200/50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="relative shrink-0">
          {tx.img ? (
            <div className="relative w-10 h-10 rounded-full">
            <Image
              src={tx.img}
              alt={tx.initials}
              fill
              unoptimized
              className="object-cover"
            />
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
          <span className="font-medium text-sm text-shark truncate">
            {tx.name}
          </span>
          {/* Changed whitespace-nowrap to truncate here 👇 */}
          <span className="text-sm text-muted truncate">{tx.description}</span>
        </div>
      </div>
    </td>
    <td className="py-3 px-3 overflow-hidden group-hover:bg-gray-200/50 transition-colors">
      <span className="text-sm text-muted block max-w-full whitespace-nowrap">{tx.creator || "—"}</span>
    </td>
    <td className="py-3 px-3 whitespace-nowrap overflow-hidden group-hover:bg-gray-200/50 transition-colors">
      <span className="text-sm text-muted block ">{tx.category || "—"}</span>
    </td>
    <td className="py-3 px-3 whitespace-nowrap overflow-hidden group-hover:bg-gray-200/50 transition-colors">
      <span className="text-sm font-medium text-shark block truncate">{tx.status}</span>
    </td>
    <td className="py-3 px-3 text-right whitespace-nowrap group-hover:bg-gray-200/50 transition-colors">
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
