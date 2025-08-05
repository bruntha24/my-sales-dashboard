interface SalesCardProps {
  year: number;
  sales: number;
}

export default function SalesCard({ year, sales }: SalesCardProps) {
  return (
    <div className="bg-white text-black rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold">Year: {year}</h2>
      <p className="text-2xl font-bold mt-2">₹ {sales.toLocaleString()}</p>
    </div>
  );
}
