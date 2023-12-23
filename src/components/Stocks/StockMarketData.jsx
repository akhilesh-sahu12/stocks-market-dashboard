import React, { useState, useEffect } from 'react';
import StockMarketList from '../Stocks/StockMarketList';
import '../Stocks/Stocks.css'; 

const StockMarketData = () => {
  const [stockData, setStockData] = useState(null);
  const [selectedList, setSelectedList] = useState('top_gainers');

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=F3F789EC8B949H9G');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setStockData(data);
      } catch (error) {
        console.error('Error fetching stock data:', error.message);
      }
    };

    fetchStockData();
  }, []);

  const handleButtonClick = (listType) => {
    setSelectedList(listType);
  };

  return (
    <div className="stock-container">
      <header>
        <h1>Stock Market Data</h1>
        <div className="button-container">
          <button
            className={selectedList === 'top_gainers' ? 'active' : ''}
            onClick={() => handleButtonClick('top_gainers')}
          >
            Top Gainers
          </button>
          <button
            className={selectedList === 'top_losers' ? 'active' : ''}
            onClick={() => handleButtonClick('top_losers')}
          >
            Top Losers
          </button>
        </div>
      </header>
      <main>
        {stockData ? (
          <StockMarketList
            title={selectedList === 'top_gainers' ? 'Top 10 Gainers' : 'Top 10 Losers'}
            stocks={stockData[selectedList].slice(0, 10)}
          />
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
};

export default StockMarketData;
