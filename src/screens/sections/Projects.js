import React from 'react';
import { Box, Card, Image, Text } from 'grommet';
import { StatusUnknown } from 'grommet-icons';
import { Link } from 'react-router-dom';

const Projects = () => {

    const projects = [
        {
            name: 'Ma solution logement 3.0',
            background: require('../../img/tarnhabitat.jpg'),
            icon: require('../../img/tarnhabitat_logo.png'),
            languages: [
                {
                    name: 'React Native',
                    icon: require('../../img/react.png'),
                },
                {
                    name: 'PHP',
                    icon: require('../../img/PHP.png'),
                },
            ]
        },
        {
            name: 'Pokedex',
            background: require('../../img/pokedex_kotlin.jpg'),
            icon: require('../../img/pokedex_logo.png'),
            languages: [
                {
                    name: 'Android',
                    icon: require('../../img/android.png'),
                },
                {
                    name: 'Kotlin',
                    icon: require('../../img/kotlin.png'),
                },
            ]
        },
        {
            name: 'Moviiies',
            background: require('../../img/Moviiies.png'),
            icon: require('../../img/moviiies_logo.png'),
            languages: [
                {
                    name: 'Apple',
                    icon: require('../../img/apple.png'),
                },
                {
                    name: 'Swift',
                    icon: require('../../img/swift.png'),
                },
            ]
        },
    ]

    return (
        <Box flex direction="row-responsive">
            {
                projects.map((project) => {
                    return (
                        <Card align="center" margin="small" width="xlarge" flex key={project.name} pad="small">
                            <Text textAlign="center">{project.name}</Text>
                            <Image src={project.icon} fit="contain" />
                            <Link to={"/" + project.name} onClick={() => localStorage.setItem('ProjectDetails', JSON.stringify(project))} >
                                <StatusUnknown size="large" />
                            </Link>
                        </Card>
                    )
                })
            }
        </Box>
    )
}

export default Projects