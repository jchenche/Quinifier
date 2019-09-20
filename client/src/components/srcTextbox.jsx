import React, { Component } from 'react';
import '../styles/Textbox.css';

class SrcTextbox extends Component {
  render() {
    return(
      <div className="Textbox">
        <textarea id="srcCode"
          placeholder="Paste your source code here..."
          onChange={() => this.props.onTextChange(document.getElementById("srcCode").value)}
        ></textarea>
      </div>
    );
  }
}

export default SrcTextbox;
