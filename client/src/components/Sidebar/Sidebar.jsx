import { useState } from "react";
import Contacts from "../Contacts/Contacts";
import Conversations from "../Conversations/Conversations";
import "./Sidebar.scss";

export default function Sidebar({ id }) {
  const [activeTab, setActiveTab] = useState("conversations");

  return (
    <div>
      <div onClick={() => setActiveTab("conversations")}>Conversations</div>
      <div onClick={() => setActiveTab("contacts")}>Contacks</div>

      {activeTab === "conversations" ? <Conversations /> : <Contacts />}
    </div>
  );
}
