"use client";

import React from "react";
import { Transaction } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";
import { BalanceSection } from "@/components/BalanceSection";
import { TransactionsSection } from "@/components/TransactionsSection";
import { WidgetsSection } from "@/components/WidgetsSection";
import { TransactionDetail } from "@/components/TransactionDetail";
import { AccountSelectorModal } from "@/components/AccountSelectorModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedTransaction, setSelectedTransaction] = React.useState<Transaction | null>(null);

  React.useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isModalOpen]);

  return (
    <div className="px-10 lg:px-0 flex flex-col w-full mx-auto h-full relative z-30 min-h-0 pt-6 max-w-[1440px]">
      <PageHeader />

      <div className="flex flex-col xl:flex-row gap-6 w-full flex-1 min-h-0">
        <div className="flex-1 w-full min-w-0 relative z-40 h-full pb-8">
          <Card shadow={false}>
            <BalanceSection onDetailsClick={() => setIsModalOpen(true)} />
            <TransactionsSection onSelectTransaction={setSelectedTransaction} />
          </Card>
        </div>

        <div className="xl:w-[380px] w-full relative z-30 h-full min-h-0">
          {selectedTransaction ? (
            <div className="h-full pb-8">
              <TransactionDetail
                transaction={selectedTransaction}
                onClose={() => setSelectedTransaction(null)}
              />
            </div>
          ) : (
            <div className="h-full pb-8">
              <WidgetsSection />
            </div>
          )}
        </div>
      </div>

      <AccountSelectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
