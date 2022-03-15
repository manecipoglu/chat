import { useState } from "react";
import { useConversations } from "../../contexts/ConversationsProvider";
import "./OpenConversation.scss";

export default function OpenConvversation() {
  const [text, setText] = useState("");
  const { sendMessage, selectedConversation } = useConversations();

  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recepients.map((recepient) => recepient.id)
    );

    setText("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
}
