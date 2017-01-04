import React from 'react';
import NameChoices from './NameChoices';
import Stats from './Stats';

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

Game.propTypes = {
  peopleStore: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired
};

export default Game;
