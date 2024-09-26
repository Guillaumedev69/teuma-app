import Image from "next/image";
import Cyrille from "@/images/photoCyrille.webp"
import styles from "@/styles/ImgCyrille.module.scss"

const ImgCyrille = () => {
    return (
        <div className={styles.imgContain}>
            <div className={styles.backgroundImg}></div>
            <Image className={styles.img} src={Cyrille} alt="Photo du dirigeant de l'entreprise Teuma SME" height={583} width={442} />
        </div>
    );
};

export default ImgCyrille;