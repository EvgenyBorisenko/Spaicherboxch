import React from 'react';
import s from './Datenschutz.module.css';
import { useTranslation } from 'react-i18next';

const Datenschutz = () => {
  const { t } = useTranslation();
  return (
    <div className={s.Wrapper}>
      <h1 className={s.Tittle}>{t('Data_protection.name')}</h1>
      <ul className={s.DatenschutzList}>
        <li className={s.DatenschutzItem}>{t('Data_protection.text1')}</li>
        <li className={s.DatenschutzItem}>{t('Data_protection.text2')}</li>
        <li className={s.DatenschutzItem}>{t('Data_protection.text3')}</li>
      </ul>
    </div>
  );
};

export default Datenschutz;
