import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import TicToc from "./components/tic_toc";


const Root = (
  <BrowserRouter>
    <Switch>
      <Route path="/tic_toc" component={TicToc} />

      <Redirect from="/" to="/tic_toc" />
    </Switch>
  </BrowserRouter>
);

// ========================================

ReactDOM.render(Root, document.getElementById("root"));
