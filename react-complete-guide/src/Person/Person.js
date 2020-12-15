import React from 'react';
import './Person.css';

const person = (props) => {
    //Essa const é a forma de criar funções no ES6, que é o que eu deveria usar sempre.
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input typer="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;