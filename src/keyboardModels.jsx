import React from "react";
import ReactDOM from "react-dom";


class keyboardModels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div class="w-full flex flex-col">
                <label class="m-auto text-xl p-5">Design history</label>
                <div> Prototype 1</div>
                <div> prototype 2</div>
                <div> prototype 3</div>
            </div>

        );
    }
}

export default keyboardModels