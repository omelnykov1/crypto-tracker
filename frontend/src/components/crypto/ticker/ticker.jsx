import React from 'react';
import { withRouter } from 'react-router';
import { Bar, Line } from "react-chartjs-2";
import TickerWidget from './ticker_widget';
import TickerStatistics from './ticker_statistics'
import ReactHtmlParser from "react-html-parser";
import Particles from "react-tsparticles";
import TickerLinks from './ticker_links';


class Ticker extends React.Component {
    constructor(props) {
        super(props);
        this.handleTable = this.handleTable.bind(this); 
        this.state = {
          chartData: {
            label: ["Bitcoin"],
            fill: false,
            lineTension: 0.1,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            datasets: [
              {
                label: "Price",
                data: [
                  12284.61728386478,
                  12310.870864666433,
                  12297.102212727721,
                  12301.436996966882,
                  12360.592250732558,
                  12263.636675610811,
                  12323.340938836871,
                  12302.460235483417,
                  12336.320402836844,
                  12292.075264893769,
                  12228.387765853236,
                  12209.195698020638,
                  12252.299425817348,
                  12238.206741075679,
                  12240.491027886625,
                  12207.507713394505,
                  12264.386714026346,
                  12206.427208414862,
                  12235.87491538292,
                  12113.787998366115,
                  11934.904652020516,
                  11930.59860289085,
                  11968.848747490325,
                  11984.221832093981,
                  11981.122331882207,
                  11994.594757922974,
                ],
                backgroundColor: "#5e57df",
              },
            ],
          },
        };
    }

    componentDidMount() {
        debugger
        this.props.fetchTicker(this.props.match.params.tickerId);
    }

    handleTable() {
      debugger
      this.props.history.push(`/tables/user/${this.props.currentUser.id}`);
    }

    render() {
        debugger
        if (this.props.ticker) {
              const ticker = this.props.ticker;
              const {image} = this.props.ticker;
              console.log(image.small)
              return (
                <div className="main-ticker-wrapper">
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
                    {/* < Line data={this.state.chartData} /> */}
                  </div>
                  <div className="ticker-info">
                    <div className="ticker-about">
                      <h1>About {ticker.name}</h1>
                      <p>{ ReactHtmlParser(ticker.description.en) }</p>
                    </div>
                    <div className="ticker-statistics">
                      < TickerStatistics ticker={ticker} />
                      < TickerLinks ticker={ticker} />
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