import Image from "next/image";
import IconMail from "../images/envelope-regular.svg"
import styles from "../styles/global.module.scss"

const ImgMail2 = () => {
    return (
        <div className={styles.icon}>
            <Image src={IconMail} alt="icon d'une enveloppe" />
        </div>
    );
};

export default ImgMail2;