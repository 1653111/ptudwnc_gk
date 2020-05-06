import React, {useEffect} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import PatientInfo from './PatientInfo';

const PatientList = ({patients, currentPatient, onListItemClicked}) => {
    const patientList = [];
    const patientIds = Object.keys(patients);
    for (let i = 0; i < patientIds.length; i++) {
        patientList.push(patients[patientIds[i]]);
        patients[patientIds[i]].verifyDate = new Date(patients[patientIds[i]].verifyDate);
    }

    const refs = [];
    let tempPatient;
    let scrollToOffset = patientList.length - 1;
    for (let i = 0; i < patientList.length - 1; i++) {
        for (let j = i + 1; j < patientList.length; j++)
            if (patientList[i].verifyDate < patientList[j].verifyDate) {
                tempPatient = patientList[i];
                patientList[i] = patientList[j];
                patientList[j] = tempPatient;
            }

        if (patientList[i] == currentPatient)
            scrollToOffset = i;

        refs[i] = React.createRef();
    }

    return (
        <ListGroup>
            {patientList.map((patient, offset) => {
                return (
                    <ListGroup.Item action variant="light" onClick={() => {onListItemClicked(patient)}}>
                        <PatientInfo name={patient.name} address={patient.address} note={patient.note} verifyDate={patient.verifyDate} ref={refs[offset]}/>
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
    );
}

export default PatientList;