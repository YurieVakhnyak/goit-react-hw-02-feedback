// import { Feedback } from 'components/Feedback/Feedback';
import React, { Component } from 'react';
// import { Feedback } from 'components/Feedback/Feedback';
export class Statistics extends Component {
  constructor({ good, neutral, bad, total }) {
    super({ good, neutral, bad, total });
  }

  render() {
    const { good, neutral, bad } = this.props;
    const total = good + neutral + bad;

    return (
      <div>
        <p className="stats">Statistics</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {good === 0 ? 0 : Math.floor((good / total) * 100)} %</p>
      </div>
    );
  }
}
