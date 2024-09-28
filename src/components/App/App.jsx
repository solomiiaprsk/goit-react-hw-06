import { useEffect, useState } from 'react'
import css from './App.module.css'
import ContactList from '../ContactList/ContactList'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/Searchbox'
import contactsJSON from '../../contacts.json'
import { useDispatch, useSelector } from 'react-redux'


function App() {

  // const [contacts, setContacts] = useState(() => { 
  //   const savedContacts = localStorage.getItem("savedContacts");
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   };
  //   return contactsJSON;
  // });

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  
  const contacts = useSelector((state) => state.profiles.profiles);
  const shoUserList = useSelector((state) => state.profiles.showProfilesList);

  const handleChange = (newValue) => {
    setInputValue(newValue);
  };

  const addContact = (newContact) => {
    dispatch(addProfile(newContact));
//     setContacts((prevContacts) => {
//         return [...prevContacts, newContact];
// });
    };
  


  const deleteContact = (contactId) => {
     dispatch(deleteProfile(contactId));
    // setContacts((prevContacts) => {
    //   return prevContacts.filter((contact) => contact.id !== contactId);
    // });
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
