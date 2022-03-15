import { useConversations } from "../../contexts/ConversationsProvider";
import "./Conversations.scss";

export default function Conversations() {
  const { conversations, selectConversation } = useConversations();

  return (
    <ul>
      {conversations.map((conversation, index) => (
        <li key={index} onClick={() => selectConversation(index)}>
          {conversation.recipients
            .map((recipient) => recipient.name)
            .join(", ")}
        </li>
      ))}
    </ul>
  );
}
