import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/news" component={News}/>
          <Route  component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
