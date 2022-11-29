import { GlobalStyle } from './GlobalStyle';
import React, {Component} from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };


  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Feedback />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad} />
        <GlobalStyle />
      </>
    );    
  };
};

export default App;
