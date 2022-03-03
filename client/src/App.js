import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { useLocalStorage } from "./utils";
import "./App.scss";
import { ContactsProvider } from "./contexts/ContactsProvider";
import { ConversationsProvider } from "./contexts/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );

  return id ? dashboard : <Login setId={setId} />;
}

export default App;
