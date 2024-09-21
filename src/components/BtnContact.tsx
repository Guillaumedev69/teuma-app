"use client";
import ImgCall2 from "./ImgCall2";
import ImgClose from "./ImgClose";
import ImgMail2 from "./ImgMail2";
import { useState } from "react";
import styles from "../styles/BtnContact.module.scss"


const BtnContact = () => {
    const [isBulleVisible, setIsBulleVisible] = useState(false);
    const [isBtnInvisible, setIsBtnInvisible] = useState(false);
    const handleButtonClick = () => {
        setIsBulleVisible(!isBulleVisible); setIsBtnInvisible(!isBtnInvisible);
    };
    return (
        <div>
            {!isBtnInvisible && (<button className={styles.btnContact} onClick={handleButtonClick} aria-expanded={isBulleVisible}>
                Contactez-nous
            </button>)}
            {isBulleVisible && (<div className={styles.bulleContact}>
                <a href="mailto:cyrille.teuma.pro@gmail.com"><ImgMail2 /></a>
                <a href="tel:0788235392"><ImgCall2 /></a>
                <button onClick={handleButtonClick}><ImgClose /></button>
            </div>)}
        </div>

    );
};

export default BtnContact;