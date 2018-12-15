import React from 'react';
import {Switch,Route} from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";

const Router = () => (
    <Switch>
        <Route exact path="/"          component={Home} />
        <Route exact path="/login"     component={Login}/>
    </Switch>
);

export default Router;