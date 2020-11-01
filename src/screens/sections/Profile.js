import { Box, Card, CardBody, CardFooter, Image, Text } from 'grommet';
import { Reactjs } from 'grommet-icons';
import React from 'react';

export const Profile = () => {
    return (
        <Box >
            <Card flex="shrink" margin="small" pad="xxsmall" background="#000" >
                <CardBody style={{ borderRadius: 5 }} align="center" pad="small" margin="small" background="#fff">
                    <Text size="xxlarge" textAlign="center">Thibaud Laguérie</Text>
                    <Text size="large" textAlign="center">Développeur d'applications mobiles</Text>
                    <Box>
                        <Image fit="contain" src={require('../../img/profil.jpg')} />
                    </Box>
                    <Text size="medium" textAlign="center">21 years old</Text>
                    <Text size="medium" textAlign="center">Almost bilingual in english and french, talking, reading and writing</Text>
                    <CardFooter align="center" justify="center">
                        <Reactjs size="large" />
                    </CardFooter>
                </CardBody>
            </Card>
        </Box>
    )
}