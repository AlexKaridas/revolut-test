"use client";
import React from "react";
import { Transaction } from "@/lib/types";
import { transactions } from "@/lib/constants";
import { TransactionItem } from "./TransactionItem";
import { TableHeaderItem } from "./TableHeaderItem";

interface TransactionsSectionProps {
  onSelectTransaction: (tx: Transaction) => void;
}

export const TransactionsSection = ({ onSelectTransaction }: TransactionsSectionProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const displayedTransactions = isExpanded ? transactions : transactions.slice(0, 11);

  return (
    <div className="px-2 pb-8 overflow-x-auto custom-scrollbar">
      <table className="w-full text-left table-fixed min-w-[500px] border-separate border-spacing-0">
        <thead>
          <tr className="text-sm font-medium text-muted tracking-wider">
            <th className="py-2 pr-0 font-normal w-[28%] text-left pl-2">Transaction</th>
            <TableHeaderItem label="Created by" className="w-[15%]" />
            <TableHeaderItem label="Categories" className="w-[12%]" />
            <TableHeaderItem label="Status" className="w-[12%]" />
            <TableHeaderItem label="Amount" align="right" className="w-[15%]" />
          </tr>
        </thead>
        <tbody className="[&>tr:nth-child(odd)>td]:bg-gray-100">
          {displayedTransactions.map((tx, idx) => (
            <TransactionItem
              key={idx}
              tx={tx}
              onClick={() => onSelectTransaction(tx)}
            />
          ))}
        </tbody>
      </table>
      {!isExpanded && transactions.length > 11 && (
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
