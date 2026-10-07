import {useState} from "react";
import { useLanguage } from "./sections/LanguageContext";
import translations from "./translations";
import logoText from "./assets/logo-text.png";


function Nav() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [menuOpen, setMenuOpen] = useState(false);

  const languageLabel = language === "pl" ? "EN" : "PL";
  function changeLanguage() {
    setLanguage(language === "pl" ? "en" : "pl");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="nav">
      <div className="container navInner">
      <a className="navLogo" href="#home">
        <img src={logoText} alt="Super Drużyna" />
      </a>
      <button className="menuButton"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="menu"
      aria-expanded={menuOpen}>{menuOpen ? "✕" : "☰"}</button>
      <div className={menuOpen ? "navLinks open" : "navLinks"}>
        <a href="#home" onClick={closeMenu}>{t.nav.home}</a>
        <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
        <a href="#services" onClick={closeMenu}>{t.nav.services}</a>
        <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
        <button className="langButton" onClick={changeLanguage}>
          {languageLabel}
        </button>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
