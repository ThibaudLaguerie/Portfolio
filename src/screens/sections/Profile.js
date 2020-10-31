import { Box, Card, CardBody, CardFooter, Image, Text } from 'grommet';
import { Reactjs } from 'grommet-icons';
import React from 'react';

export const Profile = () => {
    return (
        <Box >
            <Card flex="shrink" margin="small" pad="xxsmall" background="#000" >
                <CardBody style={{ borderRadius: 5 }} align="center" pad="small" margin="small" background="#fff">
                    <Text>Thibaud Laguérie</Text>
                    <Text>Développeur d'applications mobiles</Text>
                    <Box>
                        <Image fit="contain" src={require('../../img/profil.jpg')} />
                    </Box>
                    <Text>21 years old</Text>
                    <Text>Almost bilingual in english and french, talking, reading and writing</Text>
                    <CardFooter align="center" justify="center">
                        <Reactjs size="large" />
                    </CardFooter>
                </CardBody>
            </Card>
        </Box>
    )
}