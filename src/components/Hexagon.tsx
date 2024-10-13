import styles from "@/styles/Hexagon.module.scss"
import Image from "next/image"
import Polygon1 from "@/images/Polygon-1.webp"
import Polygon1bis from "@/images/Polygon-1bis.webp"
import Polygon2 from "@/images/Polygon-2.webp"
import Polygon2bis from "@/images/Polygon-2bis.webp"
import Polygon3 from "@/images/Polygon-3.webp"
import Polygon3bis from "@/images/Polygon-3bis.webp"
import PolygonMini1 from "@/images/PolygonMini1.webp"
import PolygonMini2 from "@/images/PolygonMini2.webp"
import PolygonMini3 from "@/images/PolygonMini3.webp"
import PolygonMini4 from "@/images/PolygonMini4.webp"
import PolygonMini5 from "@/images/PolygonMini5.webp"
import PolygonMini6 from "@/images/PolygonMini6.webp"
import PolygonMini7 from "@/images/PolygonMini7.webp"
import PolygonMini8 from "@/images/PolygonMini8.webp"
import PolygonMini9 from "@/images/PolygonMini9.webp"

const Hexagon = () => {
    return (
        <section className={styles.sectionHexagon}>
            <div className={styles.sectionHexagon__background}>
                <div className={styles.backgroundLine1}>
                    <Image src={Polygon1} alt="hexagone" className={styles.polygon1} />
                    <Image src={PolygonMini1} alt="hexagone" className={styles.polygonMini1} />
                    <Image src={PolygonMini1} alt="hexagone" className={styles.polygonMini1bis} />
                    <Image src={PolygonMini2} alt="hexagone" className={styles.polygonMini2} />
                    <Image src={PolygonMini3} alt="hexagone" className={styles.polygonMini3} />
                    <Image src={Polygon1bis} alt="hexagone" className={styles.polygon1bis1} />
                    <Image src={PolygonMini2} alt="hexagone" className={styles.polygonMini2bis} />
                </div>
                <div className={styles.backgroundLine2}>
                    <Image src={PolygonMini4} alt="hexagone" className={styles.polygonMini4} />
                    <Image src={PolygonMini5} alt="hexagone" className={styles.polygonMini5} />
                    <Image src={Polygon2} alt="hexagone" className={styles.polygon2} />
                    <Image src={Polygon2bis} alt="hexagone" className={styles.polygon2bis} />
                    <Image src={PolygonMini6} alt="hexagone" className={styles.polygonMini6} />
                    <Image src={PolygonMini6} alt="hexagone" className={styles.polygonMini6bis} />
                    <Image src={PolygonMini5} alt="hexagone" className={styles.polygonMini5bis} />
                </div>
                <div className={styles.backgroundLine3}>
                    <Image src={Polygon3bis} alt="hexagone" className={styles.polygon3ter} />
                    <Image src={PolygonMini7} alt="hexagone" className={styles.polygonMini7bis} />
                    <Image src={Polygon3} alt="hexagone" className={styles.polygon3} />
                    <Image src={Polygon3bis} alt="hexagone" className={styles.polygon3bis} />
                    <Image src={PolygonMini9} alt="hexagone" className={styles.polygonMini9} />
                    <Image src={PolygonMini9} alt="hexagone" className={styles.polygonMini9bis} />
                    <Image src={PolygonMini7} alt="hexagone" className={styles.polygonMini7} />
                    <Image src={PolygonMini8} alt="hexagone" className={styles.polygonMini8} />
                    <Image src={PolygonMini9} alt="hexagone" className={styles.polygonMini9ter} />
                </div>
            </div>
            <div className={styles.sectionHexagon__content}>
                <div className={styles.hexagonFirst}>
                    <p className={styles.hexagonFirstP}>À la recherche de solutions ponctuelles ou durables
                        pour gérer et développer votre entreprise ?
                    </p>
                </div>
                <div className={styles.hexagonSecond}>
                    <p className={styles.hexagonSecondP}>ACCOMPAGNEMENT
                        DES DIRIGEANTS
                        dans leur stratégie
                        tactique et
                        operationnelle
                    </p>
                </div>
                <div className={styles.hexagonThird}>
                    <p className={styles.hexagonThirdP}>CADRE
                        EXTERNALISÉ
                        au servide
                        des TPE et PME
                    </p>
                </div>
            </div>
        </section>

    );
};

export default Hexagon;