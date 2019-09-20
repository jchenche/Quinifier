import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import BodyContainer from './components/BodyContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      source: '',
      modifiedSource: '',
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:3001/')
  //     .then(res => res.text())
  //     .then(res => this.setState({modifiedSource: res}))
  //     .catch(err => console.log("JCC " + err));
  // }

  quinify = () => {
    console.log("quinify=" + this)
  }

  saveText = source => {
    this.setState({source: source})
  }

  render() {
    return (
      <div className="App">
        <Header onQuinify={this.quinify} />
        <hr width="97%" />
        <BodyContainer
          onTextChange={this.saveText}
          modifiedSource={this.state.modifiedSource} />
      </div>
    );
  }
}

export default App;
