import React, { Component } from 'react';
import '../styles/Textbox.css';

class DstTextbox extends Component {
  render() {
    return(
      <div className="Textbox">
        <textarea readOnly id="dstCode"
        placeholder="Modified source code will be generated here..."
        value={this.props.modifiedSource}
        ></textarea>
      </div>
    );
  }
}

export default DstTextbox;
