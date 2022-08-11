import TestTable from "./TestTable";
import styles from "../css/ItemPrices.module.css";

const ItemPrices = () => {
    return(
        <section className={styles.ItemPricesContainer}>
            <h2 className={styles.ItemPricesContainerTitle}>Item Prices</h2>
            <TestTable />
        </section>
    );
};

export default ItemPrices;