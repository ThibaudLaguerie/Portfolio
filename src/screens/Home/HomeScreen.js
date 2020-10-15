import { Box, Card, Grid, Image, Text } from 'grommet';
import React from 'react';
import Jobs from '../sections/Jobs';
import { Profile } from '../sections/Profile';
export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Box fill pad="small">
                <Grid rows={['medium', 'medium']}
                    columns={['medium', 'large']}
                    gap="small"
                    areas={[
                        { name: 'nav', start: [0, 0], end: [0, 1] },
                        { name: 'main', start: [1, 0], end: [1, 1] },
                    ]}>
                    <Box gridArea="nav">
                        <Profile />
                    </Box>
                    <Box gridArea="main">
                        <Jobs />
                    </Box>
                </Grid>
            </Box>
        )
    }

}