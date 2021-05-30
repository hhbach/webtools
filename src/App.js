import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TimeConverter from "./timeConverter.js";
import Home from "./home.js";
import WebDesigns from "./webDesign.js";

function App() {
  return (
    <Router>
      <header></header>
      <body>
        <nav class="flex flex-row md:flex-row justify-between font-semibold w-full bg-gray-500 border-b-4 border-yellow-200">
          <Link class="pl-3 pt-1 pb-2 flex-col" to="/">
	    <div class="items-center h-full w-full text-center  ">
	      <label class="text-2xl text-yellow-400 ">BachsCollections</label>
	    <div class="text-s mr-0 bg-white hover:bg-yellow-200">
	      afterwork-projects  
	    </div>
	    </div>
	  </Link>
          <div class="space-x-5 p-5">
            <Link class="text-blue-50 hover:underline" to="/">
              Home
            </Link>
            <span class="sr-only">(current)</span>
            <Link
              to="/timeConverter"
              class="text-blue-50 hover:underline transition duration-500"
            >
              Time Converter
            </Link>
          </div>
        </nav>
        <div class="h-full text-center w-full flow-hidden">
          <Switch class="h-full">
            <Route exact path="/">
              <Home class="h-full"/>
            </Route>
            <Route path="/timeConverter">
              <TimeConverter />
            </Route>
	    <Route path="/webDesigns">
              <WebDesigns />
            </Route>
          </Switch>
        </div>
      </body>
    </Router>
  );
}
export default App;
