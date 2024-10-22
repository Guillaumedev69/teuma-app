import styles from "@/styles/SectionIntro.module.scss";
import BackgroundIntroImg from "./BackgroundIntro";
const SectionIntro = () => {
    return (
        <section className={styles.sectionIntro}>
            <BackgroundIntroImg />
            <div className={styles.h2Contain}>
                <h2 className={styles.titleH2}>Stratégie</h2>
                <h2 className={styles.titleH2}>Management</h2>
                <h2 className={styles.titleH2}>Expertise</h2>
            </div>
        </section>
    );
};

export default SectionIntro;