import React from 'react';
import { inject, observer } from 'mobx-react';
import NameChoices from './NameChoices';
import averageFace from '../assets/average_woman.jpg';
import Stats from './Stats';

@inject('store') @observer
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }

  render() {
    console.log(this.store.peopleToGuess);
    return (
      <div>
        <img style={ { width: '150px' } } src={averageFace} />
        <NameChoices
          options={this.store.peopleToGuess}
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
