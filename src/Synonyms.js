import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return props.synonyms.map(function (synonyms, index) {
      if (index < 6) {
        return (
          <div className="synonyms" key={index}>
            <div className="row">{synonyms}</div>
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
