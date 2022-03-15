import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Editor from "./Components/Editor/Editor.jsx";
import Options from "./Components/Options/Options.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Editor />
      <Options />
    </div>
  );
}

export default App;
