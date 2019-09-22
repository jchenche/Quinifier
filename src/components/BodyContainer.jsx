import React, { Component } from 'react';
import '../styles/BodyContainer.css';
import SrcTextbox from './SrcTextbox';
import DstTextbox from './DstTextbox';

class BodyContainer extends Component {
  render() {
    return (
      <div className="BodyContainer">
        <SrcTextbox onTextChange={this.props.onTextChange}/>
        <DstTextbox modifiedSource={this.props.modifiedSource} />
      </div>
    );
  }
}

export default BodyContainer;
