import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

const ContactList = ({data, onDelete}) => {
    return (
        <ul className={css.list}>
            {data.map((contact) => (
                <li key={contact.id}>
                    <Contact contacts={contact} onDelete={onDelete}/>
                </li>
            ))}
        </ul>

    );
}

export default ContactList;