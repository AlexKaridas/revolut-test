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
    <div className="pr-8 xl:pr-10 flex flex-col w-full mx-auto h-full relative z-30 min-h-0 max-w-[1600px]">
      <PageHeader />

      <div className="flex flex-col xl:flex-row gap-3 w-full flex-1 min-h-0">
        <div className="flex-1 w-full min-w-0 relative z-30 min-h-0 flex flex-col">
          <Card shadow={false}>
            <BalanceSection onDetailsClick={() => setIsModalOpen(true)} />
            <TransactionsSection onSelectTransaction={setSelectedTransaction} />
          </Card>
        </div>

        <div className="xl:w-[420px] w-full relative z-40 h-full min-h-0 overflow-visible">
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
