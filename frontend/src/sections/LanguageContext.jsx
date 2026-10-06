import { createContext, useContext, useState } from "react";

const LangContext = createContext("pl");

function LanguageContext({ children }) {
  const [language, setLanguage] = useState("pl");

  return (
    <LangContext value ={{language, setLanguage}}>
      {children}
    </LangContext>
  );
}

export function useLanguage() {
  return useContext(LangContext);
}

export default LanguageContext;
