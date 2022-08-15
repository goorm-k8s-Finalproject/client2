import axios from "axios";
import { 
  useEffect,
  useState 
} from "react";

import styles from "../css/ItemDisplay.module.css";

const ItemDisplaytest = () => {
  const [gameData, setGameData] = useState({});
  const onComm1 = () => {
    const url = 'http://ec2-15-164-203-139.ap-northeast-2.compute.amazonaws.com:8000/p2p/app/?'
    axios.get(url, {
      appid,
      name,
      header_url,
      releaseDate,
      type
    })
    .then(function(response) {
      setGameData(response.data);
      console.log('성공');
    })
    .catch(function(error) {
      console.log('실패');
    })
  }

  useEffect(() => {
    const results = require();
    const refinedData = {
      name: results[570].data.name,
      type: results[570].data.type,
      appid: results[570].data.steam_appid,
      description: results[570].data.detailed_description,
      thumbnail: results[570].data.header_image,
      developer: results[570].data.developers[0],
      publisher: results[570].data.publishers[0],
      releaseDate: results[570].data.release_date.date,
    };

    setGameData(refinedData);
  
  }, []);

  return (
    <section className={styles.ItemDisplaytestSection}>
      <div className={styles.ItemDisplaytestLogoBar}>
        <div className={styles.ItemDisplaytestLogoBarTitle}>=
          <h1>{gameData.name}</h1>
        </div>
        <div className={styles.ItemDisplaytestLogoBarButtons}>
          <button>Store</button>
          <button>Wishlist</button>
        </div>
      </div>
      <div className={styles.ItemDisplaytestFlex}>
        <table className={styles.ItemDisplaytestTable}>
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
        </table>
        <div className={styles.ItemDisplaytestRightSection}>
          <img
            className={styles.ItemDisplaytestThumbnail}
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

export default ItemDisplaytest;