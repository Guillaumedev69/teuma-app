import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/Formation.module.scss"


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
        <div>
            <Header />
            <h1>Formation</h1>
            <div className={styles.cardsGrid}>
                {donneesCard.map((card) => (
                    <Cards key={card.id} title={card.title} description={card.description} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default page;