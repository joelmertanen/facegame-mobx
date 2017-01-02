import { observable, computed, action } from 'mobx';
import { sampleSize } from 'lodash';
import TomCruise from './assets/tom_cruise.jpg';
import VinDiesel from './assets/vin_diesel.jpg';
import AverageMan from './assets/average_man.jpg';
import AverageWoman from './assets/average_woman.jpg';
import Charles from './assets/charles.jpg';

class Store {
  @observable playerName = 'Player 1';
  @observable correctChoices = 0;
  @observable topScore = 0;

  @computed get makingARecord() {
    return this.correctChoices > this.topScore;
  }

  @action selectCorrect() {
    this.correctChoices++;
  }

  @action selectWrong() {
    this.correctChoices = 0;
  }
}

export default Store;
