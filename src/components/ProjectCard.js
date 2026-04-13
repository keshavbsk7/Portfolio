import React from 'react';
import { Col } from 'react-bootstrap';
import { TiltTracker } from './TiltTracker'; // Import Tilt Tracker

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <TiltTracker className="project-card-modern">
        <div className="proj-img-container">
            <img src={imgUrl} alt={title} />
        </div>
        <div className="proj-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </TiltTracker>
    </Col>
  );
};


