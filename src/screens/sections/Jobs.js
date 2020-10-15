import { Box, Card, CardBody, CardHeader, Text } from 'grommet';
import { DownloadOption } from 'grommet-icons';
import React from 'react';

export default class Jobs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            maxToDisplay: 1,
        }

        this.jobs = [
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
    }

    render() {
        const { maxToDisplay } = this.state
        return (
            <Box>
                {
                    this.jobs.map((job, key) => {
                        return (
                            <>
                                {
                                    key < maxToDisplay ?
                                        <Card animation={"slideDown"} flex="grow" margin="small" key={job.nom} background={job.mainColor}>
                                            <CardHeader margin="xsmall" pad="small">
                                                <Text color={job.secondaryColor}>{job.nom}</Text>
                                            </CardHeader>
                                            <CardBody margin="small" pad="medium" background={job.secondaryColor}>
                                                <Text color={job.tertiaryColor}>{job.poste}</Text>
                                                <Text color={job.tertiaryColor}>{job.raison}</Text>
                                                <Text color={job.tertiaryColor}>{job.localisation}</Text>
                                                <Text color={job.tertiaryColor}>{job.periode}</Text>
                                            </CardBody>
                                        </Card>
                                        : null
                                }
                            </>
                        )
                    })
                }
                <Box align="center">
                    <DownloadOption size="large" onClick={() => this.setState({ maxToDisplay: maxToDisplay + 1 })} />
                </Box>
            </Box >
        )
    }
}