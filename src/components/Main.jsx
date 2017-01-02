import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div className='navigation'>
        <h1>Facegame</h1>
        <ul>
          <li><Link to="/game">Play</Link></li>
          <li><Link to="/topten">Top ten</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

export default Main;
