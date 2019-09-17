import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <h1>Python Quinifier</h1>
        <p>Paste a valid Python3 program on the left and press <button>quinify</button> to convert the program into a quine or self-replicating program</p>
      </div>
    );
  }
}

export default Header;
