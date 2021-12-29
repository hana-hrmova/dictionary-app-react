import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function handleChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for definition of "${keyword}"`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={handleChange} />
        <input type="submit" value="Enter" />
      </form>
    </div>
  );
}
