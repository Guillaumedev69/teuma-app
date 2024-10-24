import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/MissionPage.module.scss";
import Image from "next/image";
import Background from "@/images/background/backgroundFormation.webp"

const page = () => {
    const donneesCard = [
        {
            id: 1,
            title: ``,
            description: ``,
        },
        {
            id: 2,
            title: ``,
            description: ``,
        },
        {
            id: 3,
            title: ``,
            description: ``,
        },
        {
            id: 4,
            title: ``,
            description: ``,
        },
        {
            id: 5,
            title: ``,
            description: ``,
        },
    ];
    return (
        <div className={styles.missionPage}>
            <Header />
            <h1 className={styles.missionPage__title}>Formation</h1>
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