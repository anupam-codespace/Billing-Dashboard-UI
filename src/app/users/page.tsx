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

type Props = {};
type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order"
  },
  {
    accessorKey: "method",
    header: "Method"
  }
];

const data: Payment[] = [
  {
    name: "Ramesh Patel",
    email: "ramesh.patel@example.in",
    lastOrder: "2024-01-12",
    method: "UPI (PhonePe)"
  },
  {
    name: "Suresh Kumar",
    email: "suresh.kumar@example.in",
    lastOrder: "2024-01-28",
    method: "UPI (Google Pay)"
  },
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.in",
    lastOrder: "2024-02-05",
    method: "Net Banking (HDFC)"
  },
  {
    name: "Ananya Iyer",
    email: "ananya.iyer@example.in",
    lastOrder: "2024-02-19",
    method: "Credit Card (Razorpay)"
  },
  {
    name: "Kabir Mehta",
    email: "kabir.mehta@example.in",
    lastOrder: "2024-03-02",
    method: "Paytm UPI"
  },
  {
    name: "Rhea Sen",
    email: "rhea.sen@example.in",
    lastOrder: "2024-03-14",
    method: "UPI (Cred Pay)"
  },
  {
    name: "Ishan Verma",
    email: "ishan.verma@example.in",
    lastOrder: "2024-03-27",
    method: "Net Banking (ICICI)"
  },
  {
    name: "Tanvi Kapoor",
    email: "tanvi.kapoor@example.in",
    lastOrder: "2024-04-08",
    method: "UPI (PhonePe)"
  },
  {
    name: "Vihaan Joshi",
    email: "vihaan.joshi@example.in",
    lastOrder: "2024-04-21",
    method: "Debit Card (SBI)"
  },
  {
    name: "Shreya Nair",
    email: "shreya.nair@example.in",
    lastOrder: "2024-05-04",
    method: "UPI (Google Pay)"
  },
  {
    name: "Aryan Malhotra",
    email: "aryan.malhotra@example.in",
    lastOrder: "2024-05-18",
    method: "Credit Card (Axis Bank)"
  },
  {
    name: "Diya Banerjee",
    email: "diya.banerjee@example.in",
    lastOrder: "2024-06-01",
    method: "Net Banking (Kotak)"
  },
  {
    name: "Dev Singhania",
    email: "dev.singhania@example.in",
    lastOrder: "2024-06-15",
    method: "UPI (BHIM)"
  },
  {
    name: "Zoya Khan",
    email: "zoya.khan@example.in",
    lastOrder: "2024-06-29",
    method: "Paytm UPI"
  },
  {
    name: "Rohan Deshmukh",
    email: "rohan.deshmukh@example.in",
    lastOrder: "2024-07-10",
    method: "Net Banking (HDFC)"
  }
];

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
