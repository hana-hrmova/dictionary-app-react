import React from "react";
import "./Results.css";
import Results from "./Results";
import Phonetics from "./Phonetics";

export default function DictionaryData(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="DictionaryData">
        <div className="section">
          <h2>
            <span className="searchedWord">{props.data.word}</span>
          </h2>
          <Phonetics phonetics={props.data.phonetics[0]} />
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
