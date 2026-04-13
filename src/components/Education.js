import { Container } from "react-bootstrap";
import { TiltTracker } from './TiltTracker';

export const Education = () => {
    const educationData = [
        {
            date: "Aug 2021 - May 2025",
            title: "BTech - AI & Data Science",
            institute: "Mepco Schlenk Engineering College",
            score: "CGPA: 7.73",
            icon: "🎓"
        },
        {
            date: "Aug 2020 - May 2021",
            title: "HSC",
            institute: "Isha Vidhya Matriculation School",
            score: "Percentage: 92.30%",
            icon: "🏫"
        },
        {
            date: "Jun 2017 - May 2018",
            title: "SSLC",
            institute: "Isha Vidhya Matriculation School",
            score: "Percentage: 90.4%",
            icon: "📖"
        }
    ];

    return (
        <section className="education" id="education">
            <Container>
                <div className="education-bx">
                    <h2>Education</h2>
                    <p>My academic path building a strong foundation in Computer Science and Artificial Intelligence.</p>
                    
                    <div className="education-grid">
                        {educationData.map((item, index) => (
                            <TiltTracker className="education-card" key={index}>
                                <div className="edu-icon">{item.icon}</div>
                                <div className="edu-date">{item.date}</div>
                                <h3>{item.title}</h3>
                                <h4>{item.institute}</h4>
                                <div className="edu-score">{item.score}</div>
                            </TiltTracker>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
