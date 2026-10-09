import { useLanguage } from "./LanguageContext";
import translations from "../translations";

function Services() {
  const { language } = useLanguage();
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
        <div className="servicesNotes">
          <p className="servicesLocation">{t.services.location}</p>
          <p className="servicesComment">{t.services.priceNote}</p>
          <p className="servicesComment">{t.services.paymantNote}</p>
        </div>
        <h3 className="sportsTitle">{t.services.sportsTitle}</h3>
        <div className="sportsList">
          {t.services.sports.map((sport) => (
            <details className="sport" name="sports" key={sport.name}>
              <summary>{sport.name}</summary>
              <p>{sport.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
