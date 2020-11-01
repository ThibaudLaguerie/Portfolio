import { Box, Tab, Tabs } from 'grommet';
import React from 'react';
import { act } from 'react-dom/test-utils';
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
            <Box fill pad="small" direction="row-responsive">
                <Box>
                    <Profile />
                </Box>
                <Box fill>
                    <Tabs>
                        <Tab title={"Mes emplois"} >
                            <Jobs />
                        </Tab>
                        <Tab title={"Mes projets"} >
                            <Projects />
                        </Tab>
                        <Tab title={"Mes études"} >
                            <Studies />
                        </Tab>
                        <Tab title={"Mes passions"} >
                            <Hobbies />
                        </Tab>
                    </Tabs>
                </Box>
            </Box>
        )
    }

}