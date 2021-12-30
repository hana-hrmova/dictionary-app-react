import React from "react";
import "./Results.css";
import Results from "./Results";

export default function DictionaryData(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="DictionaryData">
        <div className="section">
          <span className="searchedWord">
            <h2>{props.data.word}</h2>
          </span>
          <span className="phonetic">
            <h3>[{props.data.phonetic}]</h3>
          </span>
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
