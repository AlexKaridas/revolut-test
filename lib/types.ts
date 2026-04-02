export interface Transaction {
  initials: string;
  name: string;
  description: string;
  amount: string;
  status: string;
  type: "inflow" | "outflow";
  creator?: string;
  category?: string;
  color?: string;
  img?: string;
  reference?: string;
  date?: string;
  time?: string;
  fees?: string;
  fromAccount?: string;
  toAccount?: string;
}
