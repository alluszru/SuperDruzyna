import { useLanguage } from "./sections/LanguageContext";
import translations from "./translations";
  
function Nav() {

  const {language, setLanguage} = useLanguage();
  const t = translations[language]

  const languageLabel = language === "pl" ? "EN" : "PL";
  function changeLanguage() {
    setLanguage(language === "pl" ? "en" : "pl")
  }

  return (
    <nav className="nav">
        <a href="#home">{t.nav.home}</a>
        <a href="#about">{t.nav.about}</a>
        <a href="#services">{t.nav.services}</a>
        <a href="#contact">{t.nav.contact}</a>
        <button className="langButton" onClick={changeLanguage}>{languageLabel}</button>
    </nav>
  );
}

export default Nav;
