import React from "react";
import { render } from "react-dom";

import Logo from "./logo.svg";

const App = () => (
  <div>
    <h1>Logo</h1>
    <Logo />
  </div>
);

// const root = document.createElement("div");
// document.body.appendChild(root);
render(<App />, document.body);
