import React, { useEffect, useState } from 'react';
import NewsList from '../News/NewsList';
import '../News/NewsList.css' // Import your CSS file

const BASE_URL='https://api.iex.cloud/v1';
const API_KEY= 'pk_ddeddb3e6e0c4da8b1211716c064c37e';

const NewsFetcher = ({symbol}) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/data/core/news/${symbol}?range=last-week&token=${API_KEY}`
          );
        if (!response.ok) {
          throw new Error('Failed to fetch news data');
        }

        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching news data:', error.message);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div className="news-fetcher-container">
      {newsData.length > 0 ? (
        <NewsList articles={newsData} />
      ) : (
        <p>Loading news...</p>
      )}
    </div>
  );
};

export default NewsFetcher;
