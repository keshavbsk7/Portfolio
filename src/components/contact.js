import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/profile.JPG"; 

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <div className="contact-bx">
          <Row className="align-items-center">
            <Col size={12} lg={5}>
              <div className="contact-info">
                <h2>Get In Touch</h2>
                <p>I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out to me!</p>
                
                <div className="info-cards">
                  <div className="info-card">
                    <div className="info-icon">📧</div>
                    <div className="info-text">
                      <h5>Email</h5>
                      <a href="mailto:keshavbsk7@gmail.com">keshavbsk7@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="info-card">
                    <div className="info-icon">📞</div>
                    <div className="info-text">
                      <h5>Phone</h5>
                      <p>7339452762</p>
                    </div>
                  </div>
                  
                  <div className="info-card">
                    <div className="info-icon">📍</div>
                    <div className="info-text">
                      <h5>Location</h5>
                      <p>Nagercoil, KanyaKumari</p>
                    </div>
                  </div>
                </div>

                <div className="contact-profile-mini">
                    <img src={contactImg} alt="Keshavaram" />
                    <div>
                        <strong>Keshavaram</strong>
                        <p>B.Tech AI & DS • 21 Years</p>
                    </div>
                </div>
              </div>
            </Col>
            
            <Col size={12} lg={7}>
              <div className="contact-form-glass">
                <form>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message"></textarea>
                      <button type="submit" className="contact-btn-modern">
                        <span>Send Message</span>
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
