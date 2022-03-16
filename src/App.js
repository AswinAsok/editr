import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Editor from "./Components/Editor/Editor.jsx";
import Options from "./Components/Options/Options.jsx";
import Details from "./Components/Details/Details";

import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [special, setSpecial] = useState(0);
  let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  let localcount = 0;

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

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
    }
  }, [text]);

  useEffect(() => {
    if (transcript.length > 0 && text.length > 0) {
      setText(text + " " + transcript);
    } else if (transcript.length > 0) {
      setText(transcript);
    }
  }, [listening]);

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Editor text={text} setText={setText} />
        <Details words={words} characters={characters} special={special} />
      </div>
      <Options setText={setText} listening={listening} />
    </div>
  );
}

export default App;
