import { 
  useEffect,
  useState 
} from "react";

import axios from "axios";
import styles from "../css/ItemDisplay.module.css";

const ItemDisplay = () => {
  const [appData, setAppData] = useState({});
  const [appdevData, setAppdevData] = useState('');
  const [apppubData, setApppubData] = useState('');
  const [appgenData, setAppgenData] = useState('');
  const [descrpData, setDescrpData] = useState('');
  const [recoData, setRecoData] = useState('');

  useEffect(() => {
    const url = 'http://k8s-default-p2palbco-0fda6a8da8-562552387.ap-northeast-2.elb.amazonaws.com/p2p'
    axios
      .all([
        axios.get(
          url + '/app/1089090/'
        ),
        axios.get(
          url + '/appdev/?app=1089090'
        ),
        axios.get(
          url + '/apppub/?app=1089090'
        ),
        axios.get(
          url + '/appgenre/?app=1089090'
        ),
        axios.get(
          url + '/description/?app=1089090'
        ),
        axios.get(
          url + '/recommendation/?app=1089090'
        )
      ])

      .then(
        axios.spread((res1, res2, res3, res4, res5, res6) => {
          const data1 = res1.data;
          const data2 = res2.data;
          const data3 = res3.data;
          const data4 = res4.data;
          const data5 = res5.data; 
          const data6 = res6.data;

          setAppData(data1);
          if (!data2.results || data2.results.length == 0) return;
          setAppdevData(data2.results[0].developer.name);
          if (!data3.results || data3.results.length == 0) return;
          setApppubData(data3.results[0].publisher.name);
          if (!data4.results || data4.results.length == 0) return;
          setAppgenData(data4.results[0].genre.genre);
          if (!data5.results || data5.results.length == 0) return;
          setDescrpData(data5.results[0].short_description);
          if (!data6.results || data6.results.length == 0) return;
          setRecoData(data6.results[0].count);
        })
      )
      .catch(() => {});
  }, []);
  
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
          <tr>
            <td>Genre</td>
            <td>{appgenData}</td>
          </tr>
          <tr>
            <td>Developer</td>
            <td>{appdevData}</td>
          </tr>
          <tr>
            <td>Publisher</td>
            <td>{apppubData}</td>
          </tr>
          <tr>
            <td>Release Date</td>
            <td>{appData.release_date}</td>
          </tr>
          <tr>
            <td>Recommendations</td>
            <td>{recoData}</td>
          </tr>
        </table>
        <div className={styles.itemDisplayRightSection}>
          <img
            className={styles.itemDisplayThumbnail}
            src={appData.header_url}
          />
          <p>{descrpData}</p>
        </div>
      </div>
    </section>
  );
};

export default ItemDisplay;