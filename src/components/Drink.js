import React from 'react';
import DrinkComponent from './DrinkComponent'

const Drink = props => {
  const {
    name,
    version,
      cost,
      alcohol,
      blurb,
      is_pour,
      drink_components
  } = props;
  return (
      <div>
        <div>
          <h2>{name}</h2>
          <span>{cost}</span>
        </div>
        <div>{blurb}</div>
        <div>
          <span>Ounces</span>
          <span>Ingredients</span>
          <span>mL Alcohol</span>
        </div>
        {drink_components.map((drinkComponent, i) => <DrinkComponent key={i} {...drinkComponent} />)}
      </div>
  )
};

export default Drink;
