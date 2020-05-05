import React, { Component } from 'react';
import ProfileCard from '../user/profile/ProfileCard';
import './MainDashboard.css';
import { Container, Row } from 'react-bootstrap';

class MainDashboard extends Component {
    render() {
        return (
            <Container fluid className="main-panel">
                <Row>
                    <div className="side-panel">
                        <ProfileCard />
                    </div>
                    <div>
                        <h1>Hello</h1>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default MainDashboard;
