import { Box, Card, CardBody, CardHeader, Grid, Image, Meter, Text } from 'grommet';
import React from 'react';

const Studies = () => {

    return (
        <Box fill>
            <Grid margin="medium"
                rows={['flex']}
                columns={['flex', 'flex', 'flex']}
                gap="small"
                areas={[
                    { name: 'left', start: [0, 0], end: [0, 0] },
                    { name: 'center', start: [1, 0], end: [1, 0] },
                    { name: 'right', start: [2, 0], end: [2, 0] },
                ]}
            >
                <Box gridArea="left" fill>
                    <Card align="center" height="medium" >
                        <CardHeader>
                            <Text size="xlarge" textAlign="center">DUT Informatique</Text>
                        </CardHeader>
                        <CardBody pad="xsmall" justify="around">
                            <Box alignSelf="center">
                                <Meter
                                    background="#e8e8e8"
                                    max={100}
                                    values={[{
                                        value: 100,
                                        color: "brand",
                                        label: 'Completed',
                                        onClick: () => { }
                                    }]}
                                    size="xsmall"
                                    thickness="small"
                                    type="circle"
                                />
                                <Text textAlign="center" color="quaternary">Completed</Text>
                            </Box>
                            <Text textAlign="center" alignSelf="center">IUT de Blagnac (31)</Text>
                            <Box align="center">
                                <Image src={require('../../img/Logo_IUT_Blagnac.png')} width="50%" />
                            </Box>
                        </CardBody>
                    </Card>
                </Box>
                <Box gridArea="center" fill>
                    <Card align="center" height="medium">
                        <CardHeader>
                            <Text size="xlarge" textAlign="center">LP DReAM</Text>
                        </CardHeader>
                        <CardBody pad="xsmall" justify="around">
                            <Box alignSelf="center">
                                <Meter
                                    background="#e8e8e8"
                                    max={100}
                                    values={[{
                                        value: 100,
                                        color: "secondary",
                                        label: 'Completed',
                                        onClick: () => { }
                                    }]}
                                    size="xsmall"
                                    thickness="small"
                                    type="circle"
                                />
                                <Text textAlign="center" color="quaternary">Completed</Text>
                            </Box>
                            <Text alignSelf="center" textAlign="center">IUT de Castres (81)</Text>
                            <Box align="center">
                                <Image src={require('../../img/lpdream.png')} width="50%" />
                            </Box>
                        </CardBody>
                    </Card>
                </Box>
                <Box gridArea="right" fill>
                    <Card align="center" height="medium" >
                        <CardHeader>
                            <Text size="xlarge" textAlign="center">Mastère Ynov</Text>
                        </CardHeader>
                        <CardBody pad="xsmall" justify="around">
                            <Box alignSelf="center">
                                <Meter
                                    background="#e8e8e8"
                                    max={100}
                                    values={[{
                                        value: 1,
                                        color: "quaternary",
                                        label: '1',
                                        onClick: () => { }
                                    }]}
                                    size="xsmall"
                                    thickness="small"
                                    type="circle"
                                />
                                <Text textAlign="center" color="secondary">In progress</Text>
                            </Box>
                            <Text textAlign="center" alignSelf="center">Ynov Campus de Toulouse (31)</Text>
                            <Box align="center">
                                <Image src={require('../../img/ynov-masteres.svg')} width="50%" />
                            </Box>
                        </CardBody>
                    </Card>
                </Box>
            </Grid>
            <Box align="center" justify="center" direction="row-responsive" >
                <Text size="large" textAlign="center">Newbie</Text>
                <Box flex="grow">

                    <Meter alignSelf="center" margin="medium"
                        background="#e8e8e8"
                        values={[{
                            value: 2,
                            color: "brand",
                            label: 'dut',
                            onClick: () => { }
                        },
                        {
                            value: 1,
                            color: "secondary",
                            label: 'lp',
                            onClick: () => { }
                        },
                        {
                            value: 0.1,
                            color: "quaternary",
                            label: 'ynov',
                            onClick: () => { }
                        },
                        ]}
                        max={5}
                        size="medium"
                        thickness="small"
                        type="bar"
                    />
                </Box>
                <Text size="large" textAlign="center">Expert en développement logiciel, mobile et IoT</Text>
            </Box>
        </Box>
    )
}

export default Studies