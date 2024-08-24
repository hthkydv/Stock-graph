import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface StockGraphProps {
  data: { date: string; price: number }[];
  symbol: string;
}

const StockGraph: React.FC<StockGraphProps> = ({ data, symbol }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-white text-xl font-bold mb-4">{symbol} Stock Prices</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="date" stroke="#ddd" />
          <YAxis stroke="#ddd" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#38bdf8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockGraph;
