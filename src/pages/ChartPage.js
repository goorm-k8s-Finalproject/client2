import Chart from "../components/Chart";
import styles from "../css/ChartPage.module.css";

const ChartPage = () => {
  return (
    <section className={styles.ChartPageContainer}>
      <div className={styles.ChartPageTitleContainer}>
        <h1 className={styles.ChartPageTitle}>Chart</h1>
        <p className={styles.ChartPageOnline}><strong>####</strong> Online</p>
      </div>
      <Chart />
    </section>
  );
};

export default ChartPage;
