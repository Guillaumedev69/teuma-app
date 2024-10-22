import Image from 'next/image';
import BackgroundIntroImg from "@/images/background/backgroundIntro1.webp";


const BackgroundIntro = () => {
    return (
        <div>
            <Image src={BackgroundIntroImg} alt="image pc sur un bureau avec des dossiers" />
        </div>
    );
};

export default BackgroundIntro;