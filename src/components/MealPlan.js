import React, { Component } from 'react';
import _ from 'lodash';
class MealPlan extends Component {

  constructor(props) {
    super(props)
    this.state = {
      meal: '',
      img:'',
      desc:'',
      step:'',
      meals: [],
      descs: [],
      steps: [],
      imgs: []
    }};

    renderMeals() {
      console.log(this.state)
      return _.map(

        this.state.descs,desc =>
          <li >
            {desc}
          </li>

      )
    };

    renderMeal(e){
      this.setState({meal:  e.target.value})
    };

    renderImg(e){
      this.setState({img: e.target.value})
    };

    renderDesc(e){
      this.setState({desc:  e.target.value})
    };

    renderStep({e}){
      this.setState({step:  e.target.value})
    };

render() {

  const onSubmit = e =>{
    this.setState({
        meals: [...this.state.meals, this.state.meal.value],
        imgs:  [...this.state.imgs,  this.state.img.value],
        descs: [...this.state.descs, this.state.desc.value],
        steps: [...this.state.steps, this.state.step.value]
    })
  };

    return (

      <div>
      <form >
        <h2>Today you should eat this</h2>

        <input
          onChange={e => this.setState({meal: e.target.value})}
          value={this.state.meal}
          type="text"
          required
        />

        <h2>Image: </h2>
        <input
          value={this.state.img}
          onChange={e => this.setState({img: e.target.value})}
          type="text"
        />

        <h2>Description: </h2>
        <input
          onChange={e => this.setState({desc: e.target.value})}
          value={this.state.desc}
          type="text"
          required
        />

        <h2>Steps: </h2>
        <input
          onChange={e => this.setState({step: e.target.value})}
          value={this.state.step}
          type="text"
          required
        />

        </form>

        <button
          onClick={e=>onSubmit(e)}>
          Add meal
        </button>
        <ul>
          {this.renderMeals()}
        </ul>
      </div>
    );
  }
}
export default MealPlan;
