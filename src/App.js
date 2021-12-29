import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary />
      <footer>
        This app was coded by{" "}
        <a
          href="https://www.linkedin.com/in/hana-hrmov%C3%A1-62491921a/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Hana Hrmová
        </a>
        ,is open-sourced on{" "}
        <a
          href="https://github.com/hana-hrmova/dictionary-app-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , and hosted on Netlify.
      </footer>
    </div>
  );
}

export default App;
