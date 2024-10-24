import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import styles from "@/styles/MissionPage.module.scss";
import Image from "next/image";
import Background from "@/images/background/backgroundSecurite.webp"

const page = () => {
    const donneesCard = [
        {
            id: 1,
            title: "Audit sécurité des biens et des personnes",
            description: `Ancien responsable d'un centre de profits, j'ai été garant  pendant 15 ans de sécurité  des biens et des personnes. 

Je saurai vous alerter, vous conseiller et vous former quant à vos obligations, vos axes d'amélioration et la mise en place des procédures adéquates.`,
        },
        {
            id: 2,
            title: "Mise en place de DUERP",
            description: `Le document unique d'évaluation des risques professionnels est un document obligatoire et essentiel à partir du premier salarié. 

Je vous propose mon analyse et mon expertise pour l'établir, le mettre en oeuvre et en suivre son plan d'action. 

Cela vous permettra de répondre à votre obligation légale de résultat sans investir de votre temps.`,
        },
        {
            id: 3,
            title: "Aide à la gestion du CSE, du CSSCT et des IRP",
            description: `Juriste en droit social et ancien président d'un CSE, je vous accompagne dans l'organisation des élections professionnelles, dans la préparation, le contenu et la tenue des réunions avec vos élus. 

Dans toute entreprise, le progrès économique appelle des demandes de progrès social. Le climat doit être parfaitement serein et franc pour allier les deux. `,
        },
        {
            id: 4,
            title: "Aide à la mise en place de procédures administratives et opérationnelles",
            description: `Mon passé de manager et de cadre dirigeant me permet de m'appuyer sur mes victoires comme sur les difficultés rencontrées dans l'organisation opérationnelle de mes différentes équipes. 

J'interviens donc avec un oeil extérieur d'opérationnel, me permettant de voir ce que parfois il n'est plus possible de constater dans ses habitudes quotidiennes.`,
        },
    ]
    return (
        <div className={styles.missionPage}>
            <Header />
            <h1 className={styles.missionPage__title}>Sécurité &amp; Audit</h1>
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