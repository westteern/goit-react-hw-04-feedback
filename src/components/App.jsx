import { GlobalStyle } from './GlobalStyle';
import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification  from './Notification';



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value);

  countPositiveFeedback = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const feedBackPercent = this.countPositiveFeedback();
    return (
      <>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleBtn}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {!totalFeedback ? (
            <Notification/>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              percent={feedBackPercent ? feedBackPercent : 0}
            />
          )}
        </SectionTitle>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
