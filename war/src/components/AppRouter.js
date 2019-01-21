import React from 'react';
import { Route, Switch } from 'react-router-dom';
//If you want to have default component e.g.(NotFound page component),
//you have to import Switch which will render only the first found component.
//Then you have to wrap routes in <Switch></Switch>
//REMEMBER: DEFAULT ROUTE/COMPONENT HAS TO BE LAST ADDED!

//Add all components without header, footer etc..
import TechnologiesCivil from "./technologies/TechnologiesCivil";
import BuildingsHiTech from "./buildings/BuildingsHiTech";
import BuildingsMilitary from './buildings/BuildingsMilitary'
import BuildingsCivil from './buildings/BuildingsCivil';
import Register from './user/RegisterForm';
import Login from './user/LoginForm';
import Logout from "./user/Logout";


//Route with no path - used for not found pages.
const AppRouter = () => (
    <Switch>
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