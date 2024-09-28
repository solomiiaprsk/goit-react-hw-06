import css from './Contact.module.css';
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Contact = ({ contacts: { id, name, number }, onDelete }) => {
    return (
        <div className={css.container}>
            <div className={css.Contact}>
                <span className={css.span}>
                    <FaUser />
                    <p>{name}</p>
                </span>
                <span className={css.span}>
                    <FaPhone />
                    <p>{number}</p>
                 </span>
            </div>
            <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Contact;