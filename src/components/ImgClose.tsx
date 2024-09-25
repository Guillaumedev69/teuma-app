import Image from "next/image";
import IconClose from "../images/xmark-solid.svg";
import styles from "@/styles/Global.module.scss"
const ImgClose = () => {
    return (
        <div className={styles.iconClose}>
            <Image src={IconClose} alt="symbole d'une croix " />
        </div>
    );
};

export default ImgClose;