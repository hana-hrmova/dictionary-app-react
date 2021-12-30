import React from "react";
import "./Results.css";

export default function Results(props) {
  return (
    <div className="Resullts">
      <div className="section">
        <span className="partOfSpeech">
          <h3>{props.meanings.partOfSpeech}</h3>
        </span>

        {props.meanings.definitions.map(function (definitions, index) {
          return (
            <div className="dataResults" key={index}>
              <span className="definitions">
                {" "}
                <li> {definitions.definition}</li>
              </span>
              <br />
              <span className="examples">{definitions.example}</span>
              {definitions.synonyms.map(function (synonyms, index) {
                return (
                  <div className="synonyms" key={index}>
                    {null}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}