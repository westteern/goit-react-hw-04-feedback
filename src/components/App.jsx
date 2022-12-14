import { GlobalStyle } from './GlobalStyle';
import { useState } from 'react';
import SectionTitle from './SectionTitle';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtn = option => {
    const counter = prevState => prevState + 1;
    switch (option) {
      case 'good':
        setGood(counter);
        break;
      case 'neutral':
        setNeutral(counter);
        break;
      case 'bad':
        setBad(counter);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedback = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback ? Math.ceil((good * 100) / totalFeedback) : 0;
  };

  return (
    <>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleBtn}
        />
      </SectionTitle>
      <SectionTitle title="Statistics">
        {!countTotalFeedback() ? (
          <Notification />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percent={countPositiveFeedback()}
          />
        )}
      </SectionTitle>
      <GlobalStyle />
    </>
  );
};

export default App;
