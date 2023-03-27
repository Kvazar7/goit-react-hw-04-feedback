// import React, { Component } from 'react';
import React, { useState } from 'react';

import FeedbackCounter from './Button/feedbackbuttons';
import Statistics from './Statistics/statistics';
import Section from './Section/section';
import Notification from './Notification/notification';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const options = Object.keys({good, neutral, bad})

  const onFeedbackAccept = (e) => {
    switch (e) {
      case 'good': setGood(good + 1);
        break;
      case 'neutral': setNeutral(neutral + 1);
        break;  
      case 'bad': setBad(bad + 1);
        break;
      default:
        break;
    }
    console.log("Feedback accepted");
  }

const totalFeedback = () => good + neutral + bad;

const countPositiveFeedbackPercentage = () => Math.round(good / totalFeedback() * 100) || 0;
  
  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackCounter
          options={options}
          onLeaveFeedback={onFeedbackAccept}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (  
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        )}
      </Section>       
    </>
  )
}

export default App

// export class App extends Component {

// state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// onFeedbackAccept = option => {
//   this.setState(prevState => ({
//     [option]: prevState[option] + 1,
//   }));
//   console.log("Feedback accepted");
// }

// totalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

// countPositiveFeedbackPercentage = () => Math.round(this.state.good / this.totalFeedback() * 100) || 0;
  
  
//   render() {

//     return (
//     <>
//       <Section title="Please leave your feedback">
//         <FeedbackCounter
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.onFeedbackAccept}
//         />
//       </Section>
//       <Section title="Statistics">
//         {this.totalFeedback() === 0 ? (
//           <Notification message="There is no feedback"></Notification>
//         ) : (
//         <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.totalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         />
//         )}
//       </Section>
//     </>
//     );
//   };
// }