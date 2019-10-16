import React from 'react'

function DrinkCreate(props) {
    return (
        <div className="create-form">
        <h2>Add a new drink to Database</h2>
         <form onSubmit={props.newDrink}>
          <p>Name of Drink:</p>
          <input
          type="text"
          name="name"
          value={props.drinkForm.name}
          onChange={props.handleFormChange} />

        <p>Drink Price:</p>
        <input
          type="number"
          name="price"
          value={props.drinkForm.price}
          onChange={props.handleFormChange} />

        <p>Drink Description:</p>
        <input
          type="text"
          name="description"
          value={props.drinkForm.description}
          onChange={props.handleFormChange} />

        <p>Ounces:</p>
        <input
          type="number"
          name="ounces"
          value={props.drinkForm.ounces}
          onChange={props.handleFormChange} />

        <p>Ingredients:</p>
        <input
          type="text"
          name="ingredients"
          value={props.drinkForm.ingredients}
          onChange={props.handleFormChange} /> 
        
        <p>Milliliters:</p>
        <input
            type="number"
            name="milliliters"
            value={props.drinkForm.milliliters}
            onChange={props.handleFormChange} />
        <br/>
        <button>Submit</button>
        </form>
    </div>
    )
}

export default DrinkCreate