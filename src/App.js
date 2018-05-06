import React, { Component } from 'react';
import DayChecker from './components/DayChecker';
import WeekChecker from './components/WeekChecker';
import MonthChecker from './components/MonthChecker';
import Header  from './components/Header';

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
