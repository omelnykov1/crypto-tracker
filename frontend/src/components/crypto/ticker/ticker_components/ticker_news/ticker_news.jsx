import React from 'react';
import TickerNewsItem from './ticker_news_item';
import { Header } from 'semantic-ui-react'

const TickerNews = ({ news }) => {
  return(
    <div className="ticker-news-container">
      <div className="ticker-news-header">
        <h1 className="news-header">Latest News</h1>
      </div>
      <div className="ticker-news-content">
        <ol>
          {news.map((newsItem, i) => (
            <TickerNewsItem 
              key={i}
              newsItem={newsItem}
            />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default TickerNews;