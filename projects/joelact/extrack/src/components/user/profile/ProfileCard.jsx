import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import './ProfileCard.css';

class ProfileCard extends Component {
    render() {
        return (
            <div className="profile-card">
                <Row className="profile-card-align">
                    <img src="https://via.placeholder.com/150" alt=""/>
                </Row>
                <Row className="profile-card-align">
                    <p>Name</p>
                </Row>
            </div>
        );
    }
}

export default ProfileCard;
