import { useContext, createContext } from "react";
import { useLocalStorage } from "../utils";
import { useContacts } from "./ContactsProvider";

const ConversationsContext = createContext();

export function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useLocalStorage(
    "Conversations",
    []
  );
  const { contacts } = useContacts();

  function createConversation(recipients) {
    setConversations((prevConversations) => [
      ...prevConversations,
      { recipients, messages: [] },
    ]);
  }

  const formattedConversations = conversations.map((conversation) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => contact.id === recipient);
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });
    return { ...conversation, recipients };
  });

  return (
    <ConversationsContext.Provider
      value={{ conversations: formattedConversations, createConversation }}
    >
      {children}
    </ConversationsContext.Provider>
  );
}
