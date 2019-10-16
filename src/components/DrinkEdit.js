import React from 'react'

function DrinkEdit(props) {
    return (
        <div>
          <h3>Edit Drink</h3>
          <form onSubmit={props.handleSubmit}>
    
            <p>Name:</p>
    
            <input
              type="text"
              name="name"
              value={props.drinkForm.name}
              onChange={props.handleFormChange} />
    
            <p>Price:</p>
            <input
              type="number"
              name="price"
              value={props.drinkForm.price}
              onChange={props.handleFormChange} />
    
            <p>Description:</p>
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
            <button>Submit</button>
          </form>
        </div>
      )
}
    
export default DrinkEdit
