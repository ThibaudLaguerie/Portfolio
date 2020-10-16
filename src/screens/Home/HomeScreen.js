import { Box, Card, Grid, Image, Tab, Tabs, Text } from 'grommet';
import React from 'react';
import Hobbies from '../sections/Hobbies';
import Jobs from '../sections/Jobs';
import { Profile } from '../sections/Profile';
import Projects from '../sections/Projects';
import Studies from '../sections/Studies';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Box fill pad="small">
                <Grid rows={['small', 'medium']}
                    columns={['medium', "flex"]}
                    gap="small"
                    areas={[
                        { name: 'nav', start: [0, 0], end: [0, 1] },
                        { name: 'main', start: [1, 0], end: [1, 1] },
                    ]}>
                    <Box gridArea="nav">
                        <Profile />
                    </Box>
                    <Box fill gridArea="main">
                        <Tabs>
                            <Tab title={"Mes emplois"}>
                                <Jobs />
                            </Tab>
                            <Tab title={"Mes projets"}>
                                <Projects />
                            </Tab>
                            <Tab title={"Mes études"}>
                                <Studies />
                            </Tab>
                            <Tab title={"Mes passions"}>
                                <Hobbies />
                            </Tab>
                        </Tabs>
                    </Box>
                </Grid>
            </Box>
        )
    }

}