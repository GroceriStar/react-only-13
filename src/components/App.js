import React, { Component } from 'react';
import DayChecker from './DayChecker';
import WeekChecker from './WeekChecker';
import MonthChecker from './MonthChecker';
import Header  from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header  />
        <DayChecker />
        <WeekChecker />
        <MonthChecker />
      </div>
    );
  }
}

export default App;
