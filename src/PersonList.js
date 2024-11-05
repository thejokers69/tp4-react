// TP4-REACT/src/PersonList.js
import React from "react";

function PersonList({ people }) {
  return (
    <ul>
      {people.map((person, index) => (
        <li key={index}>
          {person.name} - {person.age} ans
        </li>
      ))}
    </ul>
  );
}

export default PersonList;