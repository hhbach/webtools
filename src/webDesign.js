import React from "react";
import ReactDOM from "react-dom";

class webDesigns extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
	<div class="flex flex-col w-full p-5 space-y-10">
	  <div >
	    <label class="text-2xl">Web Designs</label>
	    <br />
	    intuitive - robust - designs 
	    <hr/>
	  </div>
	  <div id="sampleSketchups" class="text-center w-full">
	    <div class="text-center text-xl">sample sketchups</div>
	    <table class="w-2/3 m-auto text-left">
	      <tr>
		<th>Link</th>
		<th>Description</th>
		<th>Stack</th>
	      </tr>
	      <tr class="bg-yellow-200">
		<th>Linking coming soon</th>
		<th>Sample of very bad sites</th>
		<th>NA</th>
	      </tr>
	    </table>
	  </div>
	  <div id="projectList" class="text-center w-full">
	    <div class="text-center">Previous Projects</div>
	    <table class="p-2 table-auto w-2/3 m-auto text-left font-thin">
	      <tr class="p-4">
		<th> Project Name </th>
		<th> description </th>
		<th> webstack </th>
	      </tr>
	      <tr class="bg-blue-200">
		<th> This site </th>
		<th> Collections of all my work in one place </th>
		<th> react/tailwindCSS/node/mongo </th>
	      </tr>
	      <tr class="bg-blue-50">
		<th> Pho Chandler </th>
		<th> family restaurant web design </th>
		<th> boostrap/javascript/jquery/css </th>
	      </tr>
	      
	    </table>
	  </div>
	</div>
    );
  }
}

export default webDesigns;
