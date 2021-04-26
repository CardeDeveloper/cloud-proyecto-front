import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from '../containers/Login/login';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={()=> <Login/>}/>
                {/* <Route component={Login}/> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;