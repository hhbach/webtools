import React from "react";
import ReactDOM from "react-dom";

class WorldTimePane extends React.Component {
    constructor(props) {
      super(props);
  
      this.currentClock = new Date();
      this.state = {
        currentTime: this.currentClock,
      };
    }
    
    tick() {
      this.setState({ currentTime: new Date() });
    }
  
    componentDidMount() {
      this.intervalID = setInterval(() => this.tick(), 100);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
  
    render() {
      return (
          <div>
            <br />
            <br />
            <table class="m-auto text-left ">
              <tr>
                <th class="pr-6 text-xl text-yellow-600">Time Zone</th>{" "}
                <th>Local Time</th>
              </tr>
              <hr class="bg-yellow-50"></hr>
              <tr>
                <th>GMT/UTC</th>{" "}
                <th>
                  {this.state.currentTime.toLocaleString("en-US", {
                    timeZone: "UTC",
                  })}
                </th>
              </tr>
              <hr></hr>
              <tr>
                <th>CET/ECT/WET/RST/CEST</th>{" "}
                <th>
                  {this.state.currentTime.toLocaleString("en-US", {
                    timeZone: "Europe/Brussels",
                  })}
                </th>
              </tr>
              <hr></hr>
              <tr>
                <th>JST/GTBST/MEST/EGST/SST/SAST/EET/EEST/NMST/ISST</th>{" "}
                <th>
                  {this.state.currentTime.toLocaleString("en-US", {
                    timeZone: "Africa/Cairo",
                  })}
                </th>
              </tr>
              <hr></hr>
              <tr>
                <th>ARST/ABST/MSK/EAT</th>{" "}
                <th>
                  {this.state.currentTime.toLocaleString("en-US", {
                    timeZone: "Asia/Baghdad",
                  })}
                </th>
              </tr>
              <hr></hr>
              <tr>
                <th>IRST</th>{" "}
                <th>
                  {this.state.currentTime.toLocaleString("en-US", {
                    timeZone: "Asia/Tehran",
                  })}
                </th>
              </tr>
              <hr></hr>
              <tr>
                <th>ARBST/AZT/MUT/GET/AMT</th>{" "}
                <th>
                  {this.state.currentTime.toLocaleString("en-US", {
                    timeZone: "Asia/Baku",
                  })}
                </th>
              </tr>
              <hr></hr>
              <tr>
                <th>AFT</th>{" "}
                <th>
                  {this.state.currentTime.toLocaleString("en-US", {
                    timeZone: "Asia/Kabul",
                  })}
                </th>
              </tr>
              <hr></hr>
              <tr>
                <th>YEKT/PKT/WAST</th>{" "}
                <th>
                  {this.state.currentTime.toLocaleString("en-US", {
                    timeZone: "Asia/Karachi",
                  })}
                </th>
              </tr>
              <hr></hr>
              <tr>
                <th>IST/SLT</th>{" "}
                <th>
                  {this.state.currentTime.toLocaleString("en-US", {
                    timeZone: "Asia/Calcutta",
                  })}
                </th>
              </tr>
              <hr></hr>
              <tr>
                <th>NPT</th>{" "}
                <th>
                  {this.state.currentTime.toLocaleString("en-US", {
                    timeZone: "Asia/Katmandu",
                  })}
                </th>
              </tr>
              <hr></hr>
              <tr>
                <th>BTT/BST/NCAST</th>{" "}
                <th>
                  {this.state.currentTime.toLocaleString("en-US", {
                    timeZone: "Asia/Dhaka",
                  })}
                </th>
              </tr>
              <hr></hr>
              <tr>
                <th>MYST</th>{" "}
                <th>
                  {this.state.currentTime.toLocaleString("en-US", {
                    timeZone: "Asia/Rangoon",
                  })}
                </th>
              </tr>
              <hr></hr>
              <tr>
                <th>THA/KRAT</th>{" "}
                <th>
                  {this.state.currentTime.toLocaleString("en-US", {
                    timeZone: "Asia/Bangkok",
                  })}
                </th>
              </tr>
            </table>
          </div>
      );
    }
  }

  export default WorldTimePane