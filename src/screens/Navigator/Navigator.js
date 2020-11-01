import { Box } from 'grommet';
import React from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const Navigator = props => {
    console.log(props)

    const setContent = (props) => {
        switch (props.match.params.page) {
            case 'Ma solution logement 3.0':
            case 'Pokedex':
            case 'Moviiies':
                return <ProjectDetails {...props} />
            default:
                break;
        }
    }

    return (
        <Box>
            {
                setContent(props)
            }
        </Box>
    )
}

export default Navigator;