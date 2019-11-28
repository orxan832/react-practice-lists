import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    count: 0,
    message: "",
    inputValue: ""
  }

  changeCountHandler = async (event) => {
     await this.setState({
      count: event.target.value.length,
      inputValue: event.target.value
    });
    this.showMessage();
  }

  showMessage = () => {
    if (this.state.count <= 5) {
      this.setState({
        message: "Text too short"
      });
    } else {
      this.setState({
        message: "Text long enough"
      })
    }
  }

  deleteLetterHandler = (index) => {
   
    const charLetters = [...this.state.inputValue.split('')];
    
    let charLetter = charLetters.findIndex((c, i) => i === index);
    
    charLetters.splice(charLetter, 1);
    
    const value = charLetters.join('');
    
    this.setState({
      count: value.length,
      inputValue: value
    });
    
  }

  render() {
    let value = this.state.inputValue;
    let charList = value.split('');
    let chars = (
      charList.map((char, index) => {
      return <CharComponent letter={char} key={index} click={this.deleteLetterHandler.bind(this, index)} />
    }))
    return (
      <div className="App">
        <input type="text" onChange={this.changeCountHandler} value={this.state.inputValue} />
        <ValidationComponent number={this.state.count} message={this.state.message} />
        {chars}
      </div>
    );
  }
}

export default App;
