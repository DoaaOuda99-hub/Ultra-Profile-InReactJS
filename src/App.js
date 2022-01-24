import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Contact from './components/Contact';

import Navbar from './components/Nanvbar';

import Index from './components/Index';

 class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Navbar/>
        <Route path = "/" exact component={Index} />
        <Route path="/contact" exact component ={Contact} />
        </BrowserRouter>

    )
  }
}
export default App;