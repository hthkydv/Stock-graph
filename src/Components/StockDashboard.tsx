import React, { useState } from 'react';
import StockGraph from './Stockgraph';
import { stockData } from '../data/stock';

const StockDashboard: React.FC = () => {
    const [selectedStock, setSelectedStock] = useState<string>(stockData[0].symbol);

    const selectedStockData = stockData.find(stock => stock.symbol === selectedStock);
    const data = selectedStockData?.prices.map(price => ({
        date: price.date,
        price: price.price,
    })) || [];

    return (
        <div className="container mx-auto p-4">

            <StockGraph data={data} symbol={selectedStock} />
            <div className="mt-4 flex space-x-2">
                {stockData.map(stock => (
                    <button
                        key={stock.symbol}
                        onClick={() => setSelectedStock(stock.symbol)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        {stock.symbol}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StockDashboard;
