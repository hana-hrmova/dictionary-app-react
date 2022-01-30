import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

import DictionaryData from "./DictionaryData";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("poetry");
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [language, setLanguage] = useState("en_GB");
  const [placeholder, setPlaceholder] = useState("Type a word...");
  const [suggestions, setSuggestions] = useState(
    "Suggested words: family, hope, faith..."
  );

  function languageEnglish(event) {
    event.preventDefault();
    alert("Search for English words.");
    setLanguage("en_GB");
    setPlaceholder("Type a word...");
    setSuggestions("suggested words: family, hope, faith...");
  }
  function languageFrench(event) {
    event.preventDefault();
    alert("Rechercher un mot français");
    setLanguage("fr");
    setPlaceholder("Entrer un mot...");
    setSuggestions("suggéré: amour, croissant, livre");
  }
  function languageSpanish(event) {
    event.preventDefault();
    alert("Buscar una palabra en español...");
    setLanguage("es");
    setPlaceholder("Escribe una palabra...");
    setSuggestions("sugirió: atardecer, amistad, esperanza");
  }
  function languageGerman(event) {
    event.preventDefault();
    alert("Suche nach einem Deutschen Wort...");
    setLanguage("de");
    setPlaceholder("Geben Sie ein Wort ein...");
    setSuggestions("empfohlen: Blume, Hoffnung, lieben");
  }

  function languageItalian(event) {
    event.preventDefault();
    alert("Cerca parole italiane...");
    setLanguage("it");
    setPlaceholder("Digita una parola...");
    setSuggestions("suggerito: cucina, Chiesa, lucciola");
  }

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
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsKey = "563492ad6f917000010000012ea4fd9b2fe24fc9a3c32b44a6a673bc";
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
            placeholder={placeholder}
            autoFocus={true}
            onChange={handleChange}
            className="searchInput"
          />
          <p className="suggestions">{suggestions} </p>
          <br />
          <button
            type="submit"
            value="Enter"
            className="submitInput"
            id="submit-input"
          >
            🔎
          </button>
          <br />

          <input
            type="button"
            onClick={languageEnglish}
            className="languageButton"
            value=" English"
          />
          <input
            type="button"
            onClick={languageFrench}
            className="languageButton"
            value=" French"
          />
          <input
            type="button"
            onClick={languageSpanish}
            className="languageButton"
            value=" Spanish"
          />
          <input
            type="button"
            onClick={languageGerman}
            className="languageButton"
            value=" German"
          />
          <input
            type="button"
            onClick={languageItalian}
            className="languageButton"
            value=" Italian"
          />
        </form>
        <DictionaryData data={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
