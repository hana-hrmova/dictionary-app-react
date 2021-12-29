import React from "react";

import Meanings from "./Meanings";

export default function Results(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="Results">
        <h2>{props.data.word}</h2>
        {props.data.meanings.map(function (meanings, index) {
          return (
            <div className="meaningsResult" key={index}>
              <Meanings meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
