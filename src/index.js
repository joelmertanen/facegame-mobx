import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';
import PeopleStore from './PeopleStore';
import Game from './components/Game';
import Main from './components/Main';
import { Provider } from 'mobx-react';
import { IndexRedirect, Router, Route } from 'react-router'
import { browserHistory } from 'react-router'

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

const Topten = () => <div></div>;

const stores = {
  store: new Store(),
  peopleStore: new PeopleStore()
};

ReactDOM.render((
  <Provider {...stores}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRedirect to="/game" />
        <Route path="game" component={Game} />
        <Route path="topten" component={Topten} />
      </Route>
    </Router>
  </Provider>
), document.querySelector('#app'))
