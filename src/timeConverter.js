import React from "react";
import ReactDOM from "react-dom";

class timeConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timestamp: "", nanoTime: "", microtime: "", militime: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertTime = this.convertTime.bind(this);
  }

  convertTime(timestamp) {
    let ts = timestamp;
    var date = new Date(ts);
    let timeString = date.toISOString();
    return timeString;
  }

  handleChange(event) {
    this.setState({ timestamp: event.target.value });
  }

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

  render() {
    return (
      <div class="flex flex-row w-full flex-wrap border-t-4 border-yellow-500">
        <div class="margin-auto w-4/5 relative flex flex-col">
          <div id="formatToggle" class="absolute top-0 right-0 p-5">
            <label
              for="toggle"
              class="text-xs text-gray-700"
              value="seconds EPOC to ISO "
            ></label>
            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label
                for="toggle"
                class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <label for="toggle" class="text-xs text-gray-700">
              ISO to EPOC seconds
            </label>
          </div>
          <div
            id="timeConvertPane"
            class="w-full p-10 space-y-6 flex flex-row flex-wrap"
          >
            <label class="text-4xl w-full">Time Converter</label>
            <br />
            Time since epoch can be given in a variety of ways: seconds,
            miliseconds, micro, or nano. This converter will take the time since
            epoch and calculate an ISO time for each type, whether it is
            sec/mili-sec/micro/nano. Other converters will force you know the
            type, but you don't want to do that...counting digits is a pain.
            Just insert a number and based on the results given here, it is
            easier to deduced what you were given.
            <br />
            <br />
            <div class="w-2/4 flex flex-col text-left relative">


		<form onSubmit={this.handleSubmit} class="flex flex-col  w-3/5 top-14 left-20 absolute">
		<label class="text-bold bg-blue-200 w-3/5"> unix timestamp since </label>
<div class="space-x-5">
                  <input
                    id="tsInput"
                    type="text"
                    class="border-2 focus:ring-yellow-500 focus:ring-2 w-3/5"
                    onChange={this.handleChange}
                    />
                  <input
                    type="submit"
                    value="Convert"
                    class="hover:bg-blue-200 p-1 absolute"
                    />
</div>
		</form>
            </div>
            <div id="resultsPane" class="flex flex-col w-2/4 text-left">
              <label class="text-bold bg-yellow-200 w-3/4"> Possible Results: </label>
              <br />
              <div class="w-3/4 border-2 border-blue-200 p-5">
                <label type="text" >
                  nanoseconds -> {this.state.nanoTime}
                </label>
                <br />
                <label type="text" >
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
          in works...when done this will visually show the time for each time
          zone
          <br />
          <br />
          GMT/UTC <br /> ECT <br /> EET <br />
        </div>
      </div>
    );
  }
}

export default timeConverter;
