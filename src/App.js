import React, { useState } from "react";
import AppEn from "./components/AppEn";
import AppDe from "./components/AppDe";
import AppCn from "./components/AppCn"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles.css";

export default function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="App">
      <select value={language} onChange={handleLanguageChange} className="langSwitch">
        <option value="en">EN</option>
        <option value="de">DE</option>
        <option value="cn">CN</option>
      </select>
      {language === "en" && <AppEn />}
      {language === "de" && <AppDe />}
      {language === "cn" && <AppCn />}
    </div>
  );
}
