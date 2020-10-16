import { Box, Card, CardBody, CardFooter, Image, Text } from 'grommet';
import { Facebook, Instagram, Twitter } from 'grommet-icons';
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
                    <Text>20 years old</Text>
                    <Text>Almost bilingual with english and french, talking, reading and writing</Text>
                    <CardFooter align="center" justify="center">
                        <Facebook size="medium" />
                        <Instagram size="medium" />
                        <Twitter size="medium" />
                    </CardFooter>
                </CardBody>
            </Card>
        </Box>
    )
}