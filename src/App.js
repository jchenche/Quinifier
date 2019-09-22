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

  quinify = () => {
    var source = this.state.source;
    if (source[source.length - 1] !== '\n') {
      source += '\n';
    }
    var modifiedSource = source;

    source = source.replace(/\\n/g, '\\\\n')
                  .replace(/\n/g, '\\n')
                  .replace(/\n/g, '\\n')
                  // eslint-disable-next-line
                  .replace(/\'/g, '\\\'')
                  .replace(/\{/g, '{{')
                  .replace(/\}/g, '}}');
    var escapeCurly = "{0}";
    
    modifiedSource += `s = r'''print('${source}s = r\\'\\'\\'${escapeCurly}\\'\\'\\'\\n${escapeCurly}'.format(s))'''\n`;
    modifiedSource += `print('${source}s = r\\'\\'\\'${escapeCurly}\\'\\'\\'\\n${escapeCurly}'.format(s))`;

    this.setState({modifiedSource: modifiedSource});
  }

  saveText = source => {
    this.setState({source: source});
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
