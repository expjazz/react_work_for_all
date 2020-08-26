import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import UserDivider from '../pages/userDivider/UserDivider';
import CompanySignUp from '../pages/CompanySignUp';
import Login from '../pages/Login';

export default function RouteFile() {
  return (
    <>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/companysignup">
          <CompanySignUp />
        </Route>
        <Route path="/users/user">
          <UserDivider />
        </Route>

      </Switch>
    </>
  );
}
