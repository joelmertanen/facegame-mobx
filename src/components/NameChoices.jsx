import React from 'react';

const NameChoices = ({options, onRight, onWrong, correctPerson}) => {
  const buttons = options.map(option => {
    return <button
      key={option.name}
      onClick={ option.id === correctPerson ? onRight : onWrong }
      >{option.name}</button>;
  });

  return <div>{buttons}</div>;
};

NameChoices.propTypes = {
  options: React.PropTypes.array.isRequired,
  onRight: React.PropTypes.func.isRequired,
  onWrong: React.PropTypes.func.isRequired,
  correctPerson: React.PropTypes.string
};

export default NameChoices;
