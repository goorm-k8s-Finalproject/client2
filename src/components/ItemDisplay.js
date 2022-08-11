import {
    useEffect,
    useState
} from 'react';

import axios from 'axios';
import styles from '../css/ItemDisplay.module.css'

const ItemDisplay = () => {
    const [gameData, setGameData] = useState({});
    const getPosts = () => {
        axios.get('http://localhost:3001') //api url in
        .then((response) => {
            setGameData(response);
        })
    }

    useEffect((gameData) => {
        getPosts();

        const refinedData = {
            name: gameData.data.name,
            type: gameData.data.type,
            appid: gameData.data.steam_appid,
            description: gameData.data.detailed_description,
            thumbnail: gameData.data.header_image,
            developer: gameData.data.developers,
            publisher: gameData.data.publishers,
            releaseDate: gameData.data.release_date.date
        };
    }, [])

    return (
        <section className={styles.itemDisplaySection}>
          <div className={styles.itemDisplayLogoBar}>
            <div className={styles.itemDisplayLogoBarTitle}>
              <h1>[GAMEICONHERE]</h1>
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
                <td>Last Update</td>
                <td>Last Update DATA</td>
              </tr>
              <tr>
                <td>Release Date</td>
                <td>{gameData.releaseDate}</td>
              </tr>
            </table>
            <div className={styles.itemDisplayRightSection}>
              <img
                className={styles.itemDisplayThumbnail}
                src={gameData.thumbnail}
              />
              <div>
                <p> Rating of ITEM</p>
                <p>Current Players</p>
              </div>
              <p dangerouslySetInnerHTML={{__html: gameData.description}}></p>
            </div>
          </div>
        </section>
      );
    };
    
export default ItemDisplay;