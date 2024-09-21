import Link from "next/link";
import ImgLogo from "./ImgLogo";
import Nav from "./Nav";
import styles from "../styles/Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <ImgLogo />
            </Link>
            <Nav />
        </header>
    );
};

export default Header;
