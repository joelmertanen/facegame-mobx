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

const initStore = () => {
  return {
    selectCorrect: () => {},
    selectWrong: () => {}
  };
};

describe('Game components', () => {
  describe('onRight', () => {
    it('calls the store', () => {
      let mock = initStore();
      const spy = sinon.mock(mock);
      spy.expects("selectCorrect").once();

      const d = shallow(
        <Game store={mock} peopleStore={initPeopleStore()}></Game>
      );
      d.instance().onRight();
      spy.verify();
    });

    it('sets the state', () => {
      let mock = initStore();
      const d = shallow(
        <Game store={mock} peopleStore={initPeopleStore()}></Game>
      );
      d.instance().onRight();
      expect(d.state()).toEqual({correct: true});
    });

    it('calls delayed next round', () => {
      let mock = initStore();
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

  describe('onWrong', () => {
    it('calls the store', () => {
      let mock = initStore();
      const spy = sinon.mock(mock);
      spy.expects("selectWrong").once();

      const d = shallow(
        <Game store={mock} peopleStore={initPeopleStore()}></Game>
      );
      d.instance().onWrong();
      spy.verify();
    });

    it('sets the state', () => {
      let mock = initStore();
      const d = shallow(
        <Game store={mock} peopleStore={initPeopleStore()}></Game>
      );
      d.instance().onWrong();
      expect(d.state()).toEqual({incorrect: true});
    });

    it('calls delayed next round', () => {
      let mock = initStore();
      let pplStore = initPeopleStore();
      const spy = sinon.mock(pplStore);
      spy.expects("nextRound").once();

      const d = shallow(
        <Game store={mock} peopleStore={pplStore}></Game>
      );
      d.instance().onWrong();
      jest.runAllTimers();
      spy.verify();
    });
  });

  describe('render', () => {
    let element;
    beforeEach(() => {
      element = shallow(
        <Game store={initStore()} peopleStore={initPeopleStore()}></Game>
      );
    });

    it('renders img', () => {
      expect(element.find('img').length).toEqual(1);
      expect(element.find('img').props().src).toEqual('abba');
    });

    it('renders NameChoices', () => {
      const node = element.find('NameChoices');
      expect(node.length).toEqual(1);
      expect(node.props().options).toEqual(initPeopleStore().peopleToGuess);
      expect(node.props().correctPerson).toEqual(initPeopleStore().correctPerson.id);
    });

    it('renders Stats', () => {
      expect(element.find('Stats').length).toEqual(1);
    });
  });

});
