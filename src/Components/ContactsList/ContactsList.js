import styles from "./ContactsList.module.css";

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) =>
      (<li key={contact.id}>
        <span className={styles.contacts_text}>{contact.name}:</span>
        <span className={styles.contacts_text}>{contact.number}</span>
        <button type="button" className={styles.contacts_button} onClick={() => onDelete(contact.id)}>Delete</button>
      </li>)
      )}
    </ul>
  )
};

export default ContactsList;