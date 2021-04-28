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
	  <div className="App">
	    <h1>Daves landing page </h1>
            Below are apps/tools/website that might be useful, fun, or just plain experimental
            Use at your own discretion. In the words of any open source projects, this page comes
            with NO warantees.
	    
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>


            <Switch>
              <Route exact path="/">
		<Home />
              </Route>
              <Route path="/about">
		<About />
              </Route>
            </Switch>
	  </div>
	</Router>
    );
}
export default App;
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
