import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { CertificateCard } from "./CertificateCard";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.jpg";
import cerImg1 from "../assets/img/certificate/Deep Learning NPTEL.jpg";
import cerImg2 from "../assets/img/certificate/Machine Learning.jpg";
import cerImg3 from "../assets/img/certificate/The Joy Of Computing Using Python.jpg";
import cerImg4 from "../assets/img/certificate/Programming In Java.jpg";
import cerImg5 from "../assets/img/certificate/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20231208-29-fk25yx_page-0001.jpg";
import cerImg6 from "../assets/img/certificate/intro to ml.png";
import cerImg7 from "../assets/img/certificate/matlab.jpg";
import cerImg8 from "../assets/img/certificate/javascript.jpg";


import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Hotel Management",
      description: "",
      imgUrl: projImg1,
    },
    {
      title: "Tamil Handwritten to Audio",
      description: "",
      imgUrl: projImg2,
    },
    {
      title: "Book Recommendation System",
      description: "",
      imgUrl: projImg3,
    },
    {
      title: "Next Word Prediction Using LSTM",
      description: "",
      imgUrl: projImg4,
    },
    {
      title: "Real-Time Face Recognition Attendance System",
      description: "",
      imgUrl: projImg5,
    }


  ];

  const certificates = [
    {
      title: "Introdcution to ML",
      description: "",
      imgUrl: cerImg6,
    },
    
    {
      title: "Machine Learning",
      description: "",
      imgUrl: cerImg2,
    },
    {
      title: "DeepLearning",
      description: "",
      imgUrl: cerImg1,
    },
    {
      title: "Python",
      description: "",
      imgUrl: cerImg3,
    },
    {
      title: "Java",
      description: "",
      imgUrl: cerImg4,
    },
    {
      title: "AWS_Academy_Graduate",
      description: "",
      imgUrl: cerImg5,
    },
    {
      title: "Matlab Onramp",
      description: "",
      imgUrl: cerImg7,
    },
    {
      title: "Javascript Basics",
      description: "",
      imgUrl: cerImg8,
    }
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects & Certificates</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Certificates</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <h3>Certificates</h3>
                        <p>This section highlights various certifications that I have earned over the years. Each certificate represents a milestone in my learning journey, showcasing my commitment to continuous professional development and expertise in different areas.</p>
                        <Row>
                          {certificates.map((certificate, index) => (
                            <CertificateCard
                              key={index}
                              {...certificate}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <h3>Projects</h3>
                        <p>Here you can explore some of the key projects I have worked on. Each project demonstrates practical applications of the skills and knowledge I have gained, ranging from problem-solving and innovative solutions to creating impactful tools and systems.</p>
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
