import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Switch, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import CovidGoogleMap from "./components/CovidGoogleMap";
import PatientInfo from "./components/PatientInfo";
import CovidDashboard from "./components/CovidDashboard";
import CovidStats from "./components/stats"


function App() {
    return (
      <Container>
        <h2>Covid Map Midterm</h2>
         <Row>
        
          <Col xs={6} >
              <Link style={{ margin:10 ,fontSize:20, marginLeft:"40%" }} to="/map">Map</Link>
          </Col>
          <Col xs={6}>
            <Link style={{ margin:10 ,fontSize:20, marginLeft:"40%" }} to="/stats">Statistics</Link>
            </Col>
 
        <Switch>
          <Route path="/map">
            <CovidDashboard/>
          </Route>
          <Route path="/stats">
            <CovidStats/>
          </Route>
        </Switch>
        </Row>
      </Container>
        
    );
}

export default App;
