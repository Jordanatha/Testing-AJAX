import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import HomeComponent from './components/home';
import AboutComponent from './components/about';
import TestComponent from './components/test';
import LayoutComponent from './components/layout';

class App extends Component {
  render() {
    return (
      <LayoutComponent/>
    );
  }
}

export default App;
