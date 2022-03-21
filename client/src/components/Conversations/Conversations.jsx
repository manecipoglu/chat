import { useConversations } from "../../contexts/ConversationsProvider";
import "./Conversations.scss";

export default function Conversations() {
  const { conversations, setSelectedConversation } = useConversations();

  return (
    <ul>
      {conversations.map((conversation, index) => (
        <li key={index} onClick={() => setSelectedConversation(index)}>
          {conversation.recipients
            .map((recipient) => recipient.name)
            .join(", ")}
        </li>
      ))}
    </ul>
  );
}
