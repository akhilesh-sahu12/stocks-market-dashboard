import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const StockBarChart = ({ stockData }) => {
  // Calculate average low and high values for each unique date
  const uniqueDates = Array.from(new Set(stockData.map((day) => day.date)));
  const averagedData = uniqueDates.map((date) => {
    const relevantData = stockData.filter((day) => day.date === date);
    const averageLow =
      relevantData.reduce((sum, day) => sum + day.low, 0) / relevantData.length;
    const averageHigh =
      relevantData.reduce((sum, day) => sum + day.high, 0) /
      relevantData.length;

    return {
      date,
      averageLow,
      averageHigh,
    };
  });

  // Find the overall minimum and maximum values
  const overallMin = Math.min(...averagedData.map((day) => day.averageLow)) - 1;
  const overallMax = Math.max(...averagedData.map((day) => day.averageHigh));

  return (
    <div className="stock-bar-chart">
      <h3>Stock Price Range (Average)</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={averagedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[overallMin, overallMax]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="averageLow" fill="#8884d8" name="Average Low" />
          <Bar dataKey="averageHigh" fill="#82ca9d" name="Average High" />
        </BarChart>
      </ResponsiveContainer>

   <div className='charts'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={averagedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[overallMin, overallMax]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="averageLow"
            stroke="#8884d8"
            activeDot={{ r: 1 }}
          />
          <Line type="monotone" dataKey="averageHigh" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockBarChart;
