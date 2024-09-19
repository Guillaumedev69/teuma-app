import Link from "next/link";
import ImgLogo from "./ImgLogo";
import { FC } from "react";
import BtnContact from "./BtnContact";

const Header: FC = () => {
    return (
        <header className="">
            <Link href="">
                <ImgLogo />
            </Link>
            <Link href="">Accueil</Link>
            <Link href="">À propos</Link>
            <button >Nos missions</button>
            <ul>
                <li>
                    <Link href="/missions/comptabilite-gestion">
                        Comptabilité &amp; Gestion
                    </Link>
                </li>
                <li><Link href="/missions/gestion-rh">
                    Gestion RH
                </Link>
                </li>
                <li>
                    <Link href="/missions/developpement-commercial">
                        Développement commercial
                    </Link>
                </li>
                <li><Link href="/missions/securite-audit">
                    Sécurité &amp; Audit
                </Link>
                </li>
            </ul>
            <BtnContact />
        </header>
    );
};

export default Header;