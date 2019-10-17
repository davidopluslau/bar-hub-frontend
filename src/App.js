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

  deleteDrink = async (id) => {
    const destroyThisDrink = await destroyDrink(id)
    console.log(destroyThisDrink)
      this.setState(prevState => ({
        drinks: prevState.drinks.filter(drink => drink.id !== parseInt(id)),
        selectedDrink: null
      }))
  }
  
  handleFormChange = (event) => {
    const { name, value } = event.target
    this.setState(prevState => ({
      drinkForm: {
        ...prevState.drinkForm,
        [name]: value
      }
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

  selectDrink = (drink) => {
    this.setState({
      selectedDrink: drink
    })
  }

  drink = () => {
    const drink = this.state.selectedDrink
    return (
      <div className="drink-page">
        <h1>{drink.name}</h1>
        <h3>{drink.price}</h3>
        <p>{drink.description}</p>
      </div>
    )
  }
  
  
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu/>
        <DrinkCreate
            handleFormChange={this.handleFormChange}
            drinkForm={this.state.drinkForm}
            newDrink={this.newDrink} />
      </header>
    </div>
    );
  }
}

export default App;
