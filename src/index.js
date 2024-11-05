// TP4-REACT/src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "./PersonList.js";

// const myElement=React.createElement("h1", null, "Bonjour , bienvenu sur mon app React ");
//jsxconst
// const a =10;
// const b=2;
// const p = {
//   name: "Ahmed",
//   age: 30,
// };

const person = [
  { name: "Ahmen", age: 40 },
  { name: "Ali", age: 30 },
  { name: "Mohamed", age: 20 },
  { name: "Sami", age: 10 },
];
const PersonTable = (
  <table border="1" width="50%" cellPadding="5" cellSpacing="0">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      {person.map((p, index) => (
        <tr key={index}>
          <td>{p.name}</td>
          <td>{p.age}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// const myElement = <h1> Bonjour {a+b}</h1>;
// const myElement = (
//   <h1>
//     Bonjour {p.name} vous avez {p.age}
//   </h1>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(PersonTable);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
