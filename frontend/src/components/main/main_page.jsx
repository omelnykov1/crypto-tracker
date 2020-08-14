import React from "react";
import { withRouter } from "react-router-dom";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push('/tickers');
  }

  render() {
    return (
      <div className="main">
        <img src={"/images/back.png"} alt=""/>
        <div className="main-left">
          <div className="welcome-message">
            <h1>Welcome to Crypto Tracker!</h1>
            <p className="welcome-main">
              Platform where you can track your favorite blockchain projects and
              much more.
            </p>
            <div className="all-tickers">
              <button className="tickers-btn" onClick={this.handleClick}>All Tickers</button>
            </div>
          </div>
        </div>
        {/* <div className="main-right">
          <img src={"/images/try.png"}></img>
        </div> */}
      </div>
    );
  }
}

export default MainPage;

{/* <div class="sketchfab-embed-wrapper">
            <iframe title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/a158be5de8d9467da798fcbc4894aa72/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          </div> */}
