import { Box, Card, CardBody, CardHeader, Collapsible, Image, Text } from 'grommet';
import React from 'react';

export default class ProjectDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            project: {}
        }
    }

    componentDidMount() {
        const project = localStorage.getItem('ProjectDetails')
        this.setState({ project: JSON.parse(project) })
    }

    render() {
        const { project } = this.state
        console.log("project => ", project)
        return (
            <Box direction="row-responsive">
                <Box fill="vertical" background="navbar">
                    <Image src={project.background} fit="contain" />
                </Box>
                <Box fill>
                    <Text textAlign="center">{project.name}</Text>
                    <Box fill="horizontal" direction="row-responsive" pad="large" >
                        {
                            project.languages !== undefined ?
                                project.languages.map(language => {
                                    return (
                                        <Box fill key={language.name}>
                                            <Image src={language.icon} fit="contain" />
                                        </Box>
                                    )
                                })
                                : null
                        }
                    </Box>
                    <Box flex fill>
                        <Card fill background="navbar">
                            <CardHeader pad="medium">
                                <Text>SHAALALLALALA</Text>
                            </CardHeader>
                            <Collapsible open={false}>
                                <CardBody>
                                    <Text>SHAALALLALAL</Text>
                                </CardBody>
                            </Collapsible>
                        </Card>
                    </Box>
                </Box>
            </Box>
        )
    }
}