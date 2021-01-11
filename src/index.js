// Clear DevTool [HMR] messages:
import {setLogLevel} from "webpack/hot/log";
setLogLevel("error");

// Sass:
import "./sass/main.scss";

//React:
import React from "react";
import ReactDOM from "react-dom";

// App:
import App from "./react/App.js"

const a = 'hello';

ReactDOM.render(<App />,document.getElementById("root"));


module.hot.accept();