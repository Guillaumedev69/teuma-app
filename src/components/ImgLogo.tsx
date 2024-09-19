import Image from "next/image";
import Logo from "../images/logoTeuma.png"
import { FC } from "react";


const ImgLogo: FC = () => {
    return (
        <div>
            <Image src={Logo} alt="Logo de la société Teuma SME" height={133} width={300}/>
        </div>
    );
};

export default ImgLogo;