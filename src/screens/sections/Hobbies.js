import { Box, Carousel, Text } from 'grommet';
import React from 'react';

const Hobbies = () => {
    return (
        <Box width="flex" overflow="hidden">
            <Carousel fill>
                <Box>
                    <Text>Rugby</Text>
                </Box>
                <Box>
                    <Text>Jeux vidéo</Text>
                </Box>
                <Box>
                    <Text>Lecture</Text>
                </Box>
                <Box>
                    <Text>Cinéma</Text>
                </Box>
                <Box>
                    <Text>Randonnée</Text>
                </Box>
            </Carousel>
        </Box>
    )
}

export default Hobbies