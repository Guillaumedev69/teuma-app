import styles from "@/styles/SectionAbout.module.scss"
import ImgCyrille from "./ImgCyrille";

const SectionAbout = () => {
    return (
        <section className={styles.sectionAbout}>
            <h2 className={styles.sectionAbout__title}>À propos de nous</h2>
            <div className={styles.sectionAbout__content}>
                <ImgCyrille />
                <div className={styles.contentText}>
                    <p className={styles.contentText__P}>Diplômé d&apos;un Master en droit social et fort de 15 ans d&apos;expérience dans le management d&apos;équipes
                        et la gestion de centres de profits, j&apos;interviens à temps partagé et vous fais bénéficier aussi bien d
                        e mes compétences en relations humaines et commerciales qu&apos;en gestion financière.<br /><br />
                        Commerçant, pédagogue et disponible, je mettrai toute mon expertise pour mener à bien mes missions et
                        vous aider à atteindre vos objectifs.<br /><br />
                        Ancien Directeur de magasin en distribution spécialisée, et capable d&apos;allier performance économique et développement humain, je saurai vous proposer un accompagnement selon vos besoin.
                    </p>
                    <h3 className={styles.contentText__Title}>Cyrille TEUMA - Dirigeant</h3>
                </div>
            </div>
        </section>
    );
};

export default SectionAbout;