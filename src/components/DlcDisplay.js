import { 
  useState 
} from "react";

import DlcItem from "./DlcItem";
import styles from "../css/DlcDisplay.module.css"

const DlcDisplay = () => {
  // This component calls the API to receive DLC data.
  // If there are DLC data, it renders the DlcItem components depending on the number of results.
  // If not, a message is displayed in the table.

  const dlcDummyData = [
    {
      appId: 3151238,
      name: "TEST DLC 1",
      releaseDate: "2010-03-14",
    },
    {
      appId: 6153248,
      name: "TEST DLC 2",
      releaseDate: "2011-05-10",
    },
    {
      appId: 43151238,
      name: "TEST DLC 1",
      releaseDate: "2010-03-14",
    },
  ];
  const [dlcData, setDlcData] = useState(dlcDummyData);

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
