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
        <section className={styles.sectionHexagone}>
            <Image src={PolygonMini1} alt="hexagone" className={styles.polygonMini1} />
            <Image src={PolygonMini1} alt="hexagone" className={styles.polygonMini1bis} />
            <Image src={PolygonMini2} alt="hexagone" className={styles.polygonMini2} />
            <Image src={PolygonMini3} alt="hexagone" className={styles.polygonMini3} />
            <Image src={Polygon1} alt="hexagone" className={styles.polygon1} />
            <div className={styles.hexagoneFirst}>
                <p className={styles.hexagoneFirstP}>À la recherche de solutions ponctuelles ou durables
                    pour gérer et développer votre entreprise ?
                </p>
            </div>
            <Image src={Polygon1bis} alt="hexagone" className={styles.polygon1bis1} />
            <Image src={PolygonMini2} alt="hexagone" className={styles.polygonMini2bis} />
            <Image src={Polygon2bis} alt="hexagone" className={styles.polygon2bis} />
            <Image src={PolygonMini4} alt="hexagone" className={styles.polygonMini4} />
            <Image src={PolygonMini5} alt="hexagone" className={styles.polygonMini5} />
            <Image src={PolygonMini6} alt="hexagone" className={styles.polygonMini6} />
            <Image src={PolygonMini6} alt="hexagone" className={styles.polygonMini6bis} />
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
            <Image src={PolygonMini7} alt="hexagone" className={styles.polygonMini7} />
            <Image src={PolygonMini8} alt="hexagone" className={styles.polygonMini8} />
            <Image src={PolygonMini9} alt="hexagone" className={styles.polygonMini9} />
            <Image src={PolygonMini7} alt="hexagone" className={styles.polygonMini7bis} />
            <Image src={Polygon3bis} alt="hexagone" className={styles.polygon3bis} />
            <div className={styles.hexagoneThird}>
                <p className={styles.hexagoneThirdP}>CADRE
                    EXTERNALISÉ
                    au servide
                    des TPE et PME
                </p>
            </div>
            <Image src={Polygon3} alt="hexagone" className={styles.polygon3} />
            <Image src={PolygonMini9} alt="hexagone" className={styles.polygonMini9bis} />
            <Image src={PolygonMini9} alt="hexagone" className={styles.polygonMini9ter} />
        </section>

    );
};

export default Hexagon;