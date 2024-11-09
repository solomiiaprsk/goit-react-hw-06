import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
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
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
