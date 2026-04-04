import Image from "next/image";
import { Account } from "@/lib/types";

interface AccountListItemProps {
  account: Account;
}

export const AccountListItem = ({ account }: AccountListItemProps) => (
  <div className="flex items-start gap-4 group cursor-pointer">
    <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center relative overflow-hidden shadow-sm bg-[#003399]">
      <Image 
        src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" 
        alt="EU Flag" 
        fill
        className="object-cover"
      />
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
      <p className="text-[16px] text-muted/90 mt-0 truncate uppercase font-semibold">
        {account.currency} · {account.iban}
      </p>
    </div>
  </div>
);
