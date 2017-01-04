import { observable, computed, action } from 'mobx';
import { sampleSize } from 'lodash';

class Store {
  @observable playerName = 'Player 1';
  @observable correctChoices = 0;
  @observable topScore = 0;

  @computed get makingARecord() {
    return this.topScore > 0 && this.correctChoices >= this.topScore;
  }

  @action selectCorrect() {
    this.correctChoices++;
    this.topScore = Math.max(this.correctChoices, this.topScore);
  }

  @action selectWrong() {
    this.correctChoices = 0;
  }
}

export default Store;
