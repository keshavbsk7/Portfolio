import colorSharp from "../assets/img/color-sharp.png"
import { TiltTracker } from './TiltTracker';

export const Skills = () => {
  const skillsData = [
    {
      title: "Frontend & Web",
      icon: "💻",
      skills: ["React", "HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap", "Tailwind"],
    },
    {
      title: "Backend & APIs",
      icon: "⚙️",
      skills: ["Node.js", "Express", "RESTful APIs", "Python", "Java", "C#"],
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQL Server", "Firebase"],
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: ["Git", "Docker", "AWS", "Machine Learning", "RPA", "Agile"],
    }
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills & Technologies</h2>
                        <p>I thrive on turning complex problems into elegant, beautiful, and intuitive designs using the modern tech stack below.</p>
                        
                        <div className="skills-grid">
                          {skillsData.map((category, index) => (
                            <TiltTracker className="skill-card" key={index}>
                              <div className="skill-card-header">
                                <span className="skill-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                              </div>
                              <div className="skill-badges">
                                {category.skills.map((skill, idx) => (
                                  <span className="skill-badge" key={idx}>{skill}</span>
                                ))}
                              </div>
                            </TiltTracker>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
