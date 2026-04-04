"use client";

import React from "react";
import { X, Plus, Search } from "lucide-react";
import { AccountListItem } from "./AccountListItem";
import { Account } from "@/lib/types";

const accounts: Account[] = [
  {
    name: "ZIA RESIDENCE - Rentals",
    currency: "EUR",
    iban: "LT24 3250 0197 9392 1390",
    balance: "€21,805.20",
  },
  {
    name: "IPM - HILLSIDE HEIGHTS",
    currency: "EUR",
    iban: "LT74 3250 0021 7609 1499",
    balance: "€18,465.74",
  },
  {
    name: "THEODOROU COURT 4-MAINTENANCE",
    currency: "EUR",
    iban: "LT47 3250 0521 4117 1449",
    balance: "€13,249",
  },
  {
    name: "NEFELI COURT 11",
    currency: "EUR",
    iban: "LT10 3250 0459 0144 9041",
    balance: "€12,847.69",
  },
  {
    name: "ACADEMIA 3 - BILLBOARD INCOME",
    currency: "EUR",
    iban: "LT40 3250 0421 4881 4642",
    balance: "€11,735.77",
  },
  {
    name: "PARAMOUNT GARDENS 2",
    currency: "EUR",
    iban: "LT30 3250 0858 0716 2836",
    balance: "€6,419.66",
  },
  {
    name: "CORNERSTONE HOLDINGS",
    currency: "EUR",
    iban: "LT15 3250 0943 0088 1234",
    balance: "€45,210.00",
  },
  {
    name: "OCEANVIEW INVESTMENTS",
    currency: "EUR",
    iban: "LT22 3250 0001 8882 4567",
    balance: "€3,475.50",
  },
  {
    name: "SKYLINE DEVELOPMENT",
    currency: "EUR",
    iban: "LT88 3250 0663 4591 1999",
    balance: "€95,120.33",
  },
  {
    name: "PINEWOOD ESTATES",
    currency: "EUR",
    iban: "LT55 3250 0111 2234 5050",
    balance: "€1,250.00",
  },
  {
    name: "RIVERFRONT PROPERTIES",
    currency: "EUR",
    iban: "LT77 3250 0333 4455 6060",
    balance: "€18,940.85",
  },
];

interface AccountSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountSelectorModal = ({ isOpen, onClose }: AccountSelectorModalProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setMounted(true), 10);
      return () => clearTimeout(timer);
    } else {
      setMounted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className={`absolute inset-0 bg-black/25 transition-opacity duration-500 ease-out ${mounted ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />

      <div
        className={`relative bg-[#eaf2fb] w-full max-w-[500px] rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted
            ? "translate-y-0 opacity-100"
            : "translate-y-[100vh] opacity-0"
          }`}
      >
        <div className="pb-0 px-5 pt-2">
          <div className="flex items-center justify-between mb-0 relative">
            <button
              onClick={onClose}
              className="p-2 -ml-2 text-shark hover:bg-selection rounded-full transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-shark text-white rounded-full text-sm font-bold hover:bg-shark/90 transition-colors z-10">
              <Plus className="w-4 h-4" strokeWidth={3} />
              New
            </button>
          </div>
          <h2 className="flex items-center justify-center text-xl font-bold text-shark pointer-events-none mb-4">
            Select your account
          </h2>

          <div className="relative mb-3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-2 bg-[rgba(151,167,189,0.2)] rounded-full text-shark font-medium placeholder:text-black/70 focus:outline-none focus:ring-2 focus:ring-shark/5 transition-all text-[15px]"
            />
          </div>

          <div className="space-y-8 max-h-[500px] overflow-y-auto p-4 custom-scrollbar bg-white rounded-t-2xl shadow-sm mx-1 mb-0">
            {accounts.map((account, idx) => (
              <AccountListItem key={idx} account={account} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
