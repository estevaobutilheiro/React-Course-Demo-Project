import React from 'react';

const person = (props) => {
    //Essa const é a forma de criar funções no ES6, que é o que eu deveria usar sempre.
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;