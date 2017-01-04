import { Provider } from 'mobx-react';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Game from '../components/Game.jsx';
import sinon from 'sinon';

jest.useFakeTimers();

const initPeopleStore = () => {
  return {
    peopleToGuess: [
      {
        id: '1',
        url: 'abba'
      }
    ],
    correctPerson: {
      id: '2',
      url: 'abba'
    },
    nextRound: () => {}
  }
};

describe('Game components', () => {
  describe('onRight', () => {
    it('calls the store', () => {
      let mock = {selectCorrect: () => {}};
      const spy = sinon.mock(mock);
      spy.expects("selectCorrect").once();

      const d = shallow(
        <Game store={mock} peopleStore={initPeopleStore()}></Game>
      );
      d.instance().onRight();
      spy.verify();
    });

    it('sets the state', () => {
      let mock = {selectCorrect: () => {}};
      const d = shallow(
        <Game store={mock} peopleStore={initPeopleStore()}></Game>
      );
      d.instance().onRight();
      expect(d.state()).toEqual({correct: true});
    });

    it('calls delayed next round', () => {
      let mock = {selectCorrect: () => {}};
      let pplStore = initPeopleStore();
      const spy = sinon.mock(pplStore);
      spy.expects("nextRound").once();

      const d = shallow(
        <Game store={mock} peopleStore={pplStore}></Game>
      );
      d.instance().onRight();
      jest.runAllTimers();
      spy.verify();
    });

  });

});
