
import Link from "next/link";

const page = () => {
    return (
        <>
            <h1>Missions Liste</h1>
            <Link href="/missions/comptabilite-gestion">Missions Compatabilité &amp; gestion</Link>
            <Link href="/missions/gestion-rh">Missions Gestion RH </Link>
            <Link href="/missions/developpement-commercial">Missions Développement commercial</Link>
            <Link href="/missions/securite-audit">Missions Sécurité & Audit</Link>
        </>
    );
};

export default page;