import { useLanguage } from "./LanguageContext";
import translations from "../translations";
import photo from "../assets/Anna-photo.jpg";
import team from "../team"

function About() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="aboutText">
          <h2>{t.about.title}</h2>
          <p>{t.about.intro}</p>
          <p>{t.about.approach}</p>
        </div>
        <img className="aboutPhoto" src={photo} alt="Anna" />
      </div>
    <div className="container team">
      <h3>{t.about.teamTitle}</h3>
      <ul className="teamList">
        {team.map((animal) => (
          <li className="teamCard" key={animal.name}>
            <img className="teamPhoto" src={animal.photo} alt={animal.name} />
            <h4>{animal.name}</h4>
            <p className="teamBreed">{animal.breed[language]}</p>
            <p className="teamTagline">{animal.tagline[language]}</p>
             {animal.text && <p>{animal.text[language]}</p>}
          </li>
        )
        )}
      </ul>

    </div>
    </section>
  );
}

export default About;
