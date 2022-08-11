import SearchItem from "./SearchItem";
import styles from "../css/SearchResults.module.css";

const SearchResults = (props) => {
  return (
    <section>
      <table className={styles.SearchResultsTable}>
        <tbody>
          {props.results.map((item) => (
            <SearchItem
              key={item.name}
              thumbnail={item.thumbnail}
              platform={item.platform}
              name={item.name}
              tags={item.tags}
              originalPrice={item.originalPrice}
              discountPrice={item.discountPrice}
              cut={item.cut}
              link={item.link}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SearchResults;
