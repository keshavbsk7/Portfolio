import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/profile.JPG"; 


export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col md={6} className="text-center">
            <img src={contactImg} alt="Contact Img" className="contact-img" />
          </Col>
          <Col md={6}>
            <h2>Contact Me</h2>
            <p>
              I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out to me!
            </p>
            <p><strong>Name:</strong> Keshavaram</p>
            <p><strong>Location:</strong> Nagercoil, KanyaKumari</p>
            <p><strong>Phone Number:</strong> 7339452762</p>
            <p><strong>Age:</strong> 21</p>
            <p><strong>Qualification:</strong> B.Tech in Artificial Intelligence (In Progress)</p>
            <p>If you have any questions or just want to connect, drop me a line at <a href="mailto:keshavbsk7@gmail.com">keshavbsk7@gmail.com</a></p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
