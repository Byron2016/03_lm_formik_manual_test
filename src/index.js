import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import TicToc from "./components/tic_toc";
import NewsLetter from "./components/newsletter";

const Root = (
  <BrowserRouter>
    <Switch>
      <Route path="/tic_toc" component={TicToc} />
      <Route path="/newsletter" component={NewsLetter} />
      <Redirect from="/" to="/tic_toc" />
    </Switch>
  </BrowserRouter>
);

// ========================================

ReactDOM.render(Root, document.getElementById("root"));
