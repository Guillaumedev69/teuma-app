"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/NavBurger.module.scss";

const NavBurger: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.navBurger}>
            <label className={styles.burgerButton} htmlFor="check">
                <input
                    type="checkbox"
                    id="check"
                    checked={isOpen}
                    onChange={toggleMenu}
                    className={styles.hiddenCheckbox}
                />
                <span className={styles.top}></span>
                <span className={styles.middle}></span>
                <span className={styles.bottom}></span>
            </label>

            {isOpen && (
                <div className={styles.menu}>
                    <Link href="/" onClick={toggleMenu}>Accueil</Link>
                    <Link href="/about" onClick={toggleMenu}>À propos</Link>
                    <Link href="/missions/comptabilite-gestion" onClick={toggleMenu}>Comptabilité &amp; Gestion</Link>
                    <Link href="/missions/gestion-rh" onClick={toggleMenu}>Gestion RH</Link>
                    <Link href="/missions/developpement-commercial" onClick={toggleMenu}>Développement commercial</Link>
                    <Link href="/missions/securite-audit" onClick={toggleMenu}>Sécurité &amp; Audit</Link>
                    <Link href="/missions/formation" onClick={toggleMenu}>Formation</Link>
                    <div className={styles.separation}></div>
                    <Link href="/contact" onClick={toggleMenu} className={styles.contactLink}>Contactez-nous</Link>
                </div>
            )}
        </div>
    );
};

export default NavBurger;
