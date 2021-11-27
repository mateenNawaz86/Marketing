import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Intro from "./components/Bio/Intro";
import Pricing from "./components/Pricing/Pricing";
import Service from "./components/Services/Service";

const App = () => {
  return (
    <Router>
      <Intro />
      <Service />
      <Pricing />
    </Router>
  );
};

export default App;
