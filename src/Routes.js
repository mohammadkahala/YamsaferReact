import React from "react";
import { Route } from "react-router-dom";
import ShoppingPage from "./client/components/ShoppingPage/ShoppingPage";
import RegistrationPage from "./client/components/LogInPage/RegistrationPage";

export default () => (
  <div>
    <Route path="/" exact component={RegistrationPage}/>
    <Route path="/shopping" component={ShoppingPage}/>
  </div>
);