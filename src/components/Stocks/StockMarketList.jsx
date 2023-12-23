import React from 'react';
import '../Stocks/Stocks.css'; // Import the CSS file
import { color } from 'highcharts';

const StockItem = ({ stock }) => (
  <div className="stock-item-container">
    <h3 className="stock-item-value">{stock.ticker}</h3>
    <p className="stock-item-value">{stock.price}</p>
    <p className="stock-item-value" style={{color: stock.change_amount < 0 ? 'red' : 'green'}}>{stock.change_amount}</p>
    <p className="stock-item-value" style={{color: stock.change_amount < 0 ? 'red' : 'green'}}>{stock.change_percentage}</p>
    <p className="stock-item-value">{stock.volume}</p>
  </div>
);

const StockMarketList = ({ title, stocks }) => (
  <div className="stock-list-container">
    <h2 className="stock-list-heading">{title}</h2>
    <div className="stock-item-container">
      <h3 className="stock-item-value">Ticker</h3>
      <p className="stock-item-value">Price</p>
      <p className="stock-item-value">Change Amount</p>
      <p className="stock-item-value">Change Percentage</p>
      <p className="stock-item-value">Volume</p>
    </div>
    {stocks.map((stock, index) => (
      <StockItem key={index} stock={stock} />
    ))}
  </div>
);

export default StockMarketList;
