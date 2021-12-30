import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

import DictionaryData from "./DictionaryData";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  function handleChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a word"
          autoFocus={true}
          onChange={handleChange}
          className="searchInput"
        />
        <button type="submit" value="Enter" className="submitInput">
          🔎
        </button>
      </form>
      <DictionaryData data={result} />
    </div>
  );
}
