import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage/index';
import AboutPage from './pages/AboutPage/index';
import CampPage from './pages/CampPage/index';
import FaqPage from './pages/FaqPage/index';
import NewsPage from './pages/NewsPage/index';
import ContactPage from './pages/ContactPage/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/About" component={AboutPage} />
                <Route path="/Camp" component={CampPage} />
                <Route path="/FAQ" component={FaqPage} />
                <Route path="/News" component={NewsPage} />
                <Route path="/Contact" component={ContactPage} />
            </Switch>
        </ BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
