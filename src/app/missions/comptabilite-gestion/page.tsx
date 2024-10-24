import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import styles from "@/styles/MissionPage.module.scss";
import Image from "next/image";
import Background from "@/images/background/backgroundCompta.webp"

const Page = () => {
    const donneesCard = [
        {
            id: 1,
            title: `Gestion de la balance clients, des débiteurs et de la comptabilité clients`,
            description: `La gestion de votre balance clients représente un enjeu stratégique.

Analyser vos encours, anticiper vos entrées d'argent et obtenir le règlement des impayés vous permet d'optimiser votre trésorerie, et également de ne pas faire d'avance de TVA.`,
        },
        {
            id: 2,
            title: `Gestion des frais généraux, de l'exploitation et de la comptabilité fournisseurs`,
            description: `Je vous apporte mon appui pour le suivi de l'exploitation générale de votre entreprise. 

Choix des prestataires, négociation des contrats et maîtrise des budgets. 

Vous pouvez ainsi optimiser vos résultats et vous consacrer au développement de votre business.`,
        },
        {
            id: 3,
            title: `Pilotage et optimisation du compte de résultats`,
            description: `Gérant d'un centre de profits pendant 15 ans, je vous aide à analyser vos résultats et développer la rentabilité de votre activité. 

En passant par la gestion financière et l'optimisation, notamment quand la réalisation du chiffre d'affaires est difficile.`,
        },
        {
            id: 4,
            title: `Développement du résultat opérationnel de votre entreprise`,
            description: `Homme de performance et de résultat, j'ai toujours eu à cœur d'atteindre mes objectifs et de rentabiliser les différents sites dont j'ai eu la responsabilité.

Je mettrai mon expertise au service de votre activité.`,
        },
        {
            id: 5,
            title: `Gestion administrative et financière et garant des relations avec les experts comptables`,
            description: `Les relations avec le cabinet d'expertise comptable peuvent vous paraître chronophages. 

La comptabilité, les relations sociales, cela vous prend du temps sur le développement de votre business.

Je vous propose l'appui d'un expert pour vous décharger de la charge de suivi.`,
        },
    ];

    return (
        <div className={styles.missionPage}>
            <Header />
            <h1 className={styles.missionPage__title}>Comptabilité &amp; Gestion</h1>
            <Image className={styles.missionPage__background} src={Background} alt="photo d'une personne faisant de la comptabilité" />
            <div className={styles.cardsContainer}>
                {donneesCard.map((card, index) => (
                    <Cards
                        key={card.id}
                        index={index}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Page;
