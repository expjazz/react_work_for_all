import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import UserPage from '../pages/users/UserPage';
import Curriculum from '../pages/users/Curriculum';
import CompanySignUp from '../pages/CompanySignUp';

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
        <Route path="/companysignup">
          <CompanySignUp />
        </Route>
        <Route path="/users/user">
          <UserPage />
        </Route>

      </Switch>
    </>
  );
}
