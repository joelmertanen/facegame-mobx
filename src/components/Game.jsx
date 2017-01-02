import React from 'react';
import { inject, observer } from 'mobx-react';
import NameChoices from './NameChoices';
import Stats from './Stats';

@inject('store') @observer
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }

  render() {
    return (
      <div>
        <img style={ { width: '150px' } } src={this.store.correctPerson.url} />
        <NameChoices
          options={this.store.peopleToGuess}
          correctPerson={this.store.correctPerson.id}
          onRight={this.store.selectCorrect.bind(this.store)}
          onWrong={this.store.selectWrong.bind(this.store)}
          />
        <Stats
          makingARecord={this.store.makingARecord}
          correctChoices={this.store.correctChoices}
          />
      </div>
    );
  }
}

Game.propTypes = {
  store: React.PropTypes.object,
};

export default Game;
