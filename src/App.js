import React, { Component } from 'react';


class App extends Component {

  getDayName(number) {
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[number];
    }
  getMonthName(number) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[number];
      }

  render() {
      let today = new Date().getDay();
      let date = new Date().getDate();
      let month = new Date().getMonth();
      let year = new Date().getFullYear();
      // If it is weekday

      if (today === 6 || today === 0)
          return <div>Today is {this.getDayName(today)} of Month : {this.getMonthName(month)}  date:{(month)}/ {(date)} / {(year)} - You can watch TV all day today</div>;

      // If it is weeken
      return <div>Today is {this.getDayName(today)} of Month : {this.getMonthName(month)}  date:{(month)}/ {(date)} / {(year)}   - You should go to work today</div>;

  }
}

export default App;
