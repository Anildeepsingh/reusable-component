import "./App.css";
import Greet from "./components/FunctionComponent";
import Welcome from "./components/ClassComponent";

function App() {
  return (
    <div className="App">
      <Greet name="Anil" id="first" ><p>this is me</p></Greet>
      <Greet name="Deep" id="middle" ><button>have</button></Greet>
      <Greet name="Singh" id="last" />
      <Welcome name="Anil" id="first" />
      <Welcome name="Deep" id="middle"/>
      <Welcome name="Singh" id="last"/>
    </div>
  );
}

export default App;
