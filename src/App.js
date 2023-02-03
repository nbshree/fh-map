import "./App.css";
import Map from "./components/Map";
import { useState } from "react";
import Position from "./components/Position";
import NewPosition from "./components/NewPosition";

function App() {
  const [data, setData] = useState([]);
  const [newValue, setNewValue] = useState([]);
  return (
    <div style={{ display: "flex" }}>
      <Map value={data} newValue={newValue} />
      <Position setData={setData} />
      <NewPosition onClick={setNewValue} />
    </div>
  );
}

export default App;
