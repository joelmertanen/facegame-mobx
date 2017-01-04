import React from 'react';
import { inject, observer } from 'mobx-react';
import NameChoices from './NameChoices';
import Stats from './Stats';
import Game from './Game';

@inject('store') @inject('peopleStore') @observer
class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
    this.peopleStore = props.peopleStore;
  }

  render() {
    return (
      <Game peopleStore={this.peopleStore} store={this.store}></Game>
    );
  }
}

export default GameContainer;
