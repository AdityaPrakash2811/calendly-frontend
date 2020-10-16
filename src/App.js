import React from 'react';
import './App.css';
import Schedule from './pages/schedule';
import Home from './pages/home';
import docDetails from './pages/docDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import getPatients from './pages/getPatients';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/docDetails' component={docDetails} />
          <Route path='/getPatients' component={getPatients} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;







/*<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>*/ 