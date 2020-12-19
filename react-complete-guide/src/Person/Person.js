import React from 'react';
import classes from './Person.css';


const person = (props) => {
    //Essa const é a forma de criar funções no ES6, que é o que eu deveria usar sempre.
    return (
        // <div className="Person">
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;