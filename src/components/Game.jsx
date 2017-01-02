import React from 'react';
import { inject, observer } from 'mobx-react';
import NameChoices from './NameChoices';
import Stats from './Stats';

@inject('store') @inject('peopleStore') @observer
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = props.store;
    this.peopleStore = props.peopleStore;
  }

  onRight() {
    this.store.selectCorrect();
    this.setState({correct: true});
    this.delayedNextRound();
  }

  onWrong() {
    this.store.selectWrong();
    this.setState({incorrect: true});
    this.delayedNextRound();
  }

  delayedNextRound() {
    setTimeout(() => {
      this.peopleStore.nextRound();
      this.setState({});
    }, 1000);
  }

  render() {
    let className = '';
    if (this.state.incorrect) {
      className = 'incorrect';
    } else if (this.state.correct) {
      className = 'correct';
    }
    return (
      <div className={className}>
        <img style={ { width: '250px' } } src={this.peopleStore.correctPerson.url} />
        <NameChoices
          options={this.peopleStore.peopleToGuess}
          correctPerson={this.peopleStore.correctPerson.id}
          onRight={this.onRight.bind(this)}
          onWrong={this.onWrong.bind(this)}
          />
        <Stats
          makingARecord={this.store.makingARecord}
          correctChoices={this.store.correctChoices}
          />
      </div>
    );
  }
}

export default Game;
