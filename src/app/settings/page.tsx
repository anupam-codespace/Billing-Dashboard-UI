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

interface Setting {
  category: string;
  value: string | number | boolean;
}

const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Category"
  },
  {
    accessorKey: "value",
    header: "Value"
  }
];
const data: Setting[] = [
  {
    category: "Account Owner",
    value: "Anupam Saha (@anupam-codespace)"
  },
  {
    category: "Base Currency",
    value: "INR (₹) — Indian Rupee"
  },
  {
    category: "Payment Gateway",
    value: "Razorpay / UPI Multi-rail"
  },
  {
    category: "Timezone",
    value: "Asia/Kolkata (IST, UTC+05:30)"
  },
  {
    category: "Notifications",
    value: "Email & Webhook Alerts Enabled"
  },
  {
    category: "Regional Format",
    value: "English (India) — Lakhs / Crores"
  },
  {
    category: "Interface Theme",
    value: "Monochrome Minimalist"
  }
];

export default function SettingsPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Settings" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
