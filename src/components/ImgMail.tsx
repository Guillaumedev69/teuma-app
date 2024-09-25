import Image from "next/image";
import IconMail from "@/images/mail_icon.svg"
const ImgMail = () => {
    return (
        <div>
            <Image src={IconMail} alt="icon d'une enveloppe" />
        </div>
    );
}
export default ImgMail;