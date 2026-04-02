"use client";

import React from "react";
import { X, Plus, Search } from "lucide-react";

interface Account {
  name: string;
  iban: string;
  balance: string;
  currency: string;
}

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
        className={`relative bg-card w-full max-w-[420px] rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted
            ? "translate-y-0 opacity-100"
            : "translate-y-[100vh] opacity-0"
          }`}
      >
        <div className="pb-8 px-5 pt-2">
          <div>
            <div className="flex items-center justify-between mb-1 relative">
              <button
                onClick={onClose}
                className="p-2 -ml-2 text-shark hover:bg-selection rounded-full transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 px-2 py-1.5 bg-shark text-card rounded-full text-sm font-bold hover:bg-shark/90 transition-colors z-10">
                <Plus className="w-4 h-4" strokeWidth={3} />
                New
              </button>
            </div>
            <h2 className="flex items-center justify-center text-xl font-bold text-shark pointer-events-none mb-4">
              Select your account
            </h2>
          </div>

          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-1.5 bg-[rgba(151,167,189,0.2)] rounded-full text-shark font-medium placeholder:text-black focus:outline-none focus:ring-2 focus:ring-shark/5 transition-all text-[15px]"
            />
          </div>

          <div className="space-y-10 max-h-[520px] overflow-y-auto px-3 custom-scrollbar">
            {accounts.map((account, idx) => (
              <div key={idx} className="flex items-start gap-4 group cursor-pointer">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
