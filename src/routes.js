import React from "react";
import { Switch, Route } from "react-router-dom";
import { RouteTransition } from "react-router-transition";
import Landing from "./components/Landing/Landing";
import Box from "./components/Box/Box";
import Logout from "./components/Logout/Logout";
import Donut from "./components/Donut/Donut";
import Toppings from "./components/Toppings/Toppings";
import Order from "./components/Order/Order";
import Profile from "./components/Profile/Profile";

export default (
  <Route
    render={({ location }) => (
      // <PageTransition timeout={500}>
      <Switch location={location}>
        <Route exact path="/" component={Landing} />
        <Route path="/logout" component={Logout} />
        <Route path="/donut/toppings" component={Toppings} />
        <Route path="/donut" component={Donut} />
        <Route path="/box" component={Box} />
        <Route path="/order" component={Order} />
        <Route path="/profile" component={Profile} />
      </Switch>
      // </PageTransition>
    )}
  />
);
