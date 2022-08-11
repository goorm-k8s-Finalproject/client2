import styles from "../css/SearchBar.module.css";
import SearchIcon from "../assets/icons/search-icon.svg";

const SearchBar = () => {
    return (
        <div className={styles.SearchBarContainer}>
            <input className={styles.SearchBarInput}></input>
            <img className={styles.SearchBarSearchIcon} src={SearchIcon} alt="SearchIcon"></img>
        </div>
        
    );
};

export default SearchBar;