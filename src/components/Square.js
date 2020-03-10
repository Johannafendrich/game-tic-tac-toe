import React from "react";

export default function Square() {
  const [value, setValue] = React.useState(null); //array destructure – value bekommt den Wert Null. function SetValue aktualisiert value
  return (
    <button className="square" onClick={() => setValue(" 🥳")}>
      {value}
    </button>
  );
}
