import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <div class="row">
          <Link class="col-6" to="/">Home</Link>
          <Link class="col-6" to="/otherpage">Other Page</Link>
        </div>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React, Docker, ElasticBeanStalk, Travis CI
          </a>
        </header>
        <p>Deployed multiple docker containers on AWS ElasticBeanStalk, from GitHub to Travis CI, to Docker Hub then to AWS EB</p>
      </div>
    </Router>
  );
}

export default App;
