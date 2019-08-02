import React from 'react';
import Drink from './Drink';
import { useDrinkView } from '../hooks/Drink'

const Menu = () => {
  const [
      drinksLoading,
      drinks
  ] = useDrinkView();
  if (drinksLoading) return <div>{`Loading...`}</div>;
  console.log('Attempt');
  if (!drinks || drinks.length === 0) return null;

  return (
      <div>{drinks && drinks.results.map((drink, i) => <Drink key = {i} {...drink} />)}</div>
  );
};

export default Menu;
