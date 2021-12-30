import React from "react";
import "./Results.css";
import Results from "./Results";

export default function DictionaryData(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="DictionaryData">
        <div className="section">
          <h2>
            <span className="searchedWord">{props.data.word}</span>
            <br />
            <small>
              <span className="phonetic">[ {props.data.phonetic}]</span>
            </small>
          </h2>
        </div>
        {props.data.meanings.map(function (meanings, index) {
          return (
            <div className="Meanings" key={index}>
              <Results meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
