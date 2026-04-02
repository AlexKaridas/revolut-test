"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TransactionDetailRowProps {
  label: string;
  value: React.ReactNode;
  className?: string;
  valueClassName?: string;
}

export const TransactionDetailRow = ({ 
  label, 
  value, 
  className, 
  valueClassName 
}: TransactionDetailRowProps) => (
  <div className={cn("flex justify-between items-center text-sm", className)}>
    <span className="text-muted font-medium">{label}</span>
    <span className={cn("text-shark font-semibold", valueClassName)}>{value}</span>
  </div>
);
