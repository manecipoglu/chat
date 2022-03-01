import { useState } from "react";
import Login from "./components/Login/Login";
import "./App.scss";

function App() {
  const [id, setId] = useState("");
  return (
    <div>
      <Login setId={setId} />
    </div>
  );
}

export default App;
