import { Box, Card, CardBody, CardFooter, Text } from 'grommet';
import React from 'react';

export const Profile = () => {
    return (
        <Box>
            <Card>
                <CardBody align="center">
                    <Text>Thibaud Laguérie</Text>
                    <Text>I am 20 years old</Text>
                    <Text>Desarrollador de aplicaciones para móviles</Text>
                </CardBody>
                <CardFooter>
                    
                </CardFooter>
            </Card>
        </Box>
    )
}