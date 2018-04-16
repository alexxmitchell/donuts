import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Box from "./components/Box/Box";
import Login from "./components/Login/Login";
import Donut from "./components/Donut/Donut";
import Toppings from "./components/Toppings/Toppings";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/donut/toppings" component={Toppings} />
    <Route path="/donut" component={Donut} />
    <Route path="/box" component={Box} />
  </Switch>
);
