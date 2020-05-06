import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CovidMap from './CovidMap';
import PatientList from './PatientList';

const CovidDashboard = () => {
    const [patients, setPatients] = useState([]);
    const [currentPatient, setCurrentPatient] = useState(null);
    const markerClickedHandler = (patient) => {
        setCurrentPatient(patient);
    }
    const fetchPatientsHandler = (patients) => {
        setPatients(patients);
    }
    const listItemClickedhandler = (patient) => {
        setCurrentPatient(patient)
    }

    return (
        <Container>
            <Row>
                <Col xs={8}><CovidMap patients={patients} currentPatient={currentPatient} onMarkerClicked={markerClickedHandler} onFetchPatients={fetchPatientsHandler}/></Col>
                <Col xs={4}><PatientList patients={patients} currentPatient={currentPatient} onListItemClicked={listItemClickedhandler}/></Col>
            </Row>
        </Container>
    );
}

export default CovidDashboard;