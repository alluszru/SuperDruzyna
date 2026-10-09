import { useLanguage } from "./LanguageContext";
import translations from "../translations";
import logo from "../assets/logo-full.png";
import metaHeniek from "../assets/instagram/meta-heniek.jpeg";
import syraBeach from "../assets/instagram/syra-beach.jpeg";
import giraField from "../assets/instagram/gira-field.jpeg";
import heniekSofa from "../assets/instagram/heniek-sofa.jpeg";
import syraHeniek from "../assets/instagram/syra-heniek.jpeg";
import farel from "../assets/farel.jpeg";

const instagramPhotos = [
  { src: metaHeniek, alt: { pl: "Meta i Heniek", en: "Meta and Heniek" } },
  { src: syraBeach, alt: { pl: "Syra na plaży", en: "Syra on the beach" } },
  { src: giraField, alt: { pl: "Gira na łące", en: "Gira in a meadow" } },
  {
    src: heniekSofa,
    alt: { pl: "Heniek na kanapie", en: "Heniek on the sofa" },
  },
  { src: syraHeniek, alt: { pl: "Syra i Heniek", en: "Syra and Heniek" } },
  { src: farel, alt: { pl: "Farel", en: "Farel" } },
];

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <h2>{t.contact.title}</h2>
        <p className="contactText">{t.contact.text}</p>
        <a
          className="heroButton"
          href="https://ig.me/m/superdruzyna_"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.contact.cta}
        </a>

        <div className="contactEmbeds">
          <div className="contactColumn">
            <h3 className="embedTitle">{t.contact.mapTitle}</h3>
            <iframe
              className="embed"
              title={t.contact.mapTitle}
              src="https://www.google.com/maps?q=Wola%20Karczewska&output=embed"
              loading="lazy"
            ></iframe>
          </div>

          <div className="contactColumn">
            <h3 className="embedTitle">{t.contact.instagramTitle}</h3>
            <div className="igCard">
              <div className="igHeader">
                <img className="igAvatar" src={logo} alt="" />
                <div>
                  <p className="igHandle">@superdruzyna_</p>
                  <p>{t.contact.instagramText}</p>
                </div>
              </div>
              <ul className="igGrid">
                {instagramPhotos.map((photo) => (
                  <li key={photo.src}>
                    <img src={photo.src} alt={photo.alt[language]} />
                  </li>
                ))}
              </ul>
              <a
                className="heroButton"
                href="https://www.instagram.com/superdruzyna_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.instagramCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
