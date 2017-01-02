import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';
import Game from './components/Game';
import { Provider } from 'mobx-react';
import { IndexRedirect, Router, Route, Link } from 'react-router'
import { browserHistory } from 'react-router'

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

const store = new Store();

// ReactDOM.render(
//   <App store={store} />,
//   document.querySelector('#app')
// );

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>Facegame</h1>
        <ul>
          <li><Link to="/game">Play</Link></li>
          <li><Link to="/topten">Topten</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

const Topten = () => <div></div>;

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRedirect to="/game" />
        <Route path="game" component={Game} />
        <Route path="topten" component={Topten} />
      </Route>
    </Router>
  </Provider>
), document.querySelector('#app'))
