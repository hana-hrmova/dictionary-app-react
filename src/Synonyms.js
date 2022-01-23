import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return props.synonyms.map(function (synonyms, index) {
      if (index < 6) {
        return (
          <div className="synonyms" key={index}>
            <li>{synonyms}</li>
          </div>
        );
      } else {
        return null;
      }
    });
  } else {
    return null;
  }
}
