import { observable, computed, action } from 'mobx';
import { sampleSize } from 'lodash';
import TomCruise from './assets/tom_cruise.jpg';
import VinDiesel from './assets/vin_diesel.jpg';
import AverageMan from './assets/average_man.jpg';
import AverageWoman from './assets/average_woman.jpg';
import Charles from './assets/charles.jpg';

class PeopleStore {
  allPeople = [{
    name: 'Tom',
    url: TomCruise
  }, {
    name: 'Vin',
    url: VinDiesel
  }, {
    name: 'Bob',
    url: AverageMan
  }, {
    name: 'Charles',
    url: Charles
  }, {
    name: 'Ann',
    url: AverageWoman
  }];

  @action nextRound() {
    this.peopleToGuess = sampleSize(this.allPeople, 4);
    this.correctPerson = this.peopleToGuess[0];
  }

  constructor() {
    this.allPeople = this.allPeople.map(person => {
      return {...person, id: Math.random().toString()};
    });
    this.nextRound();
  }
}

export default PeopleStore;