// src/Exercice2/MyComponent.jsx
import React, { useEffect, useState } from "react";

function MyComponent() {
    const [conteur, setConteur] = useState(0);

    // Define incrementer and decrementer functions within MyComponent
    function incrementer() {
        setConteur(conteur + 1);
    }

    function decrementer() {
        setConteur(conteur - 1);
    }

    // Place useEffect inside the component
    useEffect(() => {
        setConteur(conteur + 1); // This will increment conteur by 1 on mount
    }, []); // Empty dependency array so it only runs on mount

    return (
        <>
            <h1>{conteur}</h1>
            <button onClick={incrementer}>++</button>
            <button onClick={decrementer}>--</button>
        </>
    );
}

export default MyComponent;