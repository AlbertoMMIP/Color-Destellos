import React from 'react';
import {Switch,Route} from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Stylists from "./components/admin/Stylists";
import Agenda from "./components/stylist/Agenda";
import Techniques from "./components/admin/Techniques";
import Appoitment from "./components/appoitment/Appoitment";

const Router = () => (
    <Switch>
        <Route exact path="/"           component={Home} />
        <Route exact path="/login"      component={Login}/>
        <Route exact path="/stylists"   component={Stylists} />
        <Route exact path="/agenda"     component={Agenda} />
        <Route exact path="/techniques" component={Techniques}/>
        <Route exact path="/appoitment" component={Appoitment} />
    </Switch>
);

export default Router;