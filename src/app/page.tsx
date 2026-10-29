import BarChart from "@/components/BarChart";
import PageTitle from "@/components/PageTitle";
import Card, { CardContent, CardProps } from "@/components/card";
import { Activity, CreditCard, IndianRupee, Users } from "lucide-react";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "₹45,23,189.00",
    discription: "+20.1% from last month",
    icon: IndianRupee
  },
  {
    label: "Subscription",
    amount: "+2,350",
    discription: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 from last month",
    icon: Activity
  }
];

const userSalesData: SalesProps[] = [
  {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.in",
    salesAmount: "+₹1,99,900.00"
  },
  {
    name: "Ananya Iyer",
    email: "ananya.iyer@example.in",
    salesAmount: "+₹1,49,500.00"
  },
  {
    name: "Suresh Kumar",
    email: "suresh.kumar@example.in",
    salesAmount: "+₹84,200.00"
  },
  {
    name: "Rhea Sen",
    email: "rhea.sen@example.in",
    salesAmount: "+₹39,990.00"
  },
  {
    name: "Ramesh Patel",
    email: "ramesh.patel@example.in",
    salesAmount: "+₹14,499.00"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard"/>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, index) => (
          <Card 
            key={index}
            amount={data.amount}
            discription={data.discription}
            icon={data.icon}
            label={data.label}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart/>
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {userSalesData.map((data, index) => (
            <SalesCard
              key={index}
              email={data.email}
              name={data.name}
              salesAmount={data.salesAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  )
}
