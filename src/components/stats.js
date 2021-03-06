import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';
import ChartVN from './StatsVN';
import ChartTotal from './StatsTotal'

import {Container, Card} from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

const StaticDashboard = (props) => {
    return ( <Container>
         <h4>Line Chart</h4>
        <Col>
            <Col xs={10}>
                <Card>
                    <Card.Title>Việt Nam</Card.Title>
                    <Card.Body>
                        <ChartVN></ChartVN>
                    </Card.Body> 
                </Card> 
            </Col>
            <Col xs={10}>
                <Card>
                    <Card.Title>Global</Card.Title>
                    <Card.Body>
                        <ChartTotal></ChartTotal>
                    </Card.Body> 
                </Card> 
            </Col>   
        </Col>
    </Container> 
    );
};

export default StaticDashboard;