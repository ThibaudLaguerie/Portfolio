import { Box, Carousel, Grid, Image, Text } from 'grommet';
import { Reactjs } from 'grommet-icons';
import React from 'react';

const Projects = () => {

    const projects = [
        {
            nom: 'Ma solution logement',
            background: require('../../img/myheader.jpg'),
            languages: [
                {
                    nom: 'React Native',
                    icone: <Reactjs size="medium" />
                },
                {
                    nom: 'PHP',
                    icone: require('../../img/PHP.png')
                }
            ]
        },
        {
            nom: 'Pokedex',
            background: require('../../img/myheader.jpg'),
            languages: [
                {
                    nom: 'React Native',
                    icone: <Reactjs size="medium" />
                },
                {
                    nom: 'PHP',
                    icone: require('../../img/PHP.png')
                }
            ]
        },
        {
            nom: 'Stud\'eat',
            background: require('../../img/myheader.jpg'),
            languages: [
                {
                    nom: 'React Native',
                    icone: <Reactjs size="medium" />
                },
                {
                    nom: 'PHP',
                    icone: require('../../img/PHP.png')
                }
            ]
        },
        {
            nom: 'DigestiBox',
            background: require('../../img/myheader.jpg'),
            languages: [
                {
                    nom: 'React Native',
                    icone: <Reactjs size="medium" />
                },
                {
                    nom: 'PHP',
                    icone: require('../../img/PHP.png')
                }
            ]
        },
    ]

    return (
        <Box fill overflow="hidden">
            <Carousel fill>
                {
                    projects.map((project) => {
                        return (
                            <Box key={project.nom}>
                                <Text>{project.nom}</Text>
                                <Reactjs size="medium" />
                                <Grid rows={['large',]}
                                    columns={['small', "medium", "small"]}
                                    gap="none"
                                    areas={[
                                        { name: 'right', start: [0, 0], end: [0, 0] },
                                        { name: 'main', start: [1, 0], end: [1, 0] },
                                        { name: 'left', start: [2, 0], end: [2, 0] },
                                    ]}>
                                    <Box fill gridArea="right">
                                        {
                                            project.languages.slice(0, project.languages.length / 2).map((language) => {
                                                return (
                                                    <Box fill key={language.nom}>
                                                        <Image fit="contain" src={language.icone} />
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Box>
                                    <Box gridArea="main">
                                        <Image fit='contain' src={project.background} />
                                    </Box>
                                    <Box fill gridArea="left">
                                        {
                                            project.languages.slice(project.languages.length / 2).map((language) => {
                                                return (
                                                    <Box fill key={language.nom}>
                                                        <Image fit="contain" src={language.icone} />
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Box>
                                </Grid>
                            </Box>
                        )
                    })
                }
            </Carousel>
        </Box>
    )
}

export default Projects