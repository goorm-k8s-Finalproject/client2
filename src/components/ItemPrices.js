import TestTable from "./TestTable";
import styles from "../css/ItemPrices.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ItemPrices = () => {
    // const [appData, setAppdata] = useState({});
    // const [priceData, setPriceData] = useState({});

    // useEffect(() => {
    //     axios.all([
    //         axios.get(
    //             'http://k8s-default-p2palbco-0fda6a8da8-562552387.ap-northeast-2.elb.amazonaws.com/p2p/app/802870/'
    //         ),
    //         axios.get(
    //             'http://k8s-default-p2palbco-0fda6a8da8-562552387.ap-northeast-2.elb.amazonaws.com/p2p/price/?app=802870'
    //         )
    //     ])
    //     .then(
    //         axios.spread((res1, res2) => {
    //             const data1 = res1.data;
    //             const data2 = res2.data;

    //             setAppdata(data1);
    //             setPriceData(data2);
    //         })
    //     )
    //     .catch(() => {});
    // }, [])

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
                    <td>원피스 해적무쌍 4</td>
                    <td>64,800₩</td>
                    <td>30%</td>
                    <td>45,360₩</td>
                    </tr>
                    {/* <tr>
                    <td>{appData.name}</td>
                    <td>{priceData.results.init_price}</td>
                    <td>{priceData.results.discount}%</td>
                    <td>{priceData.results.price}</td>
                    </tr> */}
                </tbody>
            </table>
        </section>
    );
};

export default ItemPrices;