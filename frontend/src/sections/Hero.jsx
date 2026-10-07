import { useLanguage } from "./LanguageContext";
import translations from "../translations";
import logo from "../assets/logo-dogs.png";

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="section">
      <div className="container hero">
        <div className="heroText">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <a className="heroButton" href="#contact">
            {t.hero.cta}
          </a>
        </div>
        <img className="heroLogo" src={logo} alt="Super Drużyna" />
      </div>
    </section>
  );
}

export default Hero;
