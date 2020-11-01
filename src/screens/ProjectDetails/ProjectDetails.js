import { Box, Card, CardBody, CardHeader, Collapsible, Image, Text } from 'grommet';
import { FormAdd, FormClose } from 'grommet-icons';
import React from 'react';

export default class ProjectDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            project: {},
            isOpen: false,
        }
    }

    componentDidMount() {
        const project = localStorage.getItem('ProjectDetails')
        this.setState({ project: JSON.parse(project) })
    }

    render() {
        const { project, isOpen } = this.state
        return (
            <Box flex="shrink" fill pad="small" direction="row-responsive">
                <Card flex="shrink" margin="small" pad="xxsmall" background="#000" >
                    <Image src={project.background} fit="contain" />
                </Card>

                <Box>
                    <Text size="xxlarge" textAlign="center">{project.name}</Text>

                    <Box flex="grow" background="navbar" pad="small" margin="small" style={{ borderRadius: 15}}>
                        <Box direction="row" justify="between" align="center" pad="small" onClick={() => this.setState({ isOpen: !isOpen })}>
                            <Text color="#fff">{project.descriptionShort}</Text>
                            {
                                !isOpen ?
                                    <FormAdd size="medium" color='#fff' />
                                    :
                                    <FormClose size="medium" color='#fff' />
                            }
                        </Box>
                        <Collapsible open={isOpen}>
                            <Box fill pad="medium">
                                <Text>{project.descriptionLong}</Text>
                            </Box>
                            <Box direction="row">
                                {
                                    project.languages !== undefined ?
                                        project.languages.map(language => {
                                            return (
                                                <Box fill align="center" key={language.name}>
                                                    <Image src={language.icon} width="200" height="200" fit="contain" />
                                                </Box>
                                            )
                                        })
                                        : null
                                }
                            </Box>
                        </Collapsible>
                    </Box>
                </Box>
            </Box>
        )
    }
}