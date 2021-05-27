import "../css/App.css";

//This is for routing
import { Routes, Route } from "react-router-dom";
//Importing functions
import { Home, Colors, Blue, Red, NotFound } from "./Pages.js";
//Importing component
import App from "./App.js";

function OurPractice(props) {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<App authorized={true} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/colors" element={<Colors />}>
            <Route path="red" element={<Red />} />
            <Route path="blue" element={<Blue />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default OurPractice;
