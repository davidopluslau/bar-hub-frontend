import React from 'react';
import DrinkComponent from './DrinkComponent'
import './Drink.css'

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
      <div className="drink">
        <div>
          <h2 className="drink-name">{name}</h2>
          <span className="drink-price">{cost}</span>
        </div>
        <div className="drink-desc">{blurb}</div>
        <div className = "drink-info">
          <span className = "ounces">Ounces</span>
          <span className = "ingredients">Ingredients</span>
          <span className = "millilters">mL Alcohol</span>
        </div>
        {drink_components.map((drinkComponent, i) => <DrinkComponent key={i} {...drinkComponent} />)}
      </div>
  )
};

export default Drink;
