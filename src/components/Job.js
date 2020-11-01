import { Card, CardBody, CardHeader, Collapsible, Text } from 'grommet';
import { FormAdd, FormClose } from 'grommet-icons';
import React, { useState } from 'react';

const Job = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Card flex="grow" margin="small" background={props.job.mainColor}>
            <CardHeader margin="xsmall" pad="small" onClick={() => {
                setOpen(!isOpen)
            }}>
                <Text color={props.job.secondaryColor}>{props.job.nom} - {props.job.poste}</Text>
                {
                    !isOpen ?
                        <FormAdd size="medium" color='#fff' />
                        :
                        <FormClose size="medium" color='#fff' />
                }
            </CardHeader>
            <Collapsible key={props.job.nom} open={isOpen}>
                <CardBody style={{ borderRadius: 15 }} margin="small" pad="medium" background={props.job.secondaryColor}>
                    <Text color={props.job.tertiaryColor}>{props.job.tache}</Text>
                    <Text color={props.job.tertiaryColor}>{props.job.raison}</Text>
                    <Text color={props.job.tertiaryColor}>{props.job.localisation}</Text>
                    <Text color={props.job.tertiaryColor}>{props.job.periode}</Text>
                </CardBody>
            </Collapsible>
        </Card>
    )
}

export default Job;