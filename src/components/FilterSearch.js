import styles from "../css/FilterSearch.module.css";
import searchIcon from "../assets/icons/search-icon.svg";

import { 
  useState 
} from "react";

const FilterSearch = (props) => {
  // This component acts as a search and a filter component for the ListPage route.

  const [genre, setGenre] = useState("RTS");
  const [publisher, setPublisher] = useState("Valve");
  const [platform, setPlatform] = useState("Steam");
  const [type, setType] = useState("Game");
  const [searchInput, setSearchInput] = useState("");

  const submitSearch = (event) => {
    // This function gathers the value of the filters and the search box and sends it to the API when the enter key is pressed.
    // For now only an alert is displayed (testing).
    if (event.key === "Enter") {
      const filters = {
        genre: genre,
        publisher: publisher,
        platform: platform,
        type: type,
        searchInput: searchInput,
      };
      props.searchHandler(filters);
      // alert(
      //   `genre: ${data.genre}, \npublisher: ${data.publisher}, \nplatform: ${data.platform}, \ntype: ${data.type}, \ninput: ${data.searchInput}`
      // );
      setSearchInput("");
    }
  };

  const submitClickSearch = () => {
    // This function gathers the value of the filters and the search box and sends it to the API when the search icon is clicked.
    // For now only an alert is displayed (testing).
    const filters = {
      genre: genre,
      publisher: publisher,
      platform: platform,
      type: type,
      searchInput: searchInput,
    };
    props.searchHandler(filters);
    setSearchInput("");
  };

  return (
    <section className={styles.filterSearchContainer}>
      <div className={styles.filterSearchFilterSection}>
        <div className={styles.filterSearchFilter}>
          <label htmlFor="genre-select">Genre</label>
          <select
            id="genre-select"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="FPS">FPS</option>
            <option value="RTS">RTS</option>
            <option value="RPG">RPG</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
        <div className={styles.filterSearchFilter}>
          <label htmlFor="publisher-select">Publisher</label>
          <select
            id="publisher-select"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          >
            <option value="Rockstar">Rockstar</option>
            <option value="Valve">Valve</option>
            <option value="EA">EA</option>
            <option value="CD Projekt">CD Projekt</option>
            <option value="Ubisoft">Ubisoft</option>
          </select>
        </div>
        <div className={styles.filterSearchFilter}>
          <label htmlFor="platform-select">Platform</label>
          <select
            id="platform-select"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="Steam">Steam</option>
            <option value="EPIC Store">EPIC Store</option>
            <option value="Origin">Origin</option>
            <option value="GOG">GOG</option>
          </select>
        </div>
        <div className={styles.filterSearchFilter}>
          <label htmlFor="type-select">Type</label>
          <select
            id="type-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Game">Game</option>
            <option value="DLC">DLC</option>
          </select>
        </div>
      </div>
      <div className={styles.filterSearchSearchSection}>
        <input
          className={styles.filterSearchSearchBar}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => submitSearch(e)}
        ></input>
        {/* <object
          data={searchIcon}
          className={styles.filterSearchSearchIcon}
          onClick={e => console.log(e)}
        ></object> */}
        <img
          className={styles.filterSearchSearchIcon}
          src={searchIcon}
          onClick={submitClickSearch}
          alt="Search Icon"
        ></img>
      </div>
    </section>
  );
};

export default FilterSearch;
