import React, { Component } from 'react';


class WeekChecker extends Component {


  render() {
      let today = new Date().getDay();//to get weekday number

          if (today === 6 || today === 0)
            return <div>It is Weekend</div>;
          // If it is weeken
          return <div>It is Weekday</div>;

  }
}

export default WeekChecker ;
