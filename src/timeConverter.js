import React from "react";
import ReactDOM from "react-dom";

class timeConverter extends React.Component {
  constructor(props) {
    super(props);

    this.currentClock = new Date()
    this.state = {  timestamp: "", 
                    nanoTime: "", 
                    microtime: "", 
                    militime: "",
                    currentTime: this.currentClock.toISOString()};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertTime = this.convertTime.bind(this);
    
  }

  //converts a timestamp, to an ISO formatted string
  convertTime(timestamp) {
    let ts = timestamp;
    var date = new Date(ts);
    let timeString = date.toISOString();
    return timeString;
  }
  
  handleChange(event) {
    this.setState({ timestamp: event.target.value });
  }

  //when the convert button is pressed
  handleSubmit(event) {
    event.preventDefault();
    var timeString;

    let tsValue = document.getElementById("tsInput").value;

    if (!isNaN(parseInt(tsValue))) {
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
        this.setState({currentTime : new Date().toISOString()})
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div class="flex sm:flex-row flex-col w-full flex-wrap">
        <div class="margin-auto w-4/5 flex">
          <div
            id="timeConvertPane"
            class="w-full h-full p-10 flex flex-col sm:flex-row  flex-wrap content-start space-y-10"
            >
              
            <div class="w-full">
	      <label class="text-4xl w-full">Time Converter</label><br/>
              Convert time(nanoseconds/microseconds/miliseconds/seconds) to ISO
              time.
            </div>

            <div class="w-1/3 text-right relative">
	      <div class="w-3/5 right-0 absolute text-left">
              <label class="text-bold bg-blue-200 w-full">
                unix timestamp since{" "}
              </label>
                <input
                  id="tsInput"
                  type="text"
                  class="border-2 focus:ring-yellow-500 focus:ring-2 w-full"
                  onChange={this.handleChange}
                  />
		</div>
            </div>
	    <div class="w-1/6">
              <button class="hover:bg-blue-200 p-1 m-auto border-2 border-blue-200"  onClick={this.handleSubmit}>convert</button>
            </div>
            <div id="resultsPane" class="w-3/6 text-left">
              <label class="text-bold bg-yellow-200 w-full ">
                Possible Results:
              </label>
              <br />
              <div class="w-full border-2 border-blue-200 p-5">
                <label type="text">nanoseconds -> {this.state.nanoTime}</label>
                <br />
                <label type="text">
                  microseconds -> {this.state.microTime}
                </label>
                <br />
                <label type="text">
                  {" "}
                  miliseconds -> {this.state.miliTime}{" "}
                </label>
                <br />
                <label type="text"> seconds -> {this.state.secondTime} </label>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-blue-50 w-1/5 h-full p-5 h-screen">
          <br />
          <br />
          <table class="m-auto text-left"> 
            <tr>
              <th class="pr-6" >Time Zone</th> <th>Current UTC time</th>
            </tr>
            <tr>
              <th>GMT/UTC</th> <th>{this.state.currentTime}</th>
            </tr>
            <tr>
              <th>ECT</th> <th></th>
            </tr>
            <tr>
              <th>ECT</th> <th></th>
            </tr>
          </table>
            
        </div>
      </div>
    );
  }
}

export default timeConverter;
