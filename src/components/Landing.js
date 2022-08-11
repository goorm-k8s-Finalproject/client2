import {
    useNavigate
} from 'react-router-dom';

import styles from '../css/Landing.module.css';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.imageContainer}>
            <img className={styles.landingImage} src={require('../assets/img/landingcover.png')}>
            </img>
            <button className={styles.joinButton} onClick={() => navigate("/register")}>Join Now!</button>
        </section>
    );
};

export default Landing;