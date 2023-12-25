import { useState, useEffect } from 'react';

const STOCK_API_BASE_URL = 'https://api.iex.cloud/v1/data/core/intraday_prices'; // Replace with actual API base URL

const useStockData = (symbol) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch(`${STOCK_API_BASE_URL}/${symbol}?range=5dm&token=pk_ddeddb3e6e0c4da8b1211716c064c37e`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch stock data');
        }

        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error(error.message);
        throw error;
      }
    };

    if (symbol) {
      // Fetch stock data only if a symbol is provided
      fetchStocks();
    } else {
      // Clear stock data if no symbol is provided
      setStocks([]);
    }
  }, [symbol]);

  return stocks;
};

export default useStockData;
