import BtnContact from "@/components/BtnContact"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ImgCyrille from "@/components/ImgCyrille"
import ReviewGoogle from "@/components/ReviewGoogle"


export default function Home() {
    return (<div>
        <Header />
        <h1>
            Stratégie<br />
            Management<br />
            Expertise
        </h1>
        <BtnContact />
        <ImgCyrille />
        <div>
            <p>À la recherche de solutions ponctuelles ou durables pour gérer et développer votre entreprise ?</p>
        </div>
        <div>
            <p>ACCOMPAGNEMENT
                DES DIRIGEANTS
                dans leur stratégie
                tactique et
                operationnelle</p>
        </div>
        <div><p>CADRE
            EXTERNALISÉ
            au servide
            des TPE et PME</p>
        </div>
        <h2>Vos avis sont importants</h2>
        <ReviewGoogle />
        <Footer />
    </div>
    )
}