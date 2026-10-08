import { useLanguage } from "./LanguageContext";
import translations from "../translations";
import photo from "../assets/Anna-photo.jpg";

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
    </section>
  );
}

export default About;
