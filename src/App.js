import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './timeConverter.js';
import Home from './home.js';

function App() {
    return (
	    <Router>
	    <header>
	    </header>
	    <body>
	      <nav class="flex flex-col md:flex-row justify-between font-semibold w-full bg-blue-900">
		<div></div>
		<div class="space-x-5 p-5">
 		  <Link class="text-blue-50 hover:underline" to="/">Home</Link><span class="sr-only">(current)</span>
		  <Link class="nav-link" to="/timeConverter" class="text-blue-50 hover:underline transition duration-500">Time Converter</Link>
		</div>
	      </nav>
	      <div className="App">
		<Switch>
		  <Route exact path="/">
		    <Home />
		  </Route>
		  <Route path="/timeConverter">
		    <About />
		  </Route>
		</Switch>
	      </div>
	    </body>
	    </Router>
	
    );
}
export default App;


