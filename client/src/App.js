import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { useLocalStorage } from "./utils";
import "./App.scss";
import { ContactsProvider } from "./contexts/ContactsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  );

  return id ? dashboard : <Login setId={setId} />;
}

export default App;
