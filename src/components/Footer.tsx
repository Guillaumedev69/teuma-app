import Link from "next/link";
import ImgLogoLinkedin from "./ImgLogoLinkedin";
import ImgCall from "./ImgCall";
import ImgMail from "./ImgMail";
import styles from "@/styles/Footer.module.scss"



const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerFirst}>
                <div className={styles.missionContainer}>
                    <p className={styles.missionTitle}>
                        Nos missions
                    </p>
                    <ul>
                        <Link href="/missions/comptabilite-gestion">
                            <li>COMPTABILITÉ & GESTION</li>
                        </Link>
                        <Link href="/missions/gestion-rh">
                            <li>GESTION RH</li>
                        </Link>
                        <Link href="/missions/developpement-commercial">
                            <li>DÉVELOPPEMENT COMMERCIAL</li>
                        </Link>
                        <Link href="/missions/securite-audit">
                            <li>SÉCURITÉ ET AUDIT</li>
                        </Link>
                        <Link href="/missions/formation">
                            <li>FORMATION</li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.linkContainer}>

                    <Link href="/about">À propos</Link>
                    <Link href="/review">Avis</Link>
                    <Link href="/legalnotices">Mention Légales</Link>
                </div>
                <div className={styles.contactContainer}>
                    <Link href="/contact">Contactez-nous</Link>
                    <div className={styles.linkContactContainer}>

                        <a href="https://www.linkedin.com/in/cyrille-teuma-856a4a152/" target="blank"><ImgLogoLinkedin /></a>
                        <a href="tel:0788235392"><ImgCall /></a>
                        <a href="mailto:cyrille.teuma.pro@gmail.com"><ImgMail /></a>
                    </div>
                </div>
            </div>
            <div className={styles.footerSecond}>
                <p>Copyright &copy; TEUMA SME - Tous droits réservés - 2024</p>
                <a href="https://destreeguillaume-devstree.fr/" target="blank">Create by DEV_STRÉE</a>
            </div>
        </footer>
    );
};

export default Footer;