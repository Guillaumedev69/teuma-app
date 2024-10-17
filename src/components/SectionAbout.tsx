import styles from "@/styles/SectionAbout.module.scss"
import ImgCyrille2 from "./ImgCyrille2";

const SectionAbout = () => {
    return (
        <section className={styles.sectionAbout}>
                    <h1>À propos de Teuma SME</h1>
                    <ImgCyrille2 />
                    <h2>Cyrille TEUMA - Dirigeant</h2>
                    <p>Diplômé d&apos;un Master en droit social et fort de 15 ans d&apos;expérience dans le management d&apos;équipes
                        et la gestion de centres de profits, j&apos;interviens à temps partagé et vous fais bénéficier aussi bien d
                        e mes compétences en relations humaines et commerciales qu&apos;en gestion financière.<br /><br />
                        Commerçant, pédagogue et disponible, je mettrai toute mon expertise pour mener à bien mes missions et
                        vous aider à atteindre vos objectifs.<br /><br />
                        Ancien Directeur de magasin en distribution spécialisée, et capable d&apos;allier performance économique et développement humain, je saurai vous proposer un accompagnement selon vos besoin.
                    </p>
                </section>
    );
};

export default SectionAbout;