import React from 'react';
import { inject, observer } from 'mobx-react';
import MyComponent from './MyComponent';

@inject('store') @observer
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }
  render() {
    return (
      <div>
        <h2>Welcome to the {this.store.name} project.</h2>
        <h3>This project is {this.store.description}.</h3>
        <MyComponent store={this.store} />
      </div>
    );
  }
}


Game.propTypes = {
  store: React.PropTypes.object,
};

export default Game;
