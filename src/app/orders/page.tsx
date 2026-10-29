/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";

type Props = {};
type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
  amount: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Completed"
          })}
        >
          {row.getValue("status")}
        </div>
      );
    }
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order"
  },
  {
    accessorKey: "method",
    header: "Method"
  },
  {
    accessorKey: "amount",
    header: "Amount"
  }
];

const data: Payment[] = [
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2024-01-15",
    method: "Credit Card (Razorpay)",
    amount: "₹24,999.00"
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2024-02-20",
    method: "Net Banking (HDFC)",
    amount: "₹1,49,990.00"
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2024-03-10",
    method: "UPI (Google Pay)",
    amount: "₹4,999.00"
  },
  {
    order: "ORD004",
    status: "Pending",
    lastOrder: "2024-04-05",
    method: "UPI (PhonePe)",
    amount: "₹12,450.00"
  },
  {
    order: "ORD005",
    status: "Completed",
    lastOrder: "2024-05-12",
    method: "Net Banking (ICICI)",
    amount: "₹85,000.00"
  },
  {
    order: "ORD006",
    status: "Processing",
    lastOrder: "2024-06-18",
    method: "Paytm UPI",
    amount: "₹3,299.00"
  },
  {
    order: "ORD007",
    status: "Completed",
    lastOrder: "2024-07-22",
    method: "UPI (Cred Pay)",
    amount: "₹45,500.00"
  },
  {
    order: "ORD008",
    status: "Pending",
    lastOrder: "2024-08-30",
    method: "Debit Card (SBI)",
    amount: "₹18,750.00"
  },
  {
    order: "ORD009",
    status: "Processing",
    lastOrder: "2024-09-05",
    method: "UPI (PhonePe)",
    amount: "₹9,999.00"
  },
  {
    order: "ORD010",
    status: "Completed",
    lastOrder: "2024-10-18",
    method: "Net Banking (Axis)",
    amount: "₹1,25,000.00"
  },
  {
    order: "ORD011",
    status: "Pending",
    lastOrder: "2024-11-25",
    method: "UPI (BHIM)",
    amount: "₹2,499.00"
  },
  {
    order: "ORD012",
    status: "Completed",
    lastOrder: "2024-12-08",
    method: "Credit Card (Razorpay)",
    amount: "₹67,800.00"
  },
  {
    order: "ORD013",
    status: "Processing",
    lastOrder: "2025-01-15",
    method: "Net Banking (Kotak)",
    amount: "₹34,200.00"
  },
  {
    order: "ORD014",
    status: "Completed",
    lastOrder: "2025-02-20",
    method: "UPI (Google Pay)",
    amount: "₹7,999.00"
  },
  {
    order: "ORD015",
    status: "Pending",
    lastOrder: "2025-03-30",
    method: "Paytm UPI",
    amount: "₹15,500.00"
  }
];

export default function OrdersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
