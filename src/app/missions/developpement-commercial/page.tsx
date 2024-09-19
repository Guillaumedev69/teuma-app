import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FC } from "react";


const page: FC = () => {
    const donneesCard = [
        {
            id: 1,
            title: "Élaboration d’une stratégie commerciale",
            descricription: "",
        },
        {
            id: 2,
            title: "Construction de plan d’animation commerciale ONLINE et OFFLINE",
            description: "",
        },
        {
            id: 3,
            title: "Animation de votre force de vente : débriefing, fixation et suivi des objectifs",
            description: "",
        },
        {
            id: 4,
            title: "Analyse des KPI pour développer votre rentabilité: CA, marges, frais ...",
            description: "",
        },

    ]
    return (
        <div>
            <Header />
            <h1>Développement commercial</h1>
            <Footer />
        </div>
    );
};

export default page;