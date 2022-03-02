import { useRef } from "react";
import { useContacts } from "../../contexts/ContactsProvider";
import "./NewContactModal.scss";

export default function NewContactModal({ closeModal }) {
  const idRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();

  function handleSubmit(e) {
    e.preventDefault();

    createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  }
  return (
    <div>
      <h2>Create Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newcontact-id">Id</label>
        <input type="text" ref={idRef} required id="newcontact-id" />

        <label htmlFor="newcontact-name">Name</label>
        <input type="text" ref={nameRef} required id="newcontact-name" />
        <button>Create Contact</button>
      </form>
    </div>
  );
}
