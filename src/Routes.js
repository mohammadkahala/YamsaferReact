import React from "react";
import { Switch, Route } from "react-router-dom";
import ShoppingPage from "./client/components/ShoppingPage/ShoppingPage";
import RegistrationPage from "./client/components/RegistraionPage/RegistrationPage";
import NotFoundPage from "./client/components/NotFoundPage";

export default () => (
  <div>
    <Switch>
      <Route path="/" exact component={RegistrationPage}/>
      <Route path="/shopping" component={ShoppingPage}/>
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);