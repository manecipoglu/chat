import Login from "./components/Login/Login";
import { useLocalStorage } from "./utils";
import "./App.scss";

function App() {
  const [id, setId] = useLocalStorage("id");

  return (
    <div>
      <Login setId={setId} />
    </div>
  );
}

export default App;
