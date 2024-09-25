import Image from "next/image";
import ImgPhone2 from "../images/phone-solid.svg"
import styles from "@/styles/Global.module.scss"
const ImgCall2 = () => {
    return (
        <div className={styles.icon}>
            <Image src={ImgPhone2} alt="icon d'un téléphone"  />
        </div>
    );
};

export default ImgCall2;