"use client";
import styles from "@/styles/Cards.module.scss";
import { useState } from "react";

interface CardsProps {
    title: string;
    description: string;
    index: number;
}

const Cards: React.FC<CardsProps> = ({ title, description, index }) => {
    const [cartesRetournees, setCartesRetournees] = useState<number[]>([]); // Typage correct du state

    const gererClicCarte = (index: number) => {
        setCartesRetournees((cartesPrecedentes) => {
            const estDejaRetournee = cartesPrecedentes.includes(index);
            if (estDejaRetournee) {
                return cartesPrecedentes.filter((indiceCarte) => indiceCarte !== index);
            } else {
                return [...cartesPrecedentes, index];
            }
        });
    };

    return (
        <div className={styles.cardsContainer}>
            <div
                className={`${styles.cards} ${cartesRetournees.includes(index) ? styles.flipped : ""}`}
                key={index}
                onClick={() => gererClicCarte(index)}
            >
                <div className={styles.cardsFront}>
                    <h2 className={styles.cardsTitle}>{title}</h2>
                </div>
                <div className={styles.cardsBack}>
                    <p className={styles.cardsDescription}>{description}</p>
                    <a className={styles.cardsLink} href="/contact">contactez-nous</a>
                </div>
            </div>
        </div>
    );
};

export default Cards;
