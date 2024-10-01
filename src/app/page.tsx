import BtnContact from "@/components/BtnContact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hexagon from "@/components/Hexagon"
import ImgCyrille from "@/components/ImgCyrille"
import ReviewGoogle from "@/components/ReviewGoogle"

import styles from "@/styles/Home.module.scss"




export default function Home() {
    return (
        <div className={styles.homePage}>
            <Header />
            <section className={styles.sectionIntro}>
                <div className={styles.h1BtnContain}>
                    <h1 className={styles.titleh1}>
                        Stratégie<br />
                        Management<br />
                        Expertise
                    </h1>
                    <BtnContact />
                </div>
                <ImgCyrille />
            </section>
            <Hexagon />
            <section className={styles.sectionReview}>
                <h2>Vos avis sont importants</h2>
                <ReviewGoogle />
            </section>
            <Footer />
        </div>
    )
}