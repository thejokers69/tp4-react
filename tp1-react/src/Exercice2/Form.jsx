// tp4-react/tp1-react/src/Exercice2/Form.js
import React, { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    function handleForm(e) {
        e.preventDefault();
        console.log(`${name} is ${age} years old`);
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <label htmlFor="name">Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <br />
                <label htmlFor="age">Age: </label>
                <input 
                    type="number" 
                    id="age" 
                    value={age} 
                    onChange={(e) => setAge(Number(e.target.value))} 
                />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <h1>
                {name} is {age} years old
            </h1>
        </>
    );
}

export default Form;