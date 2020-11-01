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
            descriptionShort: 'Une application mobile cross-plateforme développée en React-Native pour les locataires de Tarn Habitat.',
            descriptionLong: 'Elle leur permet de gérer en temps réel leur(s) loyer(s), leur dossier administratif et tout ce qui touche à leur contrat. Chaque locataire peut effectuer des demandes propres à son logement, son parking ou son immeuble dans le cas d\'appartements.',
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
            descriptionShort: 'Une petite application mobile pour les smartphones Android développée en Kotlin sur le thème du Pokédex de Pokémon.',
            descriptionLong: 'Les utilisateurs peuvent à la fois connaître l\'ordre et le nom des pokémons mais aussi les statistiques de chacun, le ou les type(s), et les attaques que le pokémon choisi peut apprendre. Un second onglet répertorie les objets disponibles dans Pokémon. Elle utilise l\'API "pokeapi". Aussi, une nouvelle version est en train d\'être réalisée en React-Native pour bénéficier du cross-plateforme.',
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
            descriptionShort: 'Une application mobile pour les smartphones iOS développée en Swift permettant de suivre au jour le jour les sorties des films dans les salles de cinéma.',
            descriptionLong: 'Elle permet aussi de connaître les notes moyennes qui ont été attribuées à chaque film, de visualiser le résumé du film et de voir les affiches et photos prises du film en question. Elle utilise l\'API "The Movie Database"',
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
                            <Text size="large" textAlign="center">{project.name}</Text>
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