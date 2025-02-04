import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import i18n configuration

export default function LanguageButton() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const handleChange = () => setCurrentLang(i18n.language);
    i18n.on('languageChanged', handleChange);
    return () => {
      i18n.off('languageChanged', handleChange);
    };
  }, []);

  return (
    <div>
      <button 
        onClick={() => i18n.changeLanguage('en')} 
        className={`text-black text-[14px] mx-2 ${currentLang === 'en' ? 'font-bold' : ''}`}
      >
        EN
      </button>
      <button 
        onClick={() => i18n.changeLanguage('ar')} 
        className={`text-black text-[14px] px-2 border-l-2 border-[#00000088] ${currentLang === 'ar' ? 'font-bold' : ''}`}
      >
        AR
      </button>
   
    </div>
  );
}
