import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.scss";

export default function Dashboard({ id }) {
  return (
    <div>
      <Sidebar id={id} />
    </div>
  );
}
