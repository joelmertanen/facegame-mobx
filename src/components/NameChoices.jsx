import React from 'react';

const NameChoices = () => {

  return <div></div>;
};

NameChoices.propTypes = {
  options: React.PropTypes.array.isRequired,
  onRight: React.PropTypes.func.isRequired,
  onWrong: React.PropTypes.func.isRequired
};

export default NameChoices;
