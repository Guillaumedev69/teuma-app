import Link from "next/link";
import ImgLogo from "./ImgLogo";
import Nav from "./Nav";
import styles from "@/styles/Header.module.scss";
import NavBurger from "./NavBurger";


const Header = () => {

    return (
        <header className={styles.header}>
            <Link href="/">
                <ImgLogo />
            </Link>
            <Nav />
            <NavBurger />
        </header>
    );
};

export default Header;
