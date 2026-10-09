import { useLanguage } from "./LanguageContext";
import translations from "../translations";
import logoText from "../assets/logo-text.png";

const year = new Date().getFullYear();

function Footer() {

const {language} = useLanguage();
const t = translations[language];

  return (
    <footer className="footer">
      <div className="container footerInner">
       <div className="logoContainer">
          <a className="footerLogo" href="#home">
            <img src={logoText} alt="Super Drużyna" />
          </a>
      <p>{t.hero.subtitle}</p>
    </div>
       <a
          className="footerLink"
          href="https://www.instagram.com/superdruzyna_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram ↗
        </a>
        <p className="footerCopy">
          © {year} Super Drużyna. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
