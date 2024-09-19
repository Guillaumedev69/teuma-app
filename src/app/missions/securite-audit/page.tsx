import Footer from "@/components/Footer";
import Header from "@/components/Header";


import { FC } from "react";


const page: FC = () => {
    const donneesCard = [
        {
            id: 1,
            title: "Audit sécurité des biens et des personnes",
            descricription: "",
        },
        {
            id: 2,
            title: "Mise en place de DUERP",
            description: "",
        },
        {
            id: 3,
            title: "Aide à la gestion du CSE, du CSSCT et des IRP",
            description: "",
        },
        {
            id: 4,
            title: "Aide à la mise en place de procédures administratives et opérationnelles",
            description: "",
        },
    ]
    return (
        <div>
            <Header />
            <h1>Sécurité &amp; Audit</h1>

            <Footer />
        </div>
    );
};

export default page;