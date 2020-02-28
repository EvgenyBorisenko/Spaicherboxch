import React from 'react';
import s from './Produkte.module.css';
import ProdukteItems from '../ProdukteItems/ProdukteItems';
import ProduktUbersicht from '../ProduktUbersicht/ProduktUbersicht';
import { useTranslation } from 'react-i18next';

const Produkte = () => {
  const { t } = useTranslation();
  return (
    <div className={s.Wrapper}>
      <h1 className={s.Tittle}>{t('Main.Product')}</h1>
      <div className={s.ProductText}>
        <p>{t('Main.Description.text1')}</p>
        <p>{t('Main.Description.text2')}</p>
        <p>{t('Main.Description.text3')}</p>
        <p>{t('Main.Description.text4')}</p>
      </div>
      <ProdukteItems />
      <ProduktUbersicht />
    </div>
  );
};

export default Produkte;
