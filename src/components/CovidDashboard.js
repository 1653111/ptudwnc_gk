import React, {useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CovidGoogleMap from "./CovidGoogleMap";
import PatientInfo from "./PatientInfo";
import Container from "react-bootstrap/Container";
import CovidMap from "./CovidMap";

const CovidDashboard = (props) => {
    const [currentPatient, setCurrentPatient] = useState();
    const patientMarkerClickedHandler = (patient) => {
        setCurrentPatient(patient);
    }
    console.log('Covid Dashboard render');
    return <Container>
        <Row>
            <Col xs={10}><CovidMap onPatientMarkerClicked={patientMarkerClickedHandler}/></Col>
            <Col xs={2}>
                {currentPatient &&
                <PatientInfo name={currentPatient.name} address={currentPatient.address} note={currentPatient.note}
                             verifyDate={currentPatient.verifyDate}/>}
            </Col>
        </Row>
    </Container>
};

export default CovidDashboard;