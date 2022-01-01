import React from "react";
import "./Phonetics.css";
import useSound from "use-sound";
export default function Phonetics(props) {
  const [play] = useSound(props.phonetics.audio);
  //const AudioContext = window.AudioContext || window.webkitAudioContext;
  //const audioContext = new AudioContext();
  //const audioElement = document.querySelector("audio");
  //function handleClick(event) {
  //event.preventDefault();
  //if (audioContext.state === "suspended") {
  //audioContext.resume();
  //}

  // play or pause track depending on state
  // if (audioContext.state.playing === "false") {
  // audioElement.play();
  //audioContext.playing = "true";
  //} else if (audioContext.state.playing === "true") {
  //audioElement.pause();
  //audioContext.playing = "false";
  // }
  //}
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
}
