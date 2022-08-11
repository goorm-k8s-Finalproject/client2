import { 
  useEffect,
  useState 
} from "react";

import styles from "../css/ItemDisplay.module.css";

const ItemDisplay = () => {
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    const results = require("../assets/testdetail.json");
    const refinedData = {
      name: results[570].data.name,
      type: results[570].data.type,
      appid: results[570].data.steam_appid,
      description: results[570].data.detailed_description,
      thumbnail: results[570].data.header_image,
      developer: results[570].data.developers[0],
      publisher: results[570].data.publishers[0],
      releaseDate: results[570].data.release_date.date,
      path_thumbnail: results[570].data.path_thumbnail,
      ratings: results[570].data.metacritic.score,
      required_age: results[570].data.required_age
    };

    setGameData(refinedData);
  
  }, []);

  return (
    <section className={styles.itemDisplaySection}>
      <div className={styles.itemDisplayLogoBar}>
        <div className={styles.itemDisplayLogoBarTitle}>
          <h1>{gameData.path_thumbnail}</h1>
          <h1>{gameData.name}</h1>
        </div>
        <div className={styles.itemDisplayLogoBarButtons}>
          <button>Store</button>
          <button>Wishlist</button>
        </div>
      </div>
      <div className={styles.itemDisplayFlex}>
        <table className={styles.itemDisplayTable}>
          <tr>
            <td>APP ID</td>
            <td>{gameData.appid}</td>
          </tr>
          <tr>
            <td>APP Type</td>
            <td>{gameData.type}</td>
          </tr>
          <tr>
            <td>Developer</td>
            <td>{gameData.developer}</td>
          </tr>
          <tr>
            <td>Publisher</td>
            <td>{gameData.publisher}</td>
          </tr>
          <tr>
            <td>Release Date</td>
            <td>{gameData.releaseDate}</td>
          </tr>
          <tr>
            <td>Metacritic Ratings</td>
            <td>{gameData.ratings}</td>
          </tr>
          <tr>
            <td>Required_age</td>
            <td>{gameData.required_age}</td>
          </tr>
        </table>
        <div className={styles.itemDisplayRightSection}>
          <img
            className={styles.itemDisplayThumbnail}
            src={gameData.thumbnail}
          />
          <p dangerouslySetInnerHTML={{__html: gameData.description}}></p>
        </div>
      </div>

      <div>
        
      </div>
    </section>
  );
};

export default ItemDisplay;
