import styles from "@/styles/Hexagon.module.scss"
import Image from "next/image"
import Polygon1 from "@/images/Polygon-1.webp"
import Polygon1bis from "@/images/Polygon-1bis.webp"
import Polygon2 from "@/images/Polygon-2.webp"
import Polygon2bis from "@/images/Polygon-2bis.webp"
import Polygon3 from "@/images/Polygon-3.webp"
import Polygon3bis from "@/images/Polygon-3bis.webp"
/*import PolygonMini1 from "@/images/PolygonMini1.webp"*/
/*import PolygonMini2 from "@/images/PolygonMini2.webp"*/
import PolygonMini3 from "@/images/PolygonMini3.webp"
/*import PolygonMini4 from "@/images/PolygonMini4.webp"*/
/*import PolygonMini5 from "@/images/PolygonMini5.webp"*/
import PolygonMini6 from "@/images/PolygonMini6.webp"
import PolygonMini7 from "@/images/PolygonMini7.webp"
/*import PolygonMini8 from "@/images/PolygonMini8.webp"*/
/*import PolygonMini9 from "@/images/PolygonMini9.webp"*/

const Hexagon = () => {
    return (
        <section className={styles.sectionHexagone}>
            <Image src={Polygon1} alt="hexagone" className={styles.polygon1} />
            <div className={styles.line1}>
                <div className={styles.polygonMini1}></div>
                <div className={styles.polygonMini1bis}></div>
            </div>
            <div className={styles.line2}>
                <div className={styles.polygonMini2}></div>
                <div className={styles.hexagoneFirst}>
                    <p className={styles.hexagoneFirstP}>À la recherche de solutions ponctuelles ou durables
                        pour gérer et développer votre entreprise ?
                    </p>
                </div>
                <Image src={PolygonMini3} alt="hexagone" className={styles.polygonMini3} />
            </div>
            <div className={styles.line3}>
                <Image src={Polygon1bis} alt="hexagone" className={styles.polygon1bis1} />
                <div className={styles.polygonMini2bis}></div>
                <div className={styles.polygonMini4}></div>
                <div className={styles.polygonMini5}></div>
            </div>
            <div className={styles.line4}>
                <Image src={Polygon2} alt="hexagone" className={styles.polygon2} />
                <Image src={Polygon2bis} alt="hexagone" className={styles.polygon2bis} />
                <Image src={PolygonMini6} alt="hexagone" className={styles.polygonMini6} />
                <div className={styles.hexagoneSecond}>
                    <p className={styles.hexagoneSecondP}>ACCOMPAGNEMENT
                        DES DIRIGEANTS
                        dans leur stratégie
                        tactique et
                        operationnelle
                    </p>
                </div>
                <Image src={PolygonMini6} alt="hexagone" className={styles.polygonMini6bis} />
            </div>
            <div className={styles.line5}>
                <div className={styles.polygonMini5bis}></div>
                <Image src={Polygon3bis} alt="hexagone" className={styles.polygon3ter} />
                <Image src={PolygonMini7} alt="hexagone" className={styles.polygonMini7bis} />
                <Image src={Polygon3} alt="hexagone" className={styles.polygon3} />
                <Image src={Polygon3bis} alt="hexagone" className={styles.polygon3bis} />
                <div className={styles.polygonMini9}></div>
                <div className={styles.polygonMini9bis}></div>
                <Image src={PolygonMini7} alt="hexagone" className={styles.polygonMini7} />
                
            </div>
            <div className={styles.line6}>
                <div className={styles.hexagoneThird}>
                    <p className={styles.hexagoneThirdP}>CADRE
                        EXTERNALISÉ
                        au servide
                        des TPE et PME
                    </p>
                </div>
                <div className={styles.polygonMini8}></div>
                <div className={styles.polygonMini9ter}></div>
            </div>
        </section>

    );
};

export default Hexagon;