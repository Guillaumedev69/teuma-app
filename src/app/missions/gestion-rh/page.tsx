import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FC } from "react";


const page: FC = () => {
    const donneesCard = [
        {
            id: 1,
            title: "Gestion du recrutement externalisé",
            descricription: "",
        },
        {
            id: 2,
            title: "Administration du personnel, établissement des contrats de travail et des DUE",
            description: "",
        },
        {
            id: 3,
            title: "Droit social : analyse de cas en situation. Partie salarié, Partie employeur, Aide à la gestion du disciplinaire",
            description: "",
        },
        {
            id: 4,
            title: "Management d’équipe, optimisation des organisations d’équipe, briefings et entretiens des collaborateurs",
            description: "",
        },
        {
            id: 5,
            title: "Gestion de la formation et animation des sessions",
            description: "",
        },
    ]
    return (

        <div>
            <Header />
            <h1>Gestion RH</h1>
            <Footer />
        </div>
    );
};

export default page;