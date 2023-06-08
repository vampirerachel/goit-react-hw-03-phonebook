import { useState } from "react";
import { nanoid } from "nanoid";
import styles from "./styles.module.css";

export default function NameForm({ contacts, setContacts }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const duplicateContact = contacts.find(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    if (duplicateContact) {
      alert("Duplicate contact");
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts((previousState) => [...previousState, newContact]);
    setName("");
    setNumber("");
  };

  return (
    <div>
      <p>Name</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={onChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <p>Number</p>
          <input
            type="text"
            name="number"
            required
            value={number}
            onChange={onChange}
          />
        </div>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}


