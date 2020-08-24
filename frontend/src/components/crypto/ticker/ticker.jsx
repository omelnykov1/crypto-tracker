import React from 'react';
import { withRouter } from 'react-router';
import TickerWidget from './ticker_components/ticker_widget';
import TickerStatistics from './ticker_components/ticker_statistics';
import TickerLinks from './ticker_components/ticker_links';
import TickerChart from './ticker_components/ticker_chart';
import ReactHtmlParser from "react-html-parser";
import Particles from "react-tsparticles";



class Ticker extends React.Component {
    constructor(props) {
        super(props);
        this.handleTable = this.handleTable.bind(this); 
    }

    componentDidMount() {
        this.props.fetchTicker(this.props.match.params.tickerId);
        this.props.fetchTickerData(this.props.match.params.tickerId);
    }

    handleTable() {
      this.props.history.push(`/tables/user/${this.props.currentUser.id}`);
    }

    render() {
        if (this.props.ticker && this.props.data.length) {
              const ticker = this.props.ticker;
              const {image} = this.props.ticker;
              return (
                <div className="main-ticker-wrapper">
                  < TickerChart data={this.props.data}/>
                  <Particles
                    id="tsparticles"
                    options={{
                      background: {
                        color: {
                          value: "ffffff",
                        },
                      },
                      fpsLimit: 60,
                      interactivity: {
                        detectsOn: "canvas",
                        events: {
                          onClick: {
                            enable: true,
                            mode: "push",
                          },
                          onHover: {
                            enable: true,
                            mode: "repulse",
                          },
                          resize: true,
                        },
                        modes: {
                          bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                          },
                          push: {
                            quantity: 4,
                          },
                          repulse: {
                            distance: 200,
                            duration: 0.4,
                          },
                        },
                      },
                      particles: {
                        color: {
                          value: "#ffffff",
                        },
                        links: {
                          color: "#ffffff",
                          distance: 150,
                          enable: true,
                          opacity: 0.5,
                          width: 1,
                        },
                        collisions: {
                          enable: true,
                        },
                        move: {
                          direction: "none",
                          enable: true,
                          outMode: "bounce",
                          random: false,
                          speed: 3,
                          straight: false,
                        },
                        number: {
                          density: {
                            enable: true,
                            value_area: 800,
                          },
                          value: 20,
                        },
                        opacity: {
                          value: 0.6,
                        },
                        shape: {
                          type: "image",
                          image: {
                            src: `${image.small}`,
                          },
                        },
                        size: {
                          random: true,
                          value: 25,
                        },
                      },
                      detectRetina: true,
                    }}
                  />
                  <div className="ticker-widget">
                    <TickerWidget ticker={ticker} />
                  </div>
                  <div className="ticker-info">
                    <div className="ticker-about">
                      <h1>About {ticker.name}</h1>
                      <p>{ReactHtmlParser(ticker.description.en)}</p>
                    </div>
                    <div className="ticker-statistics">
                      <TickerStatistics ticker={ticker} />
                      <TickerLinks ticker={ticker} />
                    </div>
                  </div>
                  <button onClick={this.handleTable}>Tables</button>
                </div>
              );
        } else {
            return null;
        }
    }
}

export default withRouter(Ticker);