import { Box } from 'grommet';
import React from 'react';
import Job from '../../components/Job';

const Jobs = () => {

    const jobs = [
        {
            nom: "Artech",
            mainColor: "#0cb4cf",
            localisation: "Seysses (31)",
            secondaryColor: "#fff",
            tertiaryColor: "#0461ad",
            periode: "Depuis 2014",
            poste: 'Fabrication et installation d\'abris de piscine',
            raison: "Entraide familiale"
        }, {
            nom: "McDonalds",
            localisation: "Aucamville (31)",
            mainColor: "#DA291C",
            secondaryColor: "#fff",
            tertiaryColor: "#FFC72C",
            periode: "Fin octobre 2017 - Fin décembre 2017",
            poste: 'Equipier cuisine',
            raison: "Job étudiant"
        }, {
            nom: "IGE+XAO",
            localisation: "Colomiers (31)",
            mainColor: "#4c76ba",
            secondaryColor: "#fff",
            tertiaryColor: "#4c76ba",
            periode: "Début avril 2019 - Fin juin 2019",
            poste: 'Développeur logiciel',
            raison: "Stage"
        }, {
            nom: "Tarn Habitat",
            localisation: "Albi (81)",
            mainColor: "#64b257",
            secondaryColor: "#fff",
            tertiaryColor: "#297bc0",
            periode: "Depuis septembre 2019",
            poste: 'Développeur d\'applications mobiles',
            raison: "Alternance"
        }
    ]


    return (
        <Box>
            {
                jobs.reverse().map((job) => <Job job={job} />)
            }
        </Box >
    )
}

export default Jobs