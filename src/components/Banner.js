import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full Stack Developer", "AI Engineer", "Automation Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fulltext = toRotate[i];
        let updatedText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fulltext) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio
                        </span>
                        <h1>{"Hi I'm Keshavaram "}<span className="wrap">{text}</span></h1>
                        <h4 style={{ color: '#B8B8B8', marginBottom: '20px', fontSize: '22px' }}>
                            Currently working as a <strong style={{color: "white"}}>Software Engineer Trainee</strong> at <a href="https://intellibuddies.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>IntelliBuddies</a>
                        </h4>
                        <p>
                            Results-driven Full Stack Developer, AI Engineer, and Automation Engineer with 1+ year of professional experience delivering 8+ production-grade automation and web solutions across 4+ enterprise clients. Engineered end-to-end RPA/BPM workflows that reduced manual processing time by 60%+ for clients including Thirdwave Coffee, Atomberg, Hyundai, and Apoorva Hospital. Holding a BTech in AI & Data Science and passionate about delivering full-stack features and intelligent automation pipelines.
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
