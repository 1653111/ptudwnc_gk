import React, {useEffect, useState} from 'react';
import {compose, withProps} from "recompose"
import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps";
import PatientInfo from './PatientInfo';

const CovidMap = ({patients, currentPatient, onMarkerClicked, onFetchPatients}) => {
    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/https://maps.vnpost.vn/apps/covid19/api/patientapi/list")
            .then(res => res.json())
            .then((result) => {
                    onFetchPatients(result.data);
                },
                (error) => {

                }
            )
    }, []);

    let mapDefaultCoordinate = {
        lat: 10.762622,
        lng: 106.660172
    };
    if (currentPatient) {
        mapDefaultCoordinate = {
            lat: currentPatient.lat,
            lng: currentPatient.lng
        };
        console.log(mapDefaultCoordinate);
    }

    const MapComponent = React.memo(compose(
        withProps({
            googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAf6E1CQCl3XNMNjSE-YlGPfXXfrwX_Llg&libraries=geometry,drawing,places",
            loadingElement: <div style={{height: '100%'}} />,
            containerElement: <div style={{height: '969px'}} />,
            mapElement: <div style={{height: '100%'}} />
        }),
        withScriptjs,
        withGoogleMap
    )((props) => {
            return(
                <GoogleMap defaultZoom={12} defaultCenter={mapDefaultCoordinate}>
                    {patients.map((patient, offset) => (<Marker key={offset} position={{lat: patient.lat, lng: patient.lng}} onClick={() => {onMarkerClicked(patient)}}>
                        {currentPatient == patient && <InfoWindow>
                            <PatientInfo name={currentPatient.name} address={currentPatient.address} note={currentPatient.note} verifyDate={currentPatient.verifyDate} />
                        </InfoWindow>}
                    </Marker>))}
                </GoogleMap>
            );
    }));

    return <MapComponent />
}

export default React.memo(CovidMap);