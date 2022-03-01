import { useRef } from "react";
import { v4 as uuidV4 } from "uuid";
import "./Login.scss";

export default function Login({ setId }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    setId(idRef.current.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Id</label>
        <input type="text" ref={idRef} />
        <button type="submit">Login</button>
        <button onClick={() => setId(uuidV4())}>Create a New Id</button>
      </form>
    </div>
  );
}
