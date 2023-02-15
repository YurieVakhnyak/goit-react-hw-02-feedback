import React, { Component } from 'react';
import { Section } from '../Section/Section.jsx';
import { Statistics } from '../Statistics/Statistics.jsx';
export class Feedback extends Component {
  constructor({ good, neutral, bad, total }) {
    super({ good, neutral, bad, total });
    // this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleClick = evt => {
    const stateName = evt.target.name;
    const { good, neutral, bad } = this.state;
    if (stateName === 'good') {
      this.setState({ [stateName]: good + 1 });
    } else if (stateName === 'neutral') {
      this.setState({ [stateName]: neutral + 1 });
    } else {
      this.setState({ [stateName]: bad + 1 });
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (
      <div>
        <Section title={this.title} />
        <div className="btn-box">
          <button name="good" onClick={this.handleClick}>
            Good
          </button>
          <button name="neutral" onClick={this.handleClick}>
            Neutral
          </button>
          <button name="bad" onClick={this.handleClick}>
            Bad
          </button>
        </div>
        {total === 0 ? (
          <p className="massege">No feedback given</p>
        ) : (
          <Statistics good={good} bad={bad} neutral={neutral} total={total} />
        )}
      </div>
    );
  }
}
