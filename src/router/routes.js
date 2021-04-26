import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from '../containers/Login/login';
import ClienteIndex from '../containers/Cliente/index';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={()=> <Login/>}/>
                
                {/* <Route component={Login}/> */}
                <Route exact path='/cliente' render={()=> <ClienteIndex/>}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;