import TestTable from "./TestTable";
import styles from "../css/ItemPrices.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ItemPrices = () => {
    const [appData, setAppdata] = useState({});
    const [priceData, setPriceData] = useState({});

    useEffect(() => {
        axios.all([
            axios.get(
                process.env.REACT_APP_BACK_BASE_URL + '/app/1089090/'
            ),
            axios.get(
                process.env.REACT_APP_BACK_BASE_URL + '/price/?app=1089090'
            )
        ])
        .then(
            axios.spread((res1, res2) => {
                const data1 = res1.data;
                const data2 = res2.data;

                setAppdata(data1);
                if (!data2.results || data2.results.length === 0) return;
                setPriceData(data2.results[0]);
            })
        )
        .catch(() => {});
    }, [])

    return(
        <section className={styles.ItemPricesContainer}>
            <h2 className={styles.ItemPricesContainerTitle}>Item Prices</h2>
            <table styles={{colors: '#356de6'}}>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Original Price</th>
                    <th>Cut</th>
                    <th>Discounting Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{appData.name}</td>
                    <td>{priceData.init_price} ₩</td>
                    <td>{priceData.discount} %</td>
                    <td>{priceData.price} ₩</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default ItemPrices;