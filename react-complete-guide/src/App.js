import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = props => {

  const [ personsState, setPersonsState ] = useState({
      persons : [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 28}
      ]
  });

  const [otherState, setOtherstate] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () =>{
    //DONT DO THIS this.state.persons[0].name = 'Estevao';
    setPersonsState( {
      persons : [
        { name: 'Maxine', age: 28 },
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 21}
      ]
    });
  };

  return (
    //Em React (JSX), elementos precisam ter pelo menos um "pai". Por exemplo, não posso criar outro <h1> fora da div App.
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really Working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies are RACING!</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi! I\'m a React App!!!'));

  };
  export default app;
