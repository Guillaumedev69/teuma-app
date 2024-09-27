import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/Securite.module.scss"
import Cards from "@/components/Cards";


const page = () => {
    const donneesCard = [
        {
            id: 1,
            title: "Audit sécurité des biens et des personnes",
            description: "",
        },
        {
            id: 2,
            title: "Mise en place de DUERP",
            description: "",
        },
        {
            id: 3,
            title: "Aide à la gestion du CSE, du CSSCT et des IRP",
            description: "",
        },
        {
            id: 4,
            title: "Aide à la mise en place de procédures administratives et opérationnelles",
            description: "",
        },
    ]
    return (
        <div>
            <Header />
            <h1>Sécurité &amp; Audit</h1>
            <div className={styles.cardsGrid}>
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