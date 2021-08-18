import React from "react";
import ReactDOM from "react-dom";
import WorldTimePane from "./WorldTimePane";

class timeConverter extends React.Component {
  constructor(props) {
    super(props);

    this.currentClock = new Date();
    this.state = {
      timestamp: "",
      nanoTime: "",
      microtime: "",
      militime: "",
      convertedTS: "",
      TSError: false,
      timeError: false,
      currentTime: this.currentClock,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertTime = this.convertTime.bind(this);
    this.handleConvertTimeToTS = this.handleConvertTimeToTS.bind(this);
  }

  //converts a timestamp, to an ISO formatted string
  convertTime(timestamp) {
    let ts = timestamp;
    var date = new Date(ts);
    let timeString = date.toISOString();
    return timeString;
  }

  convertTS(timeValue) {
    return Date.parse(timeValue);
  }

  handleChange(event) {
    this.setState({ timestamp: event.target.value });
  }

  handleConvertTimeToTS(event) {
    let timeValue = document.getElementById("timeInput").value;
    let TSAfterConvesion = this.convertTS(timeValue)
    if (isNaN(TSAfterConvesion)) {
      this.setState({ timeError: true })
    }
    else {
      this.setState({ timeError: false })
      this.setState({ convertedTS: this.convertTS(timeValue) });
    }
  }


  //when the convert button is pressed
  handleSubmit(event) {
    event.preventDefault();
    var timeString;


    let tsValue = document.getElementById("tsInput").value;
    if (isNaN(tsValue)) {
      this.setState({ TSError: true })
    }
    else {
      this.setState({ TSError: false })
      this.setState({
        nanoTime: this.convertTime(Math.floor(tsValue / 1000000)),
      });
      this.setState({
        microTime: this.convertTime(Math.floor(tsValue / 1000)),
      });
      this.setState({ miliTime: this.convertTime(Math.floor(tsValue)) });

      if (tsValue < 8640000000000) {
        this.setState({ secondTime: this.convertTime(tsValue * 1000) });
      } else {
        this.setState({ secondTime: "out of range" });
      }
    }
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
      <div class="flex sm:flex-row flex-col w-full flex-wrap bg-white">
        <div class="margin-auto w-4/5 flex flex-col">
          <div class="w-full"><label class="text-4xl w-full">Time Converter</label></div>
          <hr></hr>
          <div class="w-full">
            <div
              id="timeConvertPane"
              class="w-full h-full p-10 flex flex-col sm:flex-row  flex-wrap content-start space-y-10"
            >
              <div class="w-full text-left">
                <label class="text-2xl w-full ">Time stamp to time</label>
                <br />
                input a timestamp and hit convert
              </div>

              <div class="w-1/3 text-right relative">
                <div class="w-3/5 right-0 absolute text-left h-full">
                  <label class="text-bold bg-blue-200 w-full">
                    unix timestamp{" "}
                  </label>
                  <br />
                  <br />
                  <input
                    id="tsInput"
                    type="text"
                    class="border-2 focus:ring-yellow-500 focus:ring-2 w-full"
                    onChange={this.handleChange}
                  />
                  <label id="converterErrorLabel" class={this.state.TSError ? 'text-red-400' : 'hidden'}>invalid parameter, value must be number</label>
                </div>
              </div>
              <div class="w-1/6">
                <button
                  class="hover:bg-blue-200 p-1 m-auto border-2 border-blue-200"
                  onClick={this.handleSubmit}
                >
                  convert
                </button>
              </div>
              <div id="resultsPane" class="w-3/6 text-left">
                <label class="text-bold bg-yellow-200 w-full ">
                  Possible Results:
                </label>
                <br />
                <table class="w-full ml-5">
                  <tr>
                    <td>time if nanoseconds: </td> <td>{this.state.nanoTime}</td>
                  </tr>
                  <tr>
                    <td>time if microseconds: </td> <td>{this.state.microTime}</td>
                  </tr>
                  <tr>
                    <td>time if miliseconds:  </td> <td>{this.state.miliTime}</td>
                  </tr>
                  <tr>
                    <td>time if seconds:  </td> <td>{this.state.secondTime}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <hr></hr>
          <div class="w-full">
            <div
              id="timeConvertPane"
              class="w-full h-full p-10 flex flex-col sm:flex-row  flex-wrap content-start space-y-10"
            >
              <div class="w-full text-left">
                <label class="text-2xl w-full">Time to Time Stamps</label>
                <br />
                Choose one timestamp field and hit convert!!
              </div>

              <div class="w-1/3 text-right relative">
                <div class="w-3/5 right-0 absolute text-left">
                  <label class="text-bold bg-blue-200 w-full">
                    ISO time{" "}
                  </label>
                  <input
                    type="text"
                    id="timeInput"
                    class="border-2 focus:ring-yellow-500 focus:ring-2 w-full"
                  />
                  <label class={this.state.timeError ? 'text-red-400' : 'hidden'}>Invalid, Input must be a valid time format</label>
                </div>
              </div>
              <div class="w-1/6">
                <button
                  class="hover:bg-blue-200 p-1 m-auto border-2 border-blue-200"
                  onClick={() => { this.handleConvertTimeToTS() }}>
                  convert
                </button>
              </div>
              <div id="resultsPane" class="w-3/6 text-left">
                <label class="text-bold bg-yellow-200 w-full ">
                  Possible Results:
                </label>
                <br />
                <table class="w-full ml-5">
                  <tr>
                    <td>nanoseconds timestamp: </td> <td>{this.state.convertedTS * 1000000}</td>
                  </tr>
                  <tr>
                    <td>microseconds timestamp: </td> <td>{this.state.convertedTS * 1000}</td>
                  </tr>
                  <tr>
                    <td>miliseconds timestamp:  </td> <td>{this.state.convertedTS}</td>
                  </tr>
                  <tr>
                    <td>seconds timestamp:  </td> <td>{(this.state.convertedTS / 1000) == 0 ? '' : this.state.convertedTS / 1000}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-blue-50 w-1/5 h-full p-5">
          <WorldTimePane></WorldTimePane>
        </div>
      </div >
    );
  }
}

export default timeConverter;
