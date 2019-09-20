import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import BodyContainer from './components/BodyContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      modifiedSource: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/')
      .then(res => res.text())
      .then(res => this.setState({modifiedSource: res}))
      .catch(err => console.log("JCC " + err));
  }

  quinify = () => {
    console.log("src = " + this)
  }

  render() {
    return (
      <div className="App">
        <Header onQuinify={this.quinify} />
        <hr width="97%" />
        <BodyContainer modifiedSource={this.state.modifiedSource} />
      </div>
    );
  }
}

export default App;
