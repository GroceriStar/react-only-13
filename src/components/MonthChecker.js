import React, { Component } from 'react';
import Months from './data/Months';

class MonthChecker extends Component {


    //returns name of the month  based of the number
  getMonthName(number) {
          return Months[number];
      }

  render() {
      let month = new Date().getMonth();//to get month
       return  <div>Month is {this.getMonthName(month)}</div>;
  }
}

export default MonthChecker ;
