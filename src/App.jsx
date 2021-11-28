import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Intro from "./components/Bio/Intro";
import News from "./components/News/News";
import Pricing from "./components/Pricing/Pricing";
import Service from "./components/Services/Service";

const App = () => {
  return (
    <Router>
      <Intro />
      <Service />
      <Pricing />
      <News />
    </Router>
  );
};

export default App;
