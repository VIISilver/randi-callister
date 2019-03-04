import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Blog from './components/blog/Blog.js';
import Contact from './components/contact/Contact.js';
import Shop from './components/shop/Shop.js';

export default (
    <HashRouter>
        <div>
            <Route component={Home} exact path='/' />
            <Route component={About} path='/about' />
            <Route component={Blog} path='/blog' />
            <Route component={Contact} path='/contact' />
            <Route component={Shop} path='/shop' />
        </div>
    </HashRouter>
)