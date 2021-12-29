import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.definitions[0].definition}</h3>
    </div>
  );
}
