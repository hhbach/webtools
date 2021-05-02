import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
    return (
	    <Router>
	    <header>
	    	  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>
	    </header>
	    <body>
	    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
	    </button>
	    <Link class="nav-link" to="/">Home</Link><span class="sr-only">(current)</span>
	    <Link class="nav-link" to="/timeConverter">Time Converter</Link>
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
function Home() {
  return (
    <div>
	    <h1>Daves landing page </h1>
            Below are apps/tools/website that might be useful, fun, or just plain experimental
            Use at your own discretion. In the words of any open source projects, this page comes
            with NO warantees.
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>Time Converter</h2>
    </div>
  );
}
