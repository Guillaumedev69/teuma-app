import React, { FC } from 'react';
import LogoLinkedIn from "../images/linkedin-icon.svg"
import Image from "next/image";

const ImgLogoLinkedin: FC = () => {
    return (
        <div>
            <Image src={LogoLinkedIn} alt="Logo de LinkedIn" />
        </div>
    );
};

export default ImgLogoLinkedin;