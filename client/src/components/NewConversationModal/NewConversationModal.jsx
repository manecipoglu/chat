import "./NewConversationModal.scss";
import { useContacts } from "../../contexts/ContactsProvider";
import { useState } from "react";
import { useConversations } from "../../contexts/ConversationsProvider";

export default function NewConversationModal({ closeModal }) {
  const [selectedIds, setSelectedIds] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  function handleChange(id) {
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(id)) {
        return prevSelectedIds.filter((prevId) => prevId !== id);
      } else {
        return [...prevSelectedIds, id];
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    createConversation(selectedIds);
    closeModal();
  }

  return (
    <div>
      <h2>Create Conversation</h2>
      <form onSubmit={handleSubmit}>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <label>
              {contact.name}
              <input
                type="checkbox"
                value={selectedIds.includes(contact.id)}
                onChange={() => handleChange(contact.id)}
              />
            </label>
          </div>
        ))}

        <button>Create Conversation</button>
      </form>
    </div>
  );
}
