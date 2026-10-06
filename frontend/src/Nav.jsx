import { useLanguage } from "./sections/LanguageContext";
  
function Nav() {

  const {language, setLanguage} = useLanguage();

  const languageLabel = language === "pl" ? "EN" : "PL";
  function changeLanguage() {
    setLanguage(language === "pl" ? "en" : "pl")
  }

  return (
    <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        <button className="langButton" onClick={changeLanguage}>{languageLabel}</button>
    </nav>
  );
}

export default Nav;
