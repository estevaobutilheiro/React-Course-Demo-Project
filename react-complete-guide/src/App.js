import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons : [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 28}
    ]
  }



  
  render() {
    return (
      //Em React (JSX), elementos precisam ter pelo menos um "pai". Por exemplo, não posso criar outro <h1> fora da div App.
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really Working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies are RACING!</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi! I\'m a React App!!!'));
  }
}

export default App;
