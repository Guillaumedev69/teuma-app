import styles from "@/styles/SectionIntro.module.scss"
import BtnContact from "./BtnContact";
import ImgCyrille from "./ImgCyrille";
const SectionIntro = () => {
    return (
        <section className={styles.sectionIntro}>
            <div className={styles.h1BtnContain}>
                <h1 className={styles.titleh1}>
                    Stratégie<br />
                    Management<br />
                    Expertise
                </h1>
                <BtnContact />
            </div>
            <ImgCyrille />
        </section>
    );
};

export default SectionIntro;