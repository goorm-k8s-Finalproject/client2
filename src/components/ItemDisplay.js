import { 
  useEffect,
  useState 
} from "react";

import axios from "axios";
import styles from "../css/ItemDisplay.module.css";

const ItemDisplay = () => {
  const [appData, setAppData] = useState({});
  const [appdevData, setAppdevData] = useState({});
  const [apppubData, setApppubData] = useState({});
  const [appgenData, setAppgenData] = useState({});
  const [descrpData, setDescrpData] = useState({});
  const [recoData, setRecoData] = useState({});

  useEffect(() => {
    axios
      .all([
        axios.get(
          'http://k8s-default-p2palbco-0fda6a8da8-562552387.ap-northeast-2.elb.amazonaws.com/p2p/app/802870/'
        ),
        axios.get(
          'http://k8s-default-p2palbco-0fda6a8da8-562552387.ap-northeast-2.elb.amazonaws.com/p2p/appdev/?app=802870'
        ),
        axios.get(
          'http://k8s-default-p2palbco-0fda6a8da8-562552387.ap-northeast-2.elb.amazonaws.com/p2p/apppub/?app=802870'
        ),
        axios.get(
          'http://k8s-default-p2palbco-0fda6a8da8-562552387.ap-northeast-2.elb.amazonaws.com/p2p/appgenre/?app=802870'
        ),
        axios.get(
          'http://k8s-default-p2palbco-0fda6a8da8-562552387.ap-northeast-2.elb.amazonaws.com/p2p/description/?app=802870'
        ),
        axios.get(
          'http://k8s-default-p2palbco-0fda6a8da8-562552387.ap-northeast-2.elb.amazonaws.com/p2p/recommendation/?app=802870'
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
          setAppdevData(data2);
          setApppubData(data3);
          setAppgenData(data4);
          setDescrpData(data5);
          setRecoData(data6);

          console.log(data1);
          console.log(data2);
          console.log(data3);
          console.log(data4);
          console.log(data5);
          console.log(data6);
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
            {/* <td>{appgenData.results.genre.genre}</td> */}
          </tr>
          <tr>
            <td>Developer</td>
            {/* <td>{appdevData.results.developer.name}</td> */}
          </tr>
          <tr>
            <td>Publisher</td>
            {/* <td>{apppubData.results.publisher.name}</td> */}
          </tr>
          <tr>
            <td>Release Date</td>
            <td>{appData.release_date}</td>
          </tr>
          <tr>
            <td>Recommendation</td>
            {/* <td>{recoData.results.count}</td> */}
          </tr>
        </table>
        <div className={styles.itemDisplayRightSection}>
          <img
            className={styles.itemDisplayThumbnail}
            src={appData.header_url}
          />
          {/* <p dangerouslySetInnerHTML={{__html: descrpData.results.short_descrption}}></p> */}
        </div>
      </div>
    </section>
  );
};

export default ItemDisplay;