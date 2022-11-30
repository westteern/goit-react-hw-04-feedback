import { GlobalStyle } from './GlobalStyle';
import React, {Component} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleBtn = option => {
    this.setState(prevState =>({[option]:prevState[option] + 1}))
  }


  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onFeedbackBtn={this.handleBtn}
        />
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
