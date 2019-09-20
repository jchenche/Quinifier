import React, { Component } from 'react';
import '../styles/Textbox.css';

class SrcTextbox extends Component {
  render() {
    return(
      <div className="Textbox">
        <textarea id="srcCode"
          placeholder="Paste your source code here..."
        ></textarea>
      </div>
    );
  }
}

export default SrcTextbox;
