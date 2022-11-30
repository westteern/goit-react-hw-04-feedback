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
    this.setState(prevState => ({ [option]: prevState[option] + 1 }))    
  };
  
  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value);
  
  countPositiveFeedback = () =>
    Math.round((this.state.good / this.countTotalFeedback() * 100));

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(); 
    const feedBackPercent = this.countPositiveFeedback();
    return (
      <>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onFeedbackBtn={this.handleBtn}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          percent={feedBackPercent}          
        />
        <GlobalStyle />
      </>
    );    
  };
};

export default App;
