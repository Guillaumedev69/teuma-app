import LogoLinkedIn from "@/images/linkedin-icon.svg"
import Image from "next/image";

const ImgLogoLinkedin= () => {
    return (
        <div>
            <Image src={LogoLinkedIn} alt="Logo de LinkedIn" />
        </div>
    );
};

export default ImgLogoLinkedin;