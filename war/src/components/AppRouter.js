import React from 'react';
import { Route, Switch } from 'react-router-dom';
//If you want to have default component e.g.(NotFound page component),
//you have to import Switch which will render only the first found component.
//Then you have to wrap routes in <Switch></Switch>
//REMEMBER: DEFAULT ROUTE/COMPONENT HAS TO BE LAST ADDED!

//Add all components without header, footer etc..
import Logout from "./user/Logout";
import Login from './user/LoginForm';
import Register from './user/RegisterForm';
import BuildingsCivil from '../scenes/Buildings/Civil/BuildingsCivil';
import BuildingsMilitary from '../scenes/Buildings/Military/BuildingsMilitary';
import BuildingsHiTech from "../scenes/Buildings/Hi-Tech/BuildingsHiTech";
import TechnologiesCivil from "../scenes/Technologies/Civil/TechnologiesCivil";
import TechnologiesMilitary from "../scenes/Technologies/Military/TechnologiesMilitary";
import TechnologiesHiTech from "../scenes/Technologies/Hi-Tech/TechnologiesMilitary";
import Hire from "../scenes/Hire/Hire";

//Route with no path - used for not found pages.
const AppRouter = () => (
    <Switch>
        <Route path="/hire" component={Hire}/>
        <Route path="/technologies/hi-tech" component={TechnologiesHiTech}/>
        <Route path="/technologies/military" component={TechnologiesMilitary}/>
        <Route path="/technologies/civil" component={TechnologiesCivil}/>
        <Route path="/buildings/hi-tech" component={BuildingsHiTech}/>
        <Route path="/buildings/military" component={BuildingsMilitary}/>
        <Route path="/buildings/civil" component={BuildingsCivil}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/register" component={Register}/>
        <Route path="/" component={Login}/>
    </Switch>
);

export default AppRouter;