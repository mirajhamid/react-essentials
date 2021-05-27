import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import OurPractice from "./componenets/OurPractice";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <OurPractice />
  </Router>,
  document.getElementById("root")
);
