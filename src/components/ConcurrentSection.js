import Chart from "./Chart";
import styles from "../css/ConcurrentSection.module.css";

import { 
    useNavigate
} from "react-router";

const ConcurrentSection = () => {
    const navigate = useNavigate();

    return(
        <section className={styles.ConcurrentSectionContainer}>
            <div className={styles.ConcurrentSectionTopBar}>
                <h2 className={styles.ConcurrentSectionTitle}>Currency Exchange Rate</h2>
                <button className={styles.ConcurrentSectionButton} onClick={() => navigate("/chart")}>더보기</button>
            </div>
            <Chart></Chart>
        </section>
    );
};

export default ConcurrentSection;