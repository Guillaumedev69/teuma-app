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



export default function Home() {
    return (<div>
        <Header />
        <div className={styles.h1BtnImgContain}>
            <div className={styles.h1BtnContain}>
                <h1 className={styles.titleh1}>
                    Stratégie<br />
                    Management<br />
                    Expertise
                </h1>
                <BtnContact />
            </div>
            <ImgCyrille />
        </div>
        <div className={styles.sectionHexagone}>
            <div className={styles.hexagon1Container}>
                <Image src={Polygon1} alt="hexagone" className={styles.polygon1} />
                <div className={styles.hexagoneFirst}>
                    <p className={styles.hexagoneFirstP}>À la recherche de solutions ponctuelles ou durables
                        pour gérer et développer votre entreprise ?
                    </p>
                </div>
                <Image src={Polygon1bis} alt="hexagone" className={styles.polygon1bis} />
            </div>
            <div className={styles.hexagone2Container}>
                <Image src={Polygon2bis} alt="hexagone" className={styles.polygon2bis} />
                <div className={styles.hexagoneSecond}>
                    <p className={styles.hexagoneSecondP}>ACCOMPAGNEMENT
                        DES DIRIGEANTS
                        dans leur stratégie
                        tactique et
                        operationnelle
                    </p>
                </div>
                <Image src={Polygon2} alt="hexagone" className={styles.polygon2} />
            </div>
            <div className={styles.hexagone3Container}>
                <Image src={Polygon3bis} alt="hexagone" className={styles.polygon3bis} />
                <div className={styles.hexagoneThird}>
                    <p className={styles.hexagoneThirdP}>CADRE
                        EXTERNALISÉ
                        au servide
                        des TPE et PME
                    </p>
                </div>
                <Image src={Polygon3} alt="hexagone" className={styles.polygon3} />
            </div>
        </div>
        <h2>Vos avis sont importants</h2>
        <ReviewGoogle />
        <Footer />
    </div>
    )
}