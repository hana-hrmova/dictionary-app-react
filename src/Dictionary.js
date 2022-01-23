import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

import DictionaryData from "./DictionaryData";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("poetry");
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(null);
  const [photos, setPhotos] = useState(false);
  function handleChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }
  function handlePhotos(response) {
    console.log(response);
    setPhotos(response);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsKey = "563492ad6f917000010000018b0d814bee984cf196fdad439afe3474";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePhotos);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
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
          <p>suggested words: family, hope, faith </p>
        </form>
        <DictionaryData data={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
