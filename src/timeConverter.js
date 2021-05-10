import React from 'react'
import ReactDOM from 'react-dom';



class timeConverter extends React.Component {
    constructor(props){
	super(props);
	this.state = {timestamp: '',
		      nanoTime: '',
		      microtime: '',
		      militime: '',
		     }

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.convertTime = this.convertTime.bind(this)
    }
    
    convertTime(timestamp){
	let ts = timestamp;
        var date = new Date(ts);
	let timeString = date.toISOString();
	return timeString;
    }
    
    handleChange(event) {
	this.setState({timestamp: event.target.value});
    }

    handleSubmit(event) {
	event.preventDefault();
	var timeString;

	let tsValue = document.getElementById('tsInput').value;
	
	if(!isNaN(parseInt(tsValue))){
	    this.setState({nanoTime : this.convertTime(Math.floor(tsValue/1000000))});
	    this.setState({microTime : this.convertTime(Math.floor(tsValue/1000))});
	    this.setState({miliTime : this.convertTime(Math.floor(tsValue))});
	
	    if(tsValue < 8640000000000){
		this.setState({secondTime : this.convertTime(tsValue*1000)});
	    }
	    else {this.setState({secondTime : "out of range"});}
	}
    }


	

    render() {
	return (
	    <div class="flex flex-row w-screen flex-wrap">


	      <div class="flex flex-row w-4/5 p-10 align-center">
		<div id="timeConvertPane">
		  <label class="text-4xl w-4/5">Time Converter</label>
		  <br></br>
		<label id="ERLabel" class="hidden">error message </label>
		<div>
		  <form onSubmit={this.handleSubmit} class="space-x-4">
		    <input id="tsInput"
			   type="text"
			   class="border-2 focus:ring-yellow-500 focus:ring-2"
			   onChange={this.handleChange}/>
		    <input type="submit" value="submit"/>
		  </form>
		</div>
		<br/>
		<div id="resultsPane" class="flex flex-col">
		  <div>
		    <label type="text" class="bg-blue-50"> nanoseconds -> {this.state.nanoTime} </label>
                  </div>
                    <label type="text"> microseconds -> {this.state.microTime} </label>
                    <br/>
                    <label type="text"> miliseconds -> {this.state.miliTime} </label>
                    <br/>
           	    <label type="text"> seconds -> {this.state.secondTime} </label>
	            <br/> 
                  </div>
                </div>

</div>
	      <div class=" bg-blue-50 w-1/5 h-screen float" > hello
	      </div>
	    </div>
	);
    };

}



export default timeConverter;
