import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../pages/Home';
import About from './../pages/About';
import Photos from './../pages/Photos';
import Live from './../pages/Live';
import Contact from './../pages/Contact';
import NotFound from './../pages/NotFound';

const MainContent = () =>( 
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/photos" component={Photos} />
      <Route path="/live" component={Live} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
    </main>
  )

  export default MainContent;

