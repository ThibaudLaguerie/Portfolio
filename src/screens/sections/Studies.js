import { Box, Card, CardBody, CardHeader, Grid, Meter, Text } from 'grommet';
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
                    <Card align="center">
                        <CardHeader>
                            <Text>DUT Informatique</Text>
                        </CardHeader>
                        <CardBody>
                            <Box alignSelf="center">
                                <Meter
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
                                <Text color="quaternary">Completed</Text>
                            </Box>
                            <Text>IUT de Blagnac (31)</Text>
                        </CardBody>
                    </Card>
                </Box>
                <Box gridArea="center" fill>
                    <Card align="center">
                        <CardHeader>
                            <Text>LP DReAM</Text>
                        </CardHeader>
                        <CardBody>
                            <Box alignSelf="center">
                                <Meter
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
                                <Text color="quaternary">Completed</Text>
                            </Box>
                            <Text>IUT de Castres (81)</Text>
                        </CardBody>
                    </Card>
                </Box>
                <Box gridArea="right" fill>
                    <Card align="center">
                        <CardHeader>
                            <Text>Mastère Ynov</Text>
                        </CardHeader>
                        <CardBody>
                            <Box alignSelf="center">
                                <Meter
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
                                <Text color="secondary">In progress</Text>
                            </Box>
                            <Text>Ynov Campus de Toulouse (31)</Text>
                        </CardBody>
                    </Card>
                </Box>
            </Grid>
            <Meter alignSelf="center" margin="medium"
                values={[{
                    value: 40,
                    color: "brand",
                    label: 'dut',
                    onClick: () => { }
                },
                {
                    value: 20,
                    color: "secondary",
                    label: 'lp',
                    onClick: () => { }
                },
                {
                    value: 1,
                    color: "quaternary",
                    label: 'ynov',
                    onClick: () => { }
                },
                ]}
                max={100}
                size="large"
                thickness="medium"
                type="circle"
            />
        </Box>
    )
}

export default Studies