import { useLanguage } from "./LanguageContext";
import translations from "../translations";

function Services() {
  const {language} = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="section">
      <div className="container services">
        <h2>{t.services.title}</h2>
        <p className="servicesIntro">{t.services.intro}</p>
        <ul className="offerList">
          {t.services.offers.map((offer) => (
            <li className={offer.featured ? "offerCard featured" : "offerCard"} key={offer.name}>
              {offer.badge && <span className="offerBadge">{offer.badge}</span>}
              <h3>{offer.name}</h3>
              <p className="offerDetails">{offer.details}</p>
              <p>{offer.text}</p>
              <a className="heroButton" href="#contact">{t.services.cta}</a>
            </li>
          ))}
        </ul>
        <p className="servicesLocation">{t.services.location}</p>
      </div>
    </section>
  );
}

export default Services;
