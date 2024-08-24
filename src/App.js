import './App.css';
import React from 'react';
import StockDashboard from '../src/Components/StockDashboard'




function App() {
  return (
    <div className="font-sans p-6 
    bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
     min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Stock Market Data</h1>
      <StockDashboard />
    </div>
  );
}

export default App;
