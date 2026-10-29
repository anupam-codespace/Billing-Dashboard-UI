'use client'
import React from 'react'
import { Bar, ResponsiveContainer } from 'recharts'
import { BarChart as BarGraph, XAxis, YAxis } from 'recharts'

type Props = {}

const data = [
  {
    name: "Jan",
    total: 3200
  },
  {
    name: "Feb",
    total: 4500
  },
  {
    name: "Mar",
    total: 3900
  },
  {
    name: "Apr",
    total: 5800
  },
  {
    name: "May",
    total: 4900
  },
  {
    name: "Jun",
    total: 6300
  },
  {
    name: "Jul",
    total: 5900
  },
  {
    name: "Aug",
    total: 7100
  },
  {
    name: "Sep",
    total: 6400
  },
  {
    name: "Oct",
    total: 7800
  },
  {
    name: "Nov",
    total: 8400
  },
  {
    name: "Dec",
    total: 9600
  }
];

export default function BarChart({}: Props) {
  return (
    <ResponsiveContainer width={'100%'} height={350}>
        <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `₹${value}`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
        </BarGraph>
    </ResponsiveContainer>
  )
}