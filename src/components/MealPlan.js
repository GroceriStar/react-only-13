import React, { Component } from 'react';
import _ from 'lodash';
class MealPlan extends Component {
  state = {
    meal: '',
    meals: []
  };
renderMeals() {
    return _.map(this.state.meals, meal => <li>{meal}</li>);
  }
  renderState(event){
    this.setState({meal: event.target.value})
  }
render() {
    return(
      <div>
        <h2>Today you should eat this</h2>
        <input
          value={this.state.value}
          onChange={this.renderState.bind(this)}
          type="text"
        />
        <button
          onClick={() => this.setState({meals: [...this.state.meals, this.state.meal]})}>
          Add meal</button>
        <ul>
          {this.renderMeals()}
        </ul>
      </div>
    );
  }
}
export default MealPlan;
