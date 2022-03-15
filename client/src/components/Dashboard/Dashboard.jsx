import { useConversations } from "../../contexts/ConversationsProvider";
import OpenConvversation from "../OpenConversation/OpenConversation";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.scss";

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();

  return (
    <div>
      <Sidebar id={id} />
      {selectedConversation && <OpenConvversation />}
    </div>
  );
}
