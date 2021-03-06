import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
//import Tetris from "./components/tetris";
import Home from "./views/home";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <Tetris boardWidth="14" boardHeight="20" />,
  <Home />,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
