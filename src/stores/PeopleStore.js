import { observable, computed, action } from 'mobx';
import { sampleSize } from 'lodash';
import TomCruise from '../assets/tom_cruise.jpg';
import VinDiesel from '../assets/vin_diesel.jpg';
import AverageMan from '../assets/average_man.jpg';
import AverageWoman from '../assets/average_woman.jpg';
import Charles from '../assets/charles.jpg';

let allPeople = [{
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

class PeopleStore {
  @action nextRound() {
    this.peopleToGuess = sampleSize(allPeople, 4);
    this.correctPerson = this.peopleToGuess[0];
  }

  constructor() {
    allPeople = allPeople.map(person => {
      return {...person, id: Math.random().toString()};
    });

    this.nextRound();
  }
}

export default PeopleStore;
