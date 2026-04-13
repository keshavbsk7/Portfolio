import React from 'react';
import { Col } from 'react-bootstrap';
import { TiltTracker } from './TiltTracker'; // Import Tilt Tracker

export const CertificateCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <TiltTracker className="certificate-card-modern">
        <div className="cert-img-wrapper">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="cert-info">
          <h4>{title}</h4>
          {description && <p>{description}</p>}
        </div>
      </TiltTracker>
    </Col>
  );
}; 
