import React from 'react';

const TickerLinks = ({ ticker }) => {
    const { links, image, name } = ticker;
    return (
      <div className="ticker-links-wrapper">
        <h1>Useful Links</h1>
        <div className="ticker-links">
          <div className="ticker-links-left">
            <div><img src={image.thumb} alt="" /></div>
            <div><i id="reddit" className="fab fa-reddit"></i></div>
            <div><i className="fab fa-github-alt"></i></div>
          </div>
          <div className="ticker-links-right">
            <div><a href={links.homepage[0]}>{name}</a></div>
            <div className="reddit-link"><a href={links.subreddit_url}>Reddit</a></div>
            <div className="git-link"><a href={links.repos_url.github[0]}>Github</a></div>
          </div>
        </div>
      </div>
    );
}

export default TickerLinks