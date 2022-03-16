import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Editor from "./Components/Editor/Editor.jsx";
import Options from "./Components/Options/Options.jsx";
import Details from "./Components/Details/Details";

import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";

const appId = process.env.REACT_APP_APP_ID;
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

function App() {
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [special, setSpecial] = useState(0);
  const [stars, setStars] = useState(0);
  let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  let localcount = 0;

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  useEffect(() => {
    if (text) {
      setCharacters(text.length);
      setWords(text.split(" ").length);

      for (let index = 0; index < text.length; index++) {
        if (format.test(text.charAt(index))) {
          localcount += 1;
        }
      }
      setSpecial(localcount);
    } else {
      setCharacters(0);
      setWords(0);
      setSpecial(0);
    }
  }, [text]);

  useEffect(() => {
    if (transcript.length > 0 && text.length > 0) {
      setText(text + " " + transcript.toLowerCase());
    } else if (transcript.length > 0) {
      setText(transcript.toLowerCase());
    }
  }, [listening]);

  useEffect(async () => {
    fetch(`https://api.github.com/repos/AswinAsok/text.ly`)
      .then((res) => res.json())
      .then((data) => {
        setStars(data.stargazers_count);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Editor text={text} setText={setText} stars={stars} />
        <Details words={words} characters={characters} special={special} />
      </div>
      <Options setText={setText} listening={listening} />
    </div>
  );
}

export default App;
