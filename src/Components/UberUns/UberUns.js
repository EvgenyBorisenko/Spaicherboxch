import React from 'react';
import s from './UberUns.module.css';
import SwissmadeImg from '../../img/swissmade.png';
import { useTranslation } from 'react-i18next';

const UberUns = () => {
  const { t } = useTranslation();
  return (
    <div className={s.Wrapper}>
      <h1 className={s.Tittle}>{t('About_us.name')}</h1>
      <div className={s.ProductText}>
        <p>{t('About_us.text1')}</p>
        <p>{t('About_us.text2')}</p>
        <p>{t('About_us.text3')}</p>
        <p>{t('About_us.text4')}</p>
        <p>{t('About_us.text5')}</p>
      </div>
      <div className={s.ImgBox}>
        <img src={SwissmadeImg} alt="swissmade-img" />
      </div>
    </div>
  );
};

export default UberUns;
