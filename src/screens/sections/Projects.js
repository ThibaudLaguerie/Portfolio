import { Box, Carousel, Grid, Image, Text } from 'grommet';
import { Reactjs } from 'grommet-icons';
import React from 'react';

const Projects = () => {

    const projects = [
        {
            nom: 'Ma solution logement 3.0',
            background: require('../../img/myheader.jpg'),
            languages: [
                {
                    nom: 'React Native',
                    icone: require('../../img/react.png'),
                },
                {
                    nom: 'PHP',
                    icone: require('../../img/PHP.png'),
                },
            ]
        },
        {
            nom: 'Pokedex',
            background: require('../../img/myheader.jpg'),
            languages: [
                {
                    nom: 'Android',
                    icone: require('../../img/android.png'),
                },
                {
                    nom: 'Kotlin',
                    icone: require('../../img/kotlin.png'),
                },
            ]
        },
        {
            nom: 'Stud\'eat',
            background: require('../../img/myheader.jpg'),
            languages: [
                {
                    nom: 'Flutter',
                    icone: require('../../img/flutter-icon.png'),
                },
            ]
        },
        {
            nom: 'Moviiies',
            background: require('../../img/myheader.jpg'),
            languages: [
                {
                    nom: 'Apple',
                    icone: require('../../img/apple.png'),
                },
                {
                    nom: 'Swift',
                    icone: require('../../img/swift.png'),
                },
            ]
        },
        {
            nom: 'DigestiBox',
            background: require('../../img/myheader.jpg'),
            languages: [
                {
                    nom: 'Android',
                    icone: require('../../img/android.png'),
                },
                {
                    nom: 'Java',
                    icone: require('../../img/java.png'),
                },
            ]
        },
    ]

    return (
        <Box fill>
            {
                projects.map((project) => {
                    return (
                        <Box flex="grow" key={project.nom} pad="small">
                            <Text textAlign="center">{project.nom}</Text>

                            <Box margin="none" direction="row">
                                {
                                    project.languages.map((language) => {
                                        return (
                                            <Box key={language.nom} fill pad="small" align="center">
                                                <Image width="30%" height="30%" fit="contain" src={language.icone} />
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    )
                })
            }
        </Box>
    )
}

export default Projects