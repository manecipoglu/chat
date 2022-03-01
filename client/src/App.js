import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { useLocalStorage } from "./utils";
import "./App.scss";

function App() {
  const [id, setId] = useLocalStorage("id");

  return id ? <Dashboard id={id} /> : <Login setId={setId} />;
}

export default App;
