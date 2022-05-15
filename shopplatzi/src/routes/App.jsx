import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from "@containers/Layout";
import Home from "@pages/Home";
import Login from "@pages/Login";
import RecoveryPasaword from "@pages/RecoveryPassword";
import SendEmail from "@pages/SendEmail";
import NewPassword from "@pages/NewPassword";
import MyAccount from "@pages/MyAccount";
import CreateAccount from "@pages/CreateAccount";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";
import NotFound from "@pages/NotFound";
import AppContext from "@context/AppContext";
import useInicialState from "../hooks/useInicialState";

import '../styles/global.css';


const App = () => {
    const inicialState = useInicialState();
    return (
        <AppContext.Provider value={inicialState} >
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/recovery-password" component={RecoveryPasaword} />
                        <Route exact path="/send-email" component={SendEmail} />
                        <Route exact path="/new-password" component={NewPassword} />
                        <Route exact path="/my-account" component={MyAccount} />
                        <Route exact path="/create-account" component={CreateAccount} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route ecact pacth="/orders" component={Orders} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App