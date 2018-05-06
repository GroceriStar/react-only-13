import React, { Component } from 'react';
import Days from './data/Days';

class DayChecker extends Component {

//returns name of the weekday based of the number
  getDayName(number) {
      return Days[number];
    }

  render() {
      let today = new Date().getDay();//to get weekday number
          return <div>Today is {this.getDayName(today)}</div>;
  }
}

export default DayChecker ;
