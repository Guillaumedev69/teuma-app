import styles from "@/styles/Cards.module.scss";

// Définir le type des props
interface CardsProps {
    title: string;
    description: string;
}

const Cards: React.FC<CardsProps> = ({ title, description }) => {
    return (
        <div className={styles.cardsContainer}>
            <div className={styles.cards}>
                <div className={styles.cardsFront}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.cardsBack}>
                    <p>{description}</p>
                    <a href="/contact">contactez-nous</a>
                </div>
            </div>
        </div>
    );
};

export default Cards;