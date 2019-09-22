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
    var modified = source;

    source = source.replace(/\\n/g, '\\\\n')
                  .replace(/\n/g, '\\n')
                  .replace(/\n/g, '\\n')
                  // eslint-disable-next-line
                  .replace(/\'/g, '\\\'')
                  .replace(/\{/g, '{{')
                  .replace(/\}/g, '}}')
    var escape_curly = "{0}"
    
    modified += `s = r'''print('${source}s = r\\'\\'\\'${escape_curly}\\'\\'\\'\\n${escape_curly}'.format(s))'''\n`;
    modified += `print('${source}s = r\\'\\'\\'${escape_curly}\\'\\'\\'\\n${escape_curly}'.format(s))`;

    this.setState({modifiedSource: modified});
    // fetch('http://localhost:3001/', {
    //   method: 'POST',
    //   body: JSON.stringify({'source': this.state.source}),
    //   headers:{
    //     'Content-Type': 'application/json'
    //   }
    // }).then(res => res.text())
    // .then(res => this.setState({modifiedSource: res}))
    // .catch(err => console.error('Error:', err));
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
