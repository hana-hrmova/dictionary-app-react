import React from "react";
import "./Phonetics.css";
import useSound from "use-sound";
export default function Phonetics(props) {
  const [play] = useSound(props.phonetics.audio);

  if (props.phonetics) {
    return (
      <div className="Phonetics">
        <button className="audioButton" onClick={() => play()}>
          🔊
        </button>

        <small>
          <span className="phoneticsWord">[ {props.phonetics.text}]</span>
        </small>
      </div>
    );
  } else {
    return null;
  }
}
