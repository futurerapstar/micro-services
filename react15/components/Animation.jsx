import React, { Component } from 'react';
import './Animation.less'

class Animation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <h1 className="title slide-bar">Stay hungry</h1>
        <p className="subtitle slide-bar">Stay foolish</p>
      </header>
    )
  }
}

export default Animation