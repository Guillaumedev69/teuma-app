import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hexagon from "@/components/Hexagon"
import ReviewGoogle from "@/components/ReviewGoogle"
import SectionAbout from "@/components/SectionAbout"
import SectionIntro from "@/components/SectionIntro"
import styles from "@/styles/Home.module.scss"




export default function Home() {
    return (
        <div className={styles.homePage}>
            <Header />
            <main className={styles.mainHomePage} >
                <SectionIntro/>
                <Hexagon />
                <section className={styles.sectionReview}>
                    <h2>Vos avis sont importants</h2>
                    <ReviewGoogle />
                </section>
                <SectionAbout/>
            </main>
            <Footer />
        </div>
    )
}