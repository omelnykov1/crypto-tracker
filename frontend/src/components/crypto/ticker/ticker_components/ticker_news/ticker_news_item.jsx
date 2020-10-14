import React from 'react';

const TickerNewsItem = ({ newsItem }) => {
    const {  title, description, url, publishedAt, urlToImage } = newsItem;
    return (
        <div className="ticker-news-item-container">
            <div className="ticker-item-top">
                <img src={urlToImage} alt=""/>
            </div>
            <div className="ticker-item-bottom">
                <div>
                    {title}
                </div>
                <div>
                    {description}
                </div>
                <div>
                    <form action={url}>
                        <button type="submit">Read More</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TickerNewsItem;