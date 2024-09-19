import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FC } from "react";


const page: FC = () => {
    const donneesCard = [
        {id: 1,
            title:"Gestion de la balance clients et comptabilité clients",
            descricription:"",
        },
        {id:2,
            title:"Gestion des frais généraux et comptabilité fournisseurs",
            description:"",
        },
        {id:3,
            title:"Pilotage et optimisation du compte d’exploitation",
            description:"",
        },
        {id:4,
            title:"Développement du résultat opérationnel de votre entreprise",
            description:"",
        },
        {id:5,
            title:"Saisies comptables et gestion des relations avec les experts comptables",
            description:"",
        },
    ]
    return (
        <div>
            <Header/>
            <h1>Comptabilite &amp; Gestion</h1>
            <Footer/>
        </div>
    );
};

export default page;