import React from 'react';
import { Route, Switch } from 'react-router-dom';
//If you want to have default component e.g.(NotFound page component),
//you have to import Switch which will render only the first found component.
//Then you have to wrap routes in <Switch></Switch>
//REMEMBER: DEFAULT ROUTE/COMPONENT HAS TO BE LAST ADDED!

//Add all components without header, footer etc..
import Home from './home/Home';
import Register from './user/RegisterForm';
import Login from './user/LoginForm';

//Route with no path - used for not found pages.
const AppRouter = () => (
    <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/" component={Home}/>
    </Switch>
);

export default AppRouter;