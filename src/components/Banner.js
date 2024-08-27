import { useState, useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer"];
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
                        <p>
                            As a versatile developer with a passion for problem-solving, I specialize in a range of fields including Data Structures and Algorithms (DSA), C and C++, Machine Learning, Deep Learning, and Web Development. My journey involves crafting seamless web experiences while applying my knowledge in coding and problem-solving to tackle complex challenges. I am dedicated to delivering innovative solutions and continuously expanding my skill set to stay ahead in the rapidly evolving tech landscape.
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
