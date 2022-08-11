import { 
    Link,
    useNavigate
} from "react-router-dom";

import styles from "../css/Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <img
          className={styles.kubeIcon}
          src={require("../assets/img/kube-logo.png")}
        ></img>
        <h2 className={styles.footerTitle} onClick={() => navigate("/")}>Price Comparator</h2>
      </div>
      <div className={styles.footerLinks}>
        <Link to="/resources">Test</Link>
        <Link to="/support">Support</Link>
        <Link to="/developers">Developers</Link>
      </div>
      <div>
        <p>©Team Bokdoli</p>
      </div>
    </footer>
  );
};

export default Footer;