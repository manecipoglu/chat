import { useContacts } from "../../contexts/ContactsProvider";
import "./Contacts.scss";

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
}
