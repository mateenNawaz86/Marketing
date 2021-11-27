import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Intro from "./components/Bio/Intro";

const App = () => {
  return (
    <Router>
      <Intro />
    </Router>
  );
};

export default App;
