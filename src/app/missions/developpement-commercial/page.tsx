import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/MissionPage.module.scss";
import Image from "next/image";
import Background from "@/images/background/backgroundDeveloppement.webp"
const page = () => {
    const donneesCard = [
        {
            id: 1,
            title: `Élaboration d'une stratégie commerciale`,
            description: `Vous avez un savoir faire, une clientèle mais n'avez ni le temps ni l'envie de prospecter ou de suivre un portefeuille clients ?

Je mets mon expérience en relation clients et en commerce à votre service. 

Bon commerçant, et toujours disponible pour mes clients, je saurai apporter du lien entre vous et votre clientèle.
            `,
        },
        {
            id: 2,
            title: `Administration du personnel.  
            Etablissement des contrats de travail et des DUE.
            Suivi des éléments variables de paie.`,
            description: `Savoir adapter son plan d'animation commerciale à la saisonnalité est essentiel. 

C'est ce qui permet à votre offre d'être comprise et pertinente. 

Fort de mon expérience dans la distribution spécialisée, je saurai écrire, suivre et animer un plan d'animation commerciale sur mesure pour votre activité.`,
        },
        {
            id: 3,
            title: `Droit social : analyse de cas en situation.
             Appui juridique et opérationnel aux dirigeants. 
            Aide à la gestion du disciplinaire`,
            description: `attente TEUMA SME.
            `,
        },
        {
            id: 4,
            title: `Analyse des KPI pour développer votre rentabilité: CA, marges, frais ...`,
            description: `Mon expérience comme manager et gestionnaire dans la grande distribution spécialisée me permet de savoir identifier, prioriser et animer les différents KPI nécessaires au bon fonctionnement de votre activité. 

Tout le monde peut faire du chiffre d'affaires, mais il n'est pas donné à tous de savoir le transformer en un business rentable.`,
        },
    ];

    return (
        <div className={styles.missionPage}>
            <Header />
            <h1 className={styles.missionPage__title}>Développement commercial</h1>
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

export default page;
