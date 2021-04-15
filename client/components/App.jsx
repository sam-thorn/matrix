import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Matrix from "./Matrix";
import Bustblocker from "./Bustblocker";

function App() {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/matrix' component={Matrix} />
      <Route path='/bustblocker' component={Bustblocker} />
    </div>
  );
}

export default App;
