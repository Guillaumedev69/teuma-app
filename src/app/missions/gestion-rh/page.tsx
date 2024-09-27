import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "@/styles/GestionRh.module.scss"
import Cards from "@/components/Cards";


const page = () => {
    const donneesCard = [
        {
            id: 1,
            title: `Gestion du recrutement externalisé`,
            description: `

Le recrutement est le premier axe RH stratégique.

 Identifier les bons profils, diffuser des annonces attractives, sourcer les candidats, les rencontrer, et faire les bons choix.

Je peux également intervenir dans l’intégration, la mise en place d’un onboarding et d’un plan de formation, pour  limiter le turn-over.

`,
        },
        {
            id: 2,
            title: `Administration du personnel.  
Etablissement des contrats de travail et des DUE.
Suivi des éléments variables de paie.`,
            description: `Je m’occupe pour vous du rassemblement des différents éléments variables de paie. 

Primes, absences, arrêts de travail.

Pour mise en relation avec le cabinet d’expertise comptable en charge des paies, ou pour établissement des bulletins de paie. `,
        },
        {
            id: 3,
            title: `Droit social : analyse de cas en situation.
 Appui juridique et opérationnel aux dirigeants. 
Aide à la gestion du disciplinaire`,
            description: `Juriste en droit social et manager opérationnel aguerri, j’allie mes connaissances juridiques et mon expérience professionnelle au service de votre entreprise. 

Mon vécu me permet de vous accompagner, vous et vos managers, dans le quotidien de vos relations individuelles de travail.`,
        },
        {
            id: 4,
            title: `Management d’équipe, optimisation des organisations d’équipe, briefings et entretiens des collaborateurs`,
            description: `J’interviens comme manager externalisé auprès de vos collaborateurs et de votre force de vente.

Pour des moments d’écoute, d’échanges et d’accompagnement. Pour fixer des objectifs et réaliser les débriefings d’activité nécessaire.

 Si cela vous permet de vous consacrer à la gestion de votre société.

`,
        },
        {
            id: 5,
            title: `Gestion de la formation et animation des sessions de formation autour du leadership et du management.`,
            description: `Je vous propose mes modules de formation et d’accompagnement autour de la gestion des ressources humaines et management. 

En inter-entreprise ou en intra-entreprise.

Intervenant déjà auprès d’organismes de formation, je saurai vous proposer des formations sur mesure.`,
        },
    ]
    return (

        <div>
            <Header />
            <h1>Gestion RH</h1>
            <div className={styles.cardsGrid}>
                {donneesCard.map((card, index) => (
                    <Cards
                        key={card.id}
                        index={index}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default page;