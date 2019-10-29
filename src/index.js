import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import AutorBox from './Autor';
import Home from './Home';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/autor" component={AutorBox} />
        <Route path="/livro" />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
