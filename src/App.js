import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TimeConverter from "./timeConverter.js";
import Home from "./home.js";
import WebDesigns from "./webDesign.js";

function App() {
  return (
    <Router>
      <header></header>
      <body class="bg-gradient-to-b from-yellow-100 to-white h-full">
        <nav class="bg-gray-500 border-yellow-200 border-b-4">
          <div class="flex flex-row justify-between font-semibold m-auto" style={{ width: "1366px" }}>
            <Link class="" to="/">
              <div class="items-center h-full text-center pl-2 ">
                <label class="text-2xl text-yellow-400 ">BachsCollections</label>
                <div class="text-s mr-0 bg-white hover:bg-yellow-200">
                  afterwork-projects
                </div>
              </div>
            </Link>
            <div class="space-x-5 p-5 pr-5">
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
          </div>
        </nav>
        <div class="text-center m-auto" style={{ width: "1366px" }}>
          <Switch class="h-full">
            <Route exact path="/">
              <Home />
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
