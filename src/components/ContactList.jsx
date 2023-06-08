export default function ContactList({ filteredContacts, handleDelete }) {
    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {filteredContacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name} : {contact.number}
                        <p> 
                            <button type="button" onClick={() => handleDelete(contact.id)}>
                                delete
                            
                        </button>
                        </p>
                        </li>
                ))}
            </ul>
        </div>
    )
}