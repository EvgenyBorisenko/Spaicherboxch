import React from 'react';
import eng from '../../img/icons/english-lang-icon.png';
import de from '../../img/icons/german-lang-icon.png';
import fr from '../../img/icons/france-lang-icon.png';
import s from './LanguageBox.module.css';
import { useTranslation } from 'react-i18next';

const LanguagesBox = () => {
  const { i18n } = useTranslation();
  const handleClick = lang => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={s.LanguageWrapper}>
      <button onClick={() => handleClick('en')}>
        <img src={eng} alt="english-lang-icon" />
      </button>
      <button onClick={() => handleClick('de')}>
        <img src={de} alt="germany-lang-icon" />
      </button>
      <button onClick={() => handleClick('fr')}>
        <img src={fr} alt="france-lang-icon" />
      </button>
    </div>
  );
};

export default LanguagesBox;
