import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from '../containers/Login/login';
import ClienteIndex from '../containers/Cliente/index';
import Articulos from '../containers/Articulos/articulos';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={()=> <Login/>}/>
                
                {/* <Route component={Login}/> */}
                <Route exact path='/cliente' render={()=> <ClienteIndex/>}/>
                <Route exact path='/articulos' render={()=> <Articulos/>}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;