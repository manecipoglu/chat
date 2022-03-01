import { useState } from "react";
import Contacts from "../Contacts/Contacts";
import Conversations from "../Conversations/Conversations";
import NewContactModal from "../NewContactModal/NewContactModal";
import NewConversationModal from "../NewConversationModal/NewConversationModal";
import "./Sidebar.scss";

export default function Sidebar({ id }) {
  const [activeTab, setActiveTab] = useState("conversations");
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div onClick={() => setActiveTab("conversations")}>Conversations</div>
      <div onClick={() => setActiveTab("contacts")}>Contacts</div>

      {activeTab === "conversations" ? <Conversations /> : <Contacts />}

      <p>
        Your Id: <span>{id}</span>
      </p>
      <button onClick={() => setShowModal(true)}>
        New {activeTab === "conversations" ? "Conversation" : "Contact"}
      </button>

      {showModal && (
        <div>
          {activeTab === "conversations" ? (
            <NewConversationModal closeModal={() => setShowModal(false)} />
          ) : (
            <NewContactModal closeModal={() => setShowModal(false)} />
          )}
        </div>
      )}
    </div>
  );
}
