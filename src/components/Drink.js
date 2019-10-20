import React from 'react';
import DrinkEdit from './DrinkEdit'
import DrinkComponent from './DrinkComponent'
import './Drink.css'

class Drink extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEdit: false
    }
  }


 render() {
  const {
    name,
    version,
      cost,
      alcohol,
      blurb,
      is_pour,
      drink_components
  } = this.props;

  return (
      <div className="drink-container">
        <div className="drink-header">
          <h2 className="drink-name">{name}</h2>
          <span className="drink-price">{cost}</span>
        </div>
        <div className="drink-desc">{blurb}</div>
        <div className="drink-info">
          <div className="ounces">Ounces</div>
          <div className="ingredients">Ingredients</div>
          <div className="milliliters">mL Alcohol</div>
        </div>
        <div className="drink-components">{drink_components.map((drinkComponent, i) => <DrinkComponent key={i} {...drinkComponent} />)}</div>
       
        {this.state.isEdit ?
                <DrinkEdit
                  handleFormChange={this.props.handleFormChange}
                  handleSubmit={(event) => {
                    event.preventDefault();
                    this.props.editDrink();
                    this.setState({ isEdit: false })
                  }}
                  drinkForm={this.props.drinkForm} />
              :
              <>
                <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                }}>Edit</button>
              </>
            }
          </div>)}
        }   
export default Drink;
