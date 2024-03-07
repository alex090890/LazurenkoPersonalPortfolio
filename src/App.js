import React, { useState } from "react";
import AppEn from "./components/AppEn";
import AppDe from "./components/AppDe";
import AppUkr from "./components/AppUkr";

import "./styles.css";

export default function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="App">
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">EN</option>
        <option value="de">DE</option>
        <option value="ukr">UKR</option>
      </select>
      {language === "en" && <AppEn />}
      {language === "de" && <AppDe />}
      {language === "ukr" && <AppUkr />}
    </div>
  );
}
