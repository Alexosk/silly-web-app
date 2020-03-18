import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      value: '',
      lastKeyPress: ''
    };
  }

  shouldComponentUpdate(nextState) {
    if(this.state.value !== nextState.value) {
      return true
    }
    return false;
  }

  onInputChange = ({target}) => {
    const { value } = target;
    this.setState({value});
  };

  onKeyPress = ({charCode}) => {
    this.setState({ lastKeyPress: String.fromCharCode(charCode)});
  }

  render() {
    const {value, lastKeyPress} = this.state;
    return (
      <div className="App">
        <input
          placeholder='Start typing'
          value={value}
          onChange={this.onInputChange}
          onKeyPress={this.onKeyPress}
          />
        <div>
          <p>Last key pressed was: {lastKeyPress}</p>
        </div>
      </div>
    );
  }
}

export default App;
