// tp4-react/tp1-react/src/Exercice2/MyComponent.jsx
import React, { useEffect, useState } from "react";

function MyComponent() {
    const [conteur, setConteur] = useState(0);

    
    function incrementer() {
        setConteur(conteur + 1);
    }

    function decrementer() {
        setConteur(conteur - 1);
    }

    
    useEffect(() => {
        setConteur(conteur + 1); 
    }, []);

    return (
        <>
            <h1>{conteur}</h1>
            <button onClick={incrementer}>++</button>
            <button onClick={decrementer}>--</button>
        </>
    );
}

export default MyComponent;