import React from "react";
import { Switch, Route } from "react-router-dom";
import Box from "./components/Box/Box";
import Login from "./components/Login/Login";
import Donut from "./components/Donut/Donut";
import Toppings from "./components/Toppings/Toppings";
import Bag from "./components/Bag/Bag";

export default (
  <Switch>
    <Route exact path="/" component={Box} />
    <Route path="/login" component={Login} />
    <Route path="/donut" component={Donut} />
    <Route path="/donut/toppings" component={Toppings} />
    <Route path="/bag" component={Bag} />
  </Switch>
);
