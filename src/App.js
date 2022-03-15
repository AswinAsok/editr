import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Editor from "./Components/Editor/Editor.jsx";
import Options from "./Components/Options/Options.jsx";
import Details from "./Components/Details/Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Editor />
        <Details />
      </div>
      {/* <Options /> */}
    </div>
  );
}

export default App;
