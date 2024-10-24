import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionAbout from "@/components/SectionAbout";
import styles from "@/styles/AboutPage.module.scss";

export default function about() {
    return (
        <div className={styles.Aboutpage}>
            <Header />
            <SectionAbout />
            <Footer />
        </div>
    )
}