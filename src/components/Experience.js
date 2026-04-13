import { Container } from "react-bootstrap";
import { useState } from "react";
import { TiltTracker } from './TiltTracker';

export const Experience = () => {
    const experiences = [
        {
            date: "Jan 2025 - Oct 2025",
            title: "Software Engineer Intern",
            company: "IntelliBuddies",
            details: [
                "Built end-to-end automation for Expense Reimbursement & Attendance.",
                "Delivered production-ready automation solutions for clients."
            ]
        },
        {
            date: "Oct 2025 - Present",
            title: "Software Engineer Trainee",
            company: "IntelliBuddies",
            details: [
                "Automated sales reconciliation for Thirdwave Coffee.",
                "Developed web automation for Purchase Order creation at Atomberg.",
                "Implemented end-to-end PO workflow for Hyundai.",
                "Built claim automation for Apoorva Hospital using RPA and Angular."
            ]
        }
    ];

    return (
        <section className="experience" id="experience">
            <Container>
                <div className="experience-bx">
                    <h2>Professional Experience</h2>
                    <p>My journey in the tech industry delivering enterprise-grade automation and scalable full-stack web solutions.</p>
                    
                    <div className="vertical-timeline">
                        <div className="v-timeline-line"></div>
                        {experiences.map((exp, index) => (
                            <div className={`v-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                                <div className="v-timeline-dot"></div>
                                <TiltTracker className="v-timeline-content glass-card">
                                    <div className="v-date">{exp.date}</div>
                                    <h3>{exp.title}</h3>
                                    {exp.company && <h4 className="v-company">{exp.company}</h4>}
                                    <ul>
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </TiltTracker>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
