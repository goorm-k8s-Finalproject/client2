import {
    Link,
    useNavigate
} from "react-router-dom";

import SearchBar from "./SearchBar";
import styles from "../css/Navigation.module.css";

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <nav className={styles.navigationBar}>
            <div className={styles.logoSection}>
                <img
                    className={styles.navigationBarLogo}
                    src={require("../assets/img/kube-logo.png")}
                ></img>
                <h1 className={styles.navigationBarTitle} onClick={() => navigate('/')}>
                    P2P Games<span>beta</span>
                    <h6><sub>Prepare to Play !</sub></h6>
                </h1>
                <SearchBar />
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='chart'>Chart</Link>
                    <Link to='list'>List</Link>
                </div>
            </div>

            <div>
                <button className={`${styles.button} ${styles.loginButton}`}
                onClick={() => navigate("./Login")}
                >
                    Login
                </button>

                <button className={`${styles.button} ${styles.registerButton}`}
                onClick={() => navigate('./Register')}
                >
                    Register
                </button>
            </div>
        </nav>
    );
};

export default Navigation;