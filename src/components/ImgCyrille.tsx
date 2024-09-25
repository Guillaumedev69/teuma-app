import Image from "next/image";
import Cyrille from "@/images/photoCyrille.webp"


const ImgCyrille = () => {
    return (
        <div>
            <Image src={Cyrille} alt="Photo du dirigeant de l'entreprise Teuma SME" height={583} width={442} />
        </div>
    );
};

export default ImgCyrille;