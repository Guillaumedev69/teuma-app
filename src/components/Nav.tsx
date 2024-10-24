"use client";
import { useState } from "react";
import Link from "next/link";
import BtnContact from "./BtnContact";
import styles from "@/styles/Nav.module.scss";

const Nav = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <nav className={styles.nav}>
            <Link href="/">Accueil</Link>
            <Link href="/about">À propos</Link>
            <button className={styles.btnMission} onClick={handleButtonClick}>
                <p>
                    Nos missions
                </p>
            </button>
            {isVisible && (
                <ul className={styles.listMission}>
                    <li>
                        <Link href="/missions/comptabilite-gestion">
                            Comptabilité &amp; Gestion
                        </Link>
                    </li>
                    <li className={styles.break}>\</li>
                    <li>
                        <Link href="/missions/gestion-rh">Gestion RH</Link>
                    </li>
                    <li className={styles.break}>\</li>
                    <li>
                        <Link href="/missions/developpement-commercial">
                            Développement commercial
                        </Link>
                    </li>
                    <li className={styles.break}>\</li>
                    <li>
                        <Link href="/missions/securite-audit">
                            Sécurité &amp; Audit
                        </Link>
                    </li>
                    <li className={styles.formationNone}>
                        <Link href="/missions/formation">
                            Formation
                        </Link>
                    </li>
                </ul>
            )}
            <BtnContact />
        </nav>
    );
};

export default Nav;