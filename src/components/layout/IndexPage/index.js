import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//imports de los componentes
import LoginForm from './../../content/LoginForm/LoginForm';
import Navbar from './../../content/NavbarIndex/Navbar';
import RegisterForm from '../../content/RegisterForm/RegisterForm';
import LeftAside from '../../content/LeftAside';

export default function IndexPage() {
    return (
        <div>
            <LeftAside/>
        </div>
    );
}

{/** 
        <div>
            
            <Navbar />
            <Switch>
                
                <Route exact path="/" component={LoginForm}>
                    
                    <LoginForm />
                </Route>
                
                <Route exact path="/register" component={RegisterForm}>
                    
                    <RegisterForm />
                </Route>
            </Switch>
        </div>
        */}