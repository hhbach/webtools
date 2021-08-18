import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import keyboardModels from "./keyboardModels.jsx";



import KeyboardHowTos from "./keyboardHowTos.jsx"

class KeyboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div class="w-full flex flex-row">
                <Router>
                    <div class="w-1/4 bg-blue-100 h-full text-left p-5">
                        <label class="text-xl hover:underline"> <Link to="/keyboards/how"> How-tos </Link></label>
                        <ul class="list-outside list-disc ml-5">
                            <li class="hover:underline">wire/solder</li>
                            <li class="hover:underline">flash firmware</li>
                        </ul>
                        <hr></hr>
                        <label class="text-xl hover:underline"> <Link to="/keyboards/models">Designs</Link></label>
                        <ul class="list-inside list-dic ml-5">
                            <li class="hover:underline">Original prototype</li>
                            <li class="hover:underline">Prototype - V2 - reduced spring  </li>
                            <li class="hover:underline">Prototype - V3 - caseless  </li>
                            <li class="hover:underline">v4 - split </li>
                            <li class="hover:underline">v5 - split </li>
                            <li></li>

                        </ul>
                    </div >

                    <div class="w-3/4 bg-yellow-50 "><label class="text-4xl w-full">
                        Keyboards</label>
                        <hr></hr>
                        <Switch class="w-full h-full">
                            <Route path="/keyboards/models" component={keyboardModels}>
                            </Route>
                            <Route path="/keyboards/how" component={KeyboardHowTos}>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div >
        );
    }
}

export default KeyboardPage