import React from 'react';
import {Switch,Route} from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Stylists from "./components/admin/Stylists";
import Agenda from "./components/stylist/Agenda";
import Techniques from "./components/admin/Techniques";
import Appointment from "./components/appoitment/Appointment";

const Router = () => (
    <Switch>
        <Route exact path="/"           component={Home} />
        <Route exact path="/login"      component={Login}/>
        <Route exact path="/stylists"   component={Stylists} />
        <Route exact path="/agenda"     component={Agenda} />
        <Route exact path="/techniques" component={Techniques}/>
        <Route exact path="/appointment" component={Appointment} />
    </Switch>
);

export default Router;