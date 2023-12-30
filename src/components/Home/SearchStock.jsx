// SearchStock.jsx
import React, { useState } from 'react';
import Symbols from './SymbolData';
import './SymbolSearch.css';
import StockBarChart from '../Stocks/Charts/StockBarChart';
import useStockData from '../../hooks/useStockData'; // Import data fetching hook
import NewsFetcher from "../News/NewsFetcher";

const SymbolSearch = ({ symbolData, onSelectSymbol }) => {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    // Filter symbols based on user input
    const filteredSymbols = symbolData.filter((symbol) =>
      symbol.name.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filteredSymbols);
  };

  const handleSuggestionClick = (selectedSymbol) => {
    setSearchInput(selectedSymbol.symbol);
    setSuggestions([]); // Clear suggestions when a symbol is selected
    onSelectSymbol(selectedSymbol); // Pass selected symbol to parent component
  };

  return (
    <div className='search-option'>
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Enter Company name & select symbol"
      />

      {/* Display suggestions */}
      <ul>
        {suggestions.map((symbol) => (
          <li key={symbol.symbol} onClick={() => handleSuggestionClick(symbol)}>
            {symbol.symbol} - {symbol.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SearchStock = () => {
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  // Sample symbol data
  const symbolData = Symbols;

  const handleSelectSymbol = (symbol) => {
    // Handle selected symbol (you can perform any action here)
    setSelectedSymbol(symbol);
  };

  // Fetch stock data based on the selected symbol
  const stockData = useStockData(selectedSymbol?.symbol);

  return (
    <div className='search-list'>
      <h1>Search Stocks & News</h1>
      <SymbolSearch symbolData={symbolData} onSelectSymbol={handleSelectSymbol} />

      {/* Additional content based on the selected symbol */}
      {selectedSymbol && (
        <div>
          <h2>Selected Company: {selectedSymbol.name}</h2>
          <StockBarChart stockData={stockData} />
          <h2>News related {selectedSymbol.name}</h2>
          <NewsFetcher symbol= {selectedSymbol.symbol}/> 
        </div>
      )}
    </div>
  );
};

export default SearchStock;
