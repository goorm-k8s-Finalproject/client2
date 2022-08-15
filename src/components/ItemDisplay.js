import { 
  useEffect,
  useState 
} from "react";

import axios from "axios";
import styles from "../css/ItemDisplay.module.css";

const ItemDisplay = () => {
  const [appData, setAppData] = useState({});
  const [appdevData, setAppdevData] = useState({});

    const getEventsapp = async () => {
      const url = 'http://ec2-15-164-203-139.ap-northeast-2.compute.amazonaws.com:8000/p2p/app/1174180/'
      const res = await axios.get(url)
      console.log(res)
      setAppData(res.data)
    } //app 데이터 통신

    // const getEventsappdev = async () => {
    //   const url = 'http://ec2-15-164-203-139.ap-northeast-2.compute.amazonaws.com:8000/p2p/appdev/?app=1174180'
    //   const res1 = await axios.get(url)
    //   console.log(res1)
    //   setAppdevData(res1.data)
    // } //appdev 데이터 통신
  
  getEventsapp();
  // getEventsappdev();

  return (
    <section className={styles.itemDisplaySection}>
      <div className={styles.itemDisplayLogoBar}>
        <div className={styles.itemDisplayLogoBarTitle}>=
          <h1>{appData.name}</h1>
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
            <td>{appData.app_id}</td>
          </tr>
          <tr>
            <td>APP Type</td>
            <td>{appData.type}</td>
          </tr>
          {/* <tr>
            <td>Developer</td>
            <td>{appdevData.developer.name}</td>
          </tr> */}
          {/* <tr>
            <td>Publisher</td>
            <td>{gameData.publisher}</td>
          </tr> */}
          <tr>
            <td>Release Date</td>
            <td>{appData.release_Date}</td>
          </tr>
        </table>
        <div className={styles.itemDisplayRightSection}>
          <img
            className={styles.itemDisplayThumbnail}
            src={appData.header_url}
          />
          <p dangerouslySetInnerHTML={{__html: appData.description}}></p>
        </div>
      </div>
    </section>
  );
};

export default ItemDisplay;