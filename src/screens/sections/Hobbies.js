import { Box, Card, CardBody, CardHeader, Carousel, Image, Text } from 'grommet';
import React from 'react';

const Hobbies = () => {
    return (
        <Box width="flex" overflow="hidden" pad="medium">
            <Carousel fill controls="arrows" >
                <Box height="medium">
                    <Card fill align="center">
                        <CardHeader>
                            <Text>Rugby</Text>
                        </CardHeader>
                        <CardBody margin="medium">
                            <Image fit="contain" src={require('../../img/rugby.jpg')} />
                        </CardBody>
                    </Card>
                </Box>
                <Box height="medium">
                    <Card fill align="center">
                        <CardHeader >
                            <Text alignSelf="center">Jeux vidéo</Text>
                        </CardHeader>
                        <CardBody margin="medium">
                            <Image fit="contain" src={require('../../img/videogames.jpeg')} />
                        </CardBody>
                    </Card>
                </Box>
                <Box height="medium">
                    <Card fill align="center">
                        <CardHeader >
                            <Text>Lecture</Text>
                        </CardHeader>
                        <CardBody margin="medium">
                            <Image fit="contain" src={require('../../img/lecture.jpeg')} />
                        </CardBody>
                    </Card>
                </Box>
                <Box height="medium">
                    <Card fill align="center">
                        <CardHeader>
                            <Text>Cinéma</Text>
                        </CardHeader>
                        <CardBody margin="medium">
                            <Image fit="contain" src={require('../../img/cinema.jpg')} />
                        </CardBody>
                    </Card>
                </Box>
            </Carousel>
        </Box>
    )
}

export default Hobbies