import Image from "next/image";
import Logo from "@/images/logoTeuma.webp"
import styles from "@/styles/ImgLogo.module.scss"



const ImgLogo = () => {
    return (
        <div className={styles.divLogo}>
            <Image className={styles.img} src={Logo} alt="Logo de la société Teuma SME" height={133} width={300} priority={true}/>
        </div>
    );
};

export default ImgLogo;