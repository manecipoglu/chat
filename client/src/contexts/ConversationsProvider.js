import { useContext, createContext, useState } from "react";
import { useLocalStorage } from "../utils";
import { useContacts } from "./ContactsProvider";

const ConversationsContext = createContext();

export function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ children, id }) {
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

  function addMessageToConversation({ recipients, text, sender }) {
    setConversations((prevConversations) => {
      let changed = false;
      const newMessage = { sender, text };

      const newConversations = prevConversations.map((conversation) => {
        if (sameArray(conversation.recipients, recipients)) {
          changed = true;
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage],
          };
        }
        return conversation;
      });

      if (changed) {
        return newConversations;
      } else {
        return [...prevConversations, { recipients, messages: [newMessage] }];
      }
    });
  }

  function sendMessage(recepients, text) {
    addMessageToConversation({ recepients, text, sender: id });
  }

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => contact.id === recipient);
      const name = (contact && contact.name) || recipient;
      return { id: recipient, name };
    });

    const messages = conversation.messages.map((message) => {
      const contact = contacts.find((contact) => contact.id === message.sender);
      const name = (contact && contact.name) || message.sender;
      const fromMe = id === message.sender;
      return { ...message, senderName: name, fromMe };
    });

    const selected = index === selectedConversation;
    return { ...conversation, messages, recipients, selected };
  });

  return (
    <ConversationsContext.Provider
      value={{
        conversations: formattedConversations,
        setSelectedConversation,
        selectedConversation: formattedConversations[selectedConversation],
        createConversation,
        sendMessage,
      }}
    >
      {children}
    </ConversationsContext.Provider>
  );
}

function sameArray(a, b) {
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();

  return a.every((element, index) => {
    return element === b[index];
  });
}
