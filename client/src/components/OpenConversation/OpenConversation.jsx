import { useState, useCallback } from "react";
import { useConversations } from "../../contexts/ConversationsProvider";
import "./OpenConversation.scss";

export default function OpenConvversation() {
  const [text, setText] = useState("");
  const { sendMessage, selectedConversation } = useConversations();

  const setLastMessageRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map((recipient) => recipient.id)
    );

    setText("");
  }

  return (
    <div>
      <div>
        {selectedConversation.messages.map((message, index) => {
          const lastMessage =
            selectedConversation.messages.length - 1 === index;
          return (
            <div key={index} ref={lastMessage ? setLastMessageRef : null}>
              <div>{message.text}</div>
              <div>{message.fromMe ? "You" : message.senderName}</div>
            </div>
          );
        })}
      </div>
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
