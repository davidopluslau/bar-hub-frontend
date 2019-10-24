import React from 'react'

function DrinkEdit(props) {
    return (
        <div>
          <h3>Edit Drink</h3>
          <form onSubmit={props.handleSubmit}>
    
          <p>Name of Drink:</p>
          <input
          type="text"
          name="name"
          value={props.drinkForm.name}
          onChange={props.handleFormChange} />

        <p>Drink Version:</p>
        <input
          type="number"
          name="version"
          value={props.drinkForm.version}
          onChange={props.handleFormChange} />

        <p>Drink Cost:</p>
        <input
          type="number"
          name="cost"
          value={props.drinkForm.cost}
          onChange={props.handleFormChange} />

        <p>Alcohol Level:</p>
        <input
          type="number"
          name="alcohol"
          value={props.drinkForm.alcohol}
          onChange={props.handleFormChange} />

        <p>Blurb:</p>
        <input
          type="text"
          name="blurb"
          value={props.drinkForm.blurb}
          onChange={props.handleFormChange} /> 
        
        <p>Has it been poured?:</p>
        <input
            type="boolean"
            name="is_pour"
            value={props.drinkForm.is_pour}
            onChange={props.handleFormChange} />
            <button>Submit</button>
          </form>
        </div>
      )
}
    
export default DrinkEdit
