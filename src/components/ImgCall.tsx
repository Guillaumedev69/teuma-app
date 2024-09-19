import Image from "next/image";
import IconCall from "../images/call-icon.svg"

const ImgCall = () => {
    return (
        <div>
            <Image src={IconCall} alt="icon d'un telephone" />
        </div>
    );
};

export default ImgCall;