import { selectFilter, setFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectFilter);
  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="type here..."
      />
    </div>
  );
};

export default SearchBox;
