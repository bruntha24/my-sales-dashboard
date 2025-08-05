import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

interface Props {
  data: {
    year: number;
    sales: number;
  }[];
}

export default function SalesChart({ data }: Props) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg p-6 mt-8">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#9f1239" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
