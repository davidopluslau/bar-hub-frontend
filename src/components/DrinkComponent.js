import React from 'react';

const DrinkComponent = props => {
  const {
    units,
    component_name,
    cost_contribution,
    alcohol_percentage,
    alcohol_contribution,
    display_units,
    display_type
  } = props;
  return (
      <div>
        <span>{display_units}</span>
        <span>{component_name}</span>
        <span>{alcohol_contribution}</span>
      </div>
  )
};

export default DrinkComponent;
