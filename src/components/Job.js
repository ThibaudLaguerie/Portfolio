import { Card, CardBody, CardFooter, CardHeader, Collapsible, Text } from 'grommet';
import { FormAdd, FormClose } from 'grommet-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Job = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Card flex="grow" margin="small" background={props.job.mainColor}>
            <CardHeader margin="xsmall" pad="small" onClick={() => {
                setOpen(!isOpen)
            }}>
                <Text color={props.job.secondaryColor}>{props.job.nom}</Text>
                {
                    !isOpen ?
                        <FormAdd size="medium" color='#fff' />
                        :
                        <FormClose size="medium" color='#fff' />
                }
            </CardHeader>
            <Collapsible key={props.job.nom} open={isOpen}>
                <CardBody margin="small" pad="medium" background={props.job.secondaryColor}>
                    <Text color={props.job.tertiaryColor}>{props.job.poste}</Text>
                    <Text color={props.job.tertiaryColor}>{props.job.raison}</Text>
                    <Text color={props.job.tertiaryColor}>{props.job.localisation}</Text>
                    <Text color={props.job.tertiaryColor}>{props.job.periode}</Text>
                </CardBody>
                <CardFooter>
                    <Link to={"/" + props.job.nom}>
                        <Text>voir plus</Text>
                    </Link>
                </CardFooter>
            </Collapsible>
        </Card>
    )
}

export default Job;