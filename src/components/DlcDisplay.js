import { 
  useEffect,
  useState 
} from "react";

import DlcItem from "./DlcItem";
import styles from "../css/DlcDisplay.module.css"
import axios from "axios";

const DlcDisplay = () => {
  // This component calls the API to receive DLC data.
  // If there are DLC data, it renders the DlcItem components depending on the number of results.
  // If not, a message is displayed in the table.
  const [dlcData, setDlcData] = useState('');

  useEffect(() => {
    const url = 'http://k8s-default-p2palbco-0fda6a8da8-562552387.ap-northeast-2.elb.amazonaws.com/p2p/dlc/?basegame=1089090'
    axios.get(url)

    .then(
      axios.spread((res1) => {
        const data1 = res1.data;

        if (!data1.results || data1.results.length == 0) return;
        setDlcData(data1);
      })
    )
    .catch(() => {})
  }, []);

  return (
    <section className={styles.DlcTableContainer}>
      <h2 className={styles.DlcTableTitle}>DLCs</h2>
      <table className={styles.DlcTable}>
        <thead>
            <tr>
                <td><strong>APP ID</strong></td>
                <td><strong>Name</strong></td>
                <td><strong>Release Date</strong></td>
            </tr>
        </thead>
        <tbody>
          {dlcData ? (
            dlcData.map((dlc) => (
              <DlcItem
                id={dlc.appId}
                key={dlc.id}
                name={dlc.name}
                releaseDate={dlc.releaseDate}
              />
            ))
          ) : (
            <p>There are no DLCs for this game.</p>
          )}
        </tbody>
      </table>
    </section>
  ); 
};

export default DlcDisplay;
