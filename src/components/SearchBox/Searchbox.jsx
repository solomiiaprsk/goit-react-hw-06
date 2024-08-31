import css from './SearchBox.module.css'

const SearchBox = ({ value, onType }) => {
     const handleChange = (event) => {
    onType(event.target.value);
  };
    return (
        <div className={css.container}>
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={handleChange} placeholder="type here..." />
            </div>
    );
}

export default SearchBox;