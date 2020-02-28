import React from 'react';
import s from './Sicherheit.module.css';
import DatensicherheitImg from '../../img/Datensicherheit, Tresor_smal.jpg';
import Datenschutz from '../Datenschutz/Datenschutz';
import { useTranslation } from 'react-i18next';

const Sicherheit = () => {
  const { t } = useTranslation();
  return (
    <div className={s.Wrapper}>
      <h1 className={s.Tittle}>{t('Security.name')}</h1>
      <div className={s.SicherheitContent}>
        <div className={s.ImgWrapper}>
          <img src={DatensicherheitImg} alt="Tresor_smal-img" />
        </div>
        <div className={s.SicherheitTextBox}>
          <p className={s.SicherheitText}>{t('Security.text1')}</p>
          <p className={s.SicherheitText}>{t('Security.text2')}</p>
          <p className={s.SicherheitText}>{t('Security.text3')}</p>
        </div>
      </div>
      <p className={s.SicherheitText}>{t('Security.text4')}</p>
      <p className={s.SicherheitText}>{t('Security.text5')}</p>
      <p className={s.SicherheitText}>{t('Security.text6')}</p>
      <Datenschutz />
    </div>
  );
};

export default Sicherheit;
