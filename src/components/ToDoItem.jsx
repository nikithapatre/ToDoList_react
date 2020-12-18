import React, { useState } from "react";

function ToDoItem(props) {
  // props are read only, cannot edit or modify, so sue State

  function handleClick() {}
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;

// Before sending to Parent component
// const [isDone, setIsDone] = useState(false); // false becasue iniitial value is not be clicked, starts without line-through

// function handleClick() {
// setIsDone((prevValue) => {
//   // set opposite of what currently is, i.e., isDOne
//   if (prevValue === true) {
//     return false;
//   } else {
//     return true;
//   }
// });
// }   // reutrn !prevVale   == simple way withput if/else

//   <li
//   onClick={handleClick}
//   // style={{ textDecoration: isDone ? "line-through" : "none" }}
// >
//   {props.text}
// </li>
