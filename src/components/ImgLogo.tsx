import Image from "next/image";
import Logo from "../images/logoTeuma.webp"



const ImgLogo = () => {
    return (
        <div>
            <Image src={Logo} alt="Logo de la société Teuma SME" height={133} width={300} priority={true}/>
        </div>
    );
};

export default ImgLogo;