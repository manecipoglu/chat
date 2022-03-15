import { useContext, createContext, useState } from "react";
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
  const [selectedConversation, setSelectedConversation] = useState(0);
  const { contacts } = useContacts();

  function createConversation(recipients) {
    setConversations((prevConversations) => [
      ...prevConversations,
      { recipients, messages: [] },
    ]);
  }

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => contact.id === recipient);
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });
    const selected = index === selectedConversation;
    return { ...conversation, recipients, selected };
  });

  return (
    <ConversationsContext.Provider
      value={{
        conversations: formattedConversations,
        setSelectedConversation,
        selectedConversation: formattedConversations[selectedConversation],
        createConversation,
      }}
    >
      {children}
    </ConversationsContext.Provider>
  );
}
