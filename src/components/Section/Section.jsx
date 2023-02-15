import React, { Component } from 'react';
export class Section extends Component {
  constructor({ title }) {
    super({ title });
  }
  render() {
    const title = 'Please leave feedback';
    return <p className="feedbackTitle">{title}</p>;
  }
}
