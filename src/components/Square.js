import React from "react";

export default function Square(props) {
  // const [value, setValue] = React.useState(null); //array destructure – value bekommt den Wert Null. function SetValue aktualisiert value
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
