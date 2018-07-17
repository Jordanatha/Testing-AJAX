import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import HomeComponent from './home';
import AboutComponent from './about';
import TestComponent from './test';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state={
            meta:"haha"
        }
    }
  render() {
    return (
        <div>
            <meta name="description" content={this.state.meta}/>
            <div>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/tests">Tests</Link>
                </li>
                </ul>

                <hr />
                <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route path="/about" component={AboutComponent} />
                <Route path="/tests" component={TestComponent} />
                <Redirect to = "/" />
                </Switch>
            </div>
      </div>
    );
  }
}

export default App;
