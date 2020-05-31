import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage/index';
import AboutPage from './pages/AboutPage/index';
import MaterialPage from './pages/MaterialPage/index';
import CampPage from './pages/CampPage/index';
import FaqPage from './pages/FaqPage/index';
import NewsPage from './pages/NewsPage/index';
import ContactPage from './pages/ContactPage/index';
import ContestPage from './pages/ContestPage/index';
import LessonPage from './pages/LessonPage/index';
import WallpaperImage from './images/wallpaper.png'

import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router'

// Insert some metadata to the site, to create link previews

function createOgMetaTag(name, content) {
	const meta = document.createElement('meta')
	meta.setAttribute('property', `og:${name}`)
	meta.setAttribute('content', content)
	console.log(meta)
	console.log(document.querySelector('head'))
	document.querySelector('head').appendChild(meta)
}

createOgMetaTag('locale', 'pt_BR')
createOgMetaTag('site_name', 'Grupo de Estudos para Maratona de Programação')
createOgMetaTag('image', `gema.icmc.usp.br${WallpaperImage}`)

function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/About" component={AboutPage}/>
                <Route exact path="/Material" component={MaterialPage}/>
                <Route exact path="/Material/Aula/:title" component={LessonPage}/>
                <Route exact path="/Camp" component={CampPage} />
                <Route exact path="/FAQ" component={FaqPage} />
                <Route exact path="/News" component={NewsPage} />
                <Route exact path="/Contact" component={ContactPage} />
                <Route exact path="/Contest" component={ContestPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </ BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
