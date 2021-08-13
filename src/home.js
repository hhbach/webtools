import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import timeConverter from "./timeConverter.js";
import webDesigns from "./webDesign.js";

function Home() {
  return (
      <div
        id="menu"
        class="content-start flex flex-row flex-wrap h-full justify-center bg-white"
      >
        <div class="p-10 h-1/3 p-5 text-2xl flex flex-row justify-center contents-center space-x-5 w-full">
          <img
            src="https://image.freepik.com/free-vector/time-zones-abstract-concept_335657-3079.jpg"
            width="200"
            height="200"
          />
          <label class="m-auto"> NEW! time Converter! </label>
        </div>
        <div class="justify-around flex flex-row w-full h-full p-5">
          <div class="w-1/3 h-1/4 bg-blue-200 m-5">
            <div class="text-xl border-blue-200 border-2 bg-white">
              web-tools/utils
            </div>
            <ul class="p-3 text-left">
              <li>
                <Link
                  to="/timeConverter"
                  class="underline hover:text-yellow-500 transition duration-500"
                >
                  Time Converter
                </Link>
              </li>
            </ul>
          </div>
          <div class="w-1/3 h-1/4 bg-blue-100 m-5">
            <div class="text-xl border-blue-200 border-2 bg-white ">
              studies
            </div>
            <ul class="p-3 text-left">
              <li>
                <Link to="/webDesigns" class="underline hover:text-yellow-500">
                  Web Designs
                </Link>
              </li>
              <li>C++ projects</li>
            </ul>
          </div>
          <div class="w-1/3 h-1/4 bg-blue-200 m-5">
            <div class="text-xl bg-white border-blue-200 border-2 text-center">
              hobbies
            </div>
            <ul class="p-3 text-left">
              <li>Keyboard</li>
              <li>Photography</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Home;
