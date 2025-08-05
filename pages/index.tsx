import { useState } from "react";
import Title from "@/components/atoms/Title";
import Card from "@/components/atoms/Card";
import SalesItem from "@/components/molecules/SalesItem";
import salesByYear from "@/data/salesByYear.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  const [selectedYear, setSelectedYear] = useState("All");

  const years = ["All", ...new Set(salesByYear.map((item) => item.year.toString()))];
  const filteredData =
    selectedYear === "All"
      ? salesByYear
      : salesByYear.filter((item) => item.year.toString() === selectedYear);

  return (
    <main className="p-6">
      <Title text="Sales Dashboard on Kaggle (2022-2024)" />

      <div className="my-4">
        <label className="mr-2 font-medium">Filter by Year:</label>
        <select
          className="border p-2 rounded"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredData.map((item) => (
          <Card key={item.year}>
            <SalesItem year={item.year} sales={item.sales} />
          </Card>
        ))}
      </div>

      <div className="mt-10 h-96">
        <Title text="Sales Overview Chart" />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={filteredData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#722f37" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}
