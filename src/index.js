import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage} />
            </Switch>
        </ BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
