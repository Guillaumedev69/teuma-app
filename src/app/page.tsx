import BtnContact from "@/components/BtnContact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ImgCyrille from "@/components/ImgCyrille"
import ReviewGoogle from "@/components/ReviewGoogle"
import Polygon1 from "@/images/Polygon-1.webp"
import Polygon1bis from "@/images/Polygon-1bis.webp"
import Polygon2 from "@/images/Polygon-2.webp"
import Polygon2bis from "@/images/Polygon-2bis.webp"
import Polygon3 from "@/images/Polygon-3.webp"
import Polygon3bis from "@/images/Polygon-3bis.webp"
import styles from "@/styles/Home.module.scss"
import Image from "next/image"
import PolygonMobile1 from "@/images/PolygonMobile1.webp"
import PolygonMobile2 from "@/images/PolygonMobile2.webp"
import PolygonMobile3 from "@/images/PolygonMobile3.webp"
import PolygonMobile4 from "@/images/PolygonMobile4.webp"
import PolygonMobile5 from "@/images/PolygonMobile5.webp"
import PolygonMobile6 from "@/images/PolygonMobile6.webp"
import PolygonMobile7 from "@/images/PolygonMobile7.webp"
import PolygonMobile8 from "@/images/PolygonMobile8.webp"
import PolygonMobile9 from "@/images/PolygonMobile9.webp"



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
            <section className={styles.sectionHexagone}>
                <div className={styles.hexagone3Container}>
                <Image src={PolygonMobile7} alt="hexagone" className={styles.polygonMobile7}/>
                <Image src={PolygonMobile8} alt="hexagone" className={styles.polygonMobile8}/>
                <Image src={PolygonMobile9} alt="hexagone" className={styles.polygonMobile9}/>
                <Image src={PolygonMobile7} alt="hexagone" className={styles.polygonMobile7bis}/>
                    <Image src={Polygon3bis} alt="hexagone" className={styles.polygon3bis} />
                    <div className={styles.hexagoneThird}>
                        <p className={styles.hexagoneThirdP}>CADRE
                            EXTERNALISÉ
                            au servide
                            des TPE et PME
                        </p>
                    </div>
                    <Image src={Polygon3} alt="hexagone" className={styles.polygon3} />
                    <Image src={PolygonMobile9} alt="hexagone" className={styles.polygonMobile9bis}/>
                    <Image src={PolygonMobile9} alt="hexagone" className={styles.polygonMobile9ter}/>
                    <BtnContact />
                </div>
                <div className={styles.hexagon1Container}>
                    <Image src={PolygonMobile1} alt="hexagone" className={styles.polygonMobile1}/>
                    <Image src={PolygonMobile1} alt="hexagone" className={styles.polygonMobile1bis}/>
                    <Image src={PolygonMobile2} alt="hexagone" className={styles.polygonMobile2}/>
                    <Image src={PolygonMobile3} alt="hexagone" className={styles.polygonMobile3}/>
                    <Image src={PolygonMobile2} alt="hexagone" className={styles.polygonMobile2bis}/>
                    <Image src={Polygon1} alt="hexagone" className={styles.polygon1} />
                    <div className={styles.hexagoneFirst}>
                        <p className={styles.hexagoneFirstP}>À la recherche de solutions ponctuelles ou durables
                            pour gérer et développer votre entreprise ?
                        </p>
                    </div>
                    <Image src={Polygon2bis} alt="hexagone" className={styles.polygon2bis} />
                </div>
                <div className={styles.hexagone2Container}>
                <Image src={PolygonMobile4} alt="hexagone" className={styles.polygonMobile4}/>
                <Image src={PolygonMobile5} alt="hexagone" className={styles.polygonMobile5}/>
                <Image src={PolygonMobile6} alt="hexagone" className={styles.polygonMobile6}/>
                <Image src={PolygonMobile6} alt="hexagone" className={styles.polygonMobile6bis}/>
                    <Image src={Polygon1bis} alt="hexagone" className={styles.polygon1bis1} />
                    <Image src={Polygon2} alt="hexagone" className={styles.polygon2} />
                    <div className={styles.hexagoneSecond}>
                        <p className={styles.hexagoneSecondP}>ACCOMPAGNEMENT
                            DES DIRIGEANTS
                            dans leur stratégie
                            tactique et
                            operationnelle
                        </p>
                    </div>
                    <Image src={Polygon3bis} alt="hexagone" className={styles.polygon3ter} />

                </div>
                
            </section>
            <section className={styles.sectionReview}>
                <h2>Vos avis sont importants</h2>
                <ReviewGoogle />
            </section>
            <Footer />
        </div>
    )
}