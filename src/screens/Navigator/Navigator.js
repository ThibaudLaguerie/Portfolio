import { Box, Text } from 'grommet';
import React from 'react';

const Navigator = props => {
    console.log(props)

    const setContent = (props) => {
        switch (props.match.params.page) {
            case 'Tarn Habitat':
                return <Text>Tarn Habitat</Text>
            case 'McDonalds':
                return <Text>McDonalds</Text>
            case 'Artech':
                return <Text>Artech</Text>
            case 'IGE+XAO':
                return <Text>IGE+XAO</Text>
            case 'Ma solution logement 3.0':
                return <Text>Ma solution logement 3.0</Text>
            case 'Pokedex':
                return <Text>Pokedex</Text>
            case 'Stud\'eat':
                return <Text>Stud\'eat</Text>
            case 'Moviiies':
                return <Text>Moviiies</Text>
            case 'DigestiBox':
                return <Text>DigestiBox</Text>
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