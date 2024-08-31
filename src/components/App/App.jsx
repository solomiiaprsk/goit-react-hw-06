import { useEffect, useState } from 'react'
import css from './App.module.css'
import ContactList from '../ContactList/ContactList'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/Searchbox'
import contactsJSON from '../../contacts.json'


function App() {

  const [contacts, setContacts] = useState(() => { 
    const savedContacts = localStorage.getItem("savedContacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    };
    return contactsJSON;
  });
  const [inputValue, setInputValue] = useState("");
  
  const handleChange = (newValue) => {
    setInputValue(newValue);
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
        return [...prevContacts, newContact];
});
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);
  
    const filteredContacts = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
      <div className={css.container}>
          <h1>Phonebook</h1>

          <ContactForm onAdd={addContact} />
          <SearchBox value={inputValue} onType={handleChange} />
          <ContactList data={filteredContacts} onDelete={deleteContact}/>
</div>
   
  );
}

export default App;
