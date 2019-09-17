import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modifiedSource: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001')
      .then(res => res.text())
      .then(res => this.setState({modifiedSource: res}))
      .catch(err => console.log("JCC " + err));
  }

  render() {
    return(
      <p>{this.state.modifiedSource}</p>
    );
  }
}

export default Header;