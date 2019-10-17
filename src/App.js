import React from 'react';
import logo from './octopus_hex.svg';
import './App.css';
import Menu from './components/Menu';
import DrinkCreate from './components/DrinkCreate'

import {
  createDrink,
  readAllDrinks,
  updateDrink,
  destroyDrink,
} from './services/api-helper'

class App extends React.Component {
  state = {
    drinks: [],
    selectedDrink: null,
    drinkForm: {
      name: "",
      price: "",
      description: "",
      ounces: "",
      ingredients: "",
      milliliters: ""
    }
  }

  getDrinks = async () => {
    const data = await readAllDrinks()
    this.setState({
      drinks: data.drinks
    })
  }
  newDrink = async (event) => {
    event.preventDefault()
    const drink = await createDrink(this.state.drinkForm)
    this.setState(prevState => ({
      drink: [...prevState.drinks, drink],
      drinkForm: {
        name: "",
        price: "",
        description: "",
        ounces: "",
        ingredients: "",
        milliliters: ""
      }
    }))
  }

  editDrink = async () => {
    const { drinkForm } = this.state
    const updatedDrinkData = await updateDrink(drinkForm.id, drinkForm)
    this.setState(prevState => ({
      drinks: prevState.drinks.map(drink => drink.id === drinkForm.id ? drinkForm : drink),
      selectedDrink: updatedDrinkData
    }))
  }
  

  mountEditForm = async (id) => {
    const drinks = await readAllDrinks()
    const drink = drinks.find(element => element.id === parseInt(id))
    this.setState({
      drinks,
      drinkForm: drink
    })
  }
  
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu/>
      </header>
    </div>
    );
  }
}

export default App;
