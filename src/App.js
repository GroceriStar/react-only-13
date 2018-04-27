import React, { Component } from 'react';


class App extends Component {

//returns name of the weekday based of the number
  getDayName(number) {
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[number];
    }
    //returns name of the month  based of the number
  getMonthName(number) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[number];
      }

  render() {
      let today = new Date().getDay();//to get weekday number
      let date = new Date().getDate();//to get date
      let month = new Date().getMonth();//to get month
      let year = new Date().getFullYear();//to get year

      // If today is weekday --> name of day, month and date : MM/DD/YYYY will be printed
      if (today === 6 || today === 0)
          return <div>Today is {this.getDayName(today)} of Month : {this.getMonthName(month)}  date:{(month)}/ {(date)} / {(year)} - You can watch TV all day today</div>;

      // If today is weekend --> name of day, month and date : MM/DD/YYYY will be printed
      return <div>Today is {this.getDayName(today)} of Month : {this.getMonthName(month)}  date:{(month)}/ {(date)} / {(year)}   - You should go to work today</div>;

  }
}

export default App;
