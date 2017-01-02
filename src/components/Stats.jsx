import React from 'react';
import { observer } from 'mobx-react';

function Stats({makingARecord, correctChoices}) {
  return <div>Stats: {makingARecord}, {correctChoices}</div>;
}

Stats.propTypes = {
  makingARecord: React.PropTypes.bool,
  correctChoices: React.PropTypes.number
};

export default observer(Stats);
