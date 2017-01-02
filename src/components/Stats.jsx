import React from 'react';
import { observer } from 'mobx-react';

function Stats({makingARecord, correctChoices}) {
  return <div>
    {correctChoices > 0 ? <div>{correctChoices} correct in a row!</div> : '' }
    {makingARecord ? <div>You are making a new record!</div> : ''}
  </div>;
}

Stats.propTypes = {
  makingARecord: React.PropTypes.bool,
  correctChoices: React.PropTypes.number
};

export default observer(Stats);
