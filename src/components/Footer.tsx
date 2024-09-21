import Link from "next/link";
import { FC } from "react";
import ImgLogoLinkedin from "./ImgLogoLinkedin";
import ImgCall from "./ImgCall";
import ImgMail from "./ImgMail";



const Footer: FC = () => {
    return (
        <footer>
            <div>
                <p>
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
                </ul>
            </div>
            <Link href="/">À propos</Link>
            <Link href="/">Avis</Link>
            <Link href="/">Mention Légales</Link>
            <div><p>Contactez-nous</p>
                <a href="https://www.linkedin.com/in/cyrille-teuma-856a4a152/" target="blank"><ImgLogoLinkedin/></a>
                <a href="tel:0788235392"><ImgCall/></a>
                <a href="mailto:cyrille.teuma.pro@gmail.com"><ImgMail/></a></div>
                <div>
                    <p>Copyright &copy; TEUMA SME - Tous droits réservés - 2024</p>
                    <a href="https://destreeguillaume-devstree.fr/" target="blank">by DEV_STRÉE</a>
                </div>
        </footer>
    );
};

export default Footer;