import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from '../containers/Login/login';
import EditUser from '../containers/editUser/editUser';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={()=> <Login/>}/>
                <Route exact path='/edit' render={()=> <EditUser/>}/>
                {/* <Route component={Login}/> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;