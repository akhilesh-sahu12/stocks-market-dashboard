const STOCK_API_BASE_URL = 'https://api.iex.cloud/v1/data/core/intraday_prices'; // Replace with actual API base URL

const StockService = {
  getStocks: async (symbol) => {
    try {
      const response = await fetch(`${STOCK_API_BASE_URL}${symbol}?range=5dm&token=pk_ddeddb3e6e0c4da8b1211716c064c37e`);
      if (!response.ok) {
        throw new Error('Failed to fetch stock data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  },
};

export default StockService;