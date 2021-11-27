import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Intro from "./components/Bio/Intro";
import Service from "./components/Services/Service";

const App = () => {
  return (
    <Router>
      <Intro />
      <Service />
    </Router>
  );
};

export default App;
